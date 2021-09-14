const { Op } = require('sequelize');
const { Product, Category, Size } = require('../db')



const createProduct = async (req, res) => {

    const body = req.body;
    if (!body.name) return res.send("Debe ingresar al menos un nombre");

    //Size y category vienen en array [[nombre, id], [nombre, id]]
    //Si el id no es proporcionado, hay que crear.
    const { name, alias, image, price, description, size, category } = req.body;

    try {

        const [product] = await Product.findOrCreate({
            where: {
                name,
            },
            defaults: { alias, price, description, image },
        });

        if (size?.length) {

            size.map(async s => {
                const [sizeCreated] = await Size.findOrCreate({
                    where: {
                        name: s,
                    }
                });
                product.addSize(sizeCreated);
            });
        }
        if (category?.length) {

            category.map(async c => {

                const [categoryCreated] = await Category.findOrCreate({
                    where: {
                        name: c,
                    }
                });
                product.addCategory(categoryCreated);
            });
        }
        return res.json(product)

    } catch (error) {
        return res.json({ error })
    }
}

const getProducts = async (req, res) => {

    try {
        const products = await Product.findAll({
            include: [{
                model: Size,
                attributes: ["name", "id"]
            },
            {
                model: Category,
                attributes: ["name", "id"]
            }]
        });

        return res.json(products);

    } catch (error) {
        return res.json(error)
    }
}

const findProduct = async (req, res) => {

    const { name, alias, exact } = req.query;

    try {

        let products;

        if (!exact || exact === "false") {
            products = await Product.findAll({
                where: {
                    [Op.or]: [
                        {
                            name: { [Op.substring]: name },
                        },
                        {
                            alias: { [Op.substring]: alias },
                        }
                    ]
                },
                include: [{
                    model: Size,
                    attributes: ["name", "id"]
                },
                {
                    model: Category,
                    attributes: ["name", "id"]
                }]
            })
            console.log(products)
        }
        else {
            products = await Product.findAll({
                where: {
                    [Op.or]: [
                        {
                            name: { [Op.like]: name },
                        },
                        {
                            alias: { [Op.like]: alias },
                        },
                    ]
                },
                include: [{
                    model: Size,
                    attributes: ["name", "id"]
                },
                {
                    model: Category,
                    attributes: ["name", "id"]
                }]
            })
        }

        return res.json(products);

    } catch (error) {
        return res.json(error);
    }
}

const getProductById = async (req, res) => {

    try {
        const { id } = req.params;

        const product = await Product.findOne({
            where: {
                id,
            },
            include: [
                {
                    model: Size,
                    attributes: ["name", "id"],
                },
                {
                    model: Category,
                    attributes: ["name", "id"],
                }
            ]
        })

        return res.json(product);

    } catch (error) {
        console.log(error)
    }
}

const editPriceProducts = async (req, res) => {

    try {
        const { pourcentage ,price, productsId } = req.body;

        if(!productsId || !productsId?.length) return res.json({error: "Debe enviar al menos un producto"});
        if(!pourcentage && !price) return res.json({error: "ingrese un monto"});

        productsId.forEach( async id => {
            let product = await Product.findByPk(id);
            let { price: lastPrice } = product
        
            if(pourcentage) {
                await product.update({
                    price: ((lastPrice * pourcentage) / 100) + lastPrice,
                })
            }
            else {
                await product.update({
                    price,
                })
            }
        })

        return res.json({status: "Productos actualizados exitosamente"});


    } catch (error) {
        return res.json({ status: "Uno o mas productos tuvieron un error", error});
    }
}

const editProductById = async (req, res) => {

    try {

        const { id } = req.params;
        const {
            name,
            alias,
            image,
            price,
            description,
            categories,
            sizes
        } = req.body;
        let product = await Product.findByPk(id);

        await product.update({
            name,
            alias,
            price,
            description,
            image
        })

        if(categories?.length){
           await product.setCategories(categories);
        }
        if(sizes?.length){
           await product.setSizes(sizes);
        }

        product = await Product.findOne({
            where: {
                id,
            },
            include: [{
                model: Size,
                attributes: ["name", "id"]
            },
            {
                model: Category,
                attributes: ["name", "id"]
            }]
        });

        return res.json(product);

    } catch ({detail}) {
        console.log(error)
        return res.json({status: "error en editar el producto", detail})
    }
}

module.exports = {
    createProduct,
    getProducts,
    findProduct,
    getProductById,
    editPriceProducts,
    editProductById,
};
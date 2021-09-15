const { Product, Category, Size } = require('../../db')



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

module.exports = createProduct;
const { Product, Category, Size } = require('../../db')

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

    } catch (error) {
        return res.json({status: "error en editar el producto", error})
    }
}

module.exports = editProductById;
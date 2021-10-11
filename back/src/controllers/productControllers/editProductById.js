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

        return res.status(223).json(product);

    } catch (error) {
        return res.status(426).json({error})
    }
}

module.exports = editProductById;
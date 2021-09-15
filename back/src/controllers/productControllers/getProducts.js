const { Product, Category, Size } = require('../../db')

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

module.exports = getProducts;
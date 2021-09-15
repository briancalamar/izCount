const { Product, Category, Size } = require('../../db')

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

module.exports = getProductById;
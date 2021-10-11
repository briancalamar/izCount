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

        return res.status(225).json(product);

    } catch (error) {
        return res.status(428).json({error})
    }
}

module.exports = getProductById;
const { Order, Product, Address } = require('../../db')

const getOrderById = async (req, res) => {

    try {
        const { id } = req.params;

        const order = await Order.findOne({
            where: {
                id,
            },
            include: [{ model: Product }, { model: Address }
            ]
        })

        return res.json(order);

    } catch (error) {
        return res.json({ status: "error al traer orden por ID", error })
    }
}

module.exports = getOrderById;
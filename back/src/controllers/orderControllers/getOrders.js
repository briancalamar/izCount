const { Order_Product, Order, Address, User } = require('../../db')

const getOrders = async (req, res) => {

    try {
        const orders = await Order.findAll({
            // include: [{
            //     model: Order_Product
            // }]
        });

        return res.json(orders);

    } catch (error) {
        return res.json(error)
    }
}

module.exports = getOrders;
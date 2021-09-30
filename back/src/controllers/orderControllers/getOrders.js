const { Order_Product, Order, Address, User, Product } = require('../../db')

const getOrders = async (req, res) => {

    try {
        const orders = await Order.findAll({
            include: [{
                model: Product,
            }]
        });

        return res.json(orders);

    } catch (error) {
        console.log(error)
        return res.json(error)
    }
}

module.exports = getOrders;
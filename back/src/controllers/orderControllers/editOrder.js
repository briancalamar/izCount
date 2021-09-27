const { Order, Order_Product, Product } = require('../../db')

const editOrder = async (req, res) => {

    try {

        const { id } = req.params;
        const {
            products,
            shippingState,
            orderState,
            paymentState,
            addressId,
            type
        } = req.body;
        let order = await Order.findByPk(id);

        if (!order) res.status(400).json({ status: "No se encontro la orden solicitada" })

        console.log(orderState, id)

        await order.update({
            shippingState,
            orderState,
            paymentState,
            addressId,
            type
        })

        products.forEach(async product => {
            const productData = await Product.findByPk(product.id)
            const productInOrder = await Order_Product.findOne({
                where: {
                    orderId: id,
                    productId: product.id
                }
            })
            const quantity = product.quantity;
            const price = productData.price;

            if(product.quantity === 0 && productInOrder){
                await productInOrder.destroy()
            }
            if (productInOrder) {
                await productInOrder.update({ quantity, price })
            }
            else {
                await order.addProduct(productData, {
                    through: { quantity, price }
                })
            }
        })

        return res.json({ status: "edited", order });

    } catch (error) {
        console.log(error)
        return res.json({ status: "error en editar la orden", error })
    }
}

module.exports = editOrder;
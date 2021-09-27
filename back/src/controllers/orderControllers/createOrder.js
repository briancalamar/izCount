const { Order, User, Product, Address } = require('../../db');



const createOrder = async (req, res) => {

    const { type, products, userId, addressId } = req.body;

    try {
        const user = await User.findByPk(userId);
        if(!user) return res.status(404).json({status: "Usuario no encontrado"});

        const address = await Address.findByPk(addressId);
        
        const order = await Order.create({ userId, type, addressId});
        
        if(address){
            await address.addOrder(order);
            await user.addAddress(address);
        }
        await user.addOrder(order);

        products?.forEach( async product => {

            const productData = await Product.findByPk(product.id);
            
            await order.addProduct(productData, {
                through: {
                    quantity: product.quantity,
                    price: productData.price
                }
            })
        } )


        return res.json({ status: "Orden creada", order });

    } catch (error) {
        console.log(error)
        return res.json({ status: "ERROR" , error })
    }
}

module.exports = createOrder;
const { Payment } = require('../../db')



const createPayment = async (req, res) => {

    const body = req.body;
    if (!body.amount) return res.json("Debe ingresar el monto");
    if (!body.orderId) return res.json("Debe ingresar la orden asociada");

    const { amount, proof, orderId } = req.body;

    try {

        const payment = Payment.create({ amount, proof, orderId })


        return res.json({ status: "created", payment});


    } catch (error) {
        return res.json({ status: "error al crear" , error })
    }
}

module.exports = createPayment;
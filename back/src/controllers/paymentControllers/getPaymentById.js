const { Payment } = require('../../db')

const getPaymentById = async (req, res) => {

    try {
        const { id } = req.params;

        const payment = await Payment.findByPk(id)

        return res.json(payment);

    } catch (error) {
        return res.json({status: "error al traer payment por ID", error})
    }
}

module.exports = getPaymentById;
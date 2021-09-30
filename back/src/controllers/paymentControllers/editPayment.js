const { Payment } = require('../../db')

const editPayment = async (req, res) => {

    try {

        const { id } = req.params;
        const {
            amount,
            proof,
        } = req.body;
        let payment = await Payment.findByPk(id);

        if (!payment) res.status(400).json({ status: "No se encontro el usuario solicitado" })
        if (!amount && !proof) res.status(401).json({ status: "Falta de datos para edicion" })

        await payment.update({
            amount,
            proof,
        })

        return res.json({ status: "creado", payment });

    } catch (error) {
        return res.json({ status: "error en editar el pago", error })
    }
}

module.exports = editPayment;
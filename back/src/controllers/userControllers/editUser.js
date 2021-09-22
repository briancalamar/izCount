const { User } = require('../../db')

const editUser = async (req, res) => {

    try {

        const { id } = req.params;
        const {
            name,
            lastname,
            number,
            type,
        } = req.body;
        let user = await User.findByPk(id);

        if (!user) res.status(400).json({ status: "No se encontro el usuario solicitado" })
        if (!name && !lastname && !number && !type) res.status(401).json({ status: "Falta de datos para edicion" })

        await user.update({
            name,
            lastname,
            number,
            type,
        })

        return res.json({ status: "edited", user });

    } catch (error) {
        return res.json({ status: "error en editar el producto", error })
    }
}

module.exports = editUser;
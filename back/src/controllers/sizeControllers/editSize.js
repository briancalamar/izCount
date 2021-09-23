const { Size } = require('../../db')

const editSize = async (req, res) => {

    try {

        const { id } = req.params;
        const { name } = req.body;
        let size = await Size.findByPk(id);

        await size.update({
            name,
        })
        return res.json(size);

    } catch (error) {
        return res.json({status: "error en editar el size", error})
    }
}

module.exports = editSize;
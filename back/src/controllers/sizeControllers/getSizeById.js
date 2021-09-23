const { Size } = require('../../db')

const getSizeById = async (req, res) => {

    try {
        const { id } = req.params;

        const size = await Size.findByPk(id)

        if(!size) return res.sendStatus(401)
        return res.json(size);

    } catch (error) {
        console.log({status: "error al traer size por ID", error})
    }
}

module.exports = getSizeById;
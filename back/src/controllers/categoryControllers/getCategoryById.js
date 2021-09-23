const { Category } = require('../../db')

const getCategoryById = async (req, res) => {

    try {
        const { id } = req.params;

        const category = await Category.findByPk(id)

        if(!category) return res.sendStatus(401)
        return res.json(category);

    } catch (error) {
        console.log({status: "error al traer categoria por ID", error})
    }
}

module.exports = getCategoryById;
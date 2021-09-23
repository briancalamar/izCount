const { Category } = require('../../db')

const editCategory = async (req, res) => {

    try {

        const { id } = req.params;
        const { name, images } = req.body;
        let category = await Category.findByPk(id);

        await category.update({
            name,
            images
        })
        return res.json(category);

    } catch (error) {
        return res.json({status: "error en editar la categoria", error})
    }
}

module.exports = editCategory;
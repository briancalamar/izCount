const { Op } = require('sequelize');
const { Category } = require('../../db')

const findCategory = async (req, res) => {

    const { name } = req.query;

    try {

        let category;

        category = await Category.findAll({
            where: {
                name: { [Op.iLike]: `%${name}%` },
            },
        })

        return res.json(category);

    } catch (error) {
        return res.json(error);
    }
}

module.exports = findCategory;
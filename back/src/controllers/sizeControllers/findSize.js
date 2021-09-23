const { Op } = require('sequelize');
const { Size } = require('../../db')

const findSize = async (req, res) => {

    const { name } = req.query;

    try {

        let size;

        size = await Size.findAll({
            where: {
                name: { [Op.iLike]: `%${name}%` },
            },
        })

        return res.json(size);

    } catch (error) {
        return res.json(error);
    }
}

module.exports = findSize;
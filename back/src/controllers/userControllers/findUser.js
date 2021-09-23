const { Op } = require('sequelize');
const { User } = require('../../db')

const findUser = async (req, res) => {

    const { name } = req.query;

    try {

        let users;

            users = await User.findAll({
                where: {
                    [Op.or]: [
                        {
                            name: { [Op.iLike]: `%${name}%` },
                        },
                        {
                            lastname: { [Op.iLike]: `%${name}%` },
                        },
                    ]
                },
            })

        return res.json(users);

    } catch (error) {
        return res.json(error);
    }
}

module.exports = findUser;
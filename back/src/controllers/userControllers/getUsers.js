const { User, Order } = require('../../db')

const getUsers = async (req, res) => {

    try {
        const users = await User.findAll({
            include: [{
                model: Order
            }]
        });

        return res.json(users);

    } catch (error) {
        return res.json(error)
    }
}

module.exports = getUsers;
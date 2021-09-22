const { User, Order, Address } = require('../../db')

const getUserById = async (req, res) => {

    try {
        const { id } = req.params;

        const user = await User.findOne({
            where: {
                id,
            },
            include: [
                {
                    model: Order,
                    // attributes: ["name", "id"],
                },
                {
                    model: Address,
                    // attributes: ["name", "id"],
                }
            ]
        })

        return res.json(user);

    } catch (error) {
        console.log(error, )
    }
}

module.exports = getUserById;
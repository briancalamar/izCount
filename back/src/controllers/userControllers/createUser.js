const { User, Address, Size } = require('../../db')



const createUser = async (req, res) => {

    const body = req.body;
    if (!body.name) return res.send("Debe ingresar al menos un nombre");

    const { name, lastname, number, type } = req.body;

    try {

        const [user, created] = await User.findOrCreate({
            where: {
                name,
                lastname
            },
            defaults: { number, type },
        });

        if(created){
            return res.json({ status: "created", user});
        }
        else return res.json({ status: "edited", user});

    } catch (error) {
        return res.json({ status: "ERROR" , error })
    }
}

module.exports = createUser;
const { Size } = require('../../db')



const createSize = async (req, res) => {

    const body = req.body;
    if (!body.name) return res.send("Debe ingresar un nombre");

    //Size y category vienen en array [[nombre, id], [nombre, id]]
    //Si el id no es proporcionado, hay que crear.
    const { name, } = req.body;

    try {

        const [size, created] = await Size.findOrCreate({
            where: {
                name
            },
        });

        if(created){
            return res.json({ status: "created", size});
        }
        else return res.json({ status: "edited", size});

    } catch (error) {
        return res.json({ error })
    }
}

module.exports = createSize;
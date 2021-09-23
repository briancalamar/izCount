const { Category } = require('../../db')



const createCategory = async (req, res) => {

    const body = req.body;
    if (!body.name) return res.send("Debe ingresar un nombre");

    //Size y category vienen en array [[nombre, id], [nombre, id]]
    //Si el id no es proporcionado, hay que crear.
    const { name, images } = req.body;

    try {

        const [category, created] = await Category.findOrCreate({
            where: {
                name
            },
            defaults: { images },
        });

        if(created){
            return res.json({ status: "created", category});
        }
        else return res.json({ status: "edited", category});

    } catch (error) {
        return res.json({ error })
    }
}

module.exports = createCategory;
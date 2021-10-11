const { Product, Category, Size } = require('../../db')



const createProduct = async (req, res) => {

    const body = req.body;
    if (!body.name) return res.sendStatus(420);
    // if (typeof(body.price) !== "number" || body.price < 0 ) return res.sendStatus(421);
    //Size y category vienen en array [[nombre, id], [nombre, id]]
    //Si el id no es proporcionado, hay que crear.
    const { name, alias, image, price, description, size, category } = req.body;

    try {

        const [product, created] = await Product.findOrCreate({
            where: {
                name,
            },
            defaults: { alias, price, description, image },
        });

        if(!created) return res.sendStatus(421);
        if (size?.length) {

            size.map(async s => {
                const [sizeCreated] = await Size.findOrCreate({
                    where: {
                        name: s,
                    }
                });
                product.addSize(sizeCreated);
            });
        }
        if (category?.length) {

            category.map(async c => {

                const [categoryCreated] = await Category.findOrCreate({
                    where: {
                        name: c,
                    }
                });
                product.addCategory(categoryCreated);
            });
        }
        return res.status(220).json(product)

    } catch (error) {
        return res.status(422).json({ error })
    }
}

module.exports = createProduct;
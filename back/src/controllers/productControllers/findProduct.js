const { Op } = require('sequelize');
const { Product, Category, Size } = require('../../db')

const findProduct = async (req, res) => {

    const { name, alias, exact } = req.query;

    try {

        let products;

        if (!exact || exact === "false") {
            products = await Product.findAll({
                where: {
                    [Op.or]: [
                        {
                            name: { [Op.iLike]: `%${name}%` },
                        },
                        {
                            alias: { [Op.iLike]: `%${alias}%` },
                        }
                    ]
                },
                include: [{
                    model: Size,
                    attributes: ["name", "id"]
                },
                {
                    model: Category,
                    attributes: ["name", "id"]
                }]
            })
            console.log(products)
        }
        else {
            products = await Product.findAll({
                where: {
                    [Op.or]: [
                        {
                            name: { [Op.iLike]: `%${name}%` },
                        },
                        {
                            alias: { [Op.iLike]: `%${alias}%` },
                        },
                    ]
                },
                include: [{
                    model: Size,
                    attributes: ["name", "id"]
                },
                {
                    model: Category,
                    attributes: ["name", "id"]
                }]
            })
        }

        return res.json(products);

    } catch (error) {
        return res.json(error);
    }
}

module.exports = findProduct;
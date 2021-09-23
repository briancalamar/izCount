const { Product, Category, Size } = require('../../db')

const getCategories = async (req, res) => {

    try {
        const categories = await Category.findAll();

        return res.json(categories);

    } catch (error) {
        return res.json(error)
    }
}

module.exports = getCategories;
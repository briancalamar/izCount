const { Size } = require('../../db')

const getSizes = async (req, res) => {

    try {
        const sizes = await Size.findAll();

        return res.json(sizes);

    } catch (error) {
        return res.json(error)
    }
}

module.exports = getSizes;
const { Product } = require('../../db')

const editPriceProducts = async (req, res) => {

    try {
        const { pourcentage ,price, productsId } = req.body;

        //"Debe enviar al menos un producto"
        if(!productsId || !productsId?.length) return res.sendStatus(423);
        //"ingrese un monto"
        if(!pourcentage && !price) return res.sendStatus(424);

        productsId.forEach( async id => {
            let product = await Product.findByPk(id);
            let { price: lastPrice } = product
        
            if(pourcentage) {
                await product.update({
                    price: ((lastPrice * pourcentage) / 100) + lastPrice,
                })
            }
            else {
                await product.update({
                    price,
                })
            }
        })

        //"Productos actualizados exitosamente"
        return res.sendStatus(222);


    } catch (error) {
        //"Uno o mas productos tuvieron un error"
        return res.status(425).json({error});
    }
}

module.exports = editPriceProducts;
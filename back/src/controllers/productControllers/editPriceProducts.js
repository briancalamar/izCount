const { Product } = require('../../db')

const editPriceProducts = async (req, res) => {

    try {
        const { pourcentage ,price, productsId } = req.body;

        if(!productsId || !productsId?.length) return res.json({error: "Debe enviar al menos un producto"});
        if(!pourcentage && !price) return res.json({error: "ingrese un monto"});

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

        return res.json({status: "Productos actualizados exitosamente"});


    } catch (error) {
        return res.json({ status: "Uno o mas productos tuvieron un error", error});
    }
}

module.exports = editPriceProducts;
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Order_Product",
        {
            price: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
        },
    );
};
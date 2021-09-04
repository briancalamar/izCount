const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "user",
        {
            id: {
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastname: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            number: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            type: {
                type: DataTypes.ENUM("COMPRADOR", "VENDEDOR", "AMBOS", "OTRO"),
                defaultValue: "COMPRADOR"
            },
        },
    );
};
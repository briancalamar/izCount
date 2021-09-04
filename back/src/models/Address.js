const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "address",
        {
            id: {
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            country: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            state: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            street: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            number: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            cp: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            other: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
    );
};
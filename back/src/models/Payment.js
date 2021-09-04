const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "payment",
    {
      monto: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
  );
};
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "order",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      orderState: {
        type: DataTypes.ENUM("PENDIENTE", "CANCELED", "COMPLETADA"),
        defaultValue: "PENDIENTE",
        allowNull: true,
      },
      shippingState: {
        type: DataTypes.ENUM("PENDIENTE", "DESPACHADO", "ENTREGADO", "CANCELADO"),
        defaultValue: "PENDIENTE"
      },
      paymentState: {
        type: DataTypes.ENUM("PENDIENTE", "INCOMPLETO", "COMPLETADO", "CANCELADO"),
        defaultValue: "PENDIENTE"
      },
      type: {
        type: DataTypes.ENUM("COMPRA", "VENTA", "GASTO", "OTRO"),
        defaultValue: "COMPRA"
      },
    },
  );
};
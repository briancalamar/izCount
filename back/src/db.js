require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize(process.env.DATABASE_URL, {
        dialect: "postgres",
        protocol: "postgres",
        dialectOptions: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
      })
    : new Sequelize(process.env.DATABASE_URL,
        {
          logging: false,
          native: false,
        }
      );

const basename = path.basename(__filename);

//Connection check
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Product, Category, Order, User, Address, Order_Product, Payment, Size } =
  sequelize.models;

Product.belongsToMany(Category, { through: "product_category" });
Category.belongsToMany(Product, { through: "product_category" });

Product.belongsToMany(Size, { through: "product_size" });
Size.belongsToMany(Product, { through: "product_size" });

Product.belongsToMany(Order, { through: Order_Product });
Order.belongsToMany(Product, { through: Order_Product });

Order.hasMany(Payment);
Payment.belongsTo(Order);

User.hasMany(Order);
Order.belongsTo(User);

Address.hasMany(User)
User.belongsTo(Address)

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
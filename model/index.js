// Importing Dependencies and Configuration
const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

// Creating a Sequelize Instance
// la sequelize yo config haru lag ani database connect gardey vaneko hae 
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false, 
  port:3306, 
  pool: {   
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// Authenticating Database Connection
sequelize
  .authenticate()
  .then(() => {
    console.log("CONNECTED!!");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

//Database Object Initialization
//Adds the Sequelize class reference to the db object. This allows access to the Sequelize library throughout the application.
const db = {};
db.blogs=require('./blogModel')(sequelize,DataTypes)
db.users=require("./userModule")(sequelize,DataTypes)
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Synchronizing Database Models
//his method synchronizes all defined models with the database schema.
//{ force: false }: Option to control database synchronization behavior. force: false means it won't drop existing tables and will only create new tables if they don't exist.
//After synchronization completes (then() block), it logs "yes re-sync done".
db.sequelize.sync({ force: false}).then(() => {
  console.log("yes re-sync done");
});

//Exporting db Object: Finally, the db object containing Sequelize  and sequelize instances is exported from this module. Other modules can import this exported object to access the Sequelize ORM and the initialized database connection.
module.exports = db;
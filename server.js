const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

// import sequelize connection
// const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize(
//   // Database name?? Might need to change
//   'ecommerce_db',
//   // User
//   'user_db',
//   // Password
//   'myPassword',
//   {
//     // Database location
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
//   }
// );


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  });
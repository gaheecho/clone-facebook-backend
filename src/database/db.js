// const { Client } = require('pg');
const { Sequelize } = require('sequelize');

const db = new Sequelize('facebook', 'gahee', null, {
    host: 'localhost',
    dialect: 'postgres',
    define:{
        timestamps: false,
        omitNull: true,
        // createdAt: "createdat",
        // updatedAt: "updatedat"
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

// db
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// const client = new Client({
//     user: 'gahee',
//     host: 'localhost',
//     database: 'facebook',
//     port: 5432
// }); 

// client.connect(err => {
//     if(err) {
//         console.log('err!!', err);
//     } else {
//         console.log("Connected!");
//     }
// }); 

// client.query('SELECT NOW()', (err, res) => {
//     console.log(err, res);
//     client.end();
// })

module.exports = db;
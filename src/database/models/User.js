const Sequelize = require('sequelize');
const db = require('../db');
const Post = require('./Post');

const User = db.define(
    'user',
    {
        last_name: {
            type: Sequelize.STRING,
        },
        first_name: {
            type: Sequelize.STRING,
        },
        gender: {
            type: Sequelize.STRING,
        },
        user_id: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        profile_image: {
            type: Sequelize.STRING
        },
        user_no: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }
);

// User.findUser = function findUser(type, value) {
//     return User.findOne({ where: { [type]: value } });
// };

module.exports =  User;
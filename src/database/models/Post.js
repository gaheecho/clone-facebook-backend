const Sequelize = require('sequelize');
const db = require('../db');
const User = require('./User');

const Post = db.define(
    'post',
    {
        post_no: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: Sequelize.STRING,
        },
        user_no: {
            type: Sequelize.INTEGER,
        }
        
    }
);

Post.belongsTo(User, { as: 'users', foreignKey: 'user_no'});


module.exports =  Post;
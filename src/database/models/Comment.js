const Sequelize = require('sequelize');
const db = require('../db');
const User = require('./User');
const Post = require('./Post');

const Comment = db.define(
    'comment',
    {
        comment_no: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: Sequelize.STRING,
        },
        post_no: {
            type: Sequelize.INTEGER,
        },
        user_no: {
            type: Sequelize.INTEGER,
        }
        
    }
);

Comment.belongsTo(User, { as: 'users', foreignKey: 'user_no'});
Comment.belongsTo(Post, { as: 'posts', foreignKey: 'post_no'});


module.exports =  Comment;
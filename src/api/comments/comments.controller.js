const Comment = require('../../database/models/Comment');
const User = require('../../database/models/User');

exports.list = async (ctx) => {
    const { post_no } = ctx.params;
    const { query } = ctx.request;
    const comments = await Comment.findAndCountAll({
        where: { post_no: post_no },
        limit: query.limit,
        offset: query.offset,
        include: [{
            model: User,
            as: 'users'
        }]
    });
    ctx.body = comments;
};

exports.create = async (ctx) => {
    const { body } = ctx.request;
    const result = await Comment.create({
        content: body.content,
        user_no: body.user_no,
        post_no: body.post_no
    });
    ctx.body = result;
};

exports.delete = async (ctx) => {
    const { body } = ctx.request;
    const result = await Comment.destroy({ 
        where: { 
            user_no: body.user_no,
            post_no: body.post_no,
            comment_no: body.comment_no
        } });
    ctx.body = result;
};

exports.replace = async (ctx) => {
    const { body } = ctx.request;
    if(!body.content || !body.post_no || !body.user_no || !body.comment_no) {
        ctx.body = 'error!!!'
        return; 
    };

    const result = await Comment.update({
        content: body.content
    }, {
        where: {
            post_no: body.post_no,
            comment_no: body.comment_no,
            user_no: body.user_no
        }
    });
    ctx.body = result;
};

exports.update = async (ctx) => {
    const { body } = ctx.request;

    if(!body.user_no || !body.post_no || !body.comment_no) {
        ctx.body = 'error!!!';
        return;
    }

    const result = await User.update({
        content: body.content || undefined
    }, {
        where: {
            user_no: body.user_no,
            user_no: body.user_no,
            comment_no: body.comment_no
        }
    });
    ctx.body = result;
};
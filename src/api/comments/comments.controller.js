const Comment = require('../../database/models/Comment');


exports.list = async (ctx) => {
    const { post_no } = ctx.params;
    const comments = await Comment.findAndCountAll({
        where: { post_no: post_no }
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

exports.delete = (ctx) => {
    ctx.body = 'delete post';
};

exports.replace = (ctx) => {
    ctx.body = 'replace post';
};

exports.update = (ctx) => {
    ctx.body = 'update post';
};
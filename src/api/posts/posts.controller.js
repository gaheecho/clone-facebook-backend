const Post = require('../../database/models/Post');
const User = require('../../database/models/User');

exports.list = async (ctx) => {
    const { query } = ctx.request;
    console.log(query)
    const posts = await Post.findAndCountAll({
        limit: query.limit, offset: query.offset,
        include: [{
            model: User,
            as: 'users'
        }]
    });
    ctx.body = posts;
};

exports.create = async (ctx) => {
    const { body } = ctx.request;
    const result = await Post.create({
        content: body.content,
        user_no: body.user_no,
    });
    ctx.body = result;
};

exports.delete = (ctx) => {
    ctx.body = 'delete post';
};

exports.replace = (ctx) => {
    ctx.body = 'replace post';
}

exports.update = (ctx) => {
    ctx.body = 'update post';
}
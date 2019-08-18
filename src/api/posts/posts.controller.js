const Post = require('../../database/models/Post');
const User = require('../../database/models/User');
const Comment = require('../../database/models/Comment');

exports.list = async (ctx) => {
    const { query } = ctx.request;
    const posts = await Post.findAndCountAll({
        limit: query.limit, offset: query.offset,
        include: [{
            model: User,
            as: 'users'
        },
        {
            model: Comment,
            as: 'comments',
            offset: 0,
            limit: 3,
            order: [['comment_no', 'DESC']],
            include: [{
                model: User,
                as: 'users'
            }]
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

exports.delete = async (ctx) => {
    const { body } = ctx.request;
    const result = await Post.destroy({ 
        where: { 
            user_no: body.user_no,
            post_no: body.post_no
        } });
    ctx.body = result;
};

exports.replace = async (ctx) => {
    const { body } = ctx.request;
    if(!body.content || !body.post_no || !body.user_no) {
        ctx.body = 'error!!!'
        return; 
    };

    const result = await Post.update({
        content: body.content
    }, {
        where: {
            post_no: body.post_no,
            user_no: body.user_no
        }
    });
    ctx.body = result;
}

exports.update = async (ctx) => {
    const { body } = ctx.request;

    if(!body.user_no || !body.post_no) {
        ctx.body = 'error!!!';
        return;
    }

    const result = await User.update({
        content: body.content || undefined
    }, {
        where: {
            user_no: body.user_no,
            user_id: body.user_id
        }
    });
    ctx.body = result;
}
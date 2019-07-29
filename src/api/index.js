const Router = require('koa-router');

const api = new Router();
const posts = require('./posts');
const user = require('./user');
const comments = require('./comments');

api.use('/posts', posts.routes());
api.use('/user', user.routes());
api.use('/comments', comments.routes());

module.exports = api;
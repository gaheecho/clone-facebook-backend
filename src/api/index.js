const Router = require('koa-router');

const api = new Router();
const books = require('./books');
const posts = require('./posts');
const user = require('./user');

api.use('/books', books.routes());
api.use('/posts', posts.routes());
api.use('/user', user.routes());

module.exports = api;
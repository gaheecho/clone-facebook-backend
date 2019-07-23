const Router = require('koa-router');

const posts = new Router();
const postsCtrl = require('./posts.controller');

posts.get('/', postsCtrl.list);

posts.post('/', postsCtrl.create);

posts.delete('/', postsCtrl.delete);

posts.put('/', postsCtrl.replace);

posts.patch('/', postsCtrl.update)

module.exports = posts;
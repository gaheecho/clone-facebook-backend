const Router = require('koa-router');

const user = new Router();
const userCtrl = require('./user.controller');

user.get('/:id', userCtrl.list);

user.post('/', userCtrl.create);

user.delete('/', userCtrl.delete);

user.put('/', userCtrl.replace);

user.patch('/', userCtrl.update)

module.exports = user;
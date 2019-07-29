const Router = require('koa-router');

const comments = new Router();
const commentsCtrl = require('./comments.controller');

comments.get('/:post_no', commentsCtrl.list);

comments.post('/', commentsCtrl.create);

comments.delete('/', commentsCtrl.delete);

comments.put('/', commentsCtrl.replace);

comments.patch('/', commentsCtrl.update)

module.exports = comments;
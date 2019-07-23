const User = require('../../database/models/User');

exports.list = async (ctx) => {
    const { id } = ctx.params;
    const user = await User.findOne({ where: { id: id } });
    ctx.body = user;
};

exports.create = async (ctx) => {
    const { body } = ctx.request;
    const result = await User.create({
        last_name: body.last_name,
        first_name: body.first_name,
        email: body.email,
        phone: body.phone,
        gender: body.gender,
        user_id: body.user_id,
        profile_image: body.profile_image,
        password: body.password
    });
    ctx.body = result;
};

exports.delete = async (ctx) => {
    const { body } = ctx.request;
    const result = await User.destroy({ where: { user_id: body.user_id, user_no: body.user_no } })
    ctx.body = result;
};

exports.replace = async (ctx) => {
    const { body } = ctx.request;
    if(!body.last_name || !body.first_name || !body.email ||
       !body.phone || !body.gender || !body.password ||
       !body.profile_image || !body.user_id || !body.user_no) {
        ctx.body = 'error!!!'
        return;
    }

    const result = await User.update({
        last_name: body.last_name,
        first_name: body.first_name,
        email: body.email,
        phone: body.phone,
        gender: body.gender,
        password: body.password,
        profile_image: body.profile_image
    }, {
        where: {
            user_no: body.user_no,
            user_id: body.user_id
        }
    })
    ctx.body = result;
}

exports.update = async (ctx) => {
    const { body } = ctx.request;
    const result = await User.update({
        last_name: body.last_name || undefined,
        first_name: body.first_name || undefined,
        email: body.email || undefined,
        phone: body.phone || undefined,
        gender: body.gender || undefined,
        password: body.password || undefined,
        profile_image: body.profile_image || undefined
    }, {
        where: {
            user_no: body.user_no,
            user_id: body.user_id
        }
    })
    ctx.body = result;
}
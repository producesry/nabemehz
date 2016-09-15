'use strict';

const jwt = require('koa-jwt');

exports.refresh = function refreshToken() {
    return function *(next) {
        yield next;
        let token = jwt.sign({
            id: this.state.user.id,
            role: this.state.user.role
        }, CONFIG.jwt.secret, {expiresIn: CONFIG.jwt.expiresIn});
        this.set('Authorization', 'Bearer ' + token);
    }
};

exports.generate = function generateToken(user) {
    return 'Bearer ' + jwt.sign(
            {id: user._id.toString(), role: user.role},
            CONFIG.secret,
            {expiresIn: CONFIG.expiresIn});
};

exports.verify = function () {
    return jwt({secret: CONFIG.secret});
};

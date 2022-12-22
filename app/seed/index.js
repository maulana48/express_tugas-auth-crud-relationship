const user = require('./user.seed');
const product = require('./product.seed');
const order = require('./order.seed');

exports.seed = () => {
    user.seed();
    product.seed();
    order.seed();
}
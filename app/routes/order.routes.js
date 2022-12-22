const {
    authJwt
} = require("../middleware");
const controller = require("../controllers/order.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Order
    app.get('/api/order/all', [authJwt.verifyToken, authJwt.isAdmin], controller.getAll);

    app.get('/api/order/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.getOrder);

    app.post('/api/order/update/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.updateOrder);

    app.post('/api/order/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.deleteOrder);

};
const {
    authJwt
} = require("../middleware");
const controller = require("../controllers/product.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Product
    app.get('/api/product/all', [authJwt.verifyToken, authJwt.isAdmin], controller.getAll);

    app.get('/api/product/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.getProduct);

    app.post('/api/product/update/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.updateProduct);

    app.post('/api/product/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.deleteProduct);

};
const {
    authJwt
} = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // user
    app.get("/api/user/all", [authJwt.verifyToken, authJwt.isAdmin], controller.getAll);

    app.get('/api/user/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.getUser);

    app.post('/api/user/update/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.updateUser);

    app.post('/api/user/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.deleteUser);


    // test
    app.get("/api/test/all", [authJwt.verifyToken, authJwt.isAdmin], controller.allAccess);

    app.get(
        "/api/test/user",
        [authJwt.verifyToken],
        controller.userBoard
    );

    app.get(
        "/api/test/mod",
        [authJwt.verifyToken, authJwt.isModerator],
        controller.moderatorBoard
    );

    app.get(
        "/api/test/admin",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.adminBoard
    );
};
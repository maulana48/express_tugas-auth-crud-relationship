const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const db = require("./app/models");
const Role = db.role;

const seed = require("./app/seed");
const upload = require('multer');

const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

var corsOptions = {
    origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

// app.use(upload().array());   // form-data (multipart)

// simple route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to bezkoder application."
    });
});




// untuk prod : db.sequelize.sync();
db.sequelize.sync({
    force: true
}).then(() => {
    console.log('Drop and Resync Db');
    initial();
    seed.seed();
});

function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "moderator"
    });

    Role.create({
        id: 3,
        name: "admin"
    });

    Role.create({
        id: 4,
        name: "customer"
    });
}


// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/product.routes')(app);
require('./app/routes/order.routes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
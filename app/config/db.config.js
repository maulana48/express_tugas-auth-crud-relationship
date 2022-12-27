require('dotenv').config(); // this is important!, npm i --save dotenv
module.exports = {
    "development": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "dialect": "postgres"
    },
    "test": {
        "username": process.env.DB_TEST_USERNAME,
        "password": process.env.DB_TEST_PASSWORD,
        "database": process.env.DB_TEST_DATABASE,
        "host": process.env.DB_TEST_HOST,
        "dialect": "postgres"
    },
    "production": {
        "username": process.env.DB_PROD_USERNAME,
        "password": process.env.DB_PROD_PASSWORD,
        "database": process.env.DB_PROD_DATABASE,
        "host": process.env.DB_PROD_HOST,
        "dialect": "postgres"
    }
};
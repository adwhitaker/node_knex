const { Pool } = require('pg');
const config = require('../config/db');
const pool = new Pool(config);


function query(query, params) {
    return new Promise((resolve, reject) => {
        pool.connect(function (err, client, done) {
            if (err) {
                done();
                return reject(new Error(err.message));
            }

            client.query(query, params, function (err, result) {
                done();

                if (err) {
                    return reject(new Error(err.message));
                }

                return resolve(result.rows);
            });
        });
    });
}

module.exports = {
    query
};
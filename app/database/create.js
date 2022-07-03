const db = require('./db');

async function createtable() {
    await db.connection()

    await db.query(`CREATE TABLE List(
        id serial PRIMARY KEY,
        name VARCHAR(55) NOT NULL,
        email VARCHAR(55) NOT NULL,
    )`)

}
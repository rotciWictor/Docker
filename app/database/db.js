import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

export const connection = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: '5432',    
});

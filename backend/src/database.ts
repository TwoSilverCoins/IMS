import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'inventory_user',
    password: 'password',
    database: 'inventory',
});

export default pool;
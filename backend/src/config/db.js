const { Pool } = require('pg');
require('dotenv').config();

// Supabase (PostgreSQL) connection pool
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

/**
 * Compatibility layer for mysql2 syntax
 */
const compatQuery = async (text, params) => {
    let pgText = text;
    let i = 1;
    while (pgText.includes('?')) {
        pgText = pgText.replace('?', `$${i++}`);
    }

    const { rows } = await pool.query(pgText, params);
    return [rows];
};

module.exports = {
    query: compatQuery,
    pool: pool
};

const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv")
const pkg = require("pg")

dotenv.config();
const { pool } = pkg;

const Pool = new pool({
    connectionString: process.env.DATABASE_URL,
})

const app = express();
app.use(cors());
app.use(express.json());

app.get( "/", async (req, res)=> {
    const result = await pool.query("SELECT NOW()");
    res.json({status: "Test connect finish ", server_time: result.rows[0].now });
});
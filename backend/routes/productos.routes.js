const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const verifyToken = require("../middlewares/auth.middleware");

router.get("/", verifyToken, async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM productos");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener productos");
  }
});

module.exports = router;
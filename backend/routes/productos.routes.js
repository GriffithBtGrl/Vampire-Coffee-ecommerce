const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// ✅ Sin verifyToken, los productos son públicos
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM productos");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener productos");
  }
});

module.exports = router;
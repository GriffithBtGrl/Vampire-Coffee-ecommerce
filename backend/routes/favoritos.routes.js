const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const verifyToken = require("../middlewares/auth.middleware");


router.get("/", verifyToken, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT productos.* FROM favoritos
       JOIN productos ON favoritos.producto_id = productos.id
       WHERE favoritos.usuario_id = $1`,
      [req.user.id]
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener favoritos");
  }
});


router.post("/", verifyToken, async (req, res) => {
  const { producto_id } = req.body;
  try {
    await pool.query(
      "INSERT INTO favoritos (usuario_id, producto_id) VALUES ($1, $2) ON CONFLICT DO NOTHING",
      [req.user.id, producto_id]
    );
    res.status(201).json({ mensaje: "Favorito agregado" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al agregar favorito");
  }
});


router.delete("/:producto_id", verifyToken, async (req, res) => {
  const { producto_id } = req.params;
  try {
    await pool.query(
      "DELETE FROM favoritos WHERE usuario_id = $1 AND producto_id = $2",
      [req.user.id, producto_id]
    );
    res.json({ mensaje: "Favorito eliminado" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al eliminar favorito");
  }
});

module.exports = router;
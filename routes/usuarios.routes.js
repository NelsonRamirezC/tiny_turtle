import express from 'express';
const router = express.Router();

router.get("/api/productos", (req, res) => {
    res.send("ruta productos")
});

router.get("/api/producto/:id", (req, res) => {
    res.send("ruta de un producto")
});



export default router;
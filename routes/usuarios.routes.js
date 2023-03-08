import express from 'express';
import { getUsers } from '../controllers/users.controller.js'
const router = express.Router();

router.get("/api/productos", getUsers, (req, res) => {

});

router.get("/api/producto/:id", (req, res) => {
    res.send("ruta de un producto")
});



export default router;
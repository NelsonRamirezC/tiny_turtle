import express from 'express';
import routersUsers from './routes/usuarios.routes.js'
const app = express();

app.listen(3000, () => console.log("http://localhost:3000"))

//MIDDLEWARE

app.use(routersUsers)

//RUTAS API PRODUCTOS
/* app.get("/api/productos", getUsers, async (req, res) => {

}) */
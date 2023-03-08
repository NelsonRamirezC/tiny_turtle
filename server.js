import express from 'express';
import { getUsers } from './controllers/users.controller.js';
const app = express();

app.listen(3000, () => console.log("http://localhost:3000"))


app.get("/api/productos", getUsers, async (req, res) => {

})
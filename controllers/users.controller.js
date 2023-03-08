import db from '../db/db.js'

export const getUsers = async (req, res) => {
    try{
        let resultados = await db.query("select nombre, apellido, rut, email from usuarios");
        res.status(200).json({code: 200, data: resultados.rows})
    }catch(error){
        console.log(error)
        res.status(500).json({code: 500, message:"Error interno del servidor."})
    }
}
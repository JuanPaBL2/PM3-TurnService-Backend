
require("dotenv").config();
import servidor from "./services/server"
import "reflect-metadata"
import { AppDataSource } from "./config/userDataSource";

//creo el puerto con la variable de entorno
const PORT = process.env.PORT || 3001

//levanto el servidor con el metodo listen()
AppDataSource.initialize()
    .then(res => {
        servidor.listen(PORT, ()=>{
            console.log(`servidor escuchando en el puerto ${PORT}`);
        });
    });




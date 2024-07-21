"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const server_1 = __importDefault(require("./services/server"));
require("reflect-metadata");
const userDataSource_1 = require("./config/userDataSource");
//creo el puerto con la variable de entorno
const PORT = process.env.PORT || 3001;
//levanto el servidor con el metodo listen()
userDataSource_1.AppDataSource.initialize()
    .then(res => {
    server_1.default.listen(PORT, () => {
        console.log(`servidor escuchando en el puerto ${PORT}`);
    });
});

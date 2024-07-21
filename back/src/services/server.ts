import express from "express";
import router from "../routes/router";
import cors from 'cors';
const { swaggerUi, swaggerSpec } = require('./swagger');


const servidor = express();
servidor.use(cors())
servidor.use(express.json())
servidor.use(router);
servidor.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default servidor;


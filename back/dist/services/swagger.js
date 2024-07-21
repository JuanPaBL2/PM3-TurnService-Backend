"use strict";
const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
// Definición de la configuración básica
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Documentación de la API', // Título de tu API
        version: '1.0.0', // Versión de tu API
        description: 'Descripción de tu API', // Descripción de tu API
    },
    servers: [
        {
            url: 'http://localhost:3001', // URL base de tu API
        },
    ],
};
// Opciones para swagger-jsdoc
const options = {
    swaggerDefinition,
    apis: [`${path.join(__dirname, '../routes/*')}`], // Rutas a los archivos donde tienes tus endpoints
};
// Inicializar swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);
module.exports = {
    swaggerUi,
    swaggerSpec,
};

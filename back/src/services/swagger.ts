const swaggerJSDoc = require('swagger-jsdoc')
const path = require('path')
const swaggerUi = require('swagger-ui-express');

// Definición de la configuración básica
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Sicherheit Bank', // Título de tu API
    version: '1.0.0', // Versión de tu API
    description: 'API rest desarrollada por Juan Pablo Del Rosso ', // Descripción de tu API
  },
  servers: [
    {
      url: 'https://pm3-turnservice-backend-production.up.railway.app/', // URL base de tu API
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
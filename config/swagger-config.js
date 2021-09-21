const swaggerJSDoc = require('swagger-jsdoc');

const swaggerSpec = swaggerJSDoc({
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Capacitação React',
      version: '1.0.0',
    },
  },
  // Paths to files containing OpenAPI definitions
  apis: ['../entities/*/controllers/*js'],
});

module.exports = swaggerSpec;

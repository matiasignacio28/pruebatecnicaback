const express = require('express');
const bodyParser = require('body-parser');
const medidorRoutes = require('./routes/medidorRoutes');
const clienteRoutes = require('./routes/clienteRoutes');

const app = express();

// Middleware para parsear el cuerpo de las peticiones en formato JSON
app.use(bodyParser.json());

// Rutas para los medidores y clientes
app.use('/api/medidores', medidorRoutes);
app.use('/api/clientes', clienteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

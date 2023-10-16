const db = require('../db');

const listarMedidores = async (req, res) => {
  try {
    const medidores = await db.any('SELECT * FROM medidores');
    res.json(medidores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const crearMedidor = async (req, res) => {
  const { codigo, nombre, fecha_creacion, descripcion } = req.body;
  try {
    await db.none('INSERT INTO medidores (codigo, nombre, fecha_creacion, descripcion) VALUES ($1, $2, $3, $4)', [codigo, nombre, fecha_creacion, descripcion]);
    res.json({ message: 'Medidor creado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const actualizarMedidor = async (req, res) => {
  const codigo = req.params.codigo;
  const { nombre, fecha_creacion, descripcion } = req.body;
  try {
    await db.none('UPDATE medidores SET nombre = $1, fecha_creacion = $2, descripcion = $3 WHERE codigo = $4', [nombre, fecha_creacion, descripcion, codigo]);
    res.json({ message: 'Medidor actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const eliminarMedidor = async (req, res) => {
  const codigo = req.params.codigo;
  try {
    await db.none('DELETE FROM medidores WHERE codigo = $1', [codigo]);
    res.json({ message: 'Medidor eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  listarMedidores,
  crearMedidor,
  actualizarMedidor,
  eliminarMedidor,
};


// src/index.ts

import express from 'express';
import cors from 'cors';

// Crear instancia del servidor
const app = express();

// Middlewares globales
app.use(cors());              // Permitir acceso desde otros orígenes (CORS)
app.use(express.json());     // Permitir recibir y parsear JSON en las peticiones

// Ruta de prueba para confirmar que el servidor funciona
app.get('/', (req, res) => {
  res.send('🚀 DocumentUploaderPro está corriendo');
});

// Ruta POST para simular la carga de un documento
app.post('/upload', (req, res) => {
  const { title, content } = req.body;

  // Validación mínima (solo como ejemplo)
  if (!title || !content) {
    return res.status(400).json({ message: 'Faltan datos del documento' });
  }

  // Mostrar en consola lo que llega
  console.log('Documento recibido:', { title, content });

  // Respuesta al cliente
  res.status(200).json({ message: 'Documento recibido correctamente' });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});


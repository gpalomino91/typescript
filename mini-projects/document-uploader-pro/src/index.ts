import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('🚀 DocumentUploaderPro está corriendo');
});

app.post('/upload', (req: Request, res: Response) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Faltan datos del documento' });
  }

  console.log('Documento recibido:', { title, content });

  res.status(200).json({ message: 'Documento recibido correctamente' });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

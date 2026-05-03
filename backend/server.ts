import express from 'express';
import http from 'http';
import path from 'path';
import metaRoutes from './routes/meta';

const app = express();

// Middleware para processar JSON
app.use(express.json());

// Servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, '../../frontend/dist')));

// Use as rotas do Meta Ads
app.use('/api/meta', metaRoutes);

// Rota catch-all para servir o index.html para todas as outras requisições GET
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

const server = http.createServer(app);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//importando Express
import express from 'express';
import routes from './routes.js'

//instancia do express no projeto
const app = express();

//indicar para o express ler body com json
app.use(express.json());

//usar routes
app.use(routes)

export default app;

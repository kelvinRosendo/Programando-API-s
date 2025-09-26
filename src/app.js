// Importando os módulos necessários
import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

// Evento para verificar se a conexão com o banco de dados foi bem-sucedida
db.on("error", console.log.bind(console, 'Erro de conexão'));
// Evento para confirmar que a conexão foi aberta com sucesso
db.once("open", () => {
  console.log('✅ Conexão com o banco feita com sucesso');
}); 
const app = express();
/*
 Middleware do Express para converter automaticamente o corpo das requisições em JSON
 Isso permite que possamos acessar req.body já como objeto JS
 */
app.use(express.json());

export default app;
// Importando os módulos necessários
import express from 'express';
import db from './config/dbConnect.js';
import livros from './models/Livro.js';
import routes from './routes/index.js';

// Evento para verificar se a conexão com o banco de dados foi bem-sucedida
db.on("error", console.log.bind(console, 'Erro de conexão'));
// Evento para confirmar que a conexão foi aberta com sucesso
db.once("open", () => {
  console.log('✅ Conexão com o banco feita com sucesso');
});

// Criando uma aplicação Express
const app = express();

// Middleware do Express para converter automaticamente o corpo das requisições em JSON
// Isso permite que possamos acessar req.body já como objeto JS
app.use(express.json());


/* 
Implementando o endpoint GET para buscar um livro por ID
Antes: usávamos um array e a função buscarLivro
Agora: usamos mongoose.findById(), que já busca diretamente no banco
*/
app.get('/livros/:id', async (req, res) => {
  try {
    const livro = await livros.findById(req.params.id);
    if (!livro) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }
    res.json(livro);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/* 
Implementando o endpoint POST para adicionar um novo livro
O .post é usado para criar novos recursos no servidor
Recebemos os dados do livro no corpo da requisição (req.body)
Criamos um novo objeto Livro e salvamos no banco com .save()
*/
app.post('/livros', async (req, res) => {
  try {
    const novoLivro = new livros(req.body); // Cria um novo documento com base no Schema
    const livroSalvo = await novoLivro.save(); // Salva no banco
    res.status(201).json(livroSalvo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/* 
Implementando o endpoint PUT para atualizar um livro existente
Recebemos o ID do livro na URL e os novos dados no corpo da requisição
Usamos findByIdAndUpdate() para localizar e atualizar o documento diretamente
O { new: true } garante que a resposta já traga o documento atualizado
*/
app.put('/livros/:id', async (req, res) => {
  try {
    const livroAtualizado = await livros.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!livroAtualizado) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }
    res.json(livroAtualizado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/* 
Implementando o endpoint DELETE para remover um livro existente
Recebemos o ID do livro na URL
Usamos findByIdAndDelete() para localizar e remover diretamente no banco
*/
app.delete('/livros/:id', async (req, res) => {
  try {
    const livroRemovido = await livros.findByIdAndDelete(req.params.id);
    if (!livroRemovido) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }
    res.json({ message: `Livro com ID ${req.params.id} removido com sucesso` });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default app;
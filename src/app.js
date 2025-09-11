import express from 'express';

const app = express();


// Simulando um banco de dados com um array de livros 

/* Em um cenário real, você usaria um banco de dados como MongoDB, PostgreSQL, etc mas para simplicidade, usaremos um array em memória utilizando o método GET para listar os livros e o método POST para adicionar novos livros através do corpo da requisição de um cliente (como Postman ou Insomnia) */
app.use(express.json());


const livros = [ 
    { id: 1, "titulo": 'O Senhor dos Anéis', "autor": 'J.R.R. Tolkien' },
    { id: 2, "titulo": '1984', "autor": 'George Orwell' },
    { id: 3, "titulo": 'Dom Casmurro', "autor": 'Machado de Assis' }

]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node com Express');
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

/* Implementando o endpoint GET para buscar um livro por ID */
app.get('/livros/:id', (req, res) => { 
    let index = buscarLivro(req.params.id);
    res.json(livros[index]);
});


/* o .post é usado para criar novos recursos no servidor
 Implementando o endpoint POST para adicionar um novo livro
 O endpoint recebe os dados do livro no corpo da requisição (req.body)
 Adiciona o novo livro ao array 'livros' e retorna uma mensagem de sucesso*/
app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro adicionado com sucesso');
});

/* Implementando o endpoint PUT para atualizar um livro existente
 O endpoint recebe o ID do livro na URL e os novos dados no corpo da requisição
 Usamos o método findIndex para localizar o índice do livro no array e atualizamos o título
 Retornamos o array atualizado como resposta*/
app.put('/livros/:id', (req, res) => { 
    let index = buscarLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
});

app.delete('/livros/:id', (req, res) => { 
    
    // Extraindo o ID do livro dos parâmetros da URL 
    let {id} = req.params;
    let index = buscarLivro(id);
    livros.splice(index, 1);
    
    // Enviando uma resposta de sucesso em relação a remoção do livro
    res.send(`Livro com o ID ${id} removido com sucesso`);
});

/* Implementando o endpoint DELETE para remover um livro existente
 O endpoint recebe o ID do livro na URL
 Usamos o método findIndex para localizar o índice do livro no array e removemos o livro usando splice*/ 
function buscarLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app;
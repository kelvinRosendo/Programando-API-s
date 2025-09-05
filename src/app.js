import express from 'express';

const app = express();

const livro = [ 
    { id: 1, "titulo": 'O Senhor dos Anéis', "autor": 'J.R.R. Tolkien' },
    { id: 2, "titulo": '1984', "autor": 'George Orwell' },
    { id: 3, "titulo": 'Dom Casmurro', "autor": 'Machado de Assis' }

]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node com Express');
});

app.get('/livros', (req, res) => {
    res.status(200).json(livro);
});

export default app;


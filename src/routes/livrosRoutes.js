import express from 'express';
import LivroController from '../controllers/livroController';

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/:id", LivroController.listarLivrosPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.deletarLivro);

export default router;
/* Implementando o endpoint GET para listar todos os livros*/
import express from 'express';
import livroController from '../controllers/LivroController';

const router = express.Router();

router
    .get("/livros", livroController.listarLivros)
    .get("/livros/:id", livroController.listarLivrosPorId)
    .post("/livros", livroController.cadastrarLivro)
    .put("/livros/:id", livroController.atualizarLivro)
    .delete("/livros/:id", livroController.deletarLivro);

export default router;
/* Implementando o endpoint GET para listar todos os livros*/
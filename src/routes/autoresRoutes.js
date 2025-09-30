import express from 'express';
import AutorController from '../controllers/LivroController';

const router = express.Router();

router
    .get("/autores", AutorController.listarLivros)
    .get("/autores/:id", AutorController.listarLivrosPorId)
    .post("/autores", AutorController.cadastrarLivro)
    .put("/autores/:id", AutorController.atualizarLivro)
    .delete("/autores/:id", AutorController.deletarLivro);

export default router;
/* Implementando o endpoint GET para listar todos os livros*/
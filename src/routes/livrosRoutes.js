import express from 'express';
import LivroController from '../controllers/livroController';

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)

export default router;
/* Implementando o endpoint GET para listar todos os livros*/
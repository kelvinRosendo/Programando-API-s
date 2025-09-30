import express from 'express';
import AutorController from '../controllers/LivroController';

const router = express.Router();

router
    .get("/autores", AutorController.listarAutores )
    .get("/autores/:id", AutorController.listarAutoresPorId)
    .post("/autores", AutorController.cadastrarAutores)
    .put("/autores/:id", AutorController.atualizarAutores)
    .delete("/autores/:id", AutorController.deletarAutores);

export default router;
/* Implementando o endpoint GET para listar todos os livros*/
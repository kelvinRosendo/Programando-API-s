import livro from "../models/Livro.js";

class LivroController {

    
/* 
Endpoint GET para listar todos os livros
⚠️ Antes usávamos callback dentro de .find(), mas o Mongoose 7 não aceita mais callbacks
Agora usamos async/await, que retorna uma Promise
*/

    static listarLivros = (req, res) => {
        livro.find((err, livros) => {
            res.status(200).json(livros);
        })
    }
}

export default LivroController;
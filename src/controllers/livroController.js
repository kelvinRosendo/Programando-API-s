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

    static cadastrarLivro = (req, res) => {

        let livro = new livros(req.body);

        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }
}

export default LivroController;
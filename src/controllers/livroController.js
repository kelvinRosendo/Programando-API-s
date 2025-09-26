import livro from "../models/Livro.js";

class livroController {

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

    /* 
Implementando o endpoint GET para buscar um livro por ID
Antes: usávamos um array e a função buscarLivro
Agora: usamos mongoose.findById(), que já busca diretamente no banco

*/
    static listarLivrosPorId = (req, res) => {
        const id = req.params.id;

        livro.findById(id, (err, livro) => {
            if(err) {
                res.status(400/*<- erro que aconteceu por conta do usuário*/).send({message: `${err.message} - Id do livro não localizado.`})
            } else {
                res.status(200).send(livro);
            }
        })
    }

    /* 
Implementando o endpoint POST para adicionar um novo livro
O .post é usado para criar novos recursos no servidor
Recebemos os dados do livro no corpo da requisição (req.body)
Criamos um novo objeto Livro e salvamos no banco com .save()
*/
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

    /* 
Implementando o endpoint PUT para atualizar um livro existente
Recebemos o ID do livro na URL e os novos dados no corpo da requisição*/
    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Livro atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    /* 
Implementando o endpoint DELETE para remover um livro existente
Recebemos o ID do livro na URL
Usamos findByIdAndDelete() para localizar e remover diretamente no banco
*/
    static deletarLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err) => {
          if (!err) {
            res.status(200).send({ message: 'Livro removido com sucesso' });
          } else {
            res.status(500).send({ message: err.message });
          }  
        })  
    }
}

export default livroController;
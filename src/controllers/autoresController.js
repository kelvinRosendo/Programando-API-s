import autores from "../models/autor.js";

class autoresController {

    /* 
Endpoint GET para listar todos os autoress
⚠️ Antes usávamos callback dentro de .find(), mas o Mongoose 7 não aceita mais callbacks
Agora usamos async/await, que retorna uma Promise
*/
    static listarAutoress = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        })
    }

    /* 
Implementando o endpoint GET para buscar um autores por ID
Antes: usávamos um array e a função buscarautores
Agora: usamos mongoose.findById(), que já busca diretamente no banco

*/
    static listarAutoressPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if(err) {
                res.status(400/*<- erro que aconteceu por conta do usuário*/).send({message: `${err.message} - Id do autores não localizado.`})
            } else {
                res.status(200).send(autores);
            }
        })
    }

    /* 
Implementando o endpoint POST para adicionar um novo autores
O .post é usado para criar novos recursos no servidor
Recebemos os dados do autores no corpo da requisição (req.body)
Criamos um novo objeto autores e salvamos no banco com .save()
*/
    static cadastrarAutores = (req, res) => {

        let autor = new autores(req.body);

        autores.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar autores.`})
            } else {
                res.status(201).send(autores.toJSON())
            }
        })
    }

    /* 
Implementando o endpoint PUT para atualizar um autores existente
Recebemos o ID do autores na URL e os novos dados no corpo da requisição*/
    static atualizarAutores = (req, res) => {
        const id = req.params.id;

        autores.findByAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'autores atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    /* 
Implementando o endpoint DELETE para remover um autores existente
Recebemos o ID do autores na URL
Usamos findByIdAndDelete() para localizar e remover diretamente no banco
*/
    static deletarAutores = (req, res) => {
        const id = req.params.id;
        
        autores.findByIdAndDelete(id, (err) => {
          if (!err) {
            res.status(200).send({ message: 'autores removido com sucesso' });
          } else {
            res.status(500).send({ message: err.message });
          }  
        })  
    }
}


import autoresController from './autoresController.js'; 
export default autoresController;
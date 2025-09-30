import express from 'express';
import livros from './livrosRoutes.js';
import autores from './autoresRoutes.js';   

const routes = (app) => {
    app.route('/').get((req, res) => {
        /* 
Rota inicial para testar se o servidor está rodando
Quando acessamos http://localhost:3009/ no navegador, recebemos essa resposta
*/
        res.status(200).send({titulo: "Curso de Node, as rotas estão funcionando!"})
    });

    app.use(
        express.json(),
        livros,
        autores
    )
}

export default routes;
/* Configurando o Express para usar JSON e definindo a rota inicial */

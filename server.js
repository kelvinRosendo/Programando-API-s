//Documentação do Node: https://nodejs.org/api/

// Importa o aplicativo Express do arquivo app.js
// O app.js contém a configuração do servidor e as rotas que anteriormente estavam aqui
import app from './src/app.js';

// Define a porta em que o servidor vai "escutar" (receber requisições)
// Se houver uma variável de ambiente PORT definida (útil para deploy em serviços como Heroku), usa essa Caso contrário, usa a porta 3009 como padrão
const port = process.env.PORT || 3009;


        //toda esta parte comentada com /**/ foi substituída pelo express

/*

// Importa o módulo 'http' nativo do Node.js
// Esse módulo permite criar servidores web básicos sem precisar de frameworks externos
//const http = require("http")


// Define algumas rotas simples para o servidor
// Cada rota é uma chave no objeto 'rotas' e o valor é a mensagem que será retornada e estas mensagens são apenas textos simples mas podem ser HTML ou JSON      


const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Você está na página de livros',
    '/autores': 'Listagem de autores',
    '/sobre': 'Informações obre o projeto Node '
}

// Cria o servidor HTTP
// A função createServer recebe uma função de callback (req, res) que será executada
// toda vez que o servidor receber uma requisição
const server = http.createServer((req, res ) => {

     // Define o cabeçalho da resposta (status code 200 = sucesso)
    // e o tipo de conteúdo que será retornado ('text/plain' = texto simples)
    res.writeHead(200, {'content-Type': 'text/plain'});
    
    // Envia a resposta para o cliente
    // Se a rota existir no objeto 'rotas', retorna a mensagem correspondente
    // Caso contrário (que é represetado pelas barras verticais duplas), retorna 'Página não encontrada'
    res.end(rotas[req.url] || 'Página não encontrada')
})

*/




// Faz o servidor começar a "escutar" na porta definida (3009)
// O segundo parâmetro é uma função callback que será chamada quando o servidor iniciar com sucesso
app.listen(port, () => {

    // Exibe no console uma mensagem informando que o servidor está rodando
    console.log(`Server escutando em http://localhost:${port}`)
})
 

/*instalei a biblioteca do Nodemon 05/09/2025 para que o site/server se atualize em tempo real, conforme as minhas alterações */


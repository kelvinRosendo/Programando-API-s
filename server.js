//Documentação do Node: https://nodejs.org/api/


// Importa o módulo 'http' nativo do Node.js
// Esse módulo permite criar servidores web básicos sem precisar de frameworks externos
const http = require("http")

// Define a porta em que o servidor vai "escutar" (receber requisições)
// Aqui estamos usando a porta 3009
const port = 3009;


// Cria o servidor HTTP
// A função createServer recebe uma função de callback (req, res) que será executada
// toda vez que o servidor receber uma requisição
const server = http.createServer((req, res ) => {

     // Define o cabeçalho da resposta (status code 200 = sucesso)
    // e o tipo de conteúdo que será retornado ('text/plain' = texto simples)
    res.writeHead(200, {'content-Type': 'text/plain'});
    
    //Envia a resposta final para o cliante e encerra a conexão
    res.end('Estamos Rodando!!!')
})


// Faz o servidor começar a "escutar" na porta definida (3009)
// O segundo parâmetro é uma função callback que será chamada quando o servidor iniciar com sucesso
server.listen(port, () => {

    // Exibe no console uma mensagem informando que o servidor está rodando
    console.log(`Server escutando em http://localhost:${port}`)
})
 

// Importa o mongoose, que é a biblioteca ODM para trabalhar com MongoDB
import mongoose from "mongoose";

// Aqui você define suas credenciais de conexão
// ⚠️ Dica: nunca deixe usuário/senha expostos em código real, use variáveis de ambiente (.env)
const usuario = "Kelvin";
const senha = encodeURIComponent("Nivlek_8002"); // encodeURIComponent garante que caracteres especiais da senha não quebrem a URL
const host = "delploy-node.spbe0g6.mongodb.net"; // host do cluster que o MongoAtlas fornece
const dbName = "alura-node"; // nome do banco que você vai usar

// Função que tenta se conectar ao MongoDB Atlas
async function connectDB() {
  try {
    // String de conexão no formato correto para Atlas (sem porta)
    await mongoose.connect(
      `mongodb+srv://${usuario}:${senha}@${host}/${dbName}?retryWrites=true&w=majority`
    );

    console.log("✅ Conectado ao MongoDB Atlas com sucesso!");
  } catch (erro) {
    // Caso haja erro de autenticação, host incorreto ou internet
    console.error("❌ Erro ao conectar ao MongoDB:", erro.message);
  }
}

// Executa a conexão assim que o arquivo for importado
connectDB();

// Exporta a conexão (caso precise acessar em outros arquivos)
let db = mongoose.connection;
export default db;

import mongoose from "mongoose";

// Configuração da conexão com o banco de dados MongoDB usando Mongoose

const usuario = "Kelvin";
const senha = encodeURIComponent("Nivlek_8002"); // use encodeURIComponent para evitar erro com caracteres especiais
const host = "delploy-node.spbe.g6.mongodb.net";
const dbName = "alura-node";

mongoose.connect(`mongodb+srv://Kelvin:Nivlek_8002@delploy-node.spbe.g6.mongodb.net}/"alura-node"`);

let db = mongoose.connection;

export default db;

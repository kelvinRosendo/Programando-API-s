// Livro.js
// Modelo de dados para livros usando Mongoose e exporta o modelo para ser usado em outras partes da aplicação

import mongoose  from "mongoose";

const livroSchema = new mongoose.Schema(
    { 
        id: { type: String },
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    editora: { type: String },
    numeroPaginas: { type: Number },
    }
);

const livros = mongoose.model("livros", livroSchema);

export default livros;
// src/models/autor.js
// Modelo de dados para autores usando Mongoose e exporta o modelo para ser usado em outras partes da aplicação

import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: { type: String },
        nome: { type: String, required: true },
        nacionalidade: { type: String },
        dataNascimento: { type: Date },
    },
    {
        versionKey: false
    }
);

const autores = mongoose.model("Autor", autorSchema, "Autores");

export default autores;

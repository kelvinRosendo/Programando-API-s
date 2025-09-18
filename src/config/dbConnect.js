
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Kelvin:Nivlek_8002delploy-node.spbe0g6.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;

//Kelvin:Nivlek_8002@
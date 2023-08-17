import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./db/database.db");

const PRODUCT = `
CREATE TABLE "produtos"(
    "ID" VARCHAR(50) PRIMARY KEY,
    title VARCHAR(80),
    price DECIMAL
)`;
const CreateProduct = () =>{
    db.run(PRODUCT, (error) =>{
        if (error){
            console.log("erro ao criar tabela produto:  " + error.message);
        }
    });
};

db.serialize(() =>{
    CreateProduct();
});
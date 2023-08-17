const express = require("express")
const {randomUUID} = require("crypto")

const app = express();

app.use(express.json());

const products = [];
const info = [];

/*
POST= inserir um dado
GET = buscar um / mais dados
PUT = alterar um dado
Delete = remover um dado


body => sempre que eu quiser enviar dados para a minha aplicação
params => /products/48052064252
Query => /product?id42542253208948value=4852084024

*/


const userController = (app, db) =>{
    app.post("/info", (request, response) =>{
    
        const {login, senha} = request.body;
        const user = {
            login,
            senha,
            id:randomUUID(),
        };  
        info.push(user)
        
        return response.json(user);
    });
    
    app.get("/info", (request, response) =>{
        return response.json(info)
    });
    
    app.get("/info/:id", (request, response) => {
        const {id} = request.params;
        const user = info.find(user => user.id === id);
        return response.json(user);
    });
    
    app.put("/info/:id", (request, response) =>{
        const {id} = request.params;
        const {login, senha} = request.body;
    
        const userIndex = info.findIndex((user) => user.id === id);
        info[userIndex] = {
            ...info[userIndex],
            login,
            senha,
        };
    
        return response.json( { message: "produto alterado com sucesso"});
    });
    
    app.delete("/info/:id", (request, response) =>{
        const {id} = request.params;
        const userIndex = info.findIndex((user) => user.id === id);
    
        info.splice(userIndex , 1);
        return response.json({
            message:"Produto removido com sucesso"
        });
        
    }
    );
};

const productController = (app,db) =>{
    app.post("/products", (request, response) =>{

        const {name, price} = request.body;
        const product = {
            name,
            price,
            id:randomUUID(),
        };  
        products.push(product)
    
        return response.json(product);
    });
    app.get("/products", (request, response) =>{
        return response.json(products)
    });
    
    app.get("/products/:id", (request, response) => {
        const {id} = request.params;
        const product = products.find(product => product.id === id);
        return response.json(product);
    })
    
    app.put("/products/:id", (request, response) =>{
        const {id} = request.params;
        const {name, price} = request.body;
    
        const productIndex = products.findIndex((product) => product.id === id);
        products[productIndex] = {
            ...products[productIndex],
            name,
            price,
        };
    
        return response.json( { message: "produto alterado com sucesso"});
    });
    
    app.delete("/products/:id", (request, response) =>{
        const {id} = request.params;
        const productIndex = products.findIndex((product) => product.id === id);
    
        products.splice(productIndex , 1);
        return response.json({
            message:"Produto removido com sucesso"
        });
        
    }
    );
}

app.listen(4002, ()=> console.log("o servidor está rodando na porta 4002"));
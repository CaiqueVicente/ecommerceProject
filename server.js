const http = require("http");

 http
 .createServer((request,response)=>{response.writeHead(200, {'Content-Type' : 'application/json'})
    
   if (request.url === "/produto"){
    response.end(
        JSON.stringify({
            message: "rota de produtos",
        })
    );
   }

   if(request.url === "/user"){
    response.end(
        JSON.stringify({
            message: "rota de usuarios",
        })
    );
   }

   response.end(
    JSON.stringify({
        message:"undefined route"
    })
   );
})
 .listen(4001, ()=> console.log("Servidor está rodando na porta 4001"));
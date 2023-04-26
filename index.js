const http = require('http')
const porta = 443
/*o número 200 serve como status "ok" na web */
const servidor = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
if(req.url == "/"){
  res.write("<h1>Seja bem-vindo! </h1>")
}

else if(req.url == "/servidor"){
  res.write("<h1>Servidor web </h1")
}

  else if(req.url == "/node"){
    res.write("<h1>Servidor web em NODE </h1")
  }

  else {
    res.write("<h1>Padronizado </h1>")
  }
res.end()
  
})

servidor.listen(porta, () => {console.log("Servidor rodando")})
/* alterações de rota na barra URL do servidor web em questão


const port = 3003

//Interpreta o corpo da requisição, para parsear json, dados do formulario
const bodyParser = require('body-parser')

const express = require('express')
const server = express()

//urlencoded e o formato dos dados enviados na requisição
//extended: true serve para receber todo tipo de requisição, principanmente de formularios
server.use(bodyParser.urlencoded({ extended: true }))

//se os dados não vieren de formulario, poderao vir de json (no corpo da requisicao)
//transforma o json em objeto para ser usado na aplicação
server.use(bodyParser.json())

//escutando a porta pre estabelecida
//usando o backtick para interpolar texto e expressao
server.listen(port, function(){

	console.log(`BACKEND está rodando na porta ${port}.`)

})

//definindo uma funcao (middleware) minha para ser executada na cadeia (chain of responsability)
//next executa as proximas requisicoes na cadeia de execussao
server.use(function(req, res, next){

	console.log('1 - primeiro middleware personalizado do express')
	//res.send('Funcionando!')

	next()

})

server.use(function(req, res, next){

	console.log('2 - segundo middleware personalizado do express')
	//res.send('Funcionando!')

	next()

})


module.exports = server

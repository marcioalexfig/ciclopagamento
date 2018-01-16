//Servico API RESTful que expoe o modelo via verbos HTTP
//para atualizar com PUT, no postman use http://localhost:3003/api/cicloPagamentos/:id

//impoertando o modelo
const CicloPagamento = require('./cicloPagamentoMapping')

//importando o lodash
const _ = require("lodash")

//Node Restful criará automaticamente a API e integra as rotas do express
CicloPagamento.methods( ['get', 'post', 'put', 'delete'] )

//para toda vez que altear um registro, retornar o novo objeto já alterado
CicloPagamento.updateOptions( {
	new: true,
	runValidators: true
} )

//node-restful intercepta requisicoes apos a chamada dos vferbos post e put e chama uma funcao
CicloPagamento
.after('post', enviaErroOuNext)
.after('put', enviaErroOuNext)

//funcao que e chamada na interceptação de verbos http
function enviaErroOuNext(req, res, next){
	const bundle = res.locals.bundle //vem do node-restful
	if (bundle.errors){
		//funcao minha para parsear os erros e retornar um array de strings
		 const errors = parseErrors(bundle.errors)
		 res.status(500).json( {errors} )
	}else{
		next()
	}
}
/**
percorre o errosDoNodeRESTful que vem de 'bundle.errors' do node restful
para cada objeto do erro (da iteração), só é aproveitado, erros.push(..),
o atributo 'message' para montar o array de strings 'erros'
*/
function parseErrors (errosDoNodeRESTful) {
	const erros = []

	_.forIn(errosDoNodeRESTful, erro => erros.push(erro.message))

	return erros
}

module.exports = CicloPagamento

//Exemplo de post para inclusao
/*
nome: Janeiro/18
mes: 1
ano: 2018
creditos[0][nome]: Salario
creditos[0][valor]: 10000
debitos[0][nome]: Luz
debitos[0][valor]: 100
debitos[0][status]: PAGO
debitos[1][nome]: Agua
debitos[1][valor]: 100
debitos[1][status]: PAGO
*/

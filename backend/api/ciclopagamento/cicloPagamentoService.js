//Servico API RESTful que expoe o modelo via verbos HTTP
//para atualizar com PUT, no postman use http://localhost:3003/api/cicloPagamentos/:id


const CicloPagamento = require('./cicloPagamentoMapping')

//Node Restful criará automaticamente a API e integra as rotas do express
CicloPagamento.methods( ['get', 'post', 'put', 'delete'] )

//para toda vez que altear um registro, retornar o novo objeto já alterado
CicloPagamento.updateOptions( { 
	new: true,
	runValidators: true
} )


module.exports = CicloPagamento
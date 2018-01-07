//API de Rotas com Express

const express = require('express')


//recepe server do modulo server.js e exporta as informações
//a passagem é feita no modulo loader.js
module.exports = function( server ) {

	//API Rotas - novo middleware do express na cadeia de middleware
	const roteador = express.Router()
	
	//todas as requisicoes que tiverem /api serao repassadas
	//parao roteador desta API atraves do express
	server.use('/api', roteador)

	//filtrando as requisicoes para /teste
	/*roteador.route('/teste').get( function (req, res, next) {
		res.send('Funcionou a chamada para `teste`')
	})*/

	// rotas da API
	const cicloPagamentoService = require('../api/ciclopagamento/cicloPagamentoService')

	//register eh um metodo do node-restful
	//registrando a url /cicloPagamentos na API no roteador
	//a url ficara /api/cicloPagamentos
	cicloPagamentoService.register(roteador, '/cicloPagamentos')

}


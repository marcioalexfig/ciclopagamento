//Mapeamento Objeto Documento (ODM) e exposicao de API

//simplifica a exposicao da API restful 
//depende do express
const restful = require('node-restful')

//mapeamento ODM com mongoose
const mongoose = restful.mongoose

//esquema de mapeamento 
const creditoSchema = new mongoose.Schema({
	nome: { type: String, required: [true, 'O nome do crédito é obrigatório.'] },
	valor: { type: Number, min: 0, required: [true, 'O valor do crédito é obrigatório.'] }
})

const debitoSchema = new mongoose.Schema({
	nome: { type: String, min: 0, required: [true, 'O nome do débito é obrigatório.'] },
	valor: { type: Number, min: 0, required: [true, 'O valor do débito é obrigatório.'] },
	status: { type: String, required: false, uppercase: true,
		enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const cicloPagamentoSchema = new mongoose.Schema({
	nome: { type: String, required: [true, 'O nome do ciclo é obrigatório.'] },
	mes: { type: Number, min: 1, max: 12, required: [true, 'O mês do ciclo é obrigatório.'] },
	ano: { type: Number, min: 1970, max: 2100, required: [true, 'O ano do ciclo é obrigatório.'] },
	creditos: [creditoSchema],
	debitos: [debitoSchema]
})

//expondo o ciclo de pagamentos como uma API RESTful
module.exports = restful.model('CicloPagamento', cicloPagamentoSchema)

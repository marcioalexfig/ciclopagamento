//no connect estou utilizando as portas padrão
//mongodb://usuario:senha@localhost:porta/db_financas'

const mongoose = require('mongoose')

//
module.exports = mongoose.connect('mongodb://localhost/db_financas')

//configurando mensagens genericas para 'messages', em portugues
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."

mongoose.Error.messages.Number.min = "O valor informado ('{VALUE}') é menor que mínimo permitido ('{MIN}')."

mongoose.Error.messages.Number.max = "O valor informado ('{VALUE}') é maior que máximo permitido ('{MAX}')."

mongoose.Error.messages.String.enum = "O status ('{VALUE}') é inválido."
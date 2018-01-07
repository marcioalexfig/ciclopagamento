//este loader esta definido no package.json como omodulo de inicialização
//os demais modulos são inicializados aqui

//server.js
const server = require('./config/server.js')
//database.js
require('./config/database.js')

//rotas.js
//recebe uma funcao que eh exportada em rotas
//esta funcao recebe um parametro chamado 'server'
require('./config/rotas')(server)



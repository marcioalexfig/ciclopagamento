//lodash
const _ = require("lodash")
//mapeamento ODM
const CicloPagamento = require('../ciclopagamento/cicloPagamentoMapping')

//Funcao middleware para sumarização
function getSumario(req, res){

  CicloPagamento.aggregate(
  [{
    $project: {
        credito: {$sum: "$creditos.value"},
        debito: {$sum: "$debitos.value"}
      }

    } , {

      $group: {
        _id: null, credito: {$sum:"$credito"}, debito: {$sum: "$debito"}
      }

    } , {

      $project: {_id:0, credito:1, debito:1}

    }]
    , function(error, resultado){
      if(error){
        res.status(500).json({errors: [error]})
      }else{
        res.json(_.defaults(resultado[0], {credito:0, debito:0}))
      }
    } )

}

module.exports = { getSumario }

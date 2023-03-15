//******************************************************
//         Formatação consistente e padronizada
//******************************************************

function recuperarSaldosPorConta(lancamentos) {

    if (lancamentos.length !== 0){
        const listaDeCpfs = RecuperaCpfs(lancamentos);
        const listaDeSaldos = [];
    
        for (let i = 0; i < listaDeCpfs.length; i++) {
            var cpf = listaDeCpfs[i]
            var valor = 0
            lancamentos.map((lancamento) => { 
                if(lancamento.cpf === cpf) 
                    valor += lancamento.valor; 
            });
            
            listaDeSaldos.push({ cpf, valor });
        }
        return listaDeSaldos;
  }else 
    return []
}

function RecuperaCpfs(lancamentos) {
    if(lancamentos.length !== 0) {
        const ListaDeCpfs = lancamentos.map((lancamento) => { 
            return lancamento.cpf
        })
        return ListaDeCpfs.filter((firstPosition, position) => ListaDeCpfs.indexOf(firstPosition) === position);
    }
    return []
}

// ----------------------------------------------------------
// Exemplo de uso
const lancamentos = [
    { cpf: '85650264007', valor: 50 },
    { cpf: '55096125769', valor: -100 },
    { cpf: '85650264007', valor: 1 },
    { cpf: '55096125769', valor: 100 }
];
console.log(recuperarSaldosPorConta(lancamentos));
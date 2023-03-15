//**********************************************************
//  Funções pequenas e Princípio da responsabilidade única
//**********************************************************

function calcularTotalPedido(itens) {
    let total = 0;
    for (let i = 0; i < itens.length; i++) {
      total += itens[i].valor;
    }
    return total;
}

function aplicarDesconto(total, porcentagemDesconto) {
    if (porcentagemDesconto) {
        total = total * (1 - (porcentagemDesconto/100));
    }
    return total;
}

// ----------------------------------------------------------
// Exemplo de uso
let itens = [
    { nome: 'Teclado wireless', valor: 100 },
    { nome: 'Monitor para PC Samsung', valor: 850 },
    { nome: 'Suporte para Notebook', valor: 50 }
];
const total = calcularTotalPedido(itens);
const totalComDesconto = aplicarDesconto(total, 10);

console.log(`- Total sem desconto: ${total}`);
console.log(`- Total com desconto: ${totalComDesconto}`);
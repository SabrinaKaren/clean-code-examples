//******************************************************
//             DRY (Don’t Repeat Yourself)
//******************************************************

function criarPessoa(primeiroNome, sobrenome, idade) {
    const pessoa = {
        primeiroNome: primeiroNome,
        sobrenome: sobrenome,
        idade: idade
    };
    pessoa.obterNomeCompleto = function() {
        return this.primeiroNome + " " + this.sobrenome;
    };
    pessoa.verificarSeEAdulto = function() {
        return this.idade >= 18;
    };
    return pessoa;
}

function criarFuncionario(primeiroNome, sobrenome, idade, cargo, salario) {
    const funcionario = criarPessoa(primeiroNome, sobrenome, idade);
    funcionario.cargo = cargo;
    funcionario.salario = salario;
    funcionario.obterSalario = function() {
        return this.salario;
    };
    return funcionario;
}

// ----------------------------------------------------------
// Exemplo de uso
const pessoa = criarPessoa('Leandro', 'Passos', 18);
const funcionario = criarFuncionario('Danielle', 'Santos', 41, 'Desenvolvedor', 500000);

console.log(`Pessoa: ${pessoa.obterNomeCompleto()} | É adulto? - ${pessoa.verificarSeEAdulto()}`);
console.log(`Funcionário: ${funcionario.obterNomeCompleto()} | É adulto? - ${funcionario.verificarSeEAdulto()} | Cargo: ${funcionario.cargo} | Salario: ${funcionario.obterSalario()})`);
//******************************************************
//             DRY (Don’t Repeat Yourself)
//******************************************************

function criarPessoa(primeiroNome, sobrenome, idade) {
    return {
        primeiroNome: primeiroNome,
        sobrenome: sobrenome,
        idade: idade,
        obterNomeCompleto: function() {
            return this.primeiroNome + " " + this.sobrenome;
        },
        verificarSeEAdulto: function() {
            return this.idade >= 18;
        }
    };
}

function criarFuncionario(primeiroNome, sobrenome, idade, cargo, salario) {
    return {
        primeiroNome: primeiroNome,
        sobrenome: sobrenome,
        idade: idade,
        cargo: cargo,
        salario: salario,
        obterNomeCompleto: function() {
            return this.primeiroNome + " " + this.sobrenome;
        },
        verificarSeEAdulto: function() {
            return this.idade >= 18;
        },
        obterSalario: function() {
            return this.salario;
        }
    };
}

// ----------------------------------------------------------
// Exemplo de uso
const pessoa = criarPessoa('Leandro', 'Passos', 18);
const funcionario = criarFuncionario('Danielle', 'Santos', 41, 'Desenvolvedor', 500000);

console.log(`Pessoa: ${pessoa.obterNomeCompleto()} | É adulto? - ${pessoa.verificarSeEAdulto()}`);
console.log(`Funcionário: ${funcionario.obterNomeCompleto()} | É adulto? - ${funcionario.verificarSeEAdulto()} | Cargo: ${funcionario.cargo} | Salario: ${funcionario.obterSalario()})`);
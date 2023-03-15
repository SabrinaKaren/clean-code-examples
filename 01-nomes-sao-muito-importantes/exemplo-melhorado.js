//******************************************************
//             Nomes são muito importantes
//******************************************************

function obterAlunoComMaiorNota(listaDeAlunos) {
    let alunoComMaiorNota = null;
    let maiorNota = -1;
    for (let i = 0; i < listaDeAlunos.length; i++) {
        const aluno = listaDeAlunos[i];
        if (aluno.nota > maiorNota) {
            maiorNota = aluno.nota;
            alunoComMaiorNota = aluno;
        }
    }
    return alunoComMaiorNota;
}

// ----------------------------------------------------------
// Exemplo de uso
let listaDeAlunos = [
    { nome: 'Álvaro', nota: 5 },
    { nome: 'Fernanda', nota: 8 },
    { nome: 'Victor', nota: 8.1 }
];
console.log(obterAlunoComMaiorNota(listaDeAlunos));
//******************************************************
//             Nomes são muito importantes
//******************************************************

function mnr(n) {
    let r = null;
    let m = -1;
    for (let i = 0; i < n.length; i++) {
        const aluno = n[i];
        if (aluno.nota > m) {
            m = aluno.nota;
            r = aluno;
        }
    }
    return r;
}

// ----------------------------------------------------------
// Exemplo de uso
let listaDeAlunos = [
    { nome: 'Álvaro', nota: 5 },
    { nome: 'Fernanda', nota: 8 },
    { nome: 'Victor', nota: 8.1 }
];
console.log(mnr(n));
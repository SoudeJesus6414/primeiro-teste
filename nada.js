const alunos = [
    { aluno: 'Leandro' },
    { aluno: 'João' },
    { aluno: 'Isaque' },
    { aluno: 'Luana' },
];

// Maria foi adicionada na lista
alunos.push({ aluno: 'Maria' });

// Aqui o programa procura o nome do aluno
const procurarAluno = alunos.find(a => a.aluno === 'João');

// Condição para vê se o aluno está na lista
if (procurarAluno) {
    console.log(`${procurarAluno.aluno} está na lista.`);
} else {
    console.log('Aluno não encontrado.');
};

// Lista todos os alunos 
console.log('Lista de alunos: ', alunos)
  
// Remove um estudante do sistema pelo nome 
function removerAluno(alunoRemover) {
    const procurarAlunoRemover = alunos.findIndex(a => a.aluno === alunoRemover);
    if (procurarAlunoRemover !== -1) {
        alunos.splice(procurarAlunoRemover, 1);  // remove o aluno do array
        console.log(`${alunoRemover} foi removido da lista.`);
    } else {
        console.log(`${alunoRemover} não foi encontrado na lista.`);
    }
};
console.log(removerAluno('Pedro'))

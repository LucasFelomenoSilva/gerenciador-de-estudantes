const readline = require('readline-sync');
const { estudantes, gerarId } = require("./data");

function cadastrarEstudante() {
  while (true) {
    const nome = readline.question('Nome: ');
        // Valida se o nome esta vazio
    if (nome === ''){
      console.log('\nNome não pode ser vazio.');
      return;
    }

    const idade = readline.question('Idade: ');
        // Valida se idade é positivo
    const idadeInvalida = Number(idade);
    if (isNaN(idadeInvalida) || idadeInvalida < 0){
      console.log('\nIdade deve ser um número positivo.');
      return;
    }

    const notasInput = readline.question('Notas (separadas por vírgula. Entre 0 e 10): ');
    const notas = notasInput.split(',').map(n => parseFloat(n.trim()));

    // Valida se as notas são entre 0 e 10
    const notasInvalidas = notas.some(nota => isNaN(nota) || nota < 0 || nota > 10);
    if (notasInvalidas){
      console.log('\nAs notas devem ser números entre 0 e 10');
      return;
    }

    estudantes.push({ id: gerarId(), nome, idade: idadeInvalida, notas });
    console.log('\nEstudante cadastrado com sucesso!');
    console.log('Deseja realizar outro cadastro?');
    console.log('1 - Sim');
    console.log('2 - Não');
    const novoCad = readline.question();
    
    if (novoCad == '2'){
      break;
    } else if (novoCad !== '1'){
      console.log('\nOpção inválida, voltando ao menu');
      break;
    }
  }
}

function listarEstudantes() {
  console.log('\n=== Lista de estudantes ====');
  estudantes.forEach((estudante, i) => {
    console.log();
    console.log(`\n${i + 1}. Nome: ${estudante.nome}, Idade: ${estudante.idade}, Notas: ${estudante.notas}`);
  });
}

function buscarEstudante() {
  const busca = readline.question('Digite o nome do estudante: ').toLowerCase();

  const encontrados = estudantes.filter(estudante => estudante.nome.toLowerCase().includes(busca));

  if (encontrados.length > 0) {
    console.log(`\nEstudante(s) encontrado(s)!`);
    encontrados.forEach(estudante => {
      console.log(`ID: ${estudante.id}`);
      console.log(`Nome: ${estudante.nome}`);
      console.log(`Idade: ${estudante.idade}`);
      console.log(`Notas: ${estudante.notas.join(', ')}`);
    });
  } else {
    console.log('Nenhum estudante encontrado.');
  }
}

function calcularMediaAluno(){
  const alunoMedia = parseInt(readline.question('\nDigite o ID do aluno: '));
  const alunoEncontrado = estudantes.filter(estudante => estudante.id === alunoMedia);

  if (alunoEncontrado.length === 0){
    console.log('Aluno não encontrado');
    return;
  }

  const aluno = alunoEncontrado[0];
  const somaNotas = aluno.notas.reduce((acumulador, nota) => acumulador + nota);
  const media = somaNotas / aluno.notas.length;

  console.log(`\nAluno ${aluno.id} : ${aluno.nome} encontrado!`);
  console.log(`Notas: ${aluno.notas}`);
  console.log(`Média das notas : ${media.toFixed(2)}`);
}

function mediaGeral(){
  let somaTotal = 0;
  let quantidadeNotas = 0;

  estudantes.forEach(estudante => {
    somaTotal += estudante.notas.reduce((acc, nota) => acc + nota);
    quantidadeNotas += estudante.notas.length;
  });

  if (quantidadeNotas === 0){
    console.log('\nNenhuma nota encontrada para calcular a média geral.');
    return;
  } 

  const mediaGeral = somaTotal / quantidadeNotas;
  console.log(`\nA média geral da turma é de: ${mediaGeral.toFixed(2)}`);
}

function maiorNota(){
  let todasAsNotas = [];
  estudantes.forEach(estudante =>{
    todasAsNotas = todasAsNotas.concat(estudante.notas);
  })

  if (todasAsNotas.length === 0){
    console.log('\nNenhuma nota encontrada');
    return;
  }
  
  const maior = Math.max(...todasAsNotas);
  console.log(`A maior nota entre todos os alunos é ${maior}`);
}

function relatorios(){
  let opcaoRe = ''
  console.log('\n1 - Alunos aprovados (Média maior ou igual a 7)');
  console.log('2 - Alunos em recuperação (Média entre 5 e 6,9)');
  console.log('3 - Alunos reprovados (Média menor que 5)');

  opcaoRe = readline.question('\n Escolha um relatório: ');

  switch (opcaoRe) {
    case '1':
      aprovados();
      break;
    case '2':
      recuperacao();
      break;
    case '3':
      reprovados();
      break;
    default:
      console.log('Opção inválida');
      break;
  }
}

function calcularMedia(estudante){
  if (estudante.notas.length === 0) return 0;
  const soma = estudante.notas.reduce((acc, nota) => acc + nota);
  return soma / estudante.notas.length;
}

function aprovados(){
  console.log('\n=== Alunos aprovados ===');
  const encontrados = estudantes.filter(estudante => calcularMedia(estudante) >= 7.0);

  if (encontrados.length === 0){
    console.log('\nNenhum aluno encontrado');
  } else {
    encontrados.forEach(estudante => {
      console.log(`Nome: ${estudante.nome} - Média : ${calcularMedia(estudante).toFixed(2)}`);
    });
  }
}

function recuperacao(){
  console.log('\n=== Alunos em recuperação ===');
  const encontrados = estudantes.filter(estudante => calcularMedia(estudante) >= 5 && calcularMedia(estudante) <= 6.9);

  if (encontrados.length === 0){
    console.log('\nNenhum aluno encontrado');
  } else {
    encontrados.forEach(estudante => {
      console.log(`Nome: ${estudante.nome} - Média : ${calcularMedia(estudante).toFixed(2)}`);
    });
  }
}

function reprovados(){
  console.log('\n=== Alunos reprovados ===');
  const encontrados = estudantes.filter(estudante => calcularMedia(estudante) < 5);

  if (encontrados.length === 0){
    console.log('\nNenhum aluno encontrado');
  } else {
    encontrados.forEach(estudante => {
      console.log(`Nome: ${estudante.nome} - Média : ${calcularMedia(estudante).toFixed(2)}`);
    });
  }
}

module.exports = {
  listarEstudantes,
  cadastrarEstudante,
  buscarEstudante,
  calcularMediaAluno,
  mediaGeral,
  maiorNota,
  relatorios
};
const readline = require('readline-sync');
const {
  listarEstudantes,
  cadastrarEstudante,
  buscarEstudante,
  calcularMediaAluno,
  mediaGeral,
  maiorNota,
  relatorios
} = require('./estudantes');

function menu() {
  let opcao = '';

  while (opcao !== '0') {
    console.log('\n========= MENU =========');
    console.log('1 - Cadastrar estudante');
    console.log('2 - Listar estudantes');
    console.log('3 - Buscar estudante pelo nome');
    console.log('4 - Calcular média do aluno');
    console.log('5 - Calcular média da turma');
    console.log('6 - Maior nota');
    console.log('7 - Relatórios');
    console.log('0 - Sair');
    console.log('========================');

    opcao = readline.question('\nEscolha uma opção: ');

    switch (opcao) {
      case '1':
        cadastrarEstudante();
        break;
      case '2':
        listarEstudantes();
        break;
      case '3':
        buscarEstudante();
        break;
      case '4':
        calcularMediaAluno();
        break;
      case '5':
        mediaGeral();
        break;
      case '6':
        maiorNota();
        break;
      case '7':
        relatorios();
        break;
      case '0':
        console.log('Encerrando o programa...');
        break;
      default:
        console.log('Opção inválida. Tente novamente.');
    }
  }
}

menu();
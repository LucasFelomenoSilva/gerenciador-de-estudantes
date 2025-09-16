# Gerenciador de Estudantes

Um sistema em JavaScript para gerenciar informações de estudantes, incluindo cadastro, listagem, busca, cálculos de média e geração de relatórios.

---

## Funcionalidades

- Cadastrar estudantes com nome e notas  
- Listar todos os estudantes  
- Buscar estudantes pelo nome  
- Calcular média das notas  
- Gerar relatórios resumidos  

---

## Tecnologias usadas

- NodeJS  
- JavaScript  

---

## Requisitos

- NodeJS (versão 14 ou superior)  
- Git  
- VSCode (opcional)  

---

## Como usar

### 1. Clonar o repositório

```bash
git clone https://github.com/LucasFelomenoSilva/gerenciador-de-estudantes.git
cd gerenciador-de-estudantes
```

### 2.Executar o projeto
```bash
node index.js
```

# Estrutura do Projeto

- **index.js** → Arquivo principal que roda o sistema  
- **estudantes.js** → Funções relacionadas ao cadastro e manipulação dos estudantes  
- **relatorios.js** → Funções para gerar relatórios  

# Exemplos de Uso

## Cadastrar um estudante
Digite o nome e as notas quando solicitado.  
**Exemplo:**  
Nome: Lucas  
Notas: 8, 7.5, 9

## Listar todos os estudantes
O sistema exibirá a lista completa com nomes e médias.

## Buscar estudante pelo nome
Digite o nome do estudante para visualizar suas informações.

## Gerar relatórios
O sistema exibe:  
- Total de estudantes cadastrados  
- Média geral das notas  
- Estudantes acima da média

const estudantes = [];

let proximoId = 1;

function gerarId() {
  return proximoId++;
}

module.exports = {
  estudantes,
  gerarId
};

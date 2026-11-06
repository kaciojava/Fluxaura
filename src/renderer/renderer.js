//salvar dados
function salvarDados(chave, dados) {
  localStorage.setItem(chave, JSON.stringify(dados));
  console.log(`Dados salvos com sucesso na chave: ${chave}`);
}
//Buscar dados salvos
function carregarDados(chave) {
  const dados = localStorage.getItem(chave);
  console.log(`Dados carregados da chave: ${chave}`);
  return dados ? JSON.parse(dados) : [];
}

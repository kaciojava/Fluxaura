//salvar dados
function salvarDados(chave, dados) {
  localStorage.setItem(chave, JSON.stringify(dados));
  console.log(`Dados salvos com sucesso na chave: ${chave}`);
}
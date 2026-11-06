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

// TRANSAÇÕES
const formTransacao = document.getElementById('form-transacao');

if (formTransacao) {
  formTransacao.addEventListener('submit', (e) => {
    e.preventDefault();

    //captura os valores do formulário
    const descricao = document.getElementById('gasto-descricao').value;
    const valor = parseFloat(document.getElementById('gasto-valor').value);
    const tipo = document.getElementById('gasto-tipo').value;
    const categoria = document.getElementById('gasto-categoria').value;

    //carrega as transações existentes
    const transacoes = carregarDados('transacoes');
    
    const novaTransacao = {
      id: Date.now(),
      descricao,
      valor,
      tipo,
      categoria
    };

    transacoes.push(novaTransacao);
    salvarDados('transacoes', transacoes);

    //Limpar o formulário
    formTransacao.reset();
    alert('Transação registada com sucesso!');
  });
}
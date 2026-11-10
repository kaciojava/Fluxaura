//salvar dados
function salvarDados(chave, dados) {
  localStorage.setItem(chave, JSON.stringify(dados));
  console.log(`Dados salvos com sucesso na chave: ${chave}`);
}
//buscar dados salvos
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

    //pega os valores do formulário
    const descricao = document.getElementById('gasto-descricao').value;
    const valor = parseFloat(document.getElementById('gasto-valor').value);
    const tipo = document.getElementById('gasto-tipo').value;
    const categoria = document.getElementById('gasto-categoria').value;

    //da load nas transações existentes
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

    //limpa o formulário
    formTransacao.reset();
    alert('Transação registada com sucesso!');
  });
}
// atualiza a tabela de transações
function renderizarTabelaGastos() {
  const tabela = document.getElementById('tabela-transacoes');
  if (!tabela) return;

  const transacoes = carregarDados('transacoes');
  tabela.innerHTML = ''; // limpa antes de desenhar

  transacoes.forEach((item) => {
    const tr = document.createElement('tr');

    // define a cor da badge
    const badgeCor = item.tipo === 'despesa' ? 'bg-danger' : 'bg-success';
    const sinal = item.tipo === 'despesa' ? '-' : '+'; tr.innerHTML = `
      <td>${item.descricao}</td>
      <td><span class="badge bg-secondary">${item.categoria}</span></td>
      <td><span class="badge ${badgeCor}">${item.tipo.toUpperCase()}</span></td>
      <td class="fw-bold">${sinal} R$ ${item.valor.toFixed(2)}</td>
      <td class="text-end">
        <button class="btn btn-sm btn-outline-danger" onclick="removerGasto(${item.id})">
          <i class="bi bi-trash"></i> Excluir
        </button>
      </td>
    `;

    tabela.appendChild(tr);
  });
}

renderizarTabelaGastos();

//excluir transação
function removerGasto(id) {
  let transacoes = carregarDados('transacoes');
  transacoes = transacoes.filter(item => item.id !== id);
  salvarDados('transacoes', transacoes);
  renderizarTabelaGastos();
}

transacoes.push(novaTransacao);
    salvarDados('transacoes', transacoes);

    // Atualiza a tabela na hora
    renderizarTabelaGastos();

    //limpa o formulário
    formTransacao.reset();
    alert('Transação registada com sucesso!');
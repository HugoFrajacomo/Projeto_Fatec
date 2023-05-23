function calcularValorTotal(id) {
  let idElementoPreco = "precoProduto" + id;
  let idElementoQuantidade = "quantidadeProduto" + id;
  let idElementoValorTotal = "valorTotalProduto" + id;

  let precoProduto = Number(document.getElementById(idElementoPreco).innerHTML.replace(',','.'));
  let quantidadeProduto = Number(document.getElementById(idElementoQuantidade).value);
  document.getElementById(idElementoValorTotal).innerHTML = String((precoProduto * quantidadeProduto).toFixed(2)).replace('.',',');
}


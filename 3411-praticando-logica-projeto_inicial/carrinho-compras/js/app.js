let valorTotal = 0;
limpar();



function adicionar () {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML +  (`<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
        </section>`);

        valorTotal = valorTotal + preco;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = ('R$ ' + valorTotal);
        document.getElementById('quantidade').value = 0;
}

function limpar() {
  valorTotal = 0;
  document.getElementById("lista-produtos").innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0';
}
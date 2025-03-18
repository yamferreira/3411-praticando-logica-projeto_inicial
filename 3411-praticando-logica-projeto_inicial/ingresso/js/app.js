function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

        if(tipoIngresso.value == 'pista') {
            comprarPista(quantidade);
        }

    
}

function comprarPista(quantidade) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista')).textContent;
    if(quantidade > quantidadePista) {
        alert('Quantidade indisponivel');
    } else {
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert("compra realizada com sucesso");
    }
    

}
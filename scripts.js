//Global
let prato = false, bebida = false, sobremesa = false, nomecliente = false, confirma = false;
let nomeCliente = " ", enderecoCliente = " ";
function botao() {
    if (prato == true && bebida == true && sobremesa == true) {
        nomecliente = false;
        let botaoPedido = document.querySelector(".finalizar");
        botaoPedido.classList.add("selecionadoBotao");
        botaoPedido.innerHTML = "Fechar Pedido";
        botaoPedido.removeAttribute("disabled");
    }
}

function numeroCliente() {
    if (numerocliente = true) {
        confirma = true;
        let nomeCliente = prompt("Qual o seu nome?");
        let enderecoCliente = prompt("Qual o seu endereço?");
        confirmarPedido();
    }
}

function confirmarPedido() {
    if (confirma = true) {
        mensagem = `Olá, gostaria de fazer o pedido:
        1x Banana
        1x Vitamina de Banana 
        1x Doce de Banana  
        R$ 299,97` + "\n" + "Nome: " + nomeCliente + "\n" + "Endereço " + enderecoCliente;
        let encoded = encodeURIComponent(mensagem);
        window.open("https://wa.me/1111111111?text=" + encoded);
    }
}

function selecionarPrato(nome) {
    // Seleciona o prato
    prato = true
    const elementoPrato = document.querySelector(".selecionadoPrato");

    if (elementoPrato !== null) {
        elementoPrato.classList.remove("selecionadoPrato");

    }


    const selecionarPrato = document.querySelector("." + nome);
    selecionarPrato.classList.add("selecionadoPrato");

    botao()

}

function selecionarBebida(nome) {
    // Seleciona a bebida
    bebida = true
    const elementoBebida = document.querySelector(".selecionadoBebida");
    if (elementoBebida !== null) {
        elementoBebida.classList.remove("selecionadoBebida");


    }

    const selecionarBebida = document.querySelector("." + nome);
    selecionarBebida.classList.add("selecionadoBebida");

    botao()
}

function selecionarSobremesa(nome) {
    // Seleciona a sobremesa
    sobremesa = true
    const elementoSobremesa = document.querySelector(".selecionadoSobremesa");
    if (elementoSobremesa !== null) {
        elementoSobremesa.classList.remove("selecionadoSobremesa");


    }

    const selecionarSobremesa = document.querySelector("." + nome);
    selecionarSobremesa.classList.add("selecionadoSobremesa");

    botao()
}

function confirmar() {
}
// hora do relógio
const hora = document.getElementById("hora");

function tempo() {
    let time = new Date().toLocaleTimeString();
    hora.innerHTML = time;
}

setInterval(()=>{tempo()},1000);

// abrir portas
const portaRecepcao = document.getElementById("porta-fechada-rosa");
const portaConsultorio = document.getElementById("porta-fechada-azul");
const consultorio = document.getElementById("consultorio");
const recepcao = document.getElementById("recepcao");

portaRecepcao.onclick = function abrirPortaRosa() {
    consultorio.style.display = "flex";
    recepcao.style.display = "none";
}

portaConsultorio.onclick = function abrirPortaAzul() {
    recepcao.style.display = "flex";
    consultorio.style.display = "none";
}

// abrir janela web
const janelaWeb = document.getElementById("info");

const raioX = document.getElementById("raio-x");
const txtRaioX = document.getElementById("txt-raiox");

raioX.onclick = function abrirJanelaWeb() {
    janelaWeb.style.display = "flex";
    txtRaioX.style.display = "inline";
}

const vacina = document.getElementById("vacina");
const txtVacina = document.getElementById("txt-vacina");

vacina.onclick = function abrirJanelaWeb() {
    janelaWeb.style.display = "flex";
    txtVacina.style.display = "inline";
}

const foto = document.getElementById("foto");
const txtFoto = document.getElementById("txt-foto");

foto.onclick = function abrirJanelaWeb() {
    janelaWeb.style.display = "flex";
    txtFoto.style.display = "inline";
}

const computador = document.getElementById("computador");
const txtVirus = document.getElementById("txt-virus");

computador.onclick = function abrirJanelaWeb() {
    janelaWeb.style.display = "flex";
    txtVirus.style.display = "inline";
}

const useMascara = document.getElementById("use-mascara");
const txtMascara = document.getElementById("txt-mascara");

useMascara.onclick = function abrirJanelaWeb() {
    janelaWeb.style.display = "flex";
    txtMascara.style.display = "inline";
}

const quadro = document.getElementById("quadro");
const txtQuadro = document.getElementById("txt-quadro");

quadro.onclick = function abrirJanelaWeb() {
    janelaWeb.style.display = "flex";
    txtQuadro.style.display = "inline";
}

const arquivo = document.getElementById("arquivo");
const txtArquivo = document.getElementById("txt-arquivo");

arquivo.onclick = function abrirJanelaWeb() {
    janelaWeb.style.display = "flex";
    txtArquivo.style.display = "inline";
}

// fechar janela web
const iconeFechar = document.getElementById("fechar");

iconeFechar.onclick = function fecharJanelaWeb() {
    janelaWeb.style.display = "none";
    txtVacina.style.display = "none";
    txtRaioX.style.display = "none";
    txtFoto.style.display = "none";
    txtVirus.style.display = "none";
    txtMascara.style.display = "none";
    txtQuadro.style.display = "none";
    txtArquivo.style.display = "none";
}

// ligar e desligar raio-x
const botaoVerde = document.getElementById("botao-verde");
const botaoVermelho = document.getElementById("botao-vermelho");

const raioxLigado = document.getElementById("raiox-aceso");
const raioxDesligado = document.getElementById("raiox-apagado");

botaoVerde.onclick = function acenderBotaoVerde() {
    botaoVerde.style.backgroundColor = "#00FF3D";
    botaoVermelho.style.backgroundColor = "#660000"
    raioxDesligado.style.visibility = "hidden";
    raioxLigado.style.visibility = "visible";
    raioX.style.visibility = "visible";
}

botaoVermelho.onclick = function acenderBotaoVermelho() {
    botaoVerde.style.backgroundColor = "#006d19";
    botaoVermelho.style.backgroundColor = "#FF0000";
    raioxDesligado.style.visibility = "visible";
    raioxLigado.style.visibility = "hidden";
    raioX.style.visibility = "hidden";
}
/*

Objetivo - quando clicarmos na aba temos que mostrar
o conteúdo da aba que foi clicada pelo usuario e 
esconder o conteúdo da aba anterior 

*/

const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }
        
        selecionarAba(aba)
        montrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba){
    const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado");

        aba.classList.add("selecionado");
}

function montrarInformacoesDaAba(aba) {
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");

        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add("selecionado");
}
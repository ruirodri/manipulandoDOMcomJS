function mostraValor() {
    alert(document.getElementById("textoInformado").value);
    /*
    
    Outros métodos de busca:
    getElementById()
    getElementsByClassName()
    getElementsByName()
    getElementsByTagName()
    getElementsByTagNameNS()
    evaluate()
    querySelector()
    querySelectorAll()

    Sobre eventos:
    https://developer.mozilla.org/pt-BR/docs/Web/Events

    */
}

function mostraValor2() {
    alert(elementoPorXPath("/html/body/div[1]/label/input").value);
}

function elementoPorXPath(xpath) {
    return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function limpaInput() {
    let el = document.getElementById("textoInformado");
    el.value = "";
}

function escreveMaisOi() {
    let el = document.getElementById("textoInformado");
    el.value = (el.value + " Oi").trim();
}

function pedeTexto() {
    let oTexto = prompt("Que texto devo colocar na caixa de input?", document.getElementById("textoInformado").value);
    if (oTexto == null || oTexto == "") {
        alert("Ação cancelada!");
    } else {
        let el = document.getElementById("textoInformado");
        el.value = oTexto;
    }
}


function adicionaParagrafo() {
    let theDiv = document.getElementById("listaParagrafos");
    let quantidadeParagrafos = theDiv.getElementsByTagName("p").length;

    let tag = document.createElement("p");
    if (quantidadeParagrafos % 2 != 0) {
        tag.className = "paragrafo par";
    } else {
        tag.className = "paragrafo impar";
    }
    let text = document.createTextNode(novoTextoParagrafo(quantidadeParagrafos));
    tag.appendChild(text);

    theDiv.appendChild(tag);
}

function novoTextoParagrafo(qtdeAtualParagrafos) {
    let textoSetado = document.getElementById("textoInformado").value;
    let textoNovoParagrafo = "";

    if (textoSetado != "") {
        textoNovoParagrafo = textoSetado + " - número " + (qtdeAtualParagrafos + 1);
    } else {
        textoNovoParagrafo = "Paragrafo novo - número " + (qtdeAtualParagrafos + 1);
    }
    return textoNovoParagrafo;
}

function removeParagrafo() {
    let theDiv = document.getElementById("listaParagrafos");
    let aLista = theDiv.getElementsByTagName("p");
    let quantidadeParagrafos = aLista.length;
    if (quantidadeParagrafos > 0) {
        theDiv.removeChild(aLista[quantidadeParagrafos - 1]);
    }
}


function mostraTextoNormal() {
    document.getElementById("exemploTexto").className = "textoNormal";
    inverteBotoesFormatacao();
}

function mostraTextoDestacado() {
    document.getElementById("exemploTexto").className = "textoDestacado";
    inverteBotoesFormatacao();
}

function inverteBotoesFormatacao() {
    document.getElementById("botaoTextoDestacado").disabled = !document.getElementById("botaoTextoDestacado").disabled;
    document.getElementById("botaoTextoNormal").disabled = !document.getElementById("botaoTextoNormal").disabled;

}


function makeClick() {
    alert("após o OK, vou clicar no checkbox.");
    document.getElementById("checkDummy").click();
}

function abreSiteEveris() {
    window.location.href = "https://www.everis.com";
}


function scrollToBotaoVoltaListaParagrafos() {
    document.getElementById("botaoListaParagrafos").scrollIntoView();
}

function scrollToParagraphList() {
    document.getElementById("listaParagrafos").scrollIntoView();
}

function scrollUp50() {
    let isIE = !!document.documentMode;
    let pos = 0;
    if (isIE) {
        pos = window.pageYOffset;
    } else {
        pos = window.scrollY;
    }
    window.scroll(0, pos - 50);
}
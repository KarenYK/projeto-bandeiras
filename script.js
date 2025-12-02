function muda(){
    document.getElementById("pais").innerHTML = "Países e suas cores"
}

function mudaCor(){
    document.getElementById("teste").style.color = "Green"
}

function voltaCor(){
    document.getElementById("teste").style.color = "Yellow"
}

// Japão
function japaMostra(){
    document.getElementById("japao1").innerHTML = "Japão é um país-arquipélago formado por milhares de ilhas e localizado na área de maior instabilidade geológica do planeta, conhecida como Círculo de Fogo do Pacífico."
    document.getElementById("japao2").innerHTML = "Situado em uma das áreas mais geologicamente instáveis do mundo, o Japão possui um relevo montanhoso que influencia a distribuição de umidade pelo país."
    document.getElementById("japao3").innerHTML = "Dois climas são predominantes, o temperado e o tropical."
    document.getElementById("imageJ").style.display = "block" 
}

function japaApaga(){
    document.getElementById("japao0").innerHTML = "Japão"
    document.getElementById("japao1").innerHTML = ""
    document.getElementById("japao2").innerHTML = ""
    document.getElementById("japao3").innerHTML = ""
    document.getElementById("imageJ").style.display = "none"
}

// França
function francaMostra(){
    document.getElementById("franca1").innerHTML = "A França é um país localizado no continente europeu e tem como capital a cidade de Paris."
    document.getElementById("franca2").innerHTML = "Conta atualmente com mais de 65 milhões de habitantes, sendo a região da Ilha de França a mais populosa delas."
    document.getElementById("franca3").innerHTML = "Possui clima ameno e um terreno que varia de plano e suavemente ondulado a montanhoso nas regiões leste e sul."
    document.getElementById("imageF").style.display = "block" 
}

function francaApaga(){
    document.getElementById("franca0").innerHTML = "França"
    document.getElementById("franca1").innerHTML = ""
    document.getElementById("franca2").innerHTML = ""
    document.getElementById("franca3").innerHTML = ""
    document.getElementById("imageF").style.display = "none"
}

// México
function mexicoMostra(){
    document.getElementById("mexico1").innerHTML = "O México é um país localizado na América do Norte."
    document.getElementById("mexico2").innerHTML = "Historicamente, foi colonizado pela Espanha e se tornou uma das principais possessões europeias no continente americano."
    document.getElementById("mexico3").innerHTML = "A independência tornou possível o crescimento da economia mexicana."
    document.getElementById("imageM").style.display = "block" 
}

function mexicoApaga(){
    document.getElementById("mexico0").innerHTML = "México"
    document.getElementById("mexico1").innerHTML = ""
    document.getElementById("mexico2").innerHTML = ""
    document.getElementById("mexico3").innerHTML = ""
    document.getElementById("imageM").style.display = "none"
}

// Coreia
function coreiaMostra(){
    document.getElementById("coreia1").innerHTML = "A Coreia do Sul é um país localizado na Ásia."
    document.getElementById("coreia2").innerHTML = "O país dividiu-se na segunda metade do século XX como um desdobramento da Guerra Fria."
    document.getElementById("coreia3").innerHTML = "A porção sul da península da Coreia é muito desenvolvida e industrializada."
    document.getElementById("imageC").style.display = "block" 
}

function coreiaApaga(){
    document.getElementById("coreia0").innerHTML = "Coreia"
    document.getElementById("coreia1").innerHTML = ""
    document.getElementById("coreia2").innerHTML = ""
    document.getElementById("coreia3").innerHTML = ""
    document.getElementById("imageC").style.display = "none"
}

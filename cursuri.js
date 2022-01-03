function schimbareTitlu(id, titlu) {
    document.getElementById(id).innerText = titlu;
}

function schimbareSRCa(id, url) {
    document.getElementById(id).innerHTML = "src=" + url;
}

function cursContinua(numar) {
    switch (numar) {
        case 0:
            schimbareSRC("curs", "https://streamable.com/amwvxm")
        case 1:
            schimbareTitlu("curs-info", "Cursul 2 : Experienta cu seful P2")
            schimbareSRC("curs", "https://files.fm/u/ty9tpajpz")
    }
}


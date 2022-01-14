const primul = document.getElementById('curs-primul')
const experienta = document.getElementById('curs-experienta')
const meniu = document.getElementById('curs-meniu')
const doi = document.getElementById('curs-doi')

function schimbareTitlu(id, titlu) {
    document.getElementById(id).innerText = titlu;
}

function schimba() {
    aratat = !aratat
}

// function schimbareSRC(id, url) {
//     document.getElementById(id).innerHTML = "src=" + url;
// }

// function cursContinua(text) {
//     switch (text) {
//         case 'primul':
//             schimbareTitlu("curs-info", "Primul curs, baza :")
//             schimbareSRC("curs", "https://streamable.com/amwvxm")
//         case 'experienta':
//             schimbareTitlu("curs-info", "Cursul 2 : Experienta cu seful P2")
//             schimbareSRC("curs", "https://files.fm/u/ty9tpajpz")
//     }
// }

function cursContinua(text) {
    if (text === "primul") {
        schimbareTitlu("curs-info", "Primul curs, baza :")
        meniu.style.display = "none"
        experienta.style.display = "none"
        doi.style.display = "none"
        primul.style.display = "block"
    }
    else if (text === "experienta") {
        schimbareTitlu("curs-info", "Cursul 2 : Experienta cu seful P2")
        primul.style.display = "none"
        meniu.style.display = "none"
        doi.style.display = "none"
        experienta.style.display = "block"
    }
    else if (text === "meniu") {
        schimbareTitlu("curs-info", "Cursul 3 : Meniu cu seful")
        experienta.style.display = "none"
        primul.style.display = "none"
        doi.style.display = "none"
        meniu.style.display = "block"
    }
    else if (text === "doi") {
        schimbareTitlu("curs-info", "Presiunea si sacrificiile :")
        experienta.style.display = "none"
        primul.style.display = "none"
        meniu.style.display = "none"
        doi.style.display = "block"
    }
    else return
}
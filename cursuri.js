const primul = document.getElementById('curs-primul')
const experienta = document.getElementById('curs-experienta')

function schimbareTitlu(id, titlu) {
   console.log(`schimbare titlu se executa unde titlu '${titlu}'`);
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

show

function cursContinua(text) {
    if (text === "primul") {
        schimbareTitlu("curs-info", "Primul curs, baza :")
        experienta.style.display = "none"
        primul.style.display = "block"
    }
    else if (text === "experienta") {
        schimbareTitlu("curs-info", "Cursul 2 : Experienta cu seful P2")
        primul.style.display = "none"
        experienta.style.display = "block"
    }
    else return
}
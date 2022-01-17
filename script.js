function dute(url) {
    window.location.href = url
}
// Buggy code
// function verificaPromo(promo) {
//     var promocode = promo.value
//     const promocodes = ["andrei"]
//     if (promocodes.includes(promocode)) {
//         // If it is, return true
//         return true
//     }  else {
//         // If it is not, return false
//         return false
//     }
// }

// function promo(promocode) {
//     var promocode = promo.value
//     if (verificaPromo(promocode) === true) {
//         console.log(`Promocode pt` + ` ${promocode}` + ` a fost aplicat!`)
//         dute(`promocode/${promocode}.html`)
//     } else {
//         console.log("Codul introdus nu exista!")
//         promocode = ""
//         return
//     }
// }
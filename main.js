const kilometriEl = document.querySelector("#number-of-km")
const formEL = document.querySelector(".form")
const btnEl = document.querySelector(".calculator")
const etaEl = document.querySelector(".selettore")
const userName = document.querySelector("#name")
const namePassangers = document.querySelector("#name-passengers")
const km = kilometriEl.value
const finalPrice = document.querySelector("#price")
const typeOf = document.querySelector("#typeOf")
console.log(kilometriEl, etaEl);




formEL.addEventListener("submit", function (e) {
    e.preventDefault()
    namePassangers.innerHTML = (`${userName.value}`)

    const km = kilometriEl.value
    let eta = etaEl.value
    console.log(eta);
    if (eta === "1") {
        eta = 17
        typeOf.innerHTML = ("Biglietto Ridotto <18")
    } else if (eta === "2") {
        eta = 33
        typeOf.innerHTML = ("Biglietto ordinario")
    } else {
        eta = 66
        typeOf.innerHTML = ("Biglietto Ridotto >65")

    }
    console.log(eta);
    const prezzoLordo = km * 0.21;
    findPrice(eta, prezzoLordo)
    finalPrice.innerHTML = (`${findPrice(eta, prezzoLordo)} €`)
})

/**
 * 
 * @param {age} num 
 * @param {kilometers} num2 
 */
const findPrice = (num, num2) => {

    if (num < 18) {
        let sconto = (num2 * 20) / 100;
        console.log(sconto);
        const prezzoNetto = (num2 - sconto);
        console.log(prezzoNetto.toFixed(2));
        return prezzoNetto.toFixed(2)
    } else if (num >= 65) {
        sconto = (num2 * 40) / 100;
        console.log(sconto);
        const prezzoNetto = (num2 - sconto);
        console.log(prezzoNetto.toFixed(2))

        return prezzoNetto.toFixed(2)
    } else {
        console.log(num2.toFixed(2));
        return num2.toFixed(2)

    }

}

const result = document.querySelector(".result")

const kilometriEl = document.querySelector("#number-of-km")
//const etaEl = document.querySelector("#age")
const btnEl = document.querySelector(".calculator")
const etaEl = document.querySelector(".selettore")
console.log(kilometriEl, etaEl);

const km = kilometriEl.value





btnEl.addEventListener("click", function () {
    const km = kilometriEl.value
    let eta = etaEl.value
    console.log(eta);
    if (eta === "1") {
        eta = 17
    } else if (eta === "2") {
        eta = 33
    } else {
        eta = 66
    }
    console.log(eta);
    const prezzoLordo = km * 0.21;
    findPrice(eta, prezzoLordo)

    result.innerHTML = (`${km} ${eta} ${findPrice(eta, prezzoLordo)}`)

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

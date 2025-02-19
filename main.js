const kilometriEl = document.querySelector("#number-of-km")
const etaEl = document.querySelector("#age")
const btnEl = document.querySelector(".calculator")
console.log(kilometriEl, etaEl);

const km = kilometriEl.value
const eta = etaEl.value


btnEl.addEventListener("click", function () {
    const km = kilometriEl.value
    const eta = etaEl.value
    console.log(eta, km);
    findPrice(eta, km)

})

/**
 * 
 * @param {age} num 
 * @param {kilometers} num2 
 */
const findPrice = (num, num2) => {
    const prezzoLordo = num2 * 0.21;
    if (num < 18) {
        let sconto = (prezzoLordo * 20) / 100;
        console.log(sconto);
        const prezzoNetto = (prezzoLordo - sconto);
        console.log(prezzoNetto.toFixed(2));
        alert(`${"Il prezzo da pagare è"} ${prezzoNetto.toFixed(2)}`);
    } else if (num >= 65) {
        sconto = (prezzoLordo * 40) / 100;
        console.log(sconto);
        const prezzoNetto = (prezzoLordo - sconto);
        console.log(prezzoNetto.toFixed(2));
        alert(`${"Il prezzo da pagare è"} ${prezzoNetto.toFixed(2)}`);
    } else {
        console.log(prezzoLordo.toFixed(2));
        alert(`${"Il prezzo da pagare è"} ${prezzoLordo.toFixed(2)}`);

    }
}


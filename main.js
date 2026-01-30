const kilometriEl = document.querySelector("#number-of-km");
const formEL = document.querySelector(".form");
const etaEl = document.querySelector(".selettore");
const userName = document.querySelector("#name");
const namePassangers = document.querySelector("#name-passengers");
const finalPrice = document.querySelector("#price");
const typeOf = document.querySelector("#typeOf");
const nCarrozza = document.querySelector("#numeroCarrozza");
const codeCp = document.querySelector("#codeCp");

formEL.addEventListener("submit", function (e) {
    e.preventDefault();
    
    namePassangers.innerHTML = userName.value;
    const km = Number(kilometriEl.value);
    let eta = etaEl.value;
    
    if (eta === "1") {
        eta = 17;
        typeOf.innerHTML = "Biglietto Ridotto <18";
    } else if (eta === "2") {
        eta = 33;
        typeOf.innerHTML = "Biglietto ordinario";
    } else {
        eta = 66;
        typeOf.innerHTML = "Biglietto Ridotto >65";
    }

    const prezzoLordo = km * 0.21;
    const price = findPrice(eta, prezzoLordo);
    
    finalPrice.innerHTML = `${price} €`;
    nCarrozza.innerHTML = Math.floor(Math.random() * 10) + 1;
    codeCp.innerHTML = Math.floor(Math.random() * 50000) + 1;
});

/**
 * Calcola il prezzo scontato in base all'età
 * @param {number} age - Età del passeggero
 * @param {number} rawPrice - Prezzo lordo
 * @returns {string} - Prezzo finale formattato
 */
const findPrice = (age, rawPrice) => {
    let finalPrice;
    if (age < 18) {
        let sconto = (rawPrice * 20) / 100;
        finalPrice = rawPrice - sconto;
    } else if (age >= 65) {
        let sconto = (rawPrice * 40) / 100;
        finalPrice = rawPrice - sconto;
    } else {
        finalPrice = rawPrice;
    }
    return finalPrice.toFixed(2);
};


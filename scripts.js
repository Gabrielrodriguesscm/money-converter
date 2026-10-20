const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertCurrency() {
    const currencyInputValue = document.querySelector(".currency-input").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");


    const dolarToday = 5.21;
    const euroToday = 5.87;
    const libraToday = 6.90;
    const bitcoinToday = 450000;



    if (currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(currencyInputValue);

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(currencyInputValue / dolarToday);
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(currencyInputValue / euroToday);
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(currencyInputValue / libraToday);
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(currencyInputValue / bitcoinToday);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(currencyInputValue);

    console.log(convertedValue);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar";
        currencyImage.src = "./assets/estados-unidos (1) 1.png";
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra";
        currencyImage.src = "./assets/libra.png";
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/bitcoin.png";
    }

    convertCurrency();
}
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertCurrency);
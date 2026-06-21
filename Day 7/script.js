const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");
convertBtn.addEventListener("click", convertCurrency);
async function convertCurrency() {
    const amount = amountInput.value;
    const from = fromCurrency.value;
    const to = toCurrency.value;
    try {
        const response = await fetch(
            `https://v6.exchangerate-api.com/v6/2c8ade88a1014f6a2cf30020/latest/${from}`
        );
        const data = await response.json();
        const rate =data.conversion_rates[to];
        const convertedAmount =(amount * rate).toFixed(2);
        result.innerText =`${amount} ${from} = ${convertedAmount} ${to}`;
    }
    catch(error) {
        result.innerText ="Conversion failed";
        console.error(error);
    }
}
function calculateLoan() {
    amountL = document.getElementById("loan-am").value;
    ir = document.getElementById("in-rate").value;
    mtp = document.getElementById("mtp").value;

    interest = (amountL * ir * 0.01) / mtp;

    monthlyPay = (amountL / mtp + interest).toFixed(2);

    document.getElementById("result").innerHTML = `Monthly Payment : ${monthlyPay}`


}
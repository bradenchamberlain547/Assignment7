function CalculatePrice(){
    let dogSize = document.getElementById("dogSize").value;
    let days = document.getElementById("days").value;

    let price = parseInt(dogSize) * parseInt(days);
    let tax = price * .047;
    let total = price + tax;

    document.getElementById("Price").textContent = "$" + price.toFixed(2);
    document.getElementById("Tax").textContent = "$" + tax.toFixed(2);
    document.getElementById("Total").textContent = "$" + total.toFixed(2);
}

document.getElementById("calc").addEventListener("click", CalculatePrice);
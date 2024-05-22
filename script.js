

function calculate() {
    let inputBox = document.getElementById("input-box");
    let inputValue = inputBox.value;
    alert("Input value: " + inputValue); 
    document.getElementById("restaurantBill").innerHTML = inputValue;
    document.getElementById("10Percent").innerHTML = inputValue * .10;
    document.getElementById("15Percent").innerHTML = inputValue * .15;
    document.getElementById("20Percent").innerHTML = inputValue * .20;

}


function calculate() {
    let inputValue = document.getElementById("input-box").value;
    let finalCheck = Number(inputValue);
    alert("Input value: " + finalCheck);
    document.getElementById("restaurantBill").innerHTML = inputValue;
    let percentage = [.10, .15, .20, .25];
    for (let i = 0; i < percentage.length; i++) {
        if (percentage[i] === .10) {
            let tenPerc = finalCheck * .10;
            document.getElementById("tenTip").innerHTML = tenPerc;
            document.getElementById("tenTotal").innerHTML = tenPerc + finalCheck;
            document.getElementById("tenSplit").innerHTML = (tenPerc + finalCheck) / 2;
        } else if (percentage[i] == .15) {
            let fifteenPerc = finalCheck * .15;
            document.getElementById("fifteenTip").innerHTML = fifteenPerc;
            document.getElementById("fifteenTotal").innerHTML = fifteenPerc + finalCheck;
            document.getElementById("fifteenSplit").innerHTML = (fifteenPerc + finalCheck) / 2;
        } else if (percentage[i] == .20) {
            let twentyPerc = finalCheck * .20;
            document.getElementById("twentyTip").innerHTML = twentyPerc;
            document.getElementById("twentyTotal").innerHTML = twentyPerc + finalCheck;
            document.getElementById("twentySplit").innerHTML = (twentyPerc + finalCheck) / 2;
        } else if (percentage[i] == .25) {
            let twentyfivePerc = finalCheck * .25;
            document.getElementById("tfiveTip").innerHTML = twentyfivePerc;
            document.getElementById("tfiveTotal").innerHTML = twentyfivePerc + finalCheck;
            document.getElementById("tfiveSplit").innerHTML = (twentyfivePerc + finalCheck) / 2;
        }
    }



}
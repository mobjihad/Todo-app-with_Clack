const display = (result) => {
    console.log(result);
};

const calculate = (number1, number2, itsacllback) => {

    let sum = number1 + number2;
    itsacllback(sum);
};

calculate(3, 4, display);
setTimeout(disLove, 3000);

function disLove() {

    console.log("Print After 3 Seconds");
};
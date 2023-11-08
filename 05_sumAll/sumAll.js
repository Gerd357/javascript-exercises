function isNumber(element){
    if (typeof element === "number"){
        return true;
    }
    return false;
}

function isPositive(number){
    if (number > 0){
        return true;
    }
    return false;
}


const sumAll = function(number1,number2) {

    var firstNumber = 0;
    var secondNumber = 0;
    var sum = 0;

    if ((isNumber(number1) && isNumber(number2)) === false){
        return "ERROR";
    }  

    if ((isPositive(number1) && isPositive(number2)) === false){
        return "ERROR";
    }

    if (number1 < number2){
        firstNumber = number1;
        secondNumber = number2;
    }

    else{
        firstNumber = number2;
        secondNumber = number1;
    }


    for (var i = firstNumber; i < secondNumber + 1; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

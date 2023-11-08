const reverseString = function(string) {
    
    var reverseString="";
    var stringArray = string.split("");
    var arrayReversed = stringArray.reverse();
    console.log(arrayReversed);

    for (var i = 0; i < arrayReversed.length ; i++){

        reverseString += arrayReversed[i];
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;

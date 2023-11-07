const repeatString = function(string , num) {

    var finalString = "";

    if (num < 0){
        return "ERROR"
    }

    for (var i = 0 ; i < num ; i++){
        finalString += string;
    }
    
    return finalString;
};


// Do not edit below this line
module.exports = repeatString;

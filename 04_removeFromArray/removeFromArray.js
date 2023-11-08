const removeFromArray = function(array, element) {


    for (var i = 0; i < array.length; i++){

        if (array[i] === element){
            array = array.slice(0,i).concat(array.slice(i + 1));
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

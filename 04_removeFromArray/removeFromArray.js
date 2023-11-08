const removeFromArray = function(array, ...theArgs) {


    for (const arg of theArgs){

        for (var i = 0; i < array.length; i++){
            if (array[i] === arg){
                array = array.slice(0,i).concat(array.slice(i + 1));
            }
        }
            
    }
    

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

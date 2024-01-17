const reverseString = function(string) {
    let separar=string.split("");
    let invertir=separar.reverse();
    let unir=invertir.join("");
    
    return unir;
};

// Do not edit below this line
module.exports = reverseString;

function isPalidrome(phrase){
    if(!phrase) return "Invalid data";
    let reverse = "";
    let tempString = phrase.toString().split(" ").join("").split("").reverse().join("");
    if(tempString === phrase.toString().split(" ").join("")){
        return phrase + " is palindrome"
    }else{
        return phrase + " don't is plalindrome"
    }    
}

console.log(isPalidrome("socorram me subi no onibus em marrocos"));


function replaceNumbers(array){
    if(!array) return -1;
    if(!array.length) return -1
    array.forEach(function (item, index, array) {
        if(item === 0) {
            console.log(`item is equals to zero in position ${index} of array.`)
        }else if(item % 2 === 0){
            console.log(`item being replaced by zero at position ${index} of array`)
            array[index] = 0;
        }

      });
     return array;
}

let array = [1,2,3,4,5,6,7,8,9];
console.log(replaceNumbers(array));
console.log(replaceNumbers([]));
console.log(replaceNumbers(null));
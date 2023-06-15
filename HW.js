// Homework 1
var str="abcdefg"
var reverse="";
var rev = str.length-1
for(let i=rev; i>=0; i--){
    reverse += str[i]
}
console.log(reverse);

// HomeWork 2
function uniqueArray (orinalArray) {
    return orinalArray.filter((elem, position, arr) => {
      return arr.indexOf(elem) == position;
    });
  }
  var num  = [1, 2, 3, 5, 4, 2, 6, 4];
  console.log(uniqueArray(num));

// Homework 3
function arrayuni (array){
    array.sort();
    let max =[0,0];
    let count =1;
    for (let i = array.length-1; i > 0; --i) {
        if (array[i] == array[i-1]) ++count;
        else{
             if (max[1] < count){ 
                  max[0] = array[i];
                  max[1] = count;   
             }
             count = 1;
        }
    }
    console.log( "Value:"+max[0]+" Count:"+max[1]);
}
let array = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
arrayuni(array);

// Homework 4



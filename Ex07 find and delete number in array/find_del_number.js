let arr = [];
let length = arr.length;
length = +prompt('input size of array');
if(!Number.isInteger(length) || length<=0){
    length = prompt('try again');
}
for (let i = 0; i < length; i++) {
    arr[i] = +prompt(i);
    if (!Number.isInteger(arr[i])){
        arr[i] = +prompt('Try again');
    }
}
let V;
do{
    V = +prompt('input number you search');
} while(Number.isInteger(V)===0);
let index;
for (let i = 0; i < length; i++) {
   if (arr[i]===V){
       for(let j=arr[i];j<length-1; j++){
           arr[j] = arr[j+1];
       }
       length--;
   }
}


for (let i = 0; i < length; i++) {
    document.write(arr[i]+' ');
}
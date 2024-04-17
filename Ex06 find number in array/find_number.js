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
let cnt = 0;
do{
     V = +prompt('input number you search');
} while(Number.isInteger(V)===0);
for (let i = 0; i < length; i++) {
    if (V === arr[i]){
        cnt++;
    }
}
if (cnt !== 0){
    alert('V in array');
} else alert('V not in array');
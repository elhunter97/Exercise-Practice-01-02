let arr = [];
let length = arr.length;
length = +prompt('input size of array');
if(!Number.isInteger(length) || length<=0){
    length = prompt('try again');
}
for (let i = 0; i < length; i++) {
    arr[i] = +prompt(i);
    if (!Number.isInteger(arr[i])){
        arr[i] = prompt('Try again');
    }
}
for (let i = 0; i < length; i++) {
    document.write(arr[i]);
}
document.write('<br>');
let cnt =0;
for (let i = 0; i < length; i++) {
    if(arr[i]>=10) cnt++;
}
document.write('Have '+cnt+' number bigger than 10');

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
document.write('Array ');
for (let i = 0; i < length; i++) {
    document.write(arr[i]+' ');
}
document.write('<br>');
let temp;
for (let i = 0; i < length; i++) {
    for (let j = i+1; j < length; j++) {
        if(arr[i]<arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
for (let i = 0; i < length; i++) {
    document.write(arr[i]+' ');
}

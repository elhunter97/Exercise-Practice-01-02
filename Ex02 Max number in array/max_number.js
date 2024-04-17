let arr = [];
let length = arr.length;
length = +prompt('input size of array');
if(!Number.isInteger(length) || length<=0){
    length = prompt('try again');
}

for (let i = 0; i < length; i++) {
    let num = +prompt('input element '+i);
    while (arr.includes(num) || !Number.isInteger(num)){
        num = +prompt('try again');
    }
    arr.push(num);
}
for (let i = 0; i < length; i++) {
    document.write(arr[i]+' ');
}
document.write('<br>');
let max = -1e9;
let index;
for (let i = 0; i < length; i++) {
    if(arr[i] > max){
        max = arr[i];
        index = i;
    }
}
document.write('Max = '+max+' index '+index+'<br>');

//Average elements of array
let sum = 0;

for (let i = 0; i < length; i++) {
    sum+=arr[i];
}
document.write('Average = '+sum/length);
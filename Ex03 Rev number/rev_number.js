let arr = [];
let length = arr.length;
length = +prompt('input size of array');
if(!Number.isInteger(length) || length<=0){
    length = prompt('try again');
}
for (let i = 0; i < length; i++) {
    arr[i] = +prompt(i);
}
document.write('begin array ');
for (let i = 0; i < length; i++) {
    document.write(arr[i]+',');
}
let rev = arr.reverse();
document.write('<br>'+'array after reverse ');

for (let i = 0; i < length; i++) {
    document.write(rev[i]+',');
}
let a =[];
let length = a.length;
length = +prompt('input size of array');
if(!Number.isInteger(length) || length<=0){
    length = prompt('try again');
}
for(let i=0; i<length; i++){
    a[i] = prompt(i);
}
console.log(a.reverse().join(''));
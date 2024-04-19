let a =[];
let length = a.length;
length = +prompt('input size of array');
if(!Number.isInteger(length) || length<=0){
    length = prompt('try again');
}
for(let i=0; i<length; i++){
    a[i] = prompt(i);
}
for(let i=0; i<length; i++){
    document.write(a[i]);
}
let cnt =0;
for (let i = 0; i < length; i++) {
    if (!isNaN((a[i]))){
        cnt++;
    }
}
if(cnt===0){
    alert('Not number in array');
} else{
    alert('Have '+cnt+' number in array');
}
let arr=[];
let length = arr.length;
length = +prompt();
for (let i = 0; i < length; i++) {
    arr[i] = prompt(i);
}
for (let i = 0; i < length; i++) {
    document.write(arr[i]+',');
}
//console.log(arr);
document.write('<br>');
let str = arr.toString();
// console.log(str);
// console.log(str[2]);
str = str.replaceAll('-','_');
// console.log(str);
arr = str.split(',');
document.write(arr);



// let cnt =0;
// for (let i = 0; i < length; i++) {
//     // if(arr[i]==='-'){
//     //     arr[i]='_';
//     //     cnt++;
//     // }
//     if (arr[i].indexOf('-') !== -1) {
//         arr[i].replace('-','_');
//         cnt++
//     }
// }
// if(cnt===0){
//      alert('Not "-" in string');
// }else document.write(arr);









// let str=prompt('Input String');
// let cnt =0;
// let char2 = '-';
// let char ='_';
//
// // for (let i = 0; i < str.length; i++) {
//     if(str.indexOf(char2) !== -1){
//         str=str.replaceAll(char2,char);
//     //     cnt++;
//      }
// // }
// // if(cnt===0){
// //     alert('Not "-" in string');
//   document.write(str);


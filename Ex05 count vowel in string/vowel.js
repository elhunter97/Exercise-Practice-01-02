let str = prompt("input sth");
let vowel = ['a', 'o', 'e', 'i', 'u'];
let cnt =0;
for (let i = 0; i < str.length ; i++) {
    if(vowel.includes(str[i])){
        cnt++
    }
}
if(cnt==0){
    alert('Not found vowel');
} else alert('Have '+cnt+' in string');
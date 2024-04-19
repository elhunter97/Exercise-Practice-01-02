let str1 = prompt("Str1");
let str2 = prompt("Str2");
// str1 = str1.trim().replace(/\s+/g, " ");
// str2 = str2.trim().replace(/\s+/g, " ");
let cnt = -1;
if(str1.length !== str2.length){
    alert('2 strings not same');
} else {
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]){
            alert('2 strings not same');
            break;
        }
        cnt++;
    }
}
if (cnt !== -1){
    alert('2 strings same');
}
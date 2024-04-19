let str = prompt("input string");
let space = ' ';
str = str.trim().replace(/\s+/g, ' '); // chuẩn hóa chuỗi bỏ cách ở 2 đầu, các từ
                                                              // cách nhau 1 dấu cách

let cnt =0;
for (let i = 0; i < str.length; i++) {
    if (str[i].indexOf(space) !== -1) {
        cnt++;
    }
}
if(cnt===0){
    alert('No word in string');
} else alert('Have '+(cnt+1)+' word in string');
let a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];
for (let i = 0; i < a.length; i++) {
    document.write('row '+(i+1)+'<br>');
    for(let j = 0; j < a[i].length; j++) {
        document.write(a[i][j]+'<br>');
    }
}
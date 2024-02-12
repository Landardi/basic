let array = [
[4,3],
[5,2]
];

console.log("Двумерный массив:");
for (let massiv of array) {
    console.log(massiv);
}

let summ = 0;
for (let sum of array) {
    for (let el of sum) {
      summ += el;;        
}
}
console.log("Сумма всех элементов:", summ); 
for (let kolvo of array) {
console.log("Кол-во элементов во вложенном массиве:", kolvo.length);
}


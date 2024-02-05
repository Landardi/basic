// const students = ["Андрей", "Иван", "Стас"];
// students[50] = "";
// console.log(students);

// let college = [ ["Андрей", "Иван", "Стас"], [205, 111, 304] ];
// let kab = college[1][1];
// console.log(kab);

let number = [ 1,2,3,4,4,5,2,1,3 ];

const coutLenght = 7;

if ( number.length === coutLenght ) {
    console.log("ok");
} else if ( number.length < coutLenght ) {
    let result = coutLenght - number.length;
    console.log(`Длина вашего массива: ${number.length}. Длину массива нужно увеличить до ${coutLenght}. Прибавьте к массиву значение ${result}`);
} 
else if ( number.length > coutLenght ) {
    result = number.length - coutLenght;
    console.log(`Длина вашего массива: ${number.length}. Длину массива нужно уменьшить до ${coutLenght}. Удалите из массива ${result} значения`)
}
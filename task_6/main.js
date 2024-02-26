function squareNumbers (nums) {
    let result = [];
    nums.forEach(num => {
        if (nums.some(other_num => num === other_num ** 2)) {
            result.push(num);
}
    });
    return result;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 36];
let result = squareNumbers(numbers);

if (result > numbers) {
    console.log(result);
  } else {
    console.log('Таких чисел нет');
  }

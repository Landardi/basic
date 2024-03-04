function calc_fruits(fruits) {
    let totalQuantity = 0;
    
    for (let fruit of fruits) {
        totalQuantity += parseInt(fruit.quantity);
    }
    
    return totalQuantity;
}

const fruits = [];

while (true) {
    const fruitName = prompt('Введите название фрукта:');
    if (!fruitName) {
        break;
    }
    
    const fruitQuantity = prompt(`Введите кол-во ${fruitName}:`);
    fruits.push({ name: fruitName, quantity: fruitQuantity });
}

const totalFruitQuantity = calc_fruits(fruits);
console.log(totalFruitQuantity);
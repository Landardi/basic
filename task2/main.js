let product = {

    name: "mobilephine",
    price: 60000,
    inStock: true,
    brand: "iPhone X",

    specifications: {
        RAM: "3 GB",
        Internalmemory: "64 GB",
        Processor: "2x Monsoon, 4x Mistral, 2100 MHz",
    },

    discount: {
        percentage: 5,
        expirationDate: "05.02.2030"

    }
};

let customer = {
name: "Vasya",
budget: 100000
};


if (customer.budget < product.price) {
    console.log(`${customer.name}, твой бюджет не позволяет приобрести ${product.brand}`);
}

else {
    console.log(`${customer.name}, твой бюджет позволяет приобрести ${product.brand}`);

    console.log(`Техничиские характеристики товара:
Оперативка: ${product.specifications.RAM}
Память: ${product.specifications.Internalmemory}
Процессор: ${product.specifications.Processor}`);

console.log(
`Действуюшая скидка на товар: ${product.discount.percentage}%
Дата окончания скидки: ${product.discount.expirationDate}`);

var result = (`${product.price/100*product.discount.percentage}`);
console.log(`Товар со скидкой: ${product.price - result} рублей`);

}




    
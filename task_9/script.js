function calculateTotal() {
    const quantity1 = document.getElementById("quantity1").value;
    const price1 = document.getElementById("price1").value;
  
    if (quantity1 === '0' || price1 === '0') {
      alert("Пожалуйста, введите значение больше нуля");
      return;
    }
  
    if (!quantity1 || !price1) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    const total = quantity1 * price1;
    
    document.getElementById("total").innerText = `Общая стоимость работ: ${total} рублей`;
  }




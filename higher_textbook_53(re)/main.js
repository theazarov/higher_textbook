"use strict";

try {
  let json = '{"product": "яблоко", "amount": 5}';
  let arr = JSON.parse(json);
  console.log(arr);

  if (arr.amount !== undefined && arr.price !== undefined) {
    console.log(arr.amount * arr.price);
  } else {
    throw {
      name: "ProductCostError",
      message: "отсутствует цена или количество",
    };
  }
} catch (error) {
  if (error.name == "SyntaxError") {
    console.log("json файл поврежден");
  }
  if (error.name == "ProductCostError") {
    console.log(error.message);
  }
}


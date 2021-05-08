var currencyList = require("./currency2.json").currency;
var rateExchangeList = require("./data3.json").currency;
var num = 0;
// console.log(currencyList["8c58ec65-4ea3-4b7e-a2ee-065b2ddf3343"]);
Object.keys(currencyList).forEach(function (keyCurrency) {
  //   const currency_name_iso = `${currencyList[keyCurrency]["name"]} (${currencyList[keyCurrency]["iso"]})`;
  Object.keys(rateExchangeList).forEach(function (keyRate) {
    const rate_iso = keyRate.split("(")[1].split(")")[0];
    if (currencyList[keyCurrency]["iso"] === rate_iso) num++;
  });
});
console.log(num);

// const key = "Albanian Lek (ALL)";
// console.log(key.split("(")[1].split(")")[0]);

// const key = "8c58ec65-4ea3-4b7e-a2ee-065b2ddf3343";
// const name_iso = currency["currency"][key];
// console.log(name_iso);
// console.log(`${currency["currency"]["ALL"][`${key}`]} (ALL)`);

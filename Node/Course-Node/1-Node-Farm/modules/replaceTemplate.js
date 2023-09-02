module.exports = (temp, produc) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, produc.productName);
  output = output.replace(/{%IMAGE%}/g, produc.image);
  output = output.replace(/{%PRICE%}/g, produc.price);
  output = output.replace(/{%FROM%}/g, produc.from);
  output = output.replace(/{%NUTRIENTS%}/g, produc.nutrients);
  output = output.replace(/{%QUANTITY%}/g, produc.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, produc.description);
  output = output.replace(/{%ID%}/g, produc.id);

  if (!produc.organic) {
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  }
  return output;
};

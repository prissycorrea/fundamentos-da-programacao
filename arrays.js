function sum (array) {
  // implementar método
  let sumValue = array.reduce((total, amount) => total + amount)
  return sumValue;
}

function multiplication(array) {
  // implementar método
  let multiplicationValue = array.reduce((total, amount) => total * amount)
  return multiplicationValue;
}

function average(array) {
  // implementar método
  let sumValue = 0;
  for(i = 0; i < array.length; i++) {
    sumValue+=array[i];
  }
  let averageValue = sumValue / array.length;
  return averageValue;
}

function lastItem(array) {
  // implementar método
  const lastItem = array.pop();
  return lastItem;
}

function addItem(newItem, array) {
  // implementar método
  array.push(newItem);
  return array;
}

function removeLastItem(array) {
  // implementar método
  const lastItemRemoved = array.pop();
  return lastItemRemoved;
}

module.exports = {
  sum,
  multiplication,
  average,
  lastItem,
  addItem,
  removeLastItem
}

//IMPLEMENTAR FUNÇÃO SUM
//O método sum recebe um array igual ao exemplo como parâmetro e deve retornar a soma de todos os elementos

//Versão 01 - utilizando for
function sum (array) {
  let sumValue = 0;
  for(i = 0; i < array.length; i++) {
    sumValue+=array[i];
  }
  console.log(sumValue);
}

sum([7, 18, 20, 37, 5, 1, 97, 15]);

//Versão 02 - utilizando reduce
function sumReduce (array) {
  let sumReduceValue = array.reduce((total, amount) => total + amount)
  console.log(sumReduceValue);
}

sumReduce([7, 18, 20, 37, 5, 1, 97, 15]);


//IMPLEMENTAR FUNÇÃO MULTIPLICATION
//O método multiplication recebe um array igual ao exemplo como parâmetro e deve retornar a multiplicação de todos os elementos

//Versão 01 - utilizando for
function multiplication(array) {
  let multiplicationValue = 1; //multiplicação não pode iniciar com zero, pois qualquer coisa multiplicada por zero, é zero
  for(i = 0; i < array.length; i++) {
    multiplicationValue*=array[i];
  }
  console.log(multiplicationValue);
}

multiplication([7, 18, 20, 37, 5, 1, 97, 15]);

//Versão 02 - utilizando reduce
function multiplicationReduce (array) {
  let multiplicationReduceValue = array.reduce((total, amount) => total * amount)
  console.log(multiplicationReduceValue);
}

multiplicationReduce([7, 18, 20, 37, 5, 1, 97, 15]);


//IMPLEMENTAR FUNÇÃO AVERAGE
//O método average recebe um array igual ao exemplo como parâmetro e deve retornar a média da soma de todos os elementos

//Versão 01 - utilizando for
function average(array) {
  let sumValue = 0;
  for(i = 0; i < array.length; i++) {
    sumValue+=array[i];
  }
  let averageValue = sumValue / array.length;
  console.log(averageValue);
}

average([7, 18, 20, 37, 5, 1, 97, 15]);

//Versão 02 - utilizando reduce
function averageReduce (array) {
  let averageReduceValue = array.reduce((total, amount, index, arr) => {
    total += amount;
    if(index === arr.length - 1) {
      return total / arr.length;
    }
    return total;
  }, 0);
  console.log(averageReduceValue);
}
averageReduce([7, 18, 20, 37, 5, 1, 97, 15]);

function lastItem(array) {
  const lastItem = array.pop();
  console.log(lastItem);
}
lastItem(['batata', 'cenoura', 'chuchu', 'beterraba'])

function addItem(newItem, array) {
  array.push(newItem);
  return array;
}
console.log(addItem('tomate',['batata', 'cenoura', 'chuchu', 'beterraba']));


function removeLastItem(array) {
  const lastItemRemoved = array.pop();
  return lastItemRemoved;
}
console.log(removeLastItem(['batata', 'cenoura', 'chuchu', 'beterraba']));

module.exports = {
  sum,
  multiplication,
  average,
  lastItem,
  addItem,
  removeLastItem
}

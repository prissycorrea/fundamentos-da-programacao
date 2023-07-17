function rescueByKey(key, obj) {
  // implementar método
  if (key in obj) {
    return obj[key];
  }
}

function returnStreetName(obj) {
// implementar método
  if (obj.endereco && 'rua' in obj.endereco) {
    return 'O nome da rua = ' + obj.endereco.rua;
  }
}

function returnMobileNumber(obj) {
// implementar método
  if (obj.telefone && 'celular' in obj.telefone) {
    return 'Número do celular = ' + obj.telefone.celular;
  }
}

function returnNameByInterest(arrayObj, interest) {
  // implementar método
  const names = [];
  for (let i = 0; i < arrayObj.length; i++) {
    const objeto = arrayObj[i];
    if (objeto.interest && objeto.interest.includes(interest)) {
      names.push(objeto.name);
    }
  }
  return names;
}

function returnAverageByCity(arrayObj, cidade) {
  // implementar método
  let ageSum = 0;
  let peopleCounter = 0;
  for (let i = 0; i < arrayObj.length; i++) {
    const object = arrayObj[i];
    if (object.endereco && object.endereco.cidade === cidade && object.idade) {
      ageSum += object.idade;
      peopleCounter++;
    }
  }
  const average = Math.floor(ageSum / peopleCounter);
  return average;
}

module.exports = {
  rescueByKey,
  returnStreetName,
  returnMobileNumber,
  returnNameByInterest,
  returnAverageByCity,
}

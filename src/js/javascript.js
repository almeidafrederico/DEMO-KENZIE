//S4-04 | 💪 Atividades - Funções: Exercitando o uso de parâmetro

function somarDoisValores(Valor1, Valor2) {
    return Valor1 + Valor2;
}

console.log(somarDoisValores(15,876));

function tipoValor(valor) {
    let tipo = typeof(valor);
    text = `O valor (${valor}) é do tipo (${tipo})`
    return text
}

console.log(tipoValor(true))

function somarNotas(nota1, nota2, nota3, nota4) {
    if(typeof(nota1) != "number" || typeof(nota2) != "number" || typeof(nota3) != "number"|| typeof(nota4) != "number"){
        return "O campo só pode receber números"
    }else{
        return nota1+nota2+nota3+nota4;
    }
    
}

console.log(somarNotas(8,"6",9,3))

//S4-05 | 💪 Atividades - Funções: Exercitando o uso do return

//🧠 Exercício 1 - Resultado final do bimestre (🎲 Com passo a passo)

function soma(valor1, valor2, valor3, valor4){
    return valor1 + valor2 + valor3 + valor4
}

function media(value){
    return value / 4
}

function resultado(nota1, nota2, nota3, nota4){ 
    return media(soma(nota1, nota2, nota3, nota4))
}

console.log('Média do aluno Carlos: ' + resultado(5, 6, 8, 9))

//🧠 Exercício 2 - Conversor de temperatura

function celsius(currentType, currentValue) {
    if (currentType == 'Fahrenheit') {
        return (currentValue * 1,8) + 32
    }
    else if (currentType == 'Kelvin') {
        return currentValue + 273
    }
    else if (currentType == 'Celsius') {
        return "Digite um tipo diferente do atual para ser convertido"
    }else{
        return "Tipo de Temperatura INVALIDO"
    }
    
}

function fahrenheit(currentType, currentValue) {
    if (currentType == 'Celsius') {
        return (currentValue-32) / 1,8
    }
    else if (currentType == 'Kelvin') {
        return ((currentValue-32)*(5/9)) + 273
    }
    else if (currentType == 'Fahrenheit') {
        return "Digite um tipo diferente do atual para ser convertido"
    }else{
        return "Tipo de Temperatura INVALIDO"
    }
}

function kelvin(currentType, currentValue) {
    if (currentType == 'Fahrenheit') {
        return ((currentValue-273)*1,8) + 32
    }
    else if (currentType == 'Celsius') {
        return currentValue - 273
    }
    else if (currentType == 'Kelvin') {
        return "Digite um tipo diferente do atual para ser convertido"
    }else{
        return "Tipo de Temperatura INVALIDO"
    }
}

function convert(value, convertType, currentType){
    if (convertType == "Celsius") {
        return celsius(currentType, value);
    } else if(convertType == "Fahrenheit") {
        return fahrenheit(currentType, value);
    } else if(convertType == "Kelvin"){
        return kelvin(currentType, value);
    }else{
        return "Tipo de Temperatura INVALIDO"
    }
}

console.log(convert(18, 'Celsius', 'Celsius'));

//S4-06 | 💪 Atividades - Funções: 🗒️Lista de Exercícios no Codewars

//🧠 Exercício 1 - Are You Playing Banjo?

function areYouPlayingBanjo(name) {
    if(name[0]=="R" || name[0]=="r"){
      let text = " plays banjo"
      return name + text;
    }else{
      let text = " does not play banjo"
      return name + text;
    }
    
  }
  
  console.log(areYouPlayingBanjo("Rodrigo"));

  //🧠 Exercício 2 - BASIC: Making Six Toast.

  function sixToast(num) {
    if(num<=6){
      return 6-num
    }else{
      return num-6
    }
  }
  
  console.log(sixToast(16))
  
  //🧠 Exercício 3 - How old will I be in 2099?

  function  calculateAge(anoNascimento, anoAtual) {
    if(anoNascimento<anoAtual){
      let idade = anoAtual - anoNascimento
      if(idade>1){
        return `You are ${idade} years old.`
      }else{
        return `You are ${idade} year old.`
      }
  
    }else if(anoNascimento>anoAtual){
      let nascimento = anoNascimento - anoAtual
      if(nascimento>1){
        return `You will be born in ${nascimento} years.`
      }else{
        return `You will be born in ${nascimento} years.`
      }
  
    }else{
      return "You were born this very year!"
    }
  }

  console.log(calculateAge(2012, 2016))
  
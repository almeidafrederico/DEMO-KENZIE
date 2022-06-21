//S4-08 | 💪 Atividade - Arrays: Passo a Passo

let minhaPrimeiraLista = [
    "Matemática",
    "Química",
    "Geografia",
    "Português",
    "Física",
  ];

  console.log(minhaPrimeiraLista[2])

  minhaPrimeiraLista[2] = 'História'

  console.log(minhaPrimeiraLista)

//S4-09 | 💪 Atividades - Arrays: Exercitando o acesso de dados

//🧠 Exercício 1 - O Campeão

let nomeDosCompetidores = ["Maria", "Heric", "Roberta", "Rafael", "Lucas"]

console.log(`O Campeão é ${nomeDosCompetidores[0]}`)

//🧠 Exercício 2 - Os ultimos serão os primeiros

console.log(nomeDosCompetidores.length)

console.log(`Os ultimos serão os primeiros: ${nomeDosCompetidores[nomeDosCompetidores.length-1]}`)

//🧠 Exercício 3 - Definindo o Pódio

let posicoesDoPodio = [1,2,3,4,5]

for (let index = 0; index < posicoesDoPodio.length; index++) {
    console.log(`O ${posicoesDoPodio[index]}° lugar é do ${nomeDosCompetidores[index]}`)

}

//S4-10 | 💪 Atividades - Arrays: Verificando dados

//🧠 Exercício 1 - O Ganhador

function testaPosicao(lista, posicao){
    if(posicao==0){
        for (let index = 0; index < lista.length; index++) {
            if(lista[index]=="Vou ser Dev"){
                return "O cliente foi PREMIADO!"
            }
        }
        return "Não foi Premiado. Cliente não comprou o LIVRO Vou Ser Dev"
    }else{
        return "Não foi Premiado. O Cliente não foi o primeiro do dia!"
    }
}
  
let carrinhoDeCompras =
    [
    "Funko Pop Kakashi",
    "Dragon Ball Collection",
    "Vou ser Dev"
    ]

console.log(testaPosicao(carrinhoDeCompras, 0))

//🧠 Exercício 2 - De que tipo é ?


function qualTipoDeElemento(lista, posicao){
      if(typeof(lista[posicao]) == "number"){
        return `O elemento da posicao ${posicao} é número!`
      }else{
        return `O elemento da posicao ${posicao} não é número! Ele é ${typeof(lista[posicao])}`
      }
}
    
let tiposDiversos =[1.5,"String",true,10]
  
console.log(qualTipoDeElemento(tiposDiversos, 0))

//🧠 Exercício 3 - Ônibus premiado

function assentoPremiado(assentos){
    let aletorio = Math.floor(Math.random() * ((assentos.length+1) - 1) + 1)
    return `O Assento Premiado é o ${assentos[aletorio-1]}`
}

let assentos = ["primeiro", "segundo", "terceiro"];

console.log(assentoPremiado(assentos));
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
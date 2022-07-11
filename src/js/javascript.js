let livroObj = {
  saga: "Harry Potter",
  volume: "Harry Potter e a Pedra Filosofal",
  paginas: 208,
  codigo: 15648977,
}


const btnProdutos1 = document.querySelectorAll("button");

console.log(btnProdutos1);

btnProdutos1[0].addEventListener("click", click1);
btnProdutos1[1].addEventListener("click", click2);


function click1(event){
  console.log("click1")
}

function click2(event){
  console.log("click2")
}

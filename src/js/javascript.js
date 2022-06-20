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
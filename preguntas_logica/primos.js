function descubrirPrimos (N) {
    var arr = []; 
    var resultado = N;
    while(resultado > 1) { 
        for (var i = 2; i <= N; i++) { 
            if(resultado % i === 0) {
                resultado = resultado / i; 
                arr.push(i);
                break; 
            }
        }
    }
    var factores = []; 
    var factor = arr[0]; 
    if (arr.length > 1) { 
        for(var i = 1; i < arr.length; i++){
            factores.push(factor);
            factor = arr[i]; 
        }
        factores.push(factor); 
    } else { 
        factores.push(factor);
    }
    return factores;
}

console.log(descubrirPrimos(20))
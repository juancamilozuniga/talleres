function sumaValores(num){



    
    let suma=0;

    for(let i=0;i<num.length;i++){
        
 suma=suma+num[i];
        }
        return suma
    }


  

console.log(sumaValores([1,2,3,4,5])) 
console.log(sumaValores([3,4]))

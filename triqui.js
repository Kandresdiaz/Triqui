// alert(" eligue tu opcion X, O")
const container = document.getElementById('container');
let casilla = document.querySelectorAll('.casilla');

let opciones= document.querySelectorAll('.opciones')

opciones.forEach(element=>{
    let opc =[...opciones]
    element.addEventListener('click',()=>{
        if(element== opc[0]){  
            casilla.forEach(element1=>{
                element1.addEventListener('click',()=>{
                    element1.innerHTML = '0'
                   })
            })
            element.style.background="green"
            
        }
        else{
            element.style.background="blue"
            casilla.forEach(element2=>{
                element2.addEventListener('click',()=>{
                    element2.innerHTML = 'x'
                   })
            })
        }
    })

})
console.log(casilla);


   

    

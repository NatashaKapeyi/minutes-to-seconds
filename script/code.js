// convert minutes into seconds 
const minutes = document.querySelector('#minutes');
    const result= document.querySelector('#result');
let button = document.querySelector('.button');
button.addEventListener('click', convert)

function convert(){
    
    const convert = minutes.value * 60
    result.textContent= (minutes.value * 60 );


}



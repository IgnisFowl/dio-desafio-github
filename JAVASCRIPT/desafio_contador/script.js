var currentNumber = document.getElementById('currentNumber')
var num = 0;
function aumentar(){
    num +=1
    currentNumber.innerHTML = num
}

function diminuir(){
    num -= 1
    currentNumber.innerHTML = num
}
var form = document.querySelector('form');
let num1 = document.querySelector('#number1');
let num2 = document.querySelector('#number2');
let selectType = document.querySelector('#selectType');

form.addEventListener('submit', function(e) {
    calc(selectType.value, num1.value, num2.value);
    
    e.preventDefault();
});

function calc(type, n1, n2) {
    // let types = ["sum"];

    if (type == "sum") {
        return console.log(parseInt(n1) + parseInt(n2))     
    }

    else if (type == "mult") {
        return console.log(parseInt(n1) * parseInt(n2))     
    }

    else if (type == "sub") {
        return console.log(parseInt(n1) - parseInt(n2))     
    }

    else if (type == "div") {
        return console.log(parseInt(n1) / parseInt(n2))     
    }
   
}




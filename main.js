
//Setting buttons to a variable
const buttonOne = document.getElementById("button-1");
const buttonTwo = document.getElementById("button-2");
const buttonThree = document.getElementById("button-3");
const buttonFour = document.getElementById("button-4");
const buttonFive = document.getElementById("button-5");
const buttonSix = document.getElementById("button-6");
const buttonSeven = document.getElementById("button-7");
const buttonEight = document.getElementById("button-8");
const buttonNine = document.getElementById("button-9");
const buttonZero = document.getElementById("button-0");
const buttonAC = document.getElementById("buttonAC");
const buttonEquals = document.getElementById("buttonEquals");
const displayWindow = document.getElementById("displayWindow");
const buttonAdd = document.getElementById("button-add");
const buttonSub = document.getElementById("button-sub");
const buttonMul = document.getElementById("button-mul");
const buttonDiv = document.getElementById("button-div");


//make empty string and allow user to input the operations
//make algorithm that will turn string into numbers and do operations

number = '';
numberArray = [];

// for(k = 0; k<number.length; k++)
// {
//     if(number.atChar(k) !== "+" || number.atChar(k) !== "-" || number.atChar(k) !== "*" || number.atChar(k) !== "/")
//     {
//         let stringToNUm = parseInt(number.atChar(k), 10);
//         numberArray[k] = stringToNUm;
//     }
//     else
//     {
//         let index = number.atChar(k);
//         numberArray[k] = index;
//     }
// }

let k = 0;
let index = 0;
while(k < number.length)
{
    if(number.atChar(k) !== "+" || number.atChar(k) !== "-" || number.atChar(k) !== "*" || number.atChar(k) !== "/"){
        k++;
    }
    else
    {
        let newNum = parseInt(number.subString(index, k, 10));
        console.log(newNum);''
    }
}



//Addoing Event listeners
buttonOne.addEventListener('click', function() {
    console.log('1');
    displayWindow.innerHTML += '<h2>1</h2>';
    number += '1';
})

buttonTwo.addEventListener('click', function() {
    console.log('2');
    displayWindow.innerHTML += '<h2>2</h2>';
    number += '2';
})

buttonThree.addEventListener('click', function() {
    console.log('3');
    displayWindow.innerHTML += '<h2>3</h2>';
    number += '3';
})

buttonFour.addEventListener('click', function() {
    console.log('4');
    displayWindow.innerHTML += '<h2>4</h2>';
    number += '4';
})

buttonFive.addEventListener('click', function() {
    console.log('5');
    displayWindow.innerHTML += '<h2>5</h2>';
    number += '5';
})

buttonSix.addEventListener('click', function() {
    console.log('6');
    displayWindow.innerHTML += '<h2>6</h2>';
    number += '6';
})

buttonSeven.addEventListener('click', function() {
    console.log('7');
    displayWindow.innerHTML += '<h2>7</h2>';
    number += '7';
})

buttonEight.addEventListener('click', function() {
    console.log('8');
    displayWindow.innerHTML += '<h2>8</h2>';
    number += '8';
})

buttonNine.addEventListener('click', function() {
    console.log('9');
    displayWindow.innerHTML += '<h2>9</h2>';
    number += '9';
})

buttonZero.addEventListener('click', function() {
    console.log('0');
    displayWindow.innerHTML += '<h2>0</h2>';
    number += '0';
})

buttonAC.addEventListener('click', function() {
    console.log('AC');
    displayWindow.innerHTML = '<h2></h2>';
    // 'number = '';
})


buttonEquals.addEventListener('click', function() {
    console.log(number);
    let k = 0;
    let index = 0;
    while(k < number.length)
    {
        if(number.atChar(k) != "+" || number.atChar(k) != "-" || number.atChar(k) != "*" || number.atChar(k) != "/"){
            k++;
        }
        else
        {
            let newNum = parseInt(number.subString(index, k, 10));
            console.log(newNum);''
        }
    }
})


buttonAdd.addEventListener('click', function(){
    console.log('+');
    displayWindow.innerHTML += '<h2>+</h2>';
    number += '+';
})

buttonSub.addEventListener('click', function(){
    console.log('-');
    displayWindow.innerHTML += '<h2>-</h2>';
    number += '-';
})

buttonMul.addEventListener('click', function(){
    console.log('*');
    displayWindow.innerHTML += '<h2>*</h2>';
    number += '*';
})

buttonDiv.addEventListener('click', function(){
    console.log('/');
    displayWindow.innerHTML += '<h2>/</h2>';
    number += '/';
})









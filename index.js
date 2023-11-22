//declaring all the variables 
let display=document.querySelector('[data-display]')
let divider=0.5
let btnMulti=document.querySelector('[data-calc]')

//function that will be performing the calculation
    function area(){
    let input= document.querySelector('[data-input]').value
    let input2= document.querySelector('[data-input2]').value

    //backticks are used to access the variables and to display the data more neatly
    let answer=eval(`(${input} * ${input2})*${divider}`)
    answer=answer.toFixed(2);

    //when displaying into a input tag you should use .value
    display.value=answer
}

//calling a click function. so that when the button is clicked that it accesses the area function
btnMulti.addEventListener('click',area)
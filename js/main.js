function getNumber(num){
    const number = document.querySelector('#number').value;
    document.querySelector('#number').value = number + num;
}
function equal(){
    const expression = document.querySelector('#number').value;
    if(expression){
        document.querySelector('#result').value = eval(expression);
    }
}
function clear(){
    document.querySelector('#number').value = "";
    document.querySelector('#result').value = "";
}
function del(){
    const expression = document.querySelector('#number').value;
    document.querySelector('#number').value = expression.substring(0,expression.length-1);
}
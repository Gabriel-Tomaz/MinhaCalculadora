function insert(num){
    var numero = document.getElementById('captura-num').value;
    document.getElementById('captura-num').value =  numero + num;
}
function igual(){
    var valor = document.getElementById('captura-num').value;
    if(valor){
        document.getElementById('resultado').value = eval(valor);
    }
}
function limpar(){
    document.getElementById('captura-num').value = "";
    document.getElementById('resultado').value = "";
}
function apagar(){
    var valor = document.getElementById('captura-num').value;
    document.getElementById('captura-num').value = valor.substring(0,valor.length-1);
}
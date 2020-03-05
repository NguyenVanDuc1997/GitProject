function button(op) {
    let result=document.getElementById('input');
    result.value+=op;
    if (op=='AC'){
        result.value='';
    }
}
function rs() {
    let result=document.getElementById('input');
    result.value= eval(result.value);
}

function alertMessage() {
    alert('xin chào!');

    let x = 0;
    x = b2(x);
    alert(x);

}

function b2(n) {
    n++;
    return n

}

function b3(a, b) {
    let sum = 0;
    if (a > b) {
        alert(a + " lớn hơn " + b);
    } else {
        sum = a + b;
        alert(sum);
    }


}

function mainB3() {
    let x = +prompt("Nhập số thứ nhất:");
    let y = +prompt("Nhập số thứ hai:");
    b3(x, y);

}

function addNumbers() {
    let firstNum = 4;
    let secondNum = 8;
    result = firstNum + secondNum;
    return result;
}

result = 0;
alert(result);
result = addNumbers();
alert(result);




function funB5(a, b) {
    var a ;
    var b ;
    let input = document.getElementById('input').value;
    for (let i = 0; i < a.length; i++) {
        if (input == a[i])
            alert(b[i])
        else
            alert("Không tìm thấy!!")

    }
}
function b5() {

    let s = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
    let x = ['UrsaMinor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa', 'Major', 'Leo'];
    funB5(s, x);

}
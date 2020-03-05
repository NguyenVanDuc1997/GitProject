function tinh() {
    let a=document.getElementById('canh_a').value;
    a=parseFloat(a);
    let b=document.getElementById('canh_b').value;
    b=parseFloat(b);
    let c=document.getElementById('canh_c').value;
    c=parseFloat(c);
    if (a+b>c&&a+c>b&&b+c>a){
        document.getElementById('tamgiac').value='Đây là tam giác';
        let cv=a+b+c;
        let dt=Math.sqrt((a*a+b*b+c*c)**2-2*(a**4+b**4+c**4))/4;
        document.getElementById('chuvi').value=cv;
        document.getElementById('dientich').value=dt;

        if (a*a+b*b==c*c||a*a+c*c==b*b||b*b+c*c==a*a){
            document.getElementById('loai').value='vuông'
            if (a==b||a==b||b==c){
                document.getElementById('loai').value='vuông cân';
            }
        }else if (a==b&&a==c&&b==c){
            document.getElementById('loai').value='đều';
        }else if (a==b||a==b||b==c){
            document.getElementById('loai').value='cân'
        }else
            document.getElementById('loai').value='Thường'
    }else {
        document.getElementById('tamgiac').value='Đây không phải tam giác'
    }
}
function can() {
    let a=document.getElementById('can').value;
    z=Math.sqrt(a);
    document.getElementById('canh_c').value=z;
}
function tinh() {
    let a=document.getElementById('edge_a').value;
    a=parseFloat(a);
    let b=document.getElementById('edge_b').value;
    b=parseFloat(b);
    let c=document.getElementById('edge_c').value;
    c=parseFloat(c);
    if (a+b>c&&a+c>b&&b+c>a){
        document.getElementById('triangle').value='Đây là tam giác';
        let premeter=a+b+c;
        let area=Math.sqrt((a*a+b*b+c*c)**2-2*(a**4+b**4+c**4))/4;
        document.getElementById('premeter').value=premeter;
        document.getElementById('area').value=area;

        if (a*a+b*b==c*c||a*a+c*c==b*b||b*b+c*c==a*a){
            document.getElementById('typee').value='vuông'
            if (a==b||a==b||b==c){
                document.getElementById('typee').value='vuông cân';
            }
        }else if (a==b&&a==c&&b==c){
            document.getElementById('typee').value='đều';
        }else if (a==b||a==c||b==c){
            document.getElementById('typee').value='cân'
        }else
            document.getElementById('typee').value='Thường'
    }else {
        document.getElementById('tamgiac').value='Đây không phải tam giác'
    }
}
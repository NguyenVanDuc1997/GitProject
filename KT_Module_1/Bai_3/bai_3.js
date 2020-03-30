let fibonacci = [1,1];
for (let i = 2; i < 100; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
function isFibonacci(arr, index) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == index) {
            return 'true';
        }
    }

}
let number;
do {
    number = prompt("Nhập số nguyên  nhỏ hơn 100!");
}while (number>100);

console.log(fibonacci);
console.log(isFibonacci(fibonacci,number));
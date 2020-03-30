let arr = [3, 4, 5, 6, 2, 7, 8];
const index = 4;

function RemoveFromArray(arr, index) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == index) {
            arr.splice(i, 1);
        }
    }
    console.log(arr);
}
RemoveFromArray(arr, index);

let score = [3,4,7,9,6,2,8];
function findMax(score) {
    let max = score[0];
    for (let i = 1;i < score.length; i++){
        if (score[i] > max){
            max = score[i];
        }
    }
    return max;
}
findMax(score);
console.log("Điểm số cao nhất là: " + findMax(score));
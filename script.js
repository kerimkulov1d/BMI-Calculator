function bmiCalc(weight, height) {
    let bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}

let bmi = bmiCalc(70, 1.8);
console.log(bmi);
class BMI {
  constructor(weight, height) {
    this.weight = weight;
    this.height = height;
  }

  calculate() {
    const bmiVAlue = this.weight / this.height ** 2;
    return bmiVAlue.toFixed(2);
  }

  getCategory() {
    const bmiResult = this.calculate();

    if (bmiResult < 18.5) {
      console.log("Underweight");
    } else if (bmiResult >= 18.5 && bmiResult < 25) {
      console.log("Normal Weight");
    } else if (bmiResult >= 25 && bmiResult < 30) {
      console.log("Overweight");
    } else {
      console.log("Obese");
    }
  }
}

const jonesBmi = new BMI(90, 1.75);
console.log(jonesBmi.calculate());
jonesBmi.getCategory();

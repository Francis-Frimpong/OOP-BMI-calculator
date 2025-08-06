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
    let bmiResult = this.calculate();

    if (bmiResult < 18.5) {
      return "Underweight";
    } else if (bmiResult >= 18.5 && bmiResult < 25) {
      return "Normal Weight";
    } else if (bmiResult >= 25 && bmiResult < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
}

class BMIApp {
  constructor(weightInput, heightInput, resultElement) {
    this.weightInput = weightInput;
    this.heightInput = heightInput;
    this.resultElement = resultElement;
  }

  handleSubmit() {
    const weightValue = Number(this.weightInput.value);
    const heightValue = Number(this.heightInput.value);

    //  basic input validation to avoid NaN
    if (isNaN(weightValue) || isNaN(heightValue) || heightValue <= 0) {
      this.resultElement[0].textContent = "BMI: Invalid input";
      this.resultElement[1].textContent = "";
      return;
    }

    let bMI = new BMI(weightValue, heightValue);
    this.resultElement[0].textContent = `BMI: ${bMI.calculate()}`;
    this.resultElement[1].textContent = `Category: ${bMI.getCategory()}`;
  }
}

const weight = document.getElementById("weight");
const height = document.getElementById("height");

const bmiResult = document.getElementById("bmiResult");
const bmiCategory = document.getElementById("bmiCategory");

// BMI App class instance
const bmiApp = new BMIApp(weight, height, [bmiResult, bmiCategory]);
const calculateBMI = document.getElementById("calculateBMI");

calculateBMI.addEventListener("click", () => bmiApp.handleSubmit());

// jonesBmi.handleSubmit();

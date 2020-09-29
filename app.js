class Calculator{
  operation;
  firstNumber = 0;
  secondNumber = 0;
  isFirstNumberSet = false;
  calculationDone = false;
  display = document.getElementById("calculator-display");
  resultBtn = document.getElementById("calculator-button-container-result");
  operationBtns = document.querySelectorAll(".calculator-operation");
  numberBtns = document.querySelectorAll(".calculator-number-btn");

  constructor(){
    this.addEventListeners();
  }

  addEventListeners() {
    this.resultBtn.addEventListener("click", () => this.displayResult());
    this.operationBtns.forEach(btn => btn.addEventListener("click", (e) => this.setOperation(e.target.dataset.operation)))
    this.numberBtns.forEach(btn => btn.addEventListener("click", (e) => this.setNumber(e.target.dataset.value)))
  }
  
  setNumber(value){

    if(this.calculationDone) this.reset();

    if(!this.isFirstNumberSet){
      this.firstNumber += value;
    }else{
      this.secondNumber += value;
    }
    this.appendToDisplay(value);
  }
  
  setOperation(operation){
    if(operation === "reset"){
      this.reset();
      return;
    }

    if(this.operation) return;
    
    this.operation = operation;
    this.isFirstNumberSet = true;
    switch (operation) {
      case "add":
        this.appendToDisplay("+");
        break;
      case "subtract":
        this.appendToDisplay("-");
        break;
      case "multiply":
        this.appendToDisplay("*");
        break;
      case "divide":
        this.appendToDisplay("/");
        break;
    }
  }

  appendToDisplay(input){
    const currentInput = this.display.textContent;
    this.display.textContent = `${currentInput}${input}`;
  }

  calculateResult() {
    this.calculationDone = true;

    switch (this.operation) {
      case "add":
        return +this.firstNumber + +this.secondNumber
      case "subtract":
        return +this.firstNumber - +this.secondNumber
      case "multiply":
        return +this.firstNumber * +this.secondNumber
      case "divide":
        return +this.secondNumber === 0 ? "Invalid operation: divided by 0" : +this.firstNumber / +this.secondNumber
      default:
        return "Invalid operation"
    }
  }

  displayResult(){
    // this.display.textContent = this.calculateResult();

  }

  reset(){
    console.log("Reseting");
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.display.textContent = "";
    this.isFirstNumberSet = false;
    this.calculationDone = false;
    this.operation = null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Calculator();
  console.log("Hallo?");
})
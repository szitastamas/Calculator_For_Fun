class Calculator{
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
    this.operationBtns.forEach(btn => btn.addEventListener("click", (e) => this.appendToDisplay(e.target.dataset.operation)))
    this.numberBtns.forEach(btn => btn.addEventListener("click", (e) => this.appendToDisplay(e.target.dataset.value)))
  }

  appendToDisplay(input){
    if(input === "reset") {
      this.reset();
      return;
    }

    if(!this.isFirstNumberSet && !parseInt(input, 10)) return;

    this.isFirstNumberSet = true;
    const currentInput = this.display.textContent;
    this.display.textContent = `${currentInput}${input}`;
  }

  displayResult(){
    this.display.textContent = eval(this.display.textContent);
  }

  reset(){
    console.log("Reseting");
    this.display.textContent = "";
    this.isFirstNumberSet = false;
    this.calculationDone = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Calculator();
})
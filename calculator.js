const calculator = {
  display: "",
  previous: null,
  operatorIsClick: false,
  operator: null,
};

const btns = document.querySelectorAll(".btn");

for (btn of btns) {
  btn.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("clear")) {
      clearCalculator();
      updateCalculator();
      return;
    } else if (target.classList.contains("minus")) {
      inversNumber();
      updateCalculator();
      return;
    } else if (target.classList.contains("percen")) {
      percenCalculator();
      updateCalculator();
      return;
    } else if (target.classList.contains("dot")) {
      dotCalculator();
      updateCalculator();
      return;
    } else if (target.classList.contains("operator")) {
      if (target.classList.contains("add")) {
        add();
      } else if (target.classList.contains("substr")) {
        substr();
      } else if (target.classList.contains("div")) {
        div();
      } else {
        multi();
      }
      updateCalculator();
      return;
    } else if (target.classList.contains("equal")) {
      performCalculator();
      updateCalculator();
      return;
    }

    inputDigit(target.innerText);
    updateCalculator();
  });
}

function updateCalculator() {
  document.getElementById("displayNumber").innerText = calculator.display;
}

function inputDigit(digit) {
  if (calculator.operatorIsClick) {
    calculator.operatorIsClick = false;
  }

  calculator.display += digit;
}

function clearCalculator() {
  calculator.display = "";
  calculator.previous = null;
  calculator.operatorIsClick = false;
  calculator.operator = null;
}

function inversNumber() {
  calculator.display === "0" ? calculator.display : (calculator.display *= -1);
}

function percenCalculator() {
  calculator.display = parseFloat(calculator.display * 0.01);
}

function dotCalculator() {
  if (calculator.display.indexOf(".") === -1) {
    inputDigit(".");
  }
}
function handleOperator() {
  calculator.previous = calculator.display;
  calculator.operatorIsClick = true;
  calculator.display = "";
}

function add() {
  calculator.operator = (a, b) => a + b;
  handleOperator();
}

function substr() {
  calculator.operator = (a, b) => a - b;
  handleOperator();
}

function div() {
  calculator.operator = (a, b) => a / b;
  handleOperator();
}

function multi() {
  calculator.operator = (a, b) => a * b;
  handleOperator();
}

function performCalculator() {
  calculator.display = `${calculator.operator(
    parseFloat(calculator.previous),
    parseFloat(calculator.display)
  )}`;
  calculator.previous = null;
}

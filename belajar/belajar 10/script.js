class operation {
  constructor(output) {
    this.output = output;
    this.clear();
  }
  //   clear display
  clear() {
    this.output = output.textContent = '0';
  }
}

const output = document.querySelector('.output');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
let calculator = 0;
const count = new operation(output);

// plus click
plus.addEventListener('click', () => {
  calculator++;
  output.textContent = calculator;
});

// minus click
minus.addEventListener('click', () => {
  if (calculator == '0') {
    return false;
  } else {
    calculator -= 1;
  }

  output.textContent = calculator;
});

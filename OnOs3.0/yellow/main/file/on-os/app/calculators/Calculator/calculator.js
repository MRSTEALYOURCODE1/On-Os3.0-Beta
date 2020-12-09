var buttons = document.querySelector(".button");
var output = document.querySelector(".output");



var operation = null;
var current = 0;

var operations = { 
  '÷': ' / ',
  'x': ' * ',
  '-': ' - ',
  '+': ' + ',
};

for (button in buttons) {
  buttons[button].onclick = function (e) {
    var input = e.target.innerText;
    var num = parseInt(input);
    if (isNaN(num)) {
      if (input === 'C') {
        console.log('clear');
        operation = null;
        current = 0;
        output.innerText = 0;
      } else {
        if (operation && operation !== '=') {
          var calculation = current + operations[operation] + output.innerText;
          console.log('calculate', calculation);
          output.innerText = eval(calculation);
        }
        current = parseInt(output.innerText);
        operation = input;
      }
    } else {
      if (current === parseInt(output.innerText)) {
        output.innerText = num;
      } else {
        output.innerText += num;
      }
    }
   
  };
}

document.addEventListener('keypress', function (e) {
  
});
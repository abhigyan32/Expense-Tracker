let display = document.getElementById("display");

function appendValue(value) {
  if (value === "π") {
    display.value += Math.PI.toFixed(8);
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

function applyFunc(func) {
  try {
    let val = parseFloat(display.value);
    let result;

    switch (func) {
      case 'sin':
        result = Math.sin(toRadians(val));
        break;
      case 'cos':
        result = Math.cos(toRadians(val));
        break;
      case 'tan':
        result = Math.tan(toRadians(val));
        break;
      case 'sqrt':
        result = Math.sqrt(val);
        break;
      default:
        result = val;
    }

    display.value = result.toFixed(8);
  } catch {
    display.value = "Error";
  }
}

function toRadians(deg) {
  return deg * Math.PI / 180;
}

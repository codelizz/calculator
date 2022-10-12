let number = "",
  allNumbers = [],
  signs = [];
document.querySelectorAll("button").forEach((each) => {
  each.addEventListener("click", function () {
    let value = this.innertext;
    let display = document.getElementById("display");

    if (display === "0") {
      display.innerText = value;
    } else {
      display.innerText += value;
    }
    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (number === "") {
          number = value;
        } else {
          number += value;
        }

        break;
      case "+":
      case "*":
      case "-":
      case "/":
        if (value === "+" || signs === "*" || signs === "-" || signs === "/") {
          number = "";
          signs.push(value);
          allNumbers.push(number);
        }
        console.log(signs);
        break;
      case "=":
        number = "";
        let answer = allNumbers[0];
    }
  });
});

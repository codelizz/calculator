let number = "",
  allNumbers = [],
  signs = [],
  clean = document.getElementById("clean").value;

document.querySelectorAll("button").forEach((each) => {
  each.addEventListener("click", function () {
    let value = this.innerText;
    const display = document.getElementById("display").innerText;
    if (display === "0") {
      document.getElementById("display").innerText = value;
    } else {
      document.getElementById("display").innerText += value;
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
      case "C":
        document.getElementById("clean").addEventListener("click", function () {
          allNumbers.pop(numbers);
        });
        break;
      case "/":
      case "*":
      case "-":
      case "+":
        if (signs === "+") {
          value += "+";
          signs.push(parseInt("+"));
          allNumbers.push(parseInt(numbers));
          numbers = "";
        }

        let answer = allNumbers[0];

        break;
      case "=":
        allNumbers.push(parseInt(number));

        number = "";
        signs.push(value);
    }
  });
});

// // let num = "",
// //   all = [],
// //   symb = [];
// document.querySelectorAll("button").forEach((each) => {
//   each.addEventListener("click", function () {
//     let val = this.innerText;
//     const display = document.getElementById("display").innerText;
//     if (display === "0") {
//       document.getElementById("display").innerText = val;
//     } else {
//       document.getElementById("display").innerText += val;
//     }

//     switch (val) {
//       case "0":
//       case "1":
//       case "2":
//       case "3":
//       case "4":
//       case "5":
//       case "6":
//       case "7":
//       case "8":
//       case "9":
//         if (num === "") {
//           num = val;
//         } else {
//           num += val;
//         }
//         break;
//       case "+":
//       case "-":
//       case "*":
//       case "/":
//         all.push(num);
//         num = "";
//         symb.push(val);
//         break;
//       case "=":
//     }
//   });
// });

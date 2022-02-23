console.log('calculator by javascript');

let screen = document.getElementById("screen");
let demo = document.getElementById("delete");

// });
// console.log(demo);

let inputvalue = '';
let button = document.getElementsByTagName("button");
for (let btn of button) {
    btn.addEventListener("click", (e) => {
        // console.log('Click even fired');
        buttoninnertext = e.target.innerText;




        if (buttoninnertext == "X") {
            buttoninnertext = "*";
            inputvalue += buttoninnertext
            screen.value = inputvalue;
        }
        else if (buttoninnertext == "C") {
            buttoninnertext = "";
            inputvalue = buttoninnertext;
            screen.value = inputvalue;
        }
        else if (buttoninnertext == "DEL") {
            let back = screen.value;
            let restnum = back.slice(0, -1);
            inputvalue = restnum;
            screen.value = inputvalue;
            

        }
        else if (buttoninnertext == "=") {
            screen.value = eval(inputvalue)
        }
        else {
            inputvalue += buttoninnertext;
            screen.value = inputvalue;
        }
    })
}


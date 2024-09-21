const section = document.querySelector('section');
const fieldset = document.querySelector('fieldset');
const items = document.querySelectorAll('button, select');
const select = document.querySelector('select');
var number = "0";
var error = false;
var array = [];

document.addEventListener("keydown", function(event) {
    if (event.key == "7") {
        Seven();
    } else if (event.key == "8") {
        Eight();
    } else if (event.key == "9") {
        Nine();
    } else if (event.key == "Backspace" || event.key == "Delete") {
        AC();
    } else if (event.key == "4") {
        Four();
    } else if (event.key == "5") {
        Five();
    } else if (event.key == "6") {
        Six();
    } else if (event.key == "+") {
        Plus();
    } else if (event.key == "1") {
        One();
    } else if (event.key == "2") {
        Two();
    } else if (event.key == "3") {
        Three();
    } else if (event.key == "-") {
        Minus();
    } else if (event.key == "." || event.key == ",") {
        Point();
    } else if (event.key == "0") {
        Zero();
    } else if (event.key == "/") {
        Divided();
    } else if (event.key == "*" || event.key == "x") {
        Times();
    } else if (event.key == ";" || event.key == "%") {
        Percent();
    } else if (event.ctrlKey) {
        Potency();
    } else if (event.shiftKey) {
        Root();
    } else if (event.key == "Enter" || event.key == "=") {
        Equal();
    };
});

function Seven() {
    if (fieldset.innerHTML == "0" && array[array.length-1] != "%") {
        fieldset.innerHTML = "7";
        number = "7";
        error = false;
    } else if (array[array.length-1] != "%") {
        fieldset.innerHTML += "7";
        number += "7";
        error = false;
    } else {
        window.alert("Erro lógico")
    };
};

function Eight() {
    if (fieldset.innerHTML == "0" && array[array.length-1] != "%") {
        fieldset.innerHTML = "8";
        number = "8";
        error = false;
    } else if (array[array.length-1] != "%") {
        fieldset.innerHTML += "8";
        number += "8";
        error = false;
    } else {
        window.alert("Erro lógico")
    };
};

function Nine() {
    if (fieldset.innerHTML == "0" && array[array.length-1] != "%") {
        fieldset.innerHTML = "9";
        number = "9";
        error = false;
    } else if (array[array.length-1] != "%") {
        fieldset.innerHTML += "9";
        number += "9";
        error = false;
    } else {
        window.alert("Erro lógico")
    };
};

function AC() {
    fieldset.innerHTML = 0;
    number = "0";
    error = false;
    array = [];
};

function Four() {
    if (fieldset.innerHTML == "0" && array[array.length-1] != "%") {
        fieldset.innerHTML = "4";
        number = "4";
        error = false;
    } else if (array[array.length-1] != "%") {
        fieldset.innerHTML += "4";
        number += "4";
        error = false;
    } else {
        window.alert("Erro lógico")
    };
};

function Five() {
    if (fieldset.innerHTML == "0" && array[array.length-1] != "%") {
        fieldset.innerHTML = "5";
        number = "5";
        error = false;
    } else if (array[array.length-1] != "%") {
        fieldset.innerHTML += "5";
        number += "5";
        error = false;
    } else {
        window.alert("Erro lógico")
    };
};

function Six() {
    if (fieldset.innerHTML == "0" && array[array.length-1] != "%") {
        fieldset.innerHTML = "6";
        number = "6";
        error = false;
    } else if (array[array.length-1] != "%") {
        fieldset.innerHTML += "6";
        number += "6";
        error = false;
    } else {
        window.alert("Erro lógico")
    };
};

function Plus() {
    if (number != "" && number != "-") {
        array.push(Number(number));
    };
    if (error == false) {
        fieldset.innerHTML += "+";
        array.push("+");
        error = true;
        number = "";
    } else {
        window.alert("Erro lógico");
    };
};

function One() {
    if (fieldset.innerHTML == "0" && array[array.length-1] != "%") {
        fieldset.innerHTML = "1";
        number = "1";
        error = false;
    } else if (array[array.length-1] != "%") {
        fieldset.innerHTML += "1";
        number += "1";
        error = false;
    } else {
        window.alert("Erro lógico")
    };
};

function Two() {
    if (fieldset.innerHTML == "0" && array[array.length-1] != "%") {
        fieldset.innerHTML = "2";
        number = "2";
        error = false;
    } else if (array[array.length-1] != "%") {
        fieldset.innerHTML += "2";
        number += "2";
        error = false;
    } else {
        window.alert("Erro lógico")
    };
};

function Three() {
    if (fieldset.innerHTML == "0" && array[array.length-1] != "%") {
        fieldset.innerHTML = "3";
        number = "3";
        error = false;
    } else if (array[array.length-1] != "%") {
        fieldset.innerHTML += "3";
        number += "3";
        error = false;
    } else {
        window.alert("Erro lógico")
    };
};

function Minus() {
    if (fieldset.innerHTML != "0" && number != "" && number != "-") {
        array.push(Number(number));
    };
    if (fieldset.innerHTML == "0") {
        fieldset.innerHTML = "-";
        error = true;
        number = "-";
    } else if (error == false) {
        fieldset.innerHTML += "-";
        array.push("-");
        error = true;
        number = "";
    } else if (array[array.length-1] != "-" && array[array.length-1] != "//"  && !number.includes(".") && !number.includes("-")) {
        fieldset.innerHTML += "-";
        error = true;
        number = "-";
    } else {
        window.alert("Erro lógico");
    };
};

function Point() {
    if (error == false && number != "" && number != "-" && !number.includes(".")) {
        fieldset.innerHTML += ".";
        number += ".";
        error = true;
    } else {
        window.alert("Erro lógico");
    };
};

function Zero() {
    if (fieldset.innerHTML == "0") {} else if (fieldset.innerHTML != "0" && array[array.length-1] != "%") {
        fieldset.innerHTML += "0";
        number += "0";
        error = false;
    } else {
        window.alert("Erro lógico")
    };
};

function Divided() {
    if (number != "" && number != "-") {
        array.push(Number(number));
    };
    if (error == false) {
        fieldset.innerHTML += "/";
        array.push("/");
        error = true;
        number = "";
    } else {
        window.alert("Erro lógico");
    };
};

function Times() {
    if (number != "" && number != "-") {
        array.push(Number(number));
    };
    if (error == false) {
        fieldset.innerHTML += "*";
        array.push("*");
        error = true;
        number = "";
    } else {
        window.alert("Erro lógico");
    };
};

function Percent() {
    if (error == false && number != "" && number != "-") {
        fieldset.innerHTML += "%";
        array.push(Number(number));
        array.push("%");
        number = "";
    } else {
        window.alert("Erro lógico");
    };
};

function Potency() {
    if (number != "" && number != "-") {
        array.push(Number(number));
    };
    if (error == false) {
        fieldset.innerHTML += "**";
        array.push("**");
        error = true;
        number = "";
    } else {
        window.alert("Erro lógico");
    };
};

function Root() {
    if (number == "-") {
        array.push("m");
    };
    if (array.length == 0) {
        fieldset.innerHTML = "//";
        array.push("//");
        number = "";
        error = true;
    } else if (error == true && array[array.length-1] != "//" && !number.includes(".")) {
        fieldset.innerHTML += "//";
        array.push("//");
        number = "";
        error = true;
    } else {
        window.alert("Erro lógico");
    };
};

function Equal() {
    if (error == false && (array.includes("+") || array.includes("-") || array.includes("*") || array.includes("/") || array.includes("**") || array.includes("//") || array.includes("%"))) {
        if (number != "" && number != "-") {
            array.push(Number(number));
        };
        for (let n = 0; n < 20; n ++) {
            if (array[n] == "%") {
                array[n-1] = array[n-1] / 100;
                array.splice(n, 1);
                n = -1;
            };
        };
        for (let n = 0; n < 20; n ++) {
            if (array[n] == "//") {
                array[n+1] = array[n+1] ** 0.5;
                array.splice(n, 1);
                n = -1;
            };
        };
        for (let n = 0; n < 20; n ++) {
            if (array[n] == "m") {
                array[n+1] = array[n+1] * -1;
                array.splice(n, 1);
                n = -1;
            };
        };
        for (let n = 0; n < 20; n++) {
            if (array[n] == "**") {
                array[n-1] = array[n-1] ** array[n+1];
                array.splice(n, 2);
                n = -1;
            };
        };
        for (let n = 0; n < 20; n++) {
            if (array[n] == "*") {
                array[n-1] = array[n-1] * array[n+1];
                array.splice(n, 2);
                n = -1;
            } else if (array[n] == "/" && array[n+1] == "0") {
                window.alert("Parabéns, você quebrou a calculadora!");
                array = 0;
            } else if (array[n] == "/") {
                array[n-1] = array[n-1] / array[n+1];
                array.splice(n, 2);
                n = -1;
            };
        };
        for (let n = 0; n < 20; n++) {
            if (array[n] == "+") {
                array[n-1] += array[n+1];
                array.splice(n, 2);
                n = -1;
            } else if (array[n] == "-") {
                array[n-1] = array[n-1] - array[n+1];
                array.splice(n, 2);
                n = -1;
            };
        };
        fieldset.innerHTML = array;
        number = String(array);
        array = [];
    } else {
        window.alert("Erro lógico");
    };
};

function Switch() {
    if (select.value == "white") {
        document.body.style.background = "rgb(224, 224, 224)";
        document.body.style.color = "rgb(0, 0, 0)";
        section.style.background = "rgb(255, 255, 255)";
        section.style.borderColor = "rgb(192, 192, 192)";
        for (let n = 0; n < 21; n++) {
            items[n].style.background = "rgb(192, 192, 192)";
            items[n].style.color = "rgb(0, 0, 0)";
        };
    } else if (select.value == "red") {
        document.body.style.background = "rgb(255, 128, 128)";
        document.body.style.color = "rgb(0, 0, 0)";
        section.style.background = "rgb(255, 192, 192)";
        section.style.borderColor = "rgb(192, 0, 0)";
        for (let n = 0; n < 21; n++) {
            items[n].style.background = "rgb(192, 0, 0)";
            items[n].style.color = "rgb(0, 0, 0)";
        };
    } else if (select.value == "green") {
        document.body.style.background = "rgb(128, 255, 128)";
        document.body.style.color = "rgb(0, 0, 0)";
        section.style.background = "rgb(192, 255, 192)";
        section.style.borderColor = "rgb(0, 192, 0)";
        for (let n = 0; n < 21; n++) {
            items[n].style.background = "rgb(0, 192, 0)";
            items[n].style.color = "rgb(0, 0, 0)";
        };
    } else if (select.value == "blue") {
        document.body.style.background = "rgb(128, 128, 255)";
        document.body.style.color = "rgb(0, 0, 0)";
        section.style.background = "rgb(192, 192, 255)";
        section.style.borderColor = "rgb(0, 0, 192)";
        for (let n = 0; n < 21; n++) {
            items[n].style.background = "rgb(0, 0, 192)";
            items[n].style.color = "rgb(0, 0, 0)";
        };
    } else if (select.value == "cyan") {
        document.body.style.background = "rgb(0, 160, 255)";
        document.body.style.color = "rgb(0, 0, 0)";
        section.style.background = "rgb(0, 192, 255)";
        section.style.borderColor = "rgb(0, 128, 255)";
        for (let n = 0; n < 21; n++) {
            items[n].style.background = "rgb(0, 128, 255)";
            items[n].style.color = "rgb(0, 0, 0)";
        };
    } else if (select.value == "magenta") {
        document.body.style.background = "rgb(255, 128, 255)";
        document.body.style.color = "rgb(0, 0, 0)";
        section.style.background = "rgb(255, 192, 255)";
        section.style.borderColor = "rgb(192, 0, 192)";
        for (let n = 0; n < 21; n++) {
            items[n].style.background = "rgb(192, 0, 192)";
            items[n].style.color = "rgb(0, 0, 0)";
        };
    } else if (select.value == "yellow") {
        document.body.style.background = "rgb(255, 255, 128)";
        document.body.style.color = "rgb(0, 0, 0)";
        section.style.background = "rgb(255, 255, 192)";
        section.style.borderColor = "rgb(192, 192, 0)";
        for (let n = 0; n < 21; n++) {
            items[n].style.background = "rgb(192, 192, 0)";
            items[n].style.color = "rgb(0, 0, 0)";
        };
    } else if (select.value == "orange") {
        document.body.style.background = "rgb(255, 192, 128)";
        document.body.style.color = "rgb(0, 0, 0)";
        section.style.background = "rgb(255, 224, 192)";
        section.style.borderColor = "rgb(192, 128, 0)";
        for (let n = 0; n < 21; n++) {
            items[n].style.background = "rgb(192, 128, 0)";
            items[n].style.color = "rgb(0, 0, 0)";
        };
    } else if (select.value == "violet") {
        document.body.style.background = "rgb(192, 128, 255)";
        document.body.style.color = "rgb(0, 0, 0)";
        section.style.background = "rgb(224, 192, 255)";
        section.style.borderColor = "rgb(128, 0, 192)";
        for (let n = 0; n < 21; n++) {
            items[n].style.background = "rgb(128, 0, 192)";
            items[n].style.color = "rgb(0, 0, 0)";
        };
    } else if (select.value == "black") {
        document.body.style.background = "rgb(16, 16, 16)";
        document.body.style.color = "rgb(255, 255, 255)";
        section.style.background = "rgb(128, 128, 128)";
        section.style.borderColor = "rgb(64, 64, 64)";
        for (let n = 0; n < 21; n++) {
            items[n].style.background = "rgb(64, 64, 64)";
            items[n].style.color = "rgb(255, 255, 255)";
        };
    };
};
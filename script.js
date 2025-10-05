const topBox = document.getElementById("top_box");
function enterText(text) {
    topBox.value = topBox.value + text.toString();
}

document.getElementById("1").addEventListener("click", function () {
    enterText(1);
});
document.getElementById("2").addEventListener("click", function () {
    enterText(2);
});
document.getElementById("3").addEventListener("click", function () {
    enterText(3);
});
document.getElementById("4").addEventListener("click", function () {
    enterText(4);
});
document.getElementById("5").addEventListener("click", function () {
    enterText(5);
});
document.getElementById("6").addEventListener("click", function () {
    enterText(6);
});
document.getElementById("7").addEventListener("click", function () {
    enterText(7);
});
document.getElementById("8").addEventListener("click", function () {
    enterText(8);
});
document.getElementById("9").addEventListener("click", function () {
    enterText(9);
});
document.getElementById("0").addEventListener("click", function () {
    enterText(0);
});
document.getElementById("(").addEventListener("click", function () {
    enterText("(");
});
document.getElementById(")").addEventListener("click", function () {
    enterText(")");
});
document.getElementById(".").addEventListener("click", function () {
    enterText(".");
});
document.getElementById("+").addEventListener("click", function () {
    enterText("+");
});
document.getElementById("-").addEventListener("click", function () {
    enterText("-");
});
document.getElementById("*").addEventListener("click", function () {
    enterText("×");
});
document.getElementById("/").addEventListener("click", function () {
    enterText("÷");
});
document.getElementById("ac").addEventListener("click", function () {
    topBox.value = "";
});
document.getElementById("backspace").addEventListener("click", function () {
    topBox.value = topBox.value.substring(0, topBox.value.length - 1);
});
document.getElementById("=").addEventListener("click", function () {
    while (topBox.value.includes("×")) {
        topBox.value = topBox.value.replace("×", "*");
    }
    while (topBox.value.includes("÷")) {
        topBox.value = topBox.value.replace("÷", "/");
    }
    topBox.value = math.evaluate(topBox.value);
});


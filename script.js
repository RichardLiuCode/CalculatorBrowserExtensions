function enterText(text) {
    document.getElementById("top_box").value = document.getElementById("top_box").value + text.toString();
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
document.getElementById("plus").addEventListener("click", function () {
    enterText("+");
});
document.getElementById("minus").addEventListener("click", function () {
    enterText("-");
});

document.getElementById("times").addEventListener("click", function () {
    enterText("*");
});


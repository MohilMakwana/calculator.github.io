function ac() {
    document.getElementById("display").value = "";
}
function del() {
    var x = document.getElementById("display").value;
    document.getElementById("display").value = x.slice(0, - 1);      //x.slice(0, x.length- 1);
}
function number(result) {
    document.getElementById("display").value += result;
}
function output() {
    var result = document.getElementById("display").value;
    document.getElementById("display").value = eval(result);
}  
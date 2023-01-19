// //--- alternatyva ------
// document.querySelector("#btnID_1").onclick = fn_1;
// function fn_1() {
//     console.log(document.querySelector("#id_1").value);
// }

// //--- alternatyva ------
// document.querySelector("#btnID_1").onclick = function () {
//     console.log(document.querySelector("#id_1").value);
// }

//--- alternatyva ------
document.querySelector("button").onclick = () => {
    console.log(document.querySelector("#id_1").value);
    document.querySelector("button").style.backgroundColor = document.querySelector("#id_1").value;//del button spalvos
}

document.querySelector("#id_1").oninput = () => {
    console.log(document.querySelector("#id_1").value);
    document.querySelector("span").innerHTML = document.querySelector("#id_1").value;
}

// //--------------------------------------->>>>>>>>
// function multiple(a = 2, b = 3) {
//     console.log(a * b);
//     return a * b;
// }
// multiple();
// multiple(5);
// multiple(9, 10);
// //<<<<<<<<---------------------------------------
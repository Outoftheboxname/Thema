var A1, A2, B1, B2, AB1, AB2, O1, O2
A1 = document.querySelector("#A1")
A2 = document.querySelector("#A2")
B1 = document.querySelector("#B1")
B2 = document.querySelector("#B2")
AB1 = document.querySelector("#AB1")
AB2 = document.querySelector("#AB2")
O1 = document.querySelector("#O1")
O2 = document.querySelector("#O2")
function utilizarA1() {
    confirmar()
    if(isConfirm) {
    console.log("foi utilizado A+")
    }
}
A1.addEventListener("click", utilizarA1)
function utilizarA2() {
    console.log("foi utilizado A-")
}
A2.addEventListener("click", utilizarA2)
function utilizarB1() {
    console.log("foi utilizado B+")
}
B1.addEventListener("click", utilizarB1)
function utilizarB2() {
    console.log("foi utilizado B-")
}
B2.addEventListener("click", utilizarB2)
function utilizarAB1() {
    console.log("foi utilizado AB+")
}
AB1.addEventListener("click", utilizarAB1)
function utilizarAB2() {
    console.log("foi utilizado AB-")
}
AB2.addEventListener("click", utilizarAB2)
function utilizarO1() {
    console.log("foi utilizado O+")
}
O1.addEventListener("click", utilizarO1)
function utilizarO2() {
    console.log("foi utilizado O-")
}
O2.addEventListener("click", utilizarO2)
function confirmar () {confirm("pressione OK para confirmar\n cancelar")
}
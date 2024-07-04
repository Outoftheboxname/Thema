// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxlCDTzJ8nuDji1LfyoU3DoyMianBOrLQ",
    authDomain: "thema-f59ec.firebaseapp.com",
    databaseURL: "https://thema-f59ec-default-rtdb.firebaseio.com",
    projectId: "thema-f59ec",
    storageBucket: "thema-f59ec.appspot.com",
    messagingSenderId: "541288011088",
    appId: "1:541288011088:web:598ab8f467ba95bb574855"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getDatabase, set, get, update, remove, ref, child, } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js"
const db = getDatabase()
var name, idade, gender, einput, Done, ALI, type
Done = document.querySelector("#Done")
ALI = document.querySelector("#ALI")
function cadastro() {
    name = document.querySelector("#name")
    idade = document.querySelector("#idade")
    gender = document.querySelector("#gender")
    einput = document.querySelector("#einput")
    storeType()
    console.log(name + "doou sangue")
    set(ref(db, "doadores/" + name.value), {
        status: "doou sangue",
        idade: idade.value,
        gender: gender.value,
        einput: einput.value,
        type: type.value
    })
        .then(() => {
            alert("doador cadastrado!")
        })
        .catch((error) => {
            alert(error)
        })
}

Done.addEventListener("click", cadastro)
function storeType() {
    let typeA1= $('#typeA1')
    if (typeA1.checked) {
        type = "A+"
       
    }
    /*else if (typeA2.checked) {
        type = "A-"
    }
    else if (typeB1.checked) {
        type = "B+"
    }
    else if (typeB2.checked) {
        type = "B-"
    }
    else if (typeAB1.checked) {
        type = "AB+"
    }
    else if (typeAB2.checked) {
        type = "AB-"
    }
    else if (typeO1.checked) {
        type = "O+"
    }
    else if (typeO2.checked) {
        type = "O-"

    }*/
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDISHemhoUZP_XRXWxdOwk3WGCl46LhbTY",
  authDomain: "meatless-mondays.firebaseapp.com",
  databaseURL: "https://meatless-mondays-default-rtdb.firebaseio.com",
  projectId: "meatless-mondays",
  storageBucket: "meatless-mondays.appspot.com",
  messagingSenderId: "452871319207",
  appId: "1:452871319207:web:bc519d4d9972d5b3a87582",
  measurementId: "G-7CBLNWNXHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
console.log(app)

const nameV = "";
const emailV = "";
const messageV = "";
const userId = "BLANK"
btn = document.getElementById("btnSend")

const ready = () => {
    nameV = document.getElementById("name").value;
    emailV = document.getElementById("email").value;
    messageV = document.getElementById("message").value;
    console.log(`Ready func excutuded: name: ${nameV}, email: ${emailV}, message: ${messageV}`)
}



function writeUserData(userId, name, email, message) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      message: message
    });
    console.log("writeUserData func excututed")
  }

btn.addEventListener('click', function(e) {
    ready()
    e.preventDefault();
    writeUserData(userId, nameV, emailV, messageV)
    console.log("addEventListiner func excututed")
})


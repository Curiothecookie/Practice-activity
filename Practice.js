
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDqToItQwX8VxNfTolueuVzv12w1iJeYs0",
    authDomain: "kwitter-550f1.firebaseapp.com",
    databaseURL: "https://kwitter-550f1.firebaseio.com",
    projectId: "kwitter-550f1",
    storageBucket: "kwitter-550f1.appspot.com",
    messagingSenderId: "942568180946",
    appId: "1:942568180946:web:6b71c3628069a22864b10b",
    measurementId: "G-1FQ6RQEGY9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function addUser() { user_name = document.getElementById("user_name").value; firebase.database().ref("/").child(user_name).update({ purpose: "adding user" }); }
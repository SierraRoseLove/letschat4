// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRJt7zUFvmCTROc8BYuyG7aH7Y_wOnBlg",
    authDomain: "classtest-6f0a4.firebaseapp.com",
    projectId: "classtest-6f0a4",
    storageBucket: "classtest-6f0a4.appspot.com",
    messagingSenderId: "408729793045",
    appId: "1:408729793045:web:344bcd48353a7e8998d41c",
    measurementId: "G-R889CN2JDY"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}




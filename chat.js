const firebaseConfig = {
    apiKey: "AIzaSyBxCVbpvYTm-D6p_P7LCSKDsgBVeONRHGs",
    authDomain: "project-100-aa50e.firebaseapp.com",
    databaseURL: "https://project-100-aa50e-default-rtdb.firebaseio.com",
    projectId: "project-100-aa50e",
    storageBucket: "project-100-aa50e.appspot.com",
    messagingSenderId: "201675907296",
    appId: "1:201675907296:web:267bac936c6463473ef085",
    measurementId: "G-LTM2WTDXZ2"
  };
  
  const app = initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}




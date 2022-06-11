
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDHpoBNA61pQ7VMnIMeWiVvrnH07ILDciY",
      authDomain: "lets-chat-web-app---1.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app---1-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app---1",
      storageBucket: "lets-chat-web-app---1.appspot.com",
      messagingSenderId: "395139961008",
      appId: "1:395139961008:web:31f5ea9f98217f624dab75"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("username")
document.getElementById("user_name").innerHTML= "Welcome "+user_name+"!";

function add_room(){
      room_name = document.getElementById("room_name").value;

      localStorage.setItem("roomname" , room_name);

      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

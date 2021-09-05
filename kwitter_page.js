var firebaseConfig = {
    apiKey: "AIzaSyAQy2jI6xSPFl3j2AxKzY1ekY9xzBRpg2E",
    authDomain: "chatter-app-c19ec.firebaseapp.com",
    databaseURL: "https://chatter-app-c19ec-default-rtdb.firebaseio.com",
    projectId: "chatter-app-c19ec",
    storageBucket: "chatter-app-c19ec.appspot.com",
    messagingSenderId: "825462409704",
    appId: "1:825462409704:web:0d0cba0afee5c40c5afc5d"
  };
  
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
    var msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0

    });

    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code

                      //End code
                }
          });
    });
}
getData();

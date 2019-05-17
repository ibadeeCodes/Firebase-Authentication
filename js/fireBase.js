var app_fireBase = {};
(function(){
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB9YxQ0e9i1FTV94YD1AGWBYlwzn0K2o0g",
    authDomain: "fir-authentication-9f3a1.firebaseapp.com",
    databaseURL: "https://fir-authentication-9f3a1.firebaseio.com",
    projectId: "fir-authentication-9f3a1",
    storageBucket: "fir-authentication-9f3a1.appspot.com",
    messagingSenderId: "770789729764",
    appId: "1:770789729764:web:90c8db9621785a58"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  app_firebase = firebase;
})()
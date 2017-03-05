//Initialize Firebase
var config = {
    apiKey: "AIzaSyD1__SyPP9HQ4-ViwJxH6s8EACpCY9-k34",
    authDomain: "skiproject-8236e.firebaseapp.com",
    databaseURL: "https://skiproject-8236e.firebaseio.com",
    storageBucket: "skiproject-8236e.appspot.com",
    messagingSenderId: "633876681860"
  };
firebase.initializeApp(config);
var database = firebase.database();

return firebase.database().ref('user').once('value') {
	var firstname = snapshot.val().firstname;
});








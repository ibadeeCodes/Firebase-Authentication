var mainApp = {};
(function(){
    var ui = null;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        ui = user.id;
        // User is signed in.
    }else{
        ui = null;
        window.location.replace('login.html');
    }
    });

function logOut(){
    firebase.auth().signOut();
}
mainApp.logOut = logOut
})()

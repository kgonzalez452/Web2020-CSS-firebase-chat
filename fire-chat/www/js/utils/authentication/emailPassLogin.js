function emailPassLogin() {
  let email = $('#email').val();
  let password = $('#password').val();

  if (validateEmail(email) && validatePassword(password)) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result;

        // localStorage.setItem("session", JSON.stringify({
        //   token: token,
        //   method: 'google'
        // }));

        console.log('user ', user);
        window.user = user;
        console.log('user ', user);

        $('#login_screen').fadeOut("slow", function () {
          $('#root').html(ChatScreen(user));
          chatScreenEvents(user);
        });
      })
  }
}
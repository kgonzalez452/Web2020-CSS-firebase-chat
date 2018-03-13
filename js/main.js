  firebase.auth().onAuthStateChanged(function (user) {
    window.user = user;

    console.log('user ', user);

    if (user) {
      $('#root').html(ChatScreen(user));
      chatScreenEvents(user);

      window.user = user;
      console.log('user ', user);

    } else {
      $('#root').append(LoginScreen());
      loginScreenEvents();
    }
  });
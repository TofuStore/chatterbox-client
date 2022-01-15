// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  //when browser opens, initialize function will load information onto chatterbox
  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.

    setInterval(function() {
      App.fetch();
    }, 3000);
  },

  //getting all the data from the server and putting it into our storage bin in messages and room, then rendering
  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data);
      Messages._data = [];
      for (let i in data) {
        Messages._add(data[i]);
        if (!Rooms._data.includes(data[i].roomname)) {
          Rooms._data.push(data[i].roomname);
        }
      }
      let chats = document.getElementById('chats');
      chats.innerHTML = '';
      RoomsView.initialize();
      MessagesView.initialize();
      callback();
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

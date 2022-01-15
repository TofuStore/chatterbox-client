// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render(Rooms._data);
    RoomsView.$select.change(RoomsView.handleChange);
  },

  render: function(allRooms) {
    // TODO: Render out the list of rooms.
    for (let i = 0; i < allRooms.length; i++) {
      let currentRoom = allRooms[i];
      RoomsView.$select.append('<option value="' + currentRoom + '">' + currentRoom + '</option>');
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    console.log(event);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};

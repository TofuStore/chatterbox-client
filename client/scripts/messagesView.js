// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //Messages.$chats.empty();
    MessagesView.render(Messages._data);
  },

  render: function(allMessages) {
    // TODO: Render _all_ the messages.
    for (let i = 0; i < allMessages.length; i++) {
      MessagesView.renderMessage(allMessages[i]);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    let newChat = MessageView.render(message);
    MessagesView.$chats.append(newChat);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};
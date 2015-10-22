// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  
  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  }

});

// Changes:
  // Added enqueue method 
    //corresponds to LibraryEntryView; triggered by LibraryEntryView
  //Added dequeue method - this corresponds to SongQueue collection (initialize)
  //Added ended method - this corresponds to SongQueue collection (initialize)
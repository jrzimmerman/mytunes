// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  enqueue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('click', this);
  }

});

// Changes:
  // Added enqueue method 
    //corresponds to LibraryEntryView; triggered by LibraryEntryView
// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add',function() {
      if(this.at(1) === undefined){
        this.playFirst();
      } 
    });

    this.on('dequeue', function(song) {
      if(this.at(0) === song) {
        this.remove(song);
      }
    });

    this.on('ended', function() {
      return this;
    });
  },

  playFirst: function() {
    // play()
    this.at(0).play();
  }

});

//Changes 
  //added this.on() in initialize, which adds an add() method SongQueue collection
    //inserted if statment that checks if the song at index 1 is undefined - if true, play the first song in the queue
  //added playFirst method
    //plays the first song in the queue
  //added dequeue method in initialize - removes song at this.at(0)
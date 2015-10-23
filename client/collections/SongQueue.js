// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add',function() {
      if(this.length == 1){
        this.playFirst();
      } 
    });

    this.on('dequeue', function(song) {
      if(this.at(0) === song) {
        this.remove(song);
        if(this.at(0)) { // check if we have something at position 0
          this.playFirst(); // play if we do
        }
      }
    });

    this.on('ended', function() {
      this.remove(this.at(0));
      if(this.at(0)) {
        this.playFirst();
      }
    });

  },

  playFirst: function() {
    this.at(0).play();
  }

});

//Changes 
  //added this.on() in initialize, which adds an add() method SongQueue collection
    //inserted if statment that checks if the song at index 1 is undefined - if true, play the first song in the queue
  //added playFirst method
    //plays the first song in the queue
  //added dequeue method in initialize - removes song at this.at(0)
  //Implemented dequeue and end - both now function as expected
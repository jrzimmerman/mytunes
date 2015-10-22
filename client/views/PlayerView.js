// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  //WHAT MODEL IS THIS VIEW CONNECTED TO?

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    this.$el.on('ended', function() {
      this.model.ended();
    }.bind(this));
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});

//Notes
  //PlayerView dequeues a song when finished playing & plays the next song

//Change
  //in initialize:
    //plugged in the on event - this.$el.on('ended', function() {...
    //binded this to the correct context
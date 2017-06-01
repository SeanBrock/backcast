var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();

  },


  render: function() {
    this.$el.html(this.template());
    this.videoPlayerView = new VideoPlayerView({model: Video});
    this.videoListView = new VideoListView({model: Video});
    //console.log(videoPlayerView)
    //
    //
    return this;
  },

  template: templateURL('src/templates/app.html')

});

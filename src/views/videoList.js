var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);

    //this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();//detach all video's
    this.$el.html(this.template());
    //Codys code below

    this.$('.video-list').append(
      this.collection.map(function(video) {
        return new VideoListEntryView({model: video}).render().el;
      })
    );

    //this.renderVideoListEntry();  Renders x10
    //step two create new templateste
    //this.collection.on('sync', this.renderVideoListEntry, this);
    //step three append all of these videos to the function
    return this;
  },



  template: templateURL('src/templates/videoList.html')

});

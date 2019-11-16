$(document).ready(function() {


  var userFeed = new Instafeed({
      get: 'user',
      userId: '7212983624',
      limit: '4',
      resolution: 'standard_resolution',
      accessToken: '7212983624.1677ed0.371dc2f7a25b4b5aa6dfade12cb2c0b7',
      sortBy: 'most-recent',
      template: '<div class="activity col-xs-6 col-sm-6 col-md-3"><div class="img36_div"><a href="{{image}}"><img src="{{image}}" class="img-fluid" id="img-responsive2"/></a><div style="padding:10px;"><span style="padding-right:20px;" class="likes"><i class="fa fa-heart" aria-hidden="true"></i>{{likes}}</span><span style="padding-left:20px;" class="comments"><i class="fa fa-comments"aria-hidden="true"></i> {{comments}}</span></div></div></div>',
    });
      userFeed.run();

});
  // This will create a single gallery from all elements that have class "gallery-item"
  $('.insta_gallery').magnificPopup({
      type: 'image',
      delegate: 'a',
      gallery: {
          enabled: true ,
      }
  });
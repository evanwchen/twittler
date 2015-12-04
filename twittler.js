$(document).ready(function(){
  var $tweets = $('.tweets');
  $tweets.html('');
  
  var $selection = $('.selection');
  $selection.html('');

  var $selected = $('.user option:selected').val();

  var $title = $('<div></div>');
  $title.text('Tweets from ' + $selected);
  $title.appendTo($selection);

  var count = 11;

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class="block"></div>');
    $tweet.html('<div class="date">' + tweet.created_at.toDateString() + ', ' + tweet.created_at.toTimeString() + 
      '</div>' + '@' + '<a href="#" class="login">' + tweet.user + '</a>: ' + tweet.message);
    $tweet.appendTo($tweets);
    index -= 1;
  };   
  
  $('.load').on('click', function() {
    for (var i = 0; i < 3; i++) {
      var tweet = streams.home[count + i];
      if (tweet != undefined) {
        var $tweet = $('<div class="block"></div>');
        $tweet.html('<div class="date">' + tweet.created_at.toDateString() + ', ' + tweet.created_at.toTimeString() + 
          '</div>' + '@' + '<a href="#" class="login">' + tweet.user + '</a>: ' + tweet.message);
        $tweet.appendTo($tweets);
      }
      count++;
    }
  });

  $('.tweets').on('click', '.login', function() {
    $tweets.empty();
    var index = streams.home.length - 1
    , selection = $(this).text();

    $('.user option:selected').prop('selected',false);
    $('.user').val(selection).prop('selected', true);

    while(index >= 0){      
      var tweet = streams.home[index];
      if (tweet.user == selection) {
        var $tweet = $('<div class="block"></div>');
        $tweet.html('<div class="date">' + tweet.created_at.toDateString() + ', ' + tweet.created_at.toTimeString() + 
          '</div>' + '@' + '<a href="#" class="login">' + tweet.user + '</a>: ' + tweet.message);
        $tweet.appendTo($tweets);
      }
      index -= 1;
    };
  });

  $('.user').change(function() {
    $tweets.empty();
    var index = streams.home.length - 1
    , selection = $(this).val();

    while(index >= 0){      
      var tweet = streams.home[index];
      if (tweet.user == selection || selection == 'allUsers') {
        var $tweet = $('<div class="block"></div>');
        $tweet.html('<div class="date">' + tweet.created_at.toDateString() + ', ' + tweet.created_at.toTimeString() + 
          '</div>' + '@' + '<a href="#" class="login">' + tweet.user + '</a>: ' + tweet.message);
        $tweet.appendTo($tweets);
      }
      index -= 1;
    };
  });

});
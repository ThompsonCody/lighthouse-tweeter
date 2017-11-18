/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {

//------------------------------------//

  function renderTweets(tweets){
    for (var i = 0; i < tweets.length; i++) {
      $(".all-tweets").prepend(createTweetElement(tweets[i]));
    } // do for each refactor
  }

  function createTweetElement(tweet){
    let tweetBody =     tweet.content.text,
        tweetUserName = tweet.user.name,
        tweetAvatar =   tweet.user.avatars.small,
        tweetHandler =  tweet.user.handle,
        tweetFooter =  moment(tweet.created_at).fromNow();

    const $tweet =
      `
        <article class="tweet tweet-template flex">
          <header>
            <span>
              <img src="${tweetAvatar}" alt="tweet-avatar" class="user-avatar> tweetCard-avatar">
            </span>
            <h2 id="userId">${tweetHandler}</h2>
          </header>
          <span class="tweet-content">
            <p>${tweetBody}</p>
          </span>
          <footer>
            ${tweetFooter}
            <span id="tweet-icons">
              <i class="fa fa-flag" aria-hidden="true"></i>
              <i class="fa fa-retweet" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
            </span>
          </footer>
        </article>
      `;

    return $tweet;
  }

  function loadTweets(){
    $.get("/tweets/", function(data){
      return renderTweets(data);
    });
  }

  loadTweets();

  //TOGGLE TWEET COMPOSE
  $('#toggle-compose').on("click", function(event) {
    $(".new-tweet").slideDown();
    $(".compose-text").focus();
  });

  //Post from tweet compose
  $('#tweet-compose').on("submit", function(event) {
    event.preventDefault();
    let tweetCompose = $('#tweet-textarea').val().length;
    if(tweetCompose !== 0 && tweetCompose < 140){
      $.post("/tweets/", $(this).serialize(), (data) => {

        $('#tweet-textarea').val("");
        $('.all-tweets').html("");

        loadTweets();

        $(".new-tweet").slideUp();//toggles back up after submit
      });
    } else {

      //more validation goes here
        //--form should not clear textarea, despite error
    }

  });

});



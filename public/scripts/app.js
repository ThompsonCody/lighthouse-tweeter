/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {

    // Test / driver code (temporary). Eventually will get this from the server.
  // Fake data taken from tweets.json
  let data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

//------------------------------------//

  function renderTweets(tweets){
    for (var i = 0; i < tweets.length; i++) {
      $(".all-tweets").append(createTweetElement(tweets[i]));
    } // do for each refactor
  }

  function createTweetElement(tweet){
    let tweetBody =     tweet.content.text,
        tweetUserName = tweet.user.name,
        tweetAvatar =   tweet.user.avatars.small,
        tweetHandler =  tweet.user.handle,
        tweetFooter =   new Date(tweet.created_at);

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
          </footer>
        </article>
      `;

    return $tweet;
  }

  renderTweets(data);

});



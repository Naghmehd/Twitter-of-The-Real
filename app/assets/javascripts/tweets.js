/* globals $ */

var Tweets = {    //new comment auto check and refresh
    checkAndAddNewComments: function () {
        var user_id = $("#user-id").val(); // the .val() method in js returns the value of an input element.
        if (user_id !== undefined && user_id !== null) {
            var url = "/api/users/" + post_id;
            $.getJSON(url, function (response) {
                $("#tweet-storage").html("");
                $("#tweet-count").html(response.tweets.length);
                response.tweets.forEach(function (tweet) {
                    $("#tweet-storage").append("<p>" + tweet.body + "</p>");
                });
            });
        }
    },

    registerAjaxHandlers: function () {
        var $newTweet = $("#new_tweet");
        $newTweet.on("ajax:success", function(e, data) {
            $newTweet.append("<p>" + data.message + "</p>");
            $newTweet.find("#tweet_message").val("");
        });
        $newTweet.on("ajax:error", function(e, data) {
            $newTweet.append("<p>" + data.message + "</p>");
        });
    },

    startNewTweetSearch: function () {
        setInterval(function () {
            this.checkAndAddNewTweets();
        }, 1000);
    },

    start: function () {
        this.registerAjaxHandlers();
        this.startNewTweetSearch();
    }
};

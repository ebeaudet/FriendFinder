var friends = require("../data/friends");
console.log(friends);

module.exports = function (app) {
    console.log("Do we get here????")
app.get("/api/friends", function (req, res) {
    res.json(friends);
});

    app.post("/api/friends", function (req, res) {
    

        var user = req.body;

         user.scores = user.scores.map(function(str){return parseInt(str)});


    // var bestFriendValue = 0;
    var minDiff = 9999;
    var bestMatch = {};

    //Loop through friends array
    friends.map(function(friend){
      //loop through friends scores
      var scoreDiff = 0;
      friend.scores.map(function(score, i){
        //compare scores to user and keep running total
        scoreDiff += Math.abs(score - user.scores[i])
      });
      //if scoreDiff < MinDiff set equal
      if (minDiff > scoreDiff){
        minDiff = scoreDiff;
        bestMatch = friend;
      }
    });
    console.log(bestMatch);
    friends.push(user);
    res.json(bestMatch); //return the just match not all friends
  });

}

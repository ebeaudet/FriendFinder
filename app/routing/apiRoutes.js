var friends = require("../data/friends");
console.log(friends);

module.exports = function (app) {
    console.log("Do we get here????")
app.get("/api/friends", function (req, res) {
    res.json(friends);
});

    app.post("/api/friends", function (req, res) {
        friends.push(req.body);
        res.json(friends);
    });
}

var path = require("path");
var friends = require("../data/friends");

// Basic route that sends the user first to the AJAX Page
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
}
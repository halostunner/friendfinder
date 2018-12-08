let friendsData = require('../data/friends.js');

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.sendFile(friendsData);
      });

    app.post("/api/friends", function(req, res) {

    });

    

};
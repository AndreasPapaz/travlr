const Journal = require("../model/Journal");
const User = require("../model/User");
const isAuthenticated = require('../passport/middleware/isAuthenticated');
const passport = require('passport');


module.exports = function(app, passport) {

    app.post("/login", passport.authenticate("local"), function(req, res){
        if (req.user) {
            res.json(req.user);
        }
    });

    app.post('/journalentry', function(req, res) {
        var journal = new Journal(req.body);

        journal.save(function(err, doc) {
            if(err) {
                res.send(err);
            } else {
                res.send(doc);
            }
        });
    });

    app.post('/delete', function(req, res) {
        Journal.remove({_id: req.body.id}, function(err, doc) {
            if(err) {
                console.log(err);
            } else {
                console.log("This is the new doc from delete");
                console.log("==========================");
                // console.log(doc);
                res.send(doc);
            }
        });
    });

    app.post('/journal', function(req,res) {

        Journal.find({
            user: req.body.userId
        }, function(err, data) {
            if (err) {
                console.log(err);
            } else {

                var resultData = [];

                data.forEach(function(journal) {
                    resultData.push({
                        id: journal._id,
                        img: journal.img,
                        title: journal.title,
                        date: journal.date,
                        body: journal.body,
                        location: journal.location,
                        geoCode: journal.geoCode
                    });
                });
                res.send(resultData);
            }
        });
    });


    app.post('/signup', function(req, res) {
        var user = new User(req.body);

        user.save(function(err, doc) {
            if (err) {
                res.send(err);
            } else {
                res.send(doc);
            }
        });
    });


   app.post('/getUser', function(req, res) {
        User.findOne({
            _id: req.body.userId
        }, function(err, User) {
            if (err) {
                console.log(err);
            }
            if (!User) {
                res.json(false);
            } else {
                res.json(User);
            }
        });
   });

    app.use('*', function(req, res) {
        var dir = __dirname;
        var dirSplit = dir.split("controllers");
        dir = dirSplit[0];

        res.sendFile(dir + '/public/index.html');
    });

};
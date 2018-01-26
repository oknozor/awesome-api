var Hero = require('../models/hero.model.js');

exports.create = function(req, res) {
    // Create and Save a new Hero
    if(!req.body.name) {
        res.status(400).send({message: "A Hero Must have a name!"});
    }
    var hero = new Hero({
        name: req.body.name,
        story: req.body.story,
        title: req.body.title
    });

    hero.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Hero."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all heroes from the database.
    Hero.find(function(err, heroes){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving heroes."});
        } else {
            res.send(heroes);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single hero with a heroId
    Hero.findById(req.params.heroId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve hero with id " + req.params.heroId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a hero identified by the heroId in the request
    Hero.findById(req.params.heroId, function(err, hero) {
        if(err) {
            res.status(500).send({message: "Could not find a hero with id " + req.params.heroId});
        }

        hero.name = req.body.name;
        hero.title = req.body.title;
        hero.story = req.body.story;

        hero.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update hero with id " + req.params.heroId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a hero with the specified heroId in the request
    Hero.remove({_id: req.params.heroId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete hero with id " + req.params.id});
        } else {
            res.send({message: "Hero deleted successfully!"})
        }
    });
};

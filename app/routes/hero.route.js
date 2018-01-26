module.exports = function(app) {

    var heroes = require('../controllers/hero.controller.js');

    // Create a new Hero
    app.post('/heroes', heroes.create);

    // Retrieve all Heros
    app.get('/heroes', heroes.findAll);

    // Retrieve a single Note with heroId
    app.get('/heroes/:heroId', heroes.findOne);

    // Update a Hero with heroId
    app.put('/heroes/:heroId', heroes.update);

    // Delete a Hero with heroId
    app.delete('/heroes/:heroId', heroes.delete);
}

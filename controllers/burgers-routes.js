var db = require("../models");

module.exports = function(app) {

  // Create all our routes and set up logic within those routes where required.
  app.get("/", function(req, res) {
    db.Burger.findAll({
      include: [db.Person]
    }).then(function(result) {
      return res.render('index', {
        result
      })
    });
  });

  app.post("/api/burgers", function(req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
      }).then(function(result) {
        res.json({
          id: result.id
        });
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.put("/api/burgers/:id", function(req, res) {
    db.Person.create({
      name: req.body.name
    }).then(function(result) {
      var personID = result.id;
      return db.Burger.update({
        devoured: req.body.devoured,
        PersonId: personID
      }, {
        where: {
          id: req.body.id
        }
      })
    }).then(function(result) {
      res.json(result);
    }).catch(function(err) {
      res.json(err);
    })
  });

};

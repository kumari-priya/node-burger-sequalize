var db = require("../models");

module.exports = function(app) {

// Create all our routes and set up logic within those routes where required.
app.get("/", function(req, res) {
  db.Burger.findAll({include: [db.Person]}).then(function(result) {
    // We have access to the todos as an argument inside of the callback function
  //res.json(result);
  console.log("result");
  console.log(result);
    return res.render('index', {result})
  });
});

app.post("/api/burgers", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function(result) {
    // We have access to the new todo as an argument inside of the callback function
    //res.json({ id: result.insertId });
    res.json({ id: result.insertId });

  })
  .catch(function(err) {
    // Whenever a validation or flag fails, an error is thrown
    // We can "catch" the error to prevent it from being "thrown", which could crash our node app
    res.json(err);
  });
});

app.put("/api/burgers/:id", function(req, res) {
  db.Burger.update(
  {  devoured: req.body.devoured,
    name: req.body.name
  },
 {
    where: {
      id: req.body.id
    }
  }).then(function(result) {
    res.json(result);
  })
  .catch(function(err) {
    // Whenever a validation or flag fails, an error is thrown
    // We can "catch" the error to prevent it from being "thrown", which could crash our node app
    res.json(err);
  });
});

};

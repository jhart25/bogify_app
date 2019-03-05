const Router = require("express").Router
const songController = require("songController");
const userController = require("userController");

//The following code will match with the api songs //

Router.route("/")
.get(songController.findAll)
.post(songController.create)

route ("/:id")
.get(songController.findById)
.put(songController.update)
.delete(songController.remove)

module.exports = router;

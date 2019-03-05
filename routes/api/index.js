const path = require("path")
const router = require("express").Router;
const api = require("./api");

router.use("/api", apiRoutes);

router.use(function(req,res) {
    res.sendFile(path.join(_dirname, "../client/build/index.html"));
});

module.exports = Router;

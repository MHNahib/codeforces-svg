const { Router } = require("express");
const { getUser } = require("../controller/user.controller");
const router = Router();

router.get("/:id", getUser);

module.exports = router;

const { Router } = require("express");
const { getUser } = require("../controller/user.controller");
const index = require("../controller/index");
const router = Router();

router.get("/", index);
router.get("/:id", getUser);

module.exports = router;

const { Router } = require("express");
const tagsRoutes = Router();

const TagsController = require("../controllers/TagsController");

function myMiddleware(req, res, next) {
  next();
}

const tagsController = new TagsController();

tagsRoutes.use(myMiddleware);
tagsRoutes.get("/:user_id", tagsController.index);

module.exports = tagsRoutes;

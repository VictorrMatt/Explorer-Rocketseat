const { Router } = require("express");
const usersRoutes = Router();

const UsersController = require("../controllers/UsersController");

function myMiddleware(req, res, next) {
  next();
}

const usersController = new UsersController();

usersRoutes.use(myMiddleware);
usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);

module.exports = usersRoutes;

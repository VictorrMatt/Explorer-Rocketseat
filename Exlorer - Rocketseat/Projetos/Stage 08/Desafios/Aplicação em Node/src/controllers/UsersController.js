const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");

const sqliteConnection = require("../database/sqlite");

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body;

    const database = await sqliteConnection();
    const checkUserExists = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (checkUserExists) {
      throw new AppError("Este email já está em uso.");
    }

    const hashedPassword = await hash(password, 8);

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    return res.status(201).json();
  }

  async update(req, res) {
    const { name, email, password, old_password, avatar } = req.body;
    const { id } = req.params;

    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

    /* user not found */
    if (!user) {
      throw new AppError("Usuário não encontrado.");
    }

    /* checking if the email is already in use */
    const userWithUpdatedEmail = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Este e-mail já está em uso");
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.avatar = avatar ?? user.avatar;

    /* the oldest and newest password are required */
    if (password && !old_password) {
      throw new AppError(
        "Você precisa informar a senha antiga para redefinir a sua senha"
      );
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      /* checking encrypted password */
      if (!checkOldPassword) {
        throw new AppError("A senha antiga não confere.");
      }

      user.password = await hash(password, 8);
    }

    await database.run(
      `UPDATE users SET 
      name = (?),
      email = (?),
      password = (?),
      avatar = (?),
      updated_at = DATETIME('now')
      WHERE id = (?)`,
      [user.name, user.email, user.password, user.avatar, id]
    );

    return res.status(200).json();
  }

  async delete(req, res) {
    const { id } = req.params;

    const database = await sqliteConnection();
    await database.run("DELETE FROM users WHERE id = (?)", [id]);

    return res.status(200).json();
  }

  async read(req, res) {
    const { id } = req.params;

    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

    if (!user) {
      throw new AppError("O usuario não foi encontrado");
    }

    return res.json(user);
  }
}

module.exports = UsersController;

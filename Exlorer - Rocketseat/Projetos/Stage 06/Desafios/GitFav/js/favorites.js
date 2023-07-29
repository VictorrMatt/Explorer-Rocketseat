import { GithubUser } from "./GithubUser.js";

// Classe que vai conter a logica dos dados
// como os dados serão estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.tbody = this.root.querySelector("table tbody");
    this.load();
  }

  load() {
    this.entries = [];
  }

  async add(username) {
    const user = await GithubUser.search(username);

    this.entries = [user, ...this.entries];
    this.update();
  }

  delete(user) {
    const filteredEntries = this.entries.filter((entry) => {
      return entry.login === user.login ? false : true;
    });
    this.entries = filteredEntries;
    this.update();
  }
}

// classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);
    this.update();
    this.onadd();
  }

  onadd() {
    const addButton = this.root.querySelector(".search button");
    addButton.onclick = () => {
      const { value } = this.root.querySelector(".search input");
      this.add(value);
    };
  }

  update() {
    this.removeAllTr();

    this.entries.forEach((user) => {
      const row = this.createRow();

      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`;
      row.querySelector(".user p").textContent = user.name;
      row.querySelector(".user a").href = `https://github.com/${user.login}`;
      row.querySelector(".user span").textContent = user.login;
      row.querySelector(".repositories").textContent = user.public_repos;
      row.querySelector(".followers").textContent = user.followers;

      row.querySelector(".remove").onclick = () => {
        this.delete(user);
      };
      this.tbody.append(row);
    });
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }

  createRow() {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="user">
    <img
      src="https://github.com/victorrmatt.png"
      alt="Imagem de Victor Mateus"
    />
    <a href="https://github.com/victorrmatt" target="_blanck">
      <p>Victor Mateus</p>
      <span>victormateus</span>
    </a>
  </td>
  <td class="repositories">24</td>
  <td class="followers">5</td>
  <td>
    <p class="remove">Remover</p>
  </td>`;
    return tr;
  }
}

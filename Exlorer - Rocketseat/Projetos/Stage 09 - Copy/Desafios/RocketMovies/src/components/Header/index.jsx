import { Container } from "./styles";
import { Input } from "../Input";

export function Header({ userName }) {
  const gitHubProfileUrl = `https://github.com/${userName}.png`;
  return (
    <Container>
      <h2>RocketMovies</h2>
      <Input placeholder="Pesquisar pelo título" />
      <div className="userData">
        <div>
          <h2>{userName}</h2>
          <a href="/">sair</a>
        </div>
        <img src={gitHubProfileUrl} alt="imagem do usuário." />
      </div>
    </Container>
  );
}

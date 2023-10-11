import { Container, PlaceLink } from "./styles";
import { Input } from "../Input";

export function Header({ userName }) {
  const gitHubProfileUrl = `https://github.com/${userName}.png`;
  return (
    <Container>
      <PlaceLink to="/">
        <h2>RocketMovies</h2>
      </PlaceLink>
      <Input placeholder="Pesquisar pelo título" />
      <div className="userData">
        <div>
          <PlaceLink to="/perfil">
            <h2>{userName}</h2>
          </PlaceLink>
          <a href="/">sair</a>
        </div>
        <PlaceLink to="/perfil">
          <img src={gitHubProfileUrl} alt="imagem do usuário." />
        </PlaceLink>
      </div>
    </Container>
  );
}

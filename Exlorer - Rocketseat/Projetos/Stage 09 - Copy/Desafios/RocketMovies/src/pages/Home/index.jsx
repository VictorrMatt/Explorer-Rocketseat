import { Container, PlaceLink } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <Container>
      <Header userName="VictorrMatt" />
      <Section>
        <div className="movie-title">
          <h2>Meus filmes</h2>
          <PlaceLink to="/create">
            <Button title="Adicionar filme" />
          </PlaceLink>
        </div>

        <div className="movie-cards">
          <Card
            key="1"
            data={{
              title: "Interestellar",
              rating: 5,
              description:
                "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",
              tags: [
                { id: "1", name: "Ficção científica" },
                { id: "2", name: "Drama" },
              ],
            }}
          />
          <Card
            key="2"
            data={{
              title: "Som da liberdade",
              rating: 3,
              description:
                "Um ex-agente federal embarca em uma perigosa missão para salvar uma menina dos cruéis traficantes de crianças. Com o tempo se esgotando, ele viaja pelas profundezas da selva colombiana, colocando sua vida em risco para libertá-la.",
              tags: [
                { id: "1", name: "Drama" },
                { id: "2", name: "Ação" },
              ],
            }}
          />
          <Card
            key="3"
            data={{
              title: "Tudo em Todo Lugar ao Mesmo Tempo",
              rating: 4,
              description:
                "Uma ruptura interdimensional bagunça a realidade e uma inesperada heroína precisa usar seus novos poderes para lutar contra os perigos bizarros do multiverso.",
              tags: [
                { id: "1", name: "Ficção científica" },
                { id: "2", name: "Aventura" },
              ],
            }}
          />
        </div>
      </Section>
    </Container>
  );
}

import { Container, Textarea, PlaceLink } from "./styles";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonLink } from "../../components/ButtonLink";
import { Input } from "../../components/Input";
import { Mark } from "../../components/Mark";

export function Movie_Create() {
  return (
    <Container>
      <Header userName="VictorrMatt" />
      <Section>
        <PlaceLink to="/">
          <ButtonLink title="Voltar" icon />
        </PlaceLink>
        <main>
          <h2>Novo filme</h2>
          <div className="inputs">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          <Textarea placeholder="Observações" />
          <div className="markers_container">
            <h3>Marcadores</h3>
            <div className="markers">
              <Mark title="React" />
              <Mark isNew />
            </div>
          </div>
          <div className="buttons">
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" alterColors />
          </div>
        </main>
      </Section>
    </Container>
  );
}

import { Container, ArrowLeft } from "./styles";

export function ButtonLink({ title, icon = false }) {
  return (
    <Container>
      {icon && <ArrowLeft />}
      <p>{title}</p>
    </Container>
  );
}

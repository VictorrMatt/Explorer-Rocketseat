import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonLink } from "../../components/ButtonLink";
import { FiMail, FiLock } from "react-icons/fi";

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <div className="logo">
          <h1>Rocket Movies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>
        <h2>Faça seu login</h2>
        <div>
          <Input placeholder="E-mail" icon={FiMail} />
          <Input placeholder="Senha" icon={FiLock} />
          <Button title="Entrar" />
        </div>
        <ButtonLink title="Criar conta" />
      </Form>
    </Container>
  );
}

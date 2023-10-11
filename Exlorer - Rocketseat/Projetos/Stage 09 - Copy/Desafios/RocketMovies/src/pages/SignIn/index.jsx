import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <Container>
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
        <Link to="/signup">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
}

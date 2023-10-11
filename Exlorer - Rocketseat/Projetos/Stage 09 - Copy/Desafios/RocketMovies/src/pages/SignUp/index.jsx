import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <div className="logo">
          <h1>Rocket Movies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>
        <h2>Crie sua conta</h2>
        <div>
          <Input placeholder="Nome" icon={FiUser} />
          <Input placeholder="E-mail" icon={FiMail} />
          <Input placeholder="Senha" icon={FiLock} />
          <Button title="Cadastrar" />
        </div>
        <div>
          <FiArrowLeft />
          <Link to="/signin">Voltar para o login</Link>
        </div>
      </Form>
    </Container>
  );
}

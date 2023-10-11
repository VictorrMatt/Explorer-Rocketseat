import { Container } from "./styles";
import { IoMdClose } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";

export function Mark({ title, isNew }) {
  return (
    <Container isNew={isNew}>
      {isNew ? "Novo marcador" : title}
      {isNew ? <IoMdAdd /> : <IoMdClose />}
    </Container>
  );
}
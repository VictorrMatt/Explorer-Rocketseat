import { Container } from "./styles";

export function Button({ title, loading = false, alterColors  }) {
  return (
    <Container disabled={loading} alterColors={alterColors}>
      {loading ? "Loading..." : title}
    </Container>
  );
}

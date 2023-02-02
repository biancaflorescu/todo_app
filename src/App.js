import Form from "./components/form/form";
import "./App.css";
import Title from "./components/title/title";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Title title="THINGS TO DO" />
      <Form />
    </Container>
  );
}

export default App;

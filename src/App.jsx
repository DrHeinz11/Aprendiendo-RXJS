import { Container } from "@chakra-ui/react";
import DescriptionPage from "./components/DescriptionPage";
function App() {
  return (
    <Container maxW="1200px" minH="100vh" centerContent>
      <DescriptionPage />
    </Container>
  );
}

export default App;

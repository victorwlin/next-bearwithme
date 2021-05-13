import Header from "../src/Header";
import FeaturedPost from "../src/FeaturedPost";
import { Container } from "@material-ui/core";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Header />
      <FeaturedPost />
    </Container>
  );
}

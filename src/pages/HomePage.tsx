import Container from "../components/Container";
import PostList from "../components/PostList";
import styles from "./HomePage.module.css";
import { FEED_VARIANT } from "../utils/values";

function HomePage() {
  return (
    <Container className={styles.container}>
      <PostList variant={FEED_VARIANT.MY_FEED} />
    </Container>
  );
}

export default HomePage;

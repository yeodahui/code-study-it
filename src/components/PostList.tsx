import { useQuery } from "@tanstack/react-query";
import { Post as PostValue } from "../types";
import Post from "./Post";
import styles from "./PostList.module.css";
import { getPosts } from "../modules/api";

function PostList() {
  const posts = [];

  return (
    <div className={styles.postList}>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;

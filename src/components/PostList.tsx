import { useQuery } from "@tanstack/react-query";
import { Post as PostValue } from "../types";
import Post from "./Post";
import styles from "./PostList.module.css";
import { getPosts } from "../utils/api";

function PostList() {
  const { data: postsData } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  const posts: PostValue[] = postsData?.results ?? [];

  return (
    <div className={styles.postList}>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;

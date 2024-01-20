import { useQuery } from "@tanstack/react-query";
import { getPosts, getPostsByUsername } from "../utils/api";
import { FEED_VARIANT } from "../utils/values";
import { Post as PostValue, Posts } from "../types";
import Post from "./Post";
import styles from "./PostList.module.css";

function PostList({ variant = FEED_VARIANT.HOME_FEED }) {
  type postQueryKeyType = string[];
  type postQueryFnType = () => Promise<Posts>;

  let postQueryKey: postQueryKeyType = [];
  let postQueryFn: postQueryFnType = getPosts;

  if (variant === FEED_VARIANT.HOME_FEED) {
    postQueryKey = ["posts"];
    postQueryFn = getPosts;
  } else if (variant === FEED_VARIANT.MY_FEED) {
    const username: string = "codeit";
    postQueryKey = ["posts", username];
    postQueryFn = () => getPostsByUsername(username);
  } else {
    console.warn("Invalid feed request.");
  }

  const { data: postsData } = useQuery({
    queryKey: postQueryKey,
    queryFn: postQueryFn,
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

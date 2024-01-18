import { Posts } from "../types";
const BASE_URL = "https://learn.codeit.kr/api/codestudit";

/**
 * 모든 포스트 목록을 요청
 * @returns {Posts}
 */
export async function getPosts(): Promise<Posts> {
  const response = await fetch(`${BASE_URL}/posts`);
  return await response.json();
}

export async function getPostsByUsername(username: string) {
  const response = await fetch(`${BASE_URL}/posts?username=${username}`);
  return await response.json();
}

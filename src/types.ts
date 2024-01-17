interface User {
  id: number;
  username: string;
  name: string;
  photo: string;
  createdAt: number;
  updatedAt: number;
}

interface Post {
  id: number;
  content: string;
  user: User;
  createdAt: number;
  updatedAt: number;
  userId: number;
}

interface Posts {
  results: Post[];
  count: number;
  hasMore: boolean;
  currentPage: number;
}

export type { User, Post, Posts };

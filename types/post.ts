export interface Post {
  id: string;
  title: string;
  body: string;
}

export interface PostWithAuthor extends Post {
  author: string;
}

export interface PostProps {
  id: string;
  author: string;
  body: string;
}
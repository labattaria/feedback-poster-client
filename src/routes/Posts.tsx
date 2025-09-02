import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList/PostsList";
import { Post } from "../../types/post";

function Posts() {
  
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader(): Promise<Post[]> {
  const response = await fetch('https://feedback-poster-server.onrender.com/posts');

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }


  const resData: { posts: Post[] } = await response.json();
  return resData.posts;
}

import Post from "../Post/Post";
import styles from './PostsList.module.scss';
import { useLoaderData } from 'react-router-dom';
import type { PostProps } from '../../../types/post';

function PostsList() {
  const posts = useLoaderData() as PostProps[];

  return (
    <>  
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map(({ id, body, author }) => (
            <Post key={id} id={id} body={body} author={author} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
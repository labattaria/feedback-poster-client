import { useLoaderData, Link, type LoaderFunctionArgs } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import styles from './PostDetails.module.scss';
import type { PostWithAuthor } from '../../../types/post';

export async function loader({ params }: LoaderFunctionArgs<{ id: string }>): Promise<PostWithAuthor | null> {
  const postId = params.id;
  if (!postId) return null;

  const response = await fetch(`https://feedback-poster-server.onrender.com/posts/${postId}`);
  if (!response.ok) return null;

  const resData: { post: PostWithAuthor } = await response.json();
  return resData.post;
}

function PostDetails() {
  const post = useLoaderData() as PostWithAuthor | null;

  if (!post) {
    return (
      <Modal>
        <main className={styles.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={styles.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }

  return (
    <Modal>
      <main className={styles.details}>
        <p className={styles.author}>{post.author}</p>
        <p className={styles.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;
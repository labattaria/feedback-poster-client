import { Link } from 'react-router-dom';
import styles from './Post.module.scss';
import type { PostProps } from '../../../types/post';

function Post({ id, author, body }: PostProps) {
  return (
    <li className={styles.post}>
      <Link to={id}>
        <p className={styles.author}>{author}</p>
        <p className={styles.text}>{body}</p>
      </Link>
    </li>
  );
}

export default Post;
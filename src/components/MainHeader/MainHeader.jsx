import { MdPostAdd, MdMessage } from 'react-icons/md';
import styles from './MainHeader.module.scss';

function MainHeader({ onCreatePost }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MdMessage />
        Feedback Poster
      </h1>
      <p>
        <button className={styles.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
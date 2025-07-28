import { Link } from 'react-router-dom'; 
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
        <Link to="/create-post" className={styles.button} >
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
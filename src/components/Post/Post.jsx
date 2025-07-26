import styles from './Post.module.scss';

function Post({ author, body }) {
    return (
        <li className={styles.post}>
            <p className={styles.author}>{author}</p>
            <p className={styles.text}>{body}</p>
        </li>
    );
}

export default Post;
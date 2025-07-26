import styles from './Post.module.scss';

function Post({ author, body }) {
    return (
        <div className={styles.post}>
            <p className={styles.author}>{author}</p>
            <p className={styles.text}>{body}</p>
        </div>
    );
}

export default Post;
import Post from "../Post/Post";
import styles from './PostsList.module.scss';

function PostsList() {
    return (
        <ul className={styles.posts}>
            <Post author="Niko" body="React Is Awesome" />
            <Post author="Manuel" body="Learn React with us" />
        </ul>
    );
}

export default PostsList;
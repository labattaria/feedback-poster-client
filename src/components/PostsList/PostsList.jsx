import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import styles from './PostsList.module.scss';

function PostsList() {
    return (
        <>
            <NewPost />
            <ul className={styles.posts}>
                <Post author="Niko" body="React Is Awesome" />
                <Post author="Manuel" body="Learn React with us" />
            </ul>
        </>    
    );
}

export default PostsList;
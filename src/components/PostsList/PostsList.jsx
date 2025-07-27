import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import styles from './PostsList.module.scss';
import Modal from "../Modal/Modal";

function PostsList({ isPosting, onStopPosting }) {
    return (
        <>  
            {isPosting &&
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onCancel={onStopPosting}
                    />
                </Modal>}

            
            <ul className={styles.posts}>
                <Post author="Manuel" body="Learn React with us" />
            </ul>
        </>    
    );
}

export default PostsList;
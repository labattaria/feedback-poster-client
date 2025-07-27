import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import styles from './PostsList.module.scss';
import Modal from "../Modal/Modal";
import { useState } from "react";

function PostsList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);

    const addPostHandler = (postData) => {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>  
            {isPosting &&
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onCancel={onStopPosting}
                        onAddPost={addPostHandler}
                    />
                </Modal>}

            {posts.length > 0 && (
                <ul className={styles.posts}>
                    {posts.map(({ body, author }, index) => (
                        <Post key={index} body={body} author={author} />
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
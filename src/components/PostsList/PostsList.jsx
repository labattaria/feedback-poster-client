import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import styles from './PostsList.module.scss';
import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";

function PostsList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    const addPostHandler = (postData) => {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    useEffect(() => {
        const fetchPosts = async () => {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            setPosts(resData.posts);
            setIsFetching(false);
        }

        fetchPosts();
    }, []);

    return (
        <>  
            {isPosting &&
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onCancel={onStopPosting}
                        onAddPost={addPostHandler}
                    />
                </Modal>}

            {!isFetching && posts.length > 0 && (
                <ul className={styles.posts}>
                    {posts.map(({ body, author }, index) => (
                        <Post key={index} body={body} author={author} />
                    ))}
                </ul>
            )}

            {!isFetching && posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}

            {isFetching && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <p>Loading posts...</p>
                </div>
            )}
        </>
    );
}

export default PostsList;
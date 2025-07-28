import Post from "../Post/Post";
import styles from './PostsList.module.scss';
import { useLoaderData } from 'react-router-dom';

function PostsList() {
    const posts = useLoaderData();

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

    return (
        <>  
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
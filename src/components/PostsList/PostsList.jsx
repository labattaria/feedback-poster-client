import { useState } from "react";
import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import styles from './PostsList.module.scss';

function PostsList() {
    const [bodyValue, setBodyValue] = useState('');
    const [authorValue, setAuthorValue] = useState('');

    const bodyChangeHandler = (e) => {
        setBodyValue(e.target.value);
    }

    const authorChangeHandler = (e) => {
        setAuthorValue(e.target.value);
    }

    return (
        <>
            <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
            <ul className={styles.posts}>
                <Post author={authorValue} body={bodyValue} />
                <Post author="Manuel" body="Learn React with us" />
            </ul>
        </>    
    );
}

export default PostsList;
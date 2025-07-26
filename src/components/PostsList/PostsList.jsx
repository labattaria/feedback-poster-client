import { useState } from "react";
import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import styles from './PostsList.module.scss';
import Modal from "../Modal/Modal";

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
            <Modal>
                <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
            </Modal>
            
            <ul className={styles.posts}>
                <Post author={authorValue} body={bodyValue} />
                <Post author="Manuel" body="Learn React with us" />
            </ul>
        </>    
    );
}

export default PostsList;
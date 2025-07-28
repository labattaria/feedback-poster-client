import { useState } from 'react';
import styles from './NewPost.module.scss';
import Modal from '../../components/Modal/Modal';

function NewPost({ onCancel, onAddPost }) {
  const [bodyValue, setBodyValue] = useState('');
  const [authorValue, setAuthorValue] = useState('');

  const bodyChangeHandler = (e) => {
      setBodyValue(e.target.value);
  }

  const authorChangeHandler = (e) => {
      setAuthorValue(e.target.value);
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const postData = {
      body: bodyValue,
      author: authorValue
    }

    onAddPost(postData);
    onCancel();
  }

  return (
    <Modal>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={authorChangeHandler} />
        </p>
        <p className={styles.actions}>
          <button type='button' onClick={onCancel}>Cancel</button>
          <button type='submit'>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
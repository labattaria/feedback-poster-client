import { Link, Form, redirect, ActionFunctionArgs } from 'react-router-dom';
import styles from './NewPost.module.scss';
import Modal from '../../components/Modal/Modal';
import type { PostWithAuthor } from '../../../types/post';

export default function NewPost() {
  return (
    <Modal>
      <Form method="post" className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={styles.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const postData = Object.fromEntries(formData) as Omit<PostWithAuthor, 'id'>;

  await fetch('https://feedback-poster-server.onrender.com/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return redirect('/');
}
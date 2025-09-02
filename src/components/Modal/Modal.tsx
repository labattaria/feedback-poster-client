import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Modal.module.scss';

interface ModalProps {
  children: ReactNode;
}

function Modal({ children }: ModalProps) {
  const navigate = useNavigate();

  const onCloseHandler = () => {
    navigate('/');
  };

  return (
    <>
      <div className={styles.backdrop} onClick={onCloseHandler} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
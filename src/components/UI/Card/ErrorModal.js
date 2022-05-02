import React from 'react';

import Card from './Card';
import styles from './ErrorModal.module.css';

const ErrorModal = props => {
  return(
    <div>
      <div className={styles.backdrop}/>
        <Card className={styles.modal}>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles.content}>
            {props.message}
          </div>
          <footer className={styles.actions}>
            <button onClick={props.onError} className={styles.button}>Okay</button>
          </footer>
        </Card>
    </div>
  )
}

export default ErrorModal;
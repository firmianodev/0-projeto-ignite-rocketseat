import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';

export const Comment = () => {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/firmianodev.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Firmiano</strong>
                            <time dateTime="">cerca de uma hora atras</time>
                        </div>
                        <button title='Deletar comentario'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p></p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>0</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
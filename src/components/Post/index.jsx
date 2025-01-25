import { Comment } from '../Comment';

import styles from './Post.module.css';

export const Post = () => {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/firmianodev.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Matheus Firmiano</strong>
                        <span>Full Stack Developer</span>
                    </div>
                </div>

                <time title='' dateTime=""></time>
            </header>
            <div className={styles.content}>
                <p></p>
                <p></p>
                <p><a href=""></a></p>
            </div>

            <form className={styles.commentForm} action="">
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='deixe um comentario'
                />
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>

            </form>
            <div className={styles.commentsList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}
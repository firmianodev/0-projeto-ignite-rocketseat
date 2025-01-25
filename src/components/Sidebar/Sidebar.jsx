import { PencilLine } from 'phosphor-react'

import styles from './Siderbar.module.css';

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://github.com/firmianodev.png" alt="" />
            <div className={styles.profile}>
                <img src="https://github.com/firmianodev.png" alt="" />
                <strong>Matheus Firmiano</strong>
                <span>Full Stack Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
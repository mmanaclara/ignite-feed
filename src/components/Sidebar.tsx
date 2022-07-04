import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css'

import coverImg from '../assets/profile-cover.png';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={coverImg} />

            <div className={styles.profile}> 
                <div className={styles.avatar}>
                  <Avatar src="https://github.com/mmanaclara.png" />
                </div>
                <strong>Clara Moreira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
              <a href="/">
                <PencilLine size={20} />
              Editar seu perfil  
              </a>  
            </footer>
        </aside>
    );
}
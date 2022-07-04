import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto #nlw #rocketseat' },
    ],
    publishedAt: new Date('2022-06-25 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/mmanaclara.png',
      name: 'Clara Moreira',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto #nlw #rocketseat' },
    ],
    publishedAt: new Date('2022-06-28 12:30:00'),
  },
];

export function App() {

  return (
   <>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {posts.map(post => {
          return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
      </main>
    </div>
   </>
  )
}


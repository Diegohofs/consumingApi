import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import styles from './App.module.css';
import './global.css';
import { Post } from './types/Post'
import { Posts } from './components/Posts'
import { PostForm } from './components/PostForm';
import { api } from './api'

function App() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadPosts()
  }, [])

  async function loadPosts() {
    try {
      setLoading(true)
      let data = await api.getAllPosts()
      setLoading(false)
      setPosts(data)
    } catch (e) {
      console.log(e)
    }
  }

  async function handleAdd(title: string, body: string) {
    let data = await api.addNewPost(title, body, 1)
    if (data.id) {
      alert('Post adicionado com sucesso!')
    } else {
      alert('Ocorreu algum erro')
    }
  }


  return (
    <div className={styles.wrapper}>
      {loading &&
        <h2>Carregando conteúdo...</h2>
      }

      <PostForm onAdd={handleAdd} />

      {!loading && posts.length > 0 &&
        <div>
          <h1>Total de Posts {posts.length}</h1>
          {posts.map((post) => {
            return (
              <Posts
                key={post.id}
                title={post.title}
                body={post.body}
                id={post.id}
                userId={post.userId}
              />
            )
          })}
        </div>
      }

      {!loading && posts.length === 0 &&
        <h2>Não há posts para exibir</h2>
      }
    </div>
  )
}

export default App

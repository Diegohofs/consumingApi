import { Post } from '../../types/Post'
import styles from './Posts.module.css'

export function Posts ({title, body, userId, id} : Post) {
    return (
        <>
            <div className={styles.post}>
                <h2>{title}</h2>
                <small>#{id} - Usuário: {userId}</small>
                <p>{body}</p>
            </div>
        </>
    )
}
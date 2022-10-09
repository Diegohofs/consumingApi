import styles from './PostForm.module.css';

import { useState, ChangeEvent, FormEvent } from 'react';

type Props = {
  onAdd: (title: string, body: string) => void;
}

export function PostForm({ onAdd }: Props) {
  const [addTitleText, setAddTitleText] = useState('')
  const [addBodyText, setAddBodyText] = useState('')

  function handleAddTitleChange(e: ChangeEvent<HTMLInputElement>) {
    setAddTitleText(e.target.value)
  }

  function handleAddBodyChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setAddBodyText(e.target.value)
  }

  async function handleSubmitNewPost(e: FormEvent) {
    e.preventDefault()

    if (addTitleText && addBodyText) {
      onAdd(addTitleText, addBodyText)
    } else {
      alert('Preencha os campos!')
    }
  }

  return (
    <fieldset className={styles.field}>
      <form onSubmit={handleSubmitNewPost}>
        <legend>Adicionar Novo Post</legend>
        <input
          value={addTitleText}
          onChange={handleAddTitleChange}
          className={styles.input}
          type='text'
          placeholder='Digite um título'
        />
        <textarea
          className={styles.textArea}
          value={addBodyText}
          onChange={handleAddBodyChange}
        >
        </textarea>
        <button className={styles.button}>Adicionar</button>
      </form>
    </fieldset>
  )
}
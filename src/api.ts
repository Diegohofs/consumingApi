const BASE = 'https://jsonplaceholder.typicode.com'

export const api = {
    getAllPosts: async () => {
        let response = await fetch(`${BASE}/posts`)
        let data = await response.json()
        return data
    },
    addNewPost: async (title: string, body: string, userId: number) => {
        let response = await fetch(`${BASE}/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, body, userId }),
            headers: { 'Content-Type': 'application/json' }
        })
        let data = await response.json();
        return data
    }
}
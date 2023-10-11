import type { ServerComponent } from 'react'

interface Post {
  id: number
  title: string
  body: string
  userId: number
}
const getAllPost = async (): Promise<Post[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

const Page: ServerComponent = async () => {
  const posts = await getAllPost()
  return (
    <div id="route-handlers" className="container grid place-content-center">
      <h1 className="text-2xl">route-handlers</h1>
      <ul className="list-disc">
        {posts.map((v, i) => (
          <li key={i}>{v.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Page

const getAllPost = async (): Promise<any> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res
}

export async function GET(_request: Request): Promise<any> {
  const res = await getAllPost()

  return Response.json(res)
}

const url: string = "https://jsonplaceholder.typicode.com/posts/";

export default async function fetchArticle(id:string) {
    const res = await fetch(url+id+'/comments')

    if (!res.ok) throw new Error('failed to fetch articles')

    return res.json()
}
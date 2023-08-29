const url: string = "https://jsonplaceholder.typicode.com/posts/";

export default async function fetchArticles( ) {
    const res = await fetch(url)

    if (!res.ok) throw new Error('failed to fetch articles')

    return res.json()
}
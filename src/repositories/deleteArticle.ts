const url: string = "https://jsonplaceholder.typicode.com/posts/";

export default async function deleteArticle(id: string | undefined) {
    const res = await fetch(url + id, {
        method: "DELETE",
    })

    if (!res.ok) throw new Error('failed to delete article')

    return res.json()
}
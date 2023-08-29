import {Post} from "@/types/Post";

const url: string = "https://jsonplaceholder.typicode.com/posts";

export default async function createArticle(data: Post) {
    const res = await fetch(url, {
         method: "POST",
         body: JSON.stringify(data),
         headers: {
             "Content-type": "application/json; charset=UTF-8",
         },
    })

    if (!res.ok) throw new Error('failed to create article')

    return res.json()
}
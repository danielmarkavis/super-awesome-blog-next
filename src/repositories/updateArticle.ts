import {Post} from "@/types/Post";

const url: string = "https://jsonplaceholder.typicode.com/posts/";

export default async function updateArticle(data: Post) {
    const res = await fetch(url + data.id, {
         method: "PUT",
         body: JSON.stringify(data),
         headers: {
             "Content-type": "application/json; charset=UTF-8",
         },
    })

    if (!res.ok) throw new Error('failed to update article')

    return res.json()
}
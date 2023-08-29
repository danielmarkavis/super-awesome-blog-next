import React, {Suspense} from "react";
import {Post} from "@/types/Post";
import fetchArticle from "@/repositories/fetchArticle";
import PostEdit from "@/app/admin/components/forms/PostEdit"
import Loading from "@/components/Loading";

type Params = {
    params: {
        articleId: string
    }
}

export default async function Edit({params: {articleId}}: Params) {
    const recordsData: Promise<Post> = fetchArticle(articleId);

    const data = await recordsData

    return (
        <>
            <h1 className="text-center p-5 text-accent">
                Welcome to super awesome blog.
            </h1>

            <div className="container mx-auto">
                <Suspense fallback={<Loading/>}>
                    <PostEdit post={data}/>
                </Suspense>
            </div>
        </>
    )
}

import React, {Suspense} from "react";
import {Post} from "@/types/Post";
import fetchArticle from "@/repositories/fetchArticle";
import PostCreateEdit from "@/app/admin/components/forms/PostCreateEdit"
import Loading from "@/components/Loading";

type Params = {
    params: {
        articleId: string
    }
}

export default function Edit({ params: { articleId } }: Params) {
    const recordsData: Promise<Post> = fetchArticle(articleId);

    return (
        <>
            <h1 className="text-center p-5 text-accent">
                Welcome to super awesome blog.
            </h1>

            <div className="container mx-auto">
                <Suspense fallback={<Loading />}>
                    <form action="">
                        <PostCreateEdit promise={recordsData} />
                    </form>
                </Suspense>
            </div>
        </>
    )
}

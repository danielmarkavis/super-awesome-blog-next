import React, {Suspense} from "react";
import {Post} from "@/types/Post";
import {Comment} from "@/types/Comment";
import fetchArticle from "@/repositories/fetchArticle";
import fetchComments from "@/repositories/fetchComments";
import Article from "@/app/blog/[articleId]/components/Article";
import Comments from "@/app/blog/[articleId]/components/Comments";
import Loading from "@/components/Loading";

type Params = {
    params: {
        articleId: string
    }
}

export default function Blog({ params: { articleId } }: Params) {
    const recordsData: Promise<Post> = fetchArticle(articleId);
    const commentsData: Promise<Comment[]> = fetchComments(articleId);

    return (
        <>
            <h1 className="text-center p-5 text-accent">
                Welcome to super awesome blog.
            </h1>

            <div className="container mx-auto">
                <Suspense fallback={<Loading />}>
                    <Article promise={recordsData} />
                    <div className="container mx-auto py-5 md:max-w-lg">
                        <h3 className="text-xl font-bold text-primary mb-3 pt-3 border-t border-accent">
                            Comments
                        </h3>
                        <Comments promise={commentsData} />
                    </div>
                </Suspense>
            </div>
        </>
    )
}

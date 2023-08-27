import {Suspense} from "react";
import fetchArticles from "@/repositories/fetchArticles";
import Articles from "@/app/components/Articles";
import Loading from "@/components/Loading";
import {Post} from "@/types/Post";

export default function Home() {
    const recordsData: Promise<Post[]> = fetchArticles();

    return (
        <>
            <h1 className="text-center p-5 text-accent">
                Welcome to super awesome blog.
            </h1>

            <div className="container mx-auto">
                <Suspense fallback={<Loading />}>
                    <div className="grid md:grid-cols-2 gap-5">
                        <Articles promise={recordsData} />
                    </div>
                </Suspense>
            </div>
        </>
    )
}

import React, {Suspense} from "react";
import PostCreate from "@/app/admin/components/forms/PostCreate"
import Loading from "@/components/Loading";

export default function Create() {
    return (
        <>
            <h1 className="text-center p-5 text-accent">
                Welcome to super awesome blog.
            </h1>

            <div className="container mx-auto">
                <Suspense fallback={<Loading />}>
                   <PostCreate />
                </Suspense>
            </div>
        </>
    )
}

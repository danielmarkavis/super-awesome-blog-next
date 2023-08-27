import React, {Suspense} from "react";
import Link from "next/link";
import {Post} from "@/types/Post";
import fetchArticles from "@/repositories/fetchArticles";
import AdminArticles from "@/app/admin/components/AdminArticles";
import Loading from "@/components/Loading";


export default function Home() {
    const recordsData: Promise<Post[]> = fetchArticles();

    return (
        <>
            <div className="container mx-auto p-5 w-100 flex items-center">
                <h2 className="text-lg font-bold text-primary">Articles</h2>
                <Link
                    href="/admin/create"
                    className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Create
                </Link>
            </div>

            <div className="container mx-auto">
                <Suspense fallback={<Loading />}>
                   <AdminArticles promise={recordsData} />
                </Suspense>
            </div>
        </>
    )
}

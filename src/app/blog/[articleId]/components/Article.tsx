import {Post} from "@/types/Post";

type Props = {
    promise: Promise<Post>
}

export default async function Articles({promise}: Props) {
    const article = await promise

    return (
        <section>
            <div className="container mx-auto py-5 md:max-w-lg">
                <div className="mb-5">
                    <h1 className="text-2xl font-bold mb-4 text-primary uppercase">
                        {article.title}
                    </h1>
                    <p className="text-sub">
                        {article.body}
                    </p>
                </div>
            </div>
        </section>
    )
}

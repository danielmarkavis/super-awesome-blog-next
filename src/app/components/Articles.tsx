import {Post} from "@/types/Post";
import Link from "next/link";

type Props = {
    promise: Promise<Post[]>
}

export default async function Articles({promise}: Props) {
    const records = await promise

    return records.map(record => {
        return (
            <Link
                href={'/blog/' + record.id}
                className="rounded overflow-hidden shadow-lg bg-level-1 hover:bg-level-2"
                key={record.id}
            >
                <div className="px-6 py-4">
                    <div className="font-bold text-primary text-xl mb-2">
                        {record.title}
                    </div>
                    <p className="text-sub text-base">
                        {record.body}
                    </p>
                </div>
            </Link>
        )
    })
}

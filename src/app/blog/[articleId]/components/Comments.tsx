import {Comment} from "@/types/Comment";
import Link from "next/link";

type Props = {
    promise: Promise<Comment[]>
}

export default async function Comments({promise}: Props) {
    const comments = await promise

    return comments.map(comment => {
        return (
            <div key={comment.id} className="mb-3">
                <div className="flex">
                    <div className="mr-3 mt-1 text-accent">
                        <Link href={'emailto:' + comment.email.toLocaleLowerCase()}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-12 h-12"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </Link>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-primary">
                            {comment.name}
                        </h4>
                        <p className="text-sub">
                            {comment.body}
                        </p>
                    </div>
                </div>
            </div>
        )
    })
}

import React from "react";
import Link from "next/link";
import DataTable from "@/app/components/data-table/DataTable";
import TableHeading from "@/app/components/data-table/partials/TableHeading"
import TableCell from "@/app/components/data-table/partials/TableCell"
import {Post} from "@/types/Post";

type Props = {
    promise: Promise<Post[]>;
}

const headers: string[] = [
    "Title"
];

export default async function AdminArticles({promise}: Props) {
    const records = await promise

    const headerContent = headers.map((header, index) => {
        return (
            <tr key={header}>
                <TableHeading slot={header} text="left" />
            </tr>
        )
    });

    const bodyContent = records.map((record, index) => {
        return (
            <tr key={record.id}>
                <TableCell slot={record.title}/>
                <TableCell slot={
                    <div className="flex gap-2 justify-end">
                        <Link
                            href={'/admin/edit/' + record?.id}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Edit
                        </Link>
                    </div>
                }/>
            </tr>
        )
    });

    return (
        <DataTable
            headerSlot={headerContent}
            contentSlot={bodyContent}
        />
    )
}
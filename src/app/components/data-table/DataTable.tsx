import {ReactNode} from "react";

interface Props {
    headerSlot: ReactNode,
    bodySlot: ReactNode
}

export default async function DataTable({headerSlot,bodySlot}:Props) {
    return (
        <table className="w-full bg-level-1 rounded-lg shadow-sm border border-gray-300 dark:border-gray-800 overflow-x-auto">
            <thead>
                {headerSlot}
            </thead>
            <tbody>
                {bodySlot}
            </tbody>
        </table>
    )
}

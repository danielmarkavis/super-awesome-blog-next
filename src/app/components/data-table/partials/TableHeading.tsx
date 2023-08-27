import {ReactNode} from "react";

interface Props {
    slot: ReactNode,
    text: string
}

export default function TableCell({slot, text}:Props) {
    return (
        <th className={"text-"+text||"left"}>
            <div className="flex">
                <div
                    className="uppercase whitespace-no-wrap hover:text-green-600 focus:text-green-600 transition-colors duration-100 focus:outline-none flex-grow py-2 px-4 truncate"
                >
                    {slot}
                </div>
            </div>
        </th>
    )
}
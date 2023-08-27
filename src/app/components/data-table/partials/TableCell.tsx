import {ReactNode} from "react";

interface Props {
    slot: ReactNode,
}

export default function TableCell({slot}:Props) {
  return (
      <td className="py-2 px-4">
        {slot}
      </td>
  )
}
export default function TableCell({slot}) {
  return (
      <td className="py-2 px-4">
        {slot}
      </td>
  )
}
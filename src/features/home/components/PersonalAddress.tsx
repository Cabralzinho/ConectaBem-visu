import { MdEdit } from "react-icons/md";


export const PersonalAddress = () => {
  return (
    <div className="flex items-center justify-center lg:justify-start gap-2 cursor-pointer">
      <span>Rua Fulaninho, 000, cidade, estado</span>
      <MdEdit />
    </div>
  )
}
import logo from "../assets/CSlogo.png"
import { MdOutlineSettings } from "react-icons/md"

function Sidebar() {
    return (
        <div className="flex flex-row items-center justify-between p-4 m-4 shadow-[0_2px_10px_rgba(255,255,255,0.15)] rounded-[20px]">

            <img
                src={logo}
                alt="ClipStack"
                className="w-32 sm:w-40 md:w-48 h-auto object-contain"
            />

            <MdOutlineSettings className="w-6 h-6 text-gray-400 cursor-pointer" />

        </div>
    )
}

export default Sidebar;
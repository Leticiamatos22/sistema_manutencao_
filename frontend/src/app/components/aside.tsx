import Image from "next/image";
import { NavLink } from "./navlink";

export function Aside() {
    return(
        <aside className="w-64 p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-black">
            <Image src={"/image/logo.png"} className="w-full" alt="Logo" width={240} height={240} />
            <NavLink />
        </aside>
    );
}

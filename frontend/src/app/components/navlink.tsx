import { FaBuilding, FaTools } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { MdDashboard, MdForklift } from "react-icons/md";
import Link from 'next/link';

export function NavLink() {
    const links = [
        { target: "/", text: "Dashboard", icon: <MdDashboard /> },
        { target: "#", text: "Ambientes", icon: <FaBuilding /> },
        { target: "/registro", text: "Equipamentos", icon: <MdForklift /> },
        { target: "/relatorios", text: "Manutenções", icon: <FaTools /> },
        { target: "#", text: "Usuários", icon: <FaUsers /> },
        { target: "/machine", text: "Cadastro de Máquinas", icon: <FaTools /> },
    ];

    return (
        <nav className="space-y-4 flex flex-col mt-8">
            {links.map((obj) => (
                <Link href={obj.target} key={obj.text} className="flex items-center gap-4 hover:font-semibold">
                    {obj.icon}
                    {obj.text}
                </Link>
            ))}
        </nav>
    );
}
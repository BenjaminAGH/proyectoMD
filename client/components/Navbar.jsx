import Link from "next/link"

export default function Navbar() {
    return(
        <nav className="flex items-center justify-between flex-wrap bg-slate-800 p-6">
            <Link className="text-white text-2xl font-bold font-mono" href={'/'}>
                CONTRA EL FUEGO
            </Link>
            <Link className="text-center block border border-slate-800 rounded py-2 px-9 bg-slate-700 hover:bg-blue-900 text-white font-bold font-mono" href={'/addIncident'}>
                Registrar Incidente
            </Link>
        </nav>
    )
}
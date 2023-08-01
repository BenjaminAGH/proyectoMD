import RegisterList from "@/components/RegisterList";
import Link from "next/link"

export default function Incidents() {
  return (
    <div>
      <div ClassName="lex-row">
        <Link className="text-center inline-block border-slate-800 rounded py-4 px-36 mx-3 bg-rose-800 hover:bg-red-700 text-white font-bold font-mono" href={'/'}>
          Cerrar Sesión
        </Link>
        <Link className="text-center inline-block border-slate-800 rounded py-4 px-96 bg-slate-700 hover:bg-blue-900 text-white font-bold font-mono" href={'/addIncident'}>
          Registrar Incidente
        </Link>
      </div>
      <RegisterList/>
    </div>
  )
}

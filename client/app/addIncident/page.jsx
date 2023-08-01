"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";    
import { setCookie, getCookie } from '@/utils/cookie';

export default function AddIncident() {

    const userEmail = getCookie('email');

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [tipo, setTipo] = useState("");
    const [gravedad, setGravedad] = useState("");
    const [completado, setCompletado] = useState(false);
    const handleClick = () => setCompletado(!completado);
    const [usuario, setId] = useState(userEmail);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!titulo || !descripcion || !tipo || !gravedad){
            alert('todos los campos son requeridos')
            return;
        }

        try {
            const res = await fetch('http://localhost:5000/api/incidentes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify({ titulo, descripcion, tipo, gravedad, completado, usuario })
                
            });

            if (res.ok){
                router.push("/incidents");
                router.refresh();   
            } else {
                throw new Error("Error al crear el incidente");
            }

        } catch (error) {
            console.log(error);
        }
        
    };

    return (
        <div className="block m-auto max-w-md rounded-lg bg-slate-200 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex flex-row">
                    <Link className="text-xs my-2" href={'/incidents'}>
                        ✖️
                    </Link>
                    <h1 className="text-slate-600 text-2xl font-bold font-mono ml-4">Nuevo Incidente</h1>

                    <div class="flex items-center mx-9">
                        <input 
                            id="default-checkbox" 
                            type="checkbox" 
                            onClick={handleClick}
                            value={completado} 
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">LISTO</label>
                    </div>
                </div>

                <hr class="my-1 h-0.5 border-t-0 bg-white" />
                
                <input 
                    onChange={(e)=> setTitulo(e.target.value)}
                    value={titulo}
                    className="rounded border border-slate-300 bg-slate-100 px-3 py-2" 
                    type="text" 
                    placeholder="Título del Incidente" 
                />
            
                <textarea 
                    onChange={(e)=> setDescripcion(e.target.value)}
                    value={descripcion}
                    id="message" 
                    rows="4" 
                    class="block p-2.5 w-full text-sm text-gray-900 bg-slate-100 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Describe brevemente lo sucedido...">
                </textarea>

                <div className="flex flex-row">
                    <select onChange={(e)=> setTipo(e.target.value)} value={tipo} id="tipe" class="bg-slate-100 border border-slate-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="" disabled selected hidden> Tipo</option>
                        <option value="Seguridad">Seguridad</option>
                        <option value="Equipo">Equipo</option>
                        <option value="Medico">Medico</option>
                    </select>

                    <select onChange={(e)=> setGravedad(e.target.value)} value={gravedad} id="tipe" class="ml-3 bg-slate-100 border border-slate-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="" disabled selected hidden >Gravedad</option>
                        <option value="Baja">Baja</option>
                        <option value="Media">Media</option>
                        <option value="Grave">Grave</option>
                    </select>
                </div>
                
                <div className='flex-row'>
                    <button type="submit" className="rounded-lg text-end bg-slate-700 font-bold text-white py-3 px-6 w-fit">
                        Agregar Incidente
                    </button>
                </div>

            </form>
        </div>   
    )
}
export default function EditIncidentForm() {
    return(
        <div className="block m-auto max-w-md rounded-lg bg-slate-200 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <form className="flex flex-col gap-3">
                <div className="flex flex-row"> 
                    <h1 className="text-blue-600 text-2xl font-bold font-mono ml-7">Editar Incidente</h1>

                    <label class="ml-10 relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer"/>
                        <div class="w-11 h-6 bg-rose-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[5.5px] after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                        <span class="ml-1.5 text-xs font-medium text-gray-900">Realizado </span>
                    </label>
                </div>

                <hr class="my-1 h-0.5 border-t-0 bg-white" />
                
                <input className="rounded border border-slate-300 bg-slate-100 px-3 py-2" type="text" placeholder="Título del Incidente" />
            
                <textarea id="message" 
                    rows="4" 
                    class="block p-2.5 w-full text-sm text-gray-900 bg-slate-100 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Describe brevemente lo sucedido...">
                </textarea>

                <div className="flex flex-row">
                    <select id="tipe" class="bg-slate-100 border border-slate-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="" disabled selected hidden> Tipo</option>
                        <option value="SE">Seguridad</option>
                        <option value="EQ">Equipo</option>
                        <option value="ME">Medico</option>
                    </select>

                    <select id="tipe" class="ml-3 bg-slate-100 border border-slate-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="" disabled selected hidden >Gravedad</option>
                        <option value="SE">Baja</option>
                        <option value="EQ">Media</option>
                        <option value="ME">Grave</option>
                    </select>
                </div>
                

                <button className="bg-slate-700 font-bold text-white py-3 px-6 w-fit">
                    Agregar Incidente
                </button>
            </form>
        </div>
    )
}
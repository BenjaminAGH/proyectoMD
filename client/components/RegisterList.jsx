import Link from 'next/link';
import RemoveBtn from './RemoveBtn';
import {HiPencilAlt} from 'react-icons/hi';

const getIncidents = async () => {
    try {
        const res = await fetch('http://localhost:5000/api/incidentes',{
            cache: 'no-store',
        });

        if(!res.ok){
            throw new Error("Failed to fetch incidents"); 
        }

        return res.json();

    } catch (error) {
        console.log("Error loading incidents", error);
    }
}

export default async function RegisterList() {
    const incidents = await getIncidents();

    return(
        <>
            {incidents.map((i) => (
                
                <div className='bg-slate-200 p-4 rounded border border-slate-300 my-4 flex justify-between gap-5 items-start'>
                    <div > 
                        <h2 className='font-bold font-mono text-2xl'>{i.titulo}</h2>

                        <div class="inline-block text-sm">
                            {'#️⃣'}{i.tipo}
                        </div>

                        <div class="inline-block ml-4 text-sm">
                            {'⚠️'}{i.gravedad}
                        </div>

                        <div class="inline-block ml-4 text-sm">
                            {i.completado ? '✅Completado' : '❎Sin Completar' }
                        </div>

                        <div class="inline-block ml-4 text-sm">
                            {'🌐'}{i.fecha}
                        </div>
                        
                        <div class="inline-block ml-4 text-sm">
                            {'👤'}{i.usuario}
                        </div>

                        <div className='text-justify'>{i.descripcion}</div>
                    </div>

                    
                    <div className='flex-col gap-2'>
                        <div className="flex">
                            <RemoveBtn id={i._id}/>
                            <Link href={`/editIncident/${i._id}`}>
                                <HiPencilAlt size={24}/>
                            </Link>
                        </div>
                        
                    </div>
                    
                </div>
            ))}
        </>
    )
}
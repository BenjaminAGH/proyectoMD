import Link from 'next/link';
import RemoveBtn from './RemoveBtn';
import {HiPencilAlt} from 'react-icons/hi';

export default function RegisterList() {
    return(
        <>
            <div className='bg-slate-200 p-4 rounded border border-slate-300 my-3 flex justify-between gap-5 items-start'>
                <div>
                    <h2 className='font-bold font-mono text-2xl'>Titulo Incidente</h2>
                    <div>Descripcion Titulo</div>
                </div>
                <div className='flex gap-2'>
                    <RemoveBtn/>
                    <Link href={'/editIncident/123'}>
                        <HiPencilAlt size={24}/>
                    </Link>
                </div>
            </div>
        </>
    )
}
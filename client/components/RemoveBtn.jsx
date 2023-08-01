'use client';

import {HiOutlineTrash} from 'react-icons/hi';
import { useRouter } from 'next/navigation';

export default function RemoveBtn({id}) {
    const router = useRouter();
    const removeIncidente = async () => {
        const confirmed = confirm('¿Estás seguro de eliminar este incidente?');

        if(confirmed){
            const res = await fetch(`http://localhost:5000/api/incidentes/${id}`, {
                method: 'DELETE',
            });

            if (res.ok){
                router.refresh();
            }
        }
    };

    return(
        <button onClick={removeIncidente} className='text-red-400'>
            <HiOutlineTrash size={24}/>
        </button>
    );
}
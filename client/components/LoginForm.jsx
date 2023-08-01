"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"
import { setCookie, getCookie } from '@/utils/cookie';

export default function addUser() {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if( !email || !contrasena){
        alert('todos los campos son requeridos')
        return;
    }

    try {
        const res = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({ email, contrasena})
        });

        const data = await res.json();
        const userEmail = data.usuario.email;

        if (res.ok){
          setCookie('email', userEmail);
          router.push("/incidents",);
          router.refresh();
        } else {
            throw new Error("Error al crear el usuario");
        }

    } catch (error) {
        console.log(error);
        alert('Correo o contraseña incorrectos')
    }
    
  };

  return (
    <div className="flex justify-center items-center">
      <div className="p-8 max-w-md w-full bg-slate-200 border-slate-300 rounded-lg shadow-md">
        <h2 className="text-slate-600 text-2xl font-bold font-mono">Iniciar Sesión</h2>
        <hr className="my-1 h-0.5 border-t-0 bg-white" />
        <form onSubmit={handleSubmit} >
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Escribe tu correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contraseña" className="block mb-2 font-medium">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              onChange={(e)=> setContrasena(e.target.value)}
              value={contrasena}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Escribe tu contraseña"
            />
          </div>
  
          <div className="flex justify-end">
            <Link className="px-44 underline text-left font-mono" href={'/addUser'}>
              Registrarse
            </Link>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-slate-700 text-white"
            >
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"

export default function addUser() {
  const [rut, setRut] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [admin, setAdmin] = useState("false");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!rut || !email || !contrasena){
        alert('todos los campos son requeridos')
        return;
    }

    try {
        const res = await fetch('http://localhost:5000/api/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({ rut, email, contrasena, admin})
        });

        console.log(res);

        if (res.ok){
            router.push("/");
            router.refresh();   
        } else {
            throw new Error("Error al crear el usuario");
        }

    } catch (error) {
        console.log(error);
        alert('Usuario ya existe')
    }
    
  };

  return (
    <div className="flex justify-center items-center">
      <div className="p-8 max-w-md w-full bg-slate-200 border-slate-300 rounded-lg shadow-md">
        <h2 className="text-slate-600 text-2xl font-bold font-mono">Registro</h2>
        <hr className="my-1 h-0.5 border-t-0 bg-white" />
        <form onSubmit={handleSubmit} >
          <div className="mb-4">
            <label htmlFor="rut" className="block mb-2 font-medium">
              Rut
            </label>
            <input
              type="text"
              id="rut"
              onChange={(e)=> setRut(e.target.value)}
              value={rut}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Escribe tu nombre de usuario"
            />
          </div>
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
            <Link className="px-56 underline text-left font-mono" href={'/'}>
              atras
            </Link>

            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-slate-700 text-white"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
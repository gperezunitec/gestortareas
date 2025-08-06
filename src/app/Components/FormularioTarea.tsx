'use client'

import {useEffect, useState} from "react";
import {useContextGestor} from "@/app/Provider/GestorProvider";
import {Tarea} from "@/app/Models/Tarea";

export default function FormularioTarea() {

    const [nombreTarea,setNombreTarea]=useState<string>('')
    const [descripcionTarea, setDescripcionTarea]=useState<string>('');
    const [estadoTarea, setEstadoTarea]=useState<string>('');

    const {agregarTarea, tarea}= useContextGestor();


    function agregarTareaFormulario(e:React.FormEvent){

        e.preventDefault();

        if(nombreTarea=='') return


        let tarea: Tarea ={
            id: Date.now(),
            titulo:nombreTarea,
            descripcion:descripcionTarea,
            estado:estadoTarea,
        }

        agregarTarea(tarea);
        alert('Tarea agregada')

    }

    useEffect(()=>{
        alert('Cantidad de elementos en la lista' + tarea.length)

    },[tarea])

    return (
        <div>
            <h2>Formulario Para Agregar Tarea</h2>

            <form onSubmit={agregarTareaFormulario}>

                <input type="text" placeholder='Nombre Tarea'
                       value={nombreTarea}
                       onChange={(e)=>setNombreTarea(e.target.value)}
                />

                <input type="text" placeholder='Descripcion Tarea'
                       value={descripcionTarea}
                       onChange={(e)=>setDescripcionTarea(e.target.value)}
                />

                <input type="text" placeholder='Estado Tarea'
                       value={estadoTarea}
                       onChange={(e)=>setEstadoTarea(e.target.value)}
                />



                <button type='submit'>Agregar Tarea</button>
            </form>
        </div>
    )
}
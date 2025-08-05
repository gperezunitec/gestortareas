import {ReactNode, useContext, useState} from "react";
import {Tarea} from "@/app/Models/Tarea";
import {ContextGestor} from "@/app/Context/ContextGestor";


interface Plantilla{
    children:ReactNode
}


export const GestorProvider = ({children}:Plantilla) => {

    const [tarea, setTarea] = useState<Tarea[]>([]);

    function agregarTarea(item:Tarea){
        setTarea([...tarea,item]);
    }


    return (
        <>
        <ContextGestor.Provider value={{tarea,agregarTarea}}>
            {children}
        </ContextGestor.Provider>
        </>
    )

}

export function useContextGestor(){
    return useContext(ContextGestor);
}
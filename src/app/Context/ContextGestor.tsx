import {createContext} from "react";
import {Tarea} from "@/app/Models/Tarea";

export const ContextGestor=createContext({

    tarea:[] as Tarea[],
    agregarTarea:(item: Tarea) =>{}

})
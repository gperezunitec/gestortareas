'use client'
import {useContextGestor} from "@/app/Provider/GestorProvider";

export const TablaTarea = () => {

    const {tarea}=useContextGestor()


    return (
        <>
            <h2>Lista de Tarea</h2>

            <table border={1}>
                <thead>
                <th>id Tarea</th>
                <th>Titulo</th>
                <th>Descripcion</th>
                <th>Estado</th>
                </thead>
                <tbody>
                {
                    tarea.map((tarea)=>(
                        <tr key={tarea.id}>
                            <td>{tarea.id}</td>
                            <td>{tarea.titulo}</td>
                            <td>{tarea.descripcion}</td>
                            <td>{tarea.estado}</td>

                        </tr>

                    ))
                }
                </tbody>
            </table>
        </>
    )

}
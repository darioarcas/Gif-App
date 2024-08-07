import { useEffect, useState } from "react";
import GetGifs from "../helpers/GetGifs";




export const useFetchGifs = (categoria)=>{
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(()=>{

        // GetGifs devuelve una promesa (async), debo usar then
        GetGifs(categoria).then((imgs)=>{
            setState(
                {
                    data: imgs,
                    loading: false
                }
            );
        });
    }, [categoria]);// Cuando la categoria cambia la funcion useEffect se vuelve a ejecutar

    return state; //{data:[], loading:true}
}
import React, { useState } from "react";
import PropTypes from 'prop-types';



export const AddCategory = ({setCategorias})=>{
    const [inputvalor, setInputValor] = useState('');

    const busqueda =(e)=>{
        setInputValor(e.target.value);
    }

    const submitForm = (e)=>{
        // Previene que se recargue la pagina
        e.preventDefault();
        if(inputvalor.trim().length > 2){
            setCategorias(c => [inputvalor, ...c]);
            setInputValor('');
        }
        
    }


    return (
        <form onSubmit={(e)=>submitForm(e)}>

            <h2>AddCategory</h2>
            <input type="text" value={inputvalor} onChange={busqueda}/>
        </form>
    )
}

AddCategory.prototype = {
    setCategorias: PropTypes.func.isRequired
}
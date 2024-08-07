import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({categoria})=>{

    const {data:images, loading} = useFetchGifs(categoria);
    // console.log(data);
    // console.log(loading);

        
        return (
            <>
                <h3 className='animate__animated animate__fadeIn'>{categoria}</h3>
                {loading ? <p className='animate__animated animate__flash'>Cargando...</p> : null}
                <div className='card-grid'>
                    
                    {images.map((img)=>(
                        <GifGridItem
                            key={img.id}
                            {...img} 
                        />
                    ))}
                </div>
            </>
        );

}
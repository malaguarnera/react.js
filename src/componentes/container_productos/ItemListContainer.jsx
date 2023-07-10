import React from 'react';
import data from "../data/Productos.json";
import { useState } from 'react';
import { useEffect } from 'react';
import { ItemList } from './ItemList';

export const Container_productos = () => {

 const [Productos, setProductos] = useState([]);

  const consultarProductos = () => {

    return new Promise((resolve,reject)=>{

      resolve(data);
    })
  }
    useEffect(()=>{
          consultarProductos()
            .then((res)=>{
              setProductos(res);
            })
    }, [])

  return (
    <div>
      <ItemList key = {Productos.id} Productos = {Productos}/>
    </div>
  )
}

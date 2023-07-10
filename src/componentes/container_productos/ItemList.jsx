import React from 'react'


export const ItemList = ({Productos}) => {
  return (
    <div>
          {
          Productos.length > 0 && 
          Productos.map((Producto) =>{
            return (
                <div>
                <h2>{Producto.nombre} </h2>
                <p>${Producto.precio}</p>
                <p>{Producto.descripcion}</p>
                
              </div>
            )
          })
         
        }
    </div>
  )
}

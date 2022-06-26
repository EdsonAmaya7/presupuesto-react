import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

    const formatearCantdad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>

        <div>
            <p>Gráfica aqui</p>
        </div>

        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto</span> {formatearCantdad(presupuesto)}
            </p>
            <p>
                <span>Disponible</span> {formatearCantdad(0)}
            </p>
            <p>
                <span>Gastado</span> {formatearCantdad(0)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto;
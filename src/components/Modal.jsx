import { useState, useEffect } from "react";
import Mensaje from './Mensaje'
import CerrarBtn from "../img/cerrar.svg";

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar }) => {

  const [ nombre, setNombre ] = useState('');
  const [ cantidad, setCantidad ] = useState(0);
  const [ categoria, setCategoria ] = useState('');
  const [ fecha, setFecha ] = useState('');
  const [ mensaje, setMensaje ] = useState('')
  const [ id, setId ] = useState('')

  useEffect( () => {
    if( Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setFecha(gastoEditar.fecha)
      setId(gastoEditar.id)
    }
  }, [])


  const ocultarModal = () => {
    setAnimarModal(false);
    setGastoEditar({})
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = e =>{
    e.preventDefault();

    if( [ nombre, cantidad, categoria].includes('') ){
      setMensaje('Todos Los Campos Son Obligatorios');
     
      setTimeout(() => {
        setMensaje('')
      }, 2500);
      return;
    }

    guardarGasto( {nombre, cantidad, categoria, fecha, id})
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="boton cerrar modal" onClick={ocultarModal} />
      </div>

      <form  onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend>{ gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto' }</legend>

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            id="nombre"
            placeholder="Añade el Nombre del Gasto"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad </label>
          <input
            type="number"
            id="cantidad"
            placeholder="Añade la cantidad del Gasto ej. 300"
            value={cantidad}
            onChange={ e => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>

          <select name="" id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>
            <option value="s">
              --seleccione--
            </option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input type="submit" value={ gastoEditar.nombre ? 'Guardar Cambios' : 'Añadir Gasto' } />
      </form>
    </div>
  );
};

export default Modal;

import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto  from "./ControlPresupuesto";
// rafce

const Header = ({ gastos, SetGastos, presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

     { isValidPresupuesto ? 
     (
        <ControlPresupuesto
        gastos={gastos}
        SetGastos={SetGastos}
        setPresupuesto={setPresupuesto}
        presupuesto={presupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        />
     ) :
     (
        <NuevoPresupuesto
      presupuesto ={presupuesto}
      setPresupuesto ={setPresupuesto}
      setIsValidPresupuesto={setIsValidPresupuesto}
      />
     ) }

      
    </header>
  );
};

export default Header;

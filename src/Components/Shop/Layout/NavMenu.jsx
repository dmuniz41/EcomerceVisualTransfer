import { Divider } from "antd";
import { NavLink } from "react-router-dom";

// TODO: HACER LA REDIRECCION DE LA PESTANNA DE PRODUCTOS

export const NavMenu = () => {
  return (
    <div className="h-12 flex w-full p-2 justify-center items-center bg-[#053582]">
      <NavLink className=" h-full flex justify-center items-center font-semibold p-2 text-white" to="/">Servicios</NavLink>
      <Divider type="vertical" className="bg-white"/>
      <NavLink className="h-full flex justify-center items-center font-semibold p-2 active:text-[#053582] text-white" to="/">Productos</NavLink>
    </div>
  );
};

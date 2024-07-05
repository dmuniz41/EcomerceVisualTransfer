import { Button, Image, Input } from "antd";
import { NavLink } from "react-router-dom";
import { UserCircleIcon } from "../../Icons/UserCircleIcon";
import TransferLogo from "../../../assets/logo transfermovil.svg"

const { Search } = Input;

// TODO: HACER NAVEGACION HACIA LAS PAGINAS DE LOGIN Y REGISTRO
export const TopMenu = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <section className="h-16 p-2 flex w-full items-center justify-center gap-8">
      <article className="items-center flex"> 
        <Image width={40} height={40} src={TransferLogo} preview={false}/>
      </article>
      <article className="flex w-[40%]">
        <Search
          placeholder="Buscar"
          allowClear
          enterButton={
            <Button
              style={{
                backgroundColor: "#053582",
                color: "white",
              }}
            >
              Buscar
            </Button>
          }
          size="large"
          onSearch={onSearch}
        />
      </article>
      <NavLink to="/auth/login" className="flex p-2 gap-2 border rounded-md h-10 justify-end items-center shadow-sm hover:shadow-md">
        <div className="flex ">
          <UserCircleIcon />
        </div>
        <div className="flex h-10 items-center">
          <span className="font-semibold">Entrar / Registrarse</span>
        </div>
      </NavLink>
    </section>
  );
};

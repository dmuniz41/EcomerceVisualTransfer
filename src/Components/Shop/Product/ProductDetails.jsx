import { useNavigate, useParams } from "react-router-dom";
import TransferImg from "../../../assets/2a1fc256932bb59e0024df1dc88916fbfd80683de0f44faaea939450ae2608ae_100.webp";
import { useState } from "react";
import { LeftArrowIcon } from "../../Icons/LeftArrowIcon";
import { Tooltip } from "antd";

export const ProductDetails = () => {
  const { name } = useParams();
  const [product, setProduct] = useState({
    name: name,
    description: "Descripcion del servicio",
    price: 100,
  });
  const navigate = useNavigate()
  const handleBack = ()=>{
    navigate(-1)
  }

  return (
    <section className="flex flex-col gap-2 w-full pt-10 px-[250px]">
      <Tooltip title="Anterior">
        <button onClick={handleBack} className="bg-white-500 rounded-full w-10 h-10 justify-center items-center flex transition ease-in delay-50 hover:shadow-md hover:bg-[#cccccc]">
          <LeftArrowIcon />
        </button>
      </Tooltip>
      <div className="flex rounded-md shadow-md w-full bg-white-500">
        <div className="w-[50%] flex justify-center p-8">
          <img src={TransferImg} className="aspect-square" alt="" />
        </div>
        <div className="grid w-full gap-8 p-8">
          <h3 className="font-bold text-xl">{product.name}</h3>
          <h6 className="font-semibold">{product.description}</h6>
          <h6 className="font-semibold">USD ${product.price.toFixed(2)}</h6>
          <button
            className="font-semibold text-lg flex justify-center bg-[#34b042] hover:bg-[#2a8d35] hover:shadow-lg uppercase transition ease-in delay-50 rounded-md text-white-500 py-2"
            type="primary"
            onClick={() => {
              console.log("Click btn");
            }}
          >
            Comprar
          </button>
        </div>
      </div>
    </section>
  );
};

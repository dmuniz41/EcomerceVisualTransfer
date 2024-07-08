import { useNavigate } from "react-router-dom";
import { Image, Tag } from "antd";

// TODO: ARREGLAR LOS ESTILOS DE LA CARD CUANDO EL TEXTO DEL TITULO TIENE MAS DE 2 LINEAS

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/product/${product.Name}`);
  };

  return (
    <article className="flex justify-between gap-2 flex-col shadow-md bg-white p-4 hover:shadow-xl">
      <div className="flex flex-col gap-2 hover:cursor-pointer" onClick={handleDetails}>
        <div className="w-full justify-center flex min-h-[140px]">
          <Image
            preview={false}
            src={`data:image/png;base64, ${product.Image}`}
            alt="serviceIMG"
            width={205}
            height={205}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="grow">
            <p className="font-bold">{product.Name}</p>
          </div>
          {product.Stock > 0 ? (
            <div className="">
              <Tag className=" justify-center rounded-md font-semibold" color="#3a79e1">
                {" "}
                Disponible
              </Tag>
            </div>
          ) : (
            <div className="">
              <Tag className=" justify-center rounded-md font-semibold" color="#ff3333">
                {" "}
                Agotado
              </Tag>
            </div>
          )}
          <span className="font-semibold">USD ${product?.Price?.toFixed(2)}</span>
        </div>
      </div>
      <button
        className="font-semibold uppercase justify-center transition ease-in delay-50 bg-[#34b042] hover:bg-[#2a8d35] rounded-md text-white-500 py-1.5 px-8"
        type="primary"
        onClick={() => {
          console.log("Click btn");
        }}
      >
        Comprar
      </button>
    </article>
  );
};

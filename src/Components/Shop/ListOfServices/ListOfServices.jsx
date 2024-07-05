import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { ProductCard } from "../Product/ProductCard";

export const ListOfServices = () => {
	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_API_URL}/Product`, {
				headers: {
					'Authorization': `Bearer ${Cookies.get('auth_token')}`
				}
			})
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	}, []);

	const [listOfProducts, setListOfProducts] = useState([
		// {
		//   // img: "",
		//   name: "SimTur",
		//   description: "Tarjetas Sim para turistas solo disponible en Cuba",
		//   price: 100,
		//   stock: 1,
		// },
		// {
		//   // img: "",
		//   name: "Servicio x",
		//   description: "Servicio 2",
		//   price: 200,
		//   stock: 0,
		// },
		// {
		//   // img: "",
		//   name: "Servicio x",
		//   description: "Servicio 3",
		//   price: 300,
		//   stock: 1,
		// },
		// {
		//   // img: "",
		//   name: "Servicio x",
		//   description: "Servicio 4",
		//   price: 400,
		//   stock: 0,
		// },
		// {
		//   // img: "",
		//   name: "Servicio x",
		//   description: "Servicio 5",
		//   price: 500,
		//   stock: 1,
		// },
		// {
		//   // img: "",
		//   name: "Servicio x",
		//   description: "Servicio 6",
		//   price: 100,
		//   stock: 1,
		// },
		// {
		//   // img: "",
		//   name: "Servicio x",
		//   description: "Servicio 7",
		//   price: 200,
		//   stock: 0,
		// },
		// {
		//   // img: "",
		//   name: "Servicio x",
		//   description: "Servicio 8",
		//   price: 300,
		//   stock: 1,
		// },
		// {
		//   // img: "",
		//   name: "Servicio x",
		//   description: "Servicio 9",
		//   price: 400,
		//   stock: 1,
		// },
		// {
		//   // img: "",
		//   name: "Servicio x",
		//   description: "Servicio 10",
		//   price: 500,
		//   stock: 1,
		// },
	]);

	return (
		<div className="grid-cols-4 grid gap-4 pb-2 overflow-auto px-[250px]">
			{listOfProducts.map((product, index) => {
				return (
					<div key={index}>
						<ProductCard product={product} />
					</div>
				);
			})}
		</div>
	);
};

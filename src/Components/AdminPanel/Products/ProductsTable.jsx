import { Table, Tooltip } from "antd";
import { useEffect, useState } from "react";

import { PlusIcon } from "../../Icons/PlusIcon";
import { DeleteIcon } from "../../Icons/DeleteIcon";
import { EditIcon } from "../../Icons/EditIcon";
import { toast } from "sonner";
import { AddProductModal } from "./AddProductModal";
import { UpdateProductModal } from "./UpdateProductModal";

// TODO: HACER QUE SE PUEDAN ORDENAR LAS COLUMNAS DE STOCK Y PRECIO

const data = [
  {
    key: "1",
    name: "SIMTUR",
    description: "Simtur para turismo",
    category: "Electronics",
    price:10,
    stock: 32,
  },
  {
    key: "2",
    name: "Product 2",
    description: "Product 2",
    category: "Electronics",
    price:11,
    stock: 32,
  },
  {
    key: "3",
    name: "Product 3",
    description: "Product 3",
    category: "Electronics",
    price:12,
    stock: 32,
  },
  {
    key: "4",
    name: "Product 4",
    description: "Product 4",
    category: "Electronics",
    price:13,
    stock: 32,
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

export const ProductsTable = () => {
  // ESTADOS PARA CONTROLAR LA VISIBILIDAD DE LOS MODALES
  const [addProductModal, setAddProductModal] = useState(false);
  const [updateProductModal, setUpdateProductModal] = useState(false);
  const [productToUpdate, setProductToUpdate] = useState({});

  // REALIZA LA LLAMADA AL ENDPOINT DE CREACIÓN DE EL PRODUCTO
  const onCreateProduct = (values) => {
    console.log(values);
    setAddProductModal(false);
    return new Promise((resolve, reject) => {
      setTimeout(reject, 3000);
    });
  };

  // REALIZA LA LLAMADA AL ENDPOINT DE ACTUALIZACIÓN DE EL PRODUCTO
  const onUpdateProduct = (values) => {
    console.log(values);
    setUpdateProductModal(false);
    return new Promise((resolve, reject) => {
      setTimeout(reject, 3000);
    });
  };

  // REALIZA LA LLAMADA AL ENDPOINT DE ELIMINACIÓN DE EL PRODUCTO
  const onDeleteProduct = (record) => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 3000);
    });
  };

  // GESTIONA LA RESPOESTA DE LA LLAMADA AL ENDPOINT DE ELIMINACIÓN DE EL PRODUCTO
  const handleDelete = (record) => {
    toast.warning("Desea eliminar este producto?", {
      action: {
        label: "Eliminar",
        onClick: () => {
          toast.promise(onDeleteProduct(record), {
            error: "Error al eliminar el producto",
            success: "Producto eliminado correctamente",
            loading: "Eliminando producto",
          });
        },
      },
    });
  };

  // GESTIONA LA RESPUESTA DE LA LLAMADA AL ENDPOINT DE CREACIÓN DE EL PRODUCTO
  const handleCreate = (values) => {
    toast.promise(onCreateProduct(values), {
      error: "Error al crear la producto",
      success: "Nueva producto creada correctamente",
      loading: "Creando nueva producto",
    });
  };

  // GESTIONA LA RESPUESTA DE LA LLAMADA AL ENDPOINT DE ACTUALIZACIÓN DE EL PRODUCTO
  const handleUpdate = (record) => {
    toast.promise(onUpdateProduct(record), {
      error: "Error al actualizar la producto",
      success: "producto actualizado correctamente",
      loading: "Actualizando producto",
    });
  };

  // CARGA TODAS LOS PRODUCTOS CADA VEZ QUE SE RENDERIZA EL COMPONENTE
  useEffect(() => {
    console.log("GET ALL PRODUCTS");
  }, []);

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      showSorterTooltip: {
        target: "full-header",
      },
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Descripción",
      dataIndex: "description",
      showSorterTooltip: {
        target: "full-header",
      },
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Categoría",
      dataIndex: "category",
      showSorterTooltip: {
        target: "full-header",
      },
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Precio",
      dataIndex: "price",
      showSorterTooltip: {
        target: "full-header",
      },
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      // sorter: (a, b) => a.name.length - b.name.length,
      // sortDirections: ["descend"],
    },
    {
      title: "Stock",
      dataIndex: "stock",
      showSorterTooltip: {
        target: "full-header",
      },
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      // sorter: (a, b) => a.name.length - b.name.length,
      // sortDirections: ["descend"],
    },
    {
      title: <span className="font-semibold">Acciones</span>,
      key: "actions",
      width: "5%",
      render: (_, record) => (
        <div className="flex gap-1">
          <Tooltip placement="top" title={"Ver"} arrow={{ pointAtCenter: true }}>
            <button
              onClick={() => {
                setProductToUpdate(record);
                setUpdateProductModal(true);
              }}
              className="table-edit-action-btn"
            >
              <EditIcon width={20} height={20} color="white" />
            </button>
          </Tooltip>

          <Tooltip placement="top" title={"Eliminar"} arrow={{ pointAtCenter: true }}>
            <button className="table-delete-action-btn" onClick={() => handleDelete(record)}>
              <DeleteIcon width={20} height={20} color="white" />
            </button>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex h-16 w-full bg-white-100 rounded-md shadow-md mb-4 items-center pl-4 gap-4">
        <div className="flex gap-2">
          <button className="toolbar-primary-icon-btn" onClick={() => setAddProductModal(true)}>
            <PlusIcon color="white" />
            Nuevo
          </button>
        </div>
      </div>
      <AddProductModal
        open={addProductModal}
        onCancel={() => setAddProductModal(false)}
        onCreate={handleCreate}
      />
      <UpdateProductModal
        open={updateProductModal}
        onCancel={() => setUpdateProductModal(false)}
        onCreate={handleUpdate}
        initialValues={productToUpdate}
      />
      <Table
        columns={columns}
        className="shadow-md"
        pagination={{ position: ["bottomCenter"], defaultPageSize: 20 }}
        dataSource={data}
        onChange={onChange}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
      />
    </>
  );
};

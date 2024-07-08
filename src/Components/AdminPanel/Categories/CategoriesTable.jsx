import { Table, Tooltip } from "antd";
import { useEffect, useState } from "react";

import { PlusIcon } from "../../Icons/PlusIcon";
import { DeleteIcon } from "../../Icons/DeleteIcon";
import { EditIcon } from "../../Icons/EditIcon";
import { AddCategoryModal } from "./AddCategoryModal";
import { toast } from "sonner";
import { UpdateCategoryModal } from "./UpdateCategoryModal";

const data = [
  {
    key: "1",
    description: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    description: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    description: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    description: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

export const CategoriesTable = () => {
  // ESTADOS PARA CONTROLAR LA VISIBILIDAD DE LOS MODALES
  const [addCategoryModal, setAddCategoryModal] = useState(false);
  const [updateCategoryModal, setUpdateCategoryModal] = useState(false);
  const [categoryToUpdate, setCategoryToUpdate] = useState({});

  // REALIZA LA LLAMADA AL ENDPOINT DE CREACIÓN DE LA CATEGORÍA
  const onCreateCategory = (values) => {
    console.log(values);
    setAddCategoryModal(false);
    return new Promise((resolve, reject) => {
      setTimeout(reject, 3000);
    });
  };

  // REALIZA LA LLAMADA AL ENDPOINT DE ACTUALIZACIÓN DE LA CATEGORÍA
  const onUpdateCategory = (values) => {
    console.log(values);
    setUpdateCategoryModal(false);
    return new Promise((resolve, reject) => {
      setTimeout(reject, 3000);
    });
  };

  // REALIZA LA LLAMADA AL ENDPOINT DE ELIMINACIÓN DE LA CATEGORÍA
  const onDeleteCategory = (record) => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 3000);
    });
  };

  // GESTIONA LA RESPOESTA DE LA LLAMADA AL ENDPOINT DE ELIMINACIÓN DE LA CATEGORÍA
  const handleDelete = (record) => {
    toast.warning("Desea eliminar esta categoría?", {
      action: {
        label: "Eliminar",
        onClick: () => {
          toast.promise(onDeleteCategory(record), {
            error: "Error al eliminar la categoría",
            success: "Categoría eliminada correctamente",
            loading: "Eliminando categoría",
          });
        },
      },
    });
  };

  // GESTIONA LA RESPUESTA DE LA LLAMADA AL ENDPOINT DE CREACIÓN DE LA CATEGORÍA
  const handleCreate = (values) => {
    toast.promise(onCreateCategory(values), {
      error: "Error al crear la categoría",
      success: "Nueva categoría creada correctamente",
      loading: "Creando nueva categoría",
    });
  };

  // GESTIONA LA RESPUESTA DE LA LLAMADA AL ENDPOINT DE ACTUALIZACIÓN DE LA CATEGORÍA
  const handleUpdate = (record) => {
    toast.promise(onUpdateCategory(record), {
      error: "Error al actualizar la categoría",
      success: "Categoría actualizada correctamente",
      loading: "Actualizando categoría",
    });
  };

  // CARGA TODAS LAS CATEGORIAS CADA VEZ QUE SE RENDERIZA EL COMPONENTE
  useEffect(() => {
    console.log("GET ALL CATEGORIES");
  }, []);

  const columns = [
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
      title: <span className="font-semibold">Acciones</span>,
      key: "actions",
      width: "5%",
      render: (_, record) => (
        <div className="flex gap-1">
          <Tooltip placement="top" title={"Ver"} arrow={{ pointAtCenter: true }}>
            <button
              onClick={() => {
                setCategoryToUpdate(record);
                setUpdateCategoryModal(true);
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
          <button className="toolbar-primary-icon-btn" onClick={() => setAddCategoryModal(true)}>
            <PlusIcon color="white" />
            Nuevo
          </button>
        </div>
      </div>
      <AddCategoryModal
        open={addCategoryModal}
        onCancel={() => setAddCategoryModal(false)}
        onCreate={handleCreate}
      />
      <UpdateCategoryModal
        open={updateCategoryModal}
        onCancel={() => setUpdateCategoryModal(false)}
        onCreate={handleUpdate}
        initialValues={categoryToUpdate}
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

import { Table, Tooltip } from "antd";
import { useEffect, useState } from "react";

import { PlusIcon } from "../../Icons/PlusIcon";
import { DeleteIcon } from "../../Icons/DeleteIcon";
import { EditIcon } from "../../Icons/EditIcon";
import { toast } from "sonner";
import { AddClientModal } from "./AddClientModal";
import { UpdateClientModal } from "./UpdateClientModal";

// TODO: CONSULTAR QUE HACE CON EL CAMPO PASSWORD

const data = [
  {
    key: "1",
    name: "Daniel",
    lastName: "Muniz Turtos",
    email: "daniel@gmail.com",
    password:"asdasd/*-",
    cell: 5353963830,
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

export const ClientsTable = () => {
  // ESTADOS PARA CONTROLAR LA VISIBILIDAD DE LOS MODALES
  const [addClientModal, setAddClientModal] = useState(false);
  const [updateClientModal, setUpdateClientModal] = useState(false);
  const [clientToUpdate, setClientToUpdate] = useState({});

  // REALIZA LA LLAMADA AL ENDPOINT DE CREACIÓN DE EL PRODUCTO
  const onCreateClient = (values) => {
    console.log(values);
    setAddClientModal(false);
    return new Promise((resolve, reject) => {
      setTimeout(reject, 3000);
    });
  };

  // REALIZA LA LLAMADA AL ENDPOINT DE ACTUALIZACIÓN DE EL PRODUCTO
  const onUpdateClient = (values) => {
    console.log(values);
    setUpdateClientModal(false);
    return new Promise((resolve, reject) => {
      setTimeout(reject, 3000);
    });
  };

  // REALIZA LA LLAMADA AL ENDPOINT DE ELIMINACIÓN DE EL PRODUCTO
  const onDeleteClient = (record) => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 3000);
    });
  };

  // GESTIONA LA RESPOESTA DE LA LLAMADA AL ENDPOINT DE ELIMINACIÓN DE EL PRODUCTO
  const handleDelete = (record) => {
    toast.warning("Desea eliminar este cliente?", {
      action: {
        label: "Eliminar",
        onClick: () => {
          toast.promise(onDeleteClient(record), {
            error: "Error al eliminar el cliente",
            success: "Cliente eliminado correctamente",
            loading: "Eliminando cliente",
          });
        },
      },
    });
  };

  // GESTIONA LA RESPUESTA DE LA LLAMADA AL ENDPOINT DE CREACIÓN DE EL PRODUCTO
  const handleCreate = (values) => {
    toast.promise(onCreateClient(values), {
      error: "Error al crear el cliente",
      success: "Nuevo cliente creado correctamente",
      loading: "Creando nuevo cliente",
    });
  };

  // GESTIONA LA RESPUESTA DE LA LLAMADA AL ENDPOINT DE ACTUALIZACIÓN DE EL PRODUCTO
  const handleUpdate = (record) => {
    toast.promise(onUpdateClient(record), {
      error: "Error al actualizar el cliente",
      success: "Cliente actualizado correctamente",
      loading: "Actualizando cliente",
    });
  };

  // CARGA TODAS LOS PRODUCTOS CADA VEZ QUE SE RENDERIZA EL COMPONENTE
  useEffect(() => {
    console.log("GET ALL CLIENTS");
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
      title: "Apellidos",
      dataIndex: "lastName",
      showSorterTooltip: {
        target: "full-header",
      },
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Correo",
      dataIndex: "email",
      showSorterTooltip: {
        target: "full-header",
      },
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Teléfono",
      dataIndex: "phoneNumber",
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
                setClientToUpdate(record);
                setUpdateClientModal(true);
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
          <button className="toolbar-primary-icon-btn" onClick={() => setAddClientModal(true)}>
            <PlusIcon color="white" />
            Nuevo
          </button>
        </div>
      </div>
      <AddClientModal
        open={addClientModal}
        onCancel={() => setAddClientModal(false)}
        onCreate={handleCreate}
      />
      <UpdateClientModal
        open={updateClientModal}
        onCancel={() => setUpdateClientModal(false)}
        onCreate={handleUpdate}
        initialValues={clientToUpdate}
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

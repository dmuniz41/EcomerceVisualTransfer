import { Form, Input, InputNumber } from "antd";
import Modal from "antd/es/modal/Modal";

// TODO: CAMBIAR EL INPUT DE CATEGORIA A UN SELECT CON LAS CATEGORIAS PREVIAMENTE CREADAS

export const UpdateProductModal = ({ open, onCancel, onCreate, initialValues }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      className="flex flex-col"
      title={
        <div className="flex w-full justify-center">
          <span className="font-semibold text-md">Añadir Producto</span>
        </div>
      }
      cancelText="Cancelar"
      centered
      destroyOnClose
      okText="Crear"
      okType="default"
      onCancel={onCancel}
      open={open}
      style={{ textAlign: "left" }}
      footer={[
        <div key="footer" className="flex gap-2 w-full justify-end">
          <button key="2" className="modal-btn-danger" onClick={onCancel}>
            Cancelar
          </button>
          <button
            key="1"
            className="modal-btn-success "
            onClick={() => {
              form
                .validateFields()
                .then((values) => {
                  console.log("🚀 ~ .then ~ values:", values);
                  onCreate(values);
                })
                .catch((error) => {
                  console.log("Validate Failed:", error);
                });
            }}
          >
            Añadir
          </button>
        </div>,
      ]}
    >
      <Form
        form={form}
        layout="horizontal"
        name="addProduct"
        size="large"
        clearOnDestroy
        initialValues={initialValues}
      >
        <Form.Item
          name="name"
          label={<span className="font-semibold justify-start">Nombre</span>}
          rules={[
            {
              required: true,
              message: "El nombre es requerido",
            },
            {
              validator: (_, value) => {
                const regex = /^[a-zA-Z0-9\s]*$/;
                if (regex.test(value)) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(
                    new Error("El nombre no puede contener caracteres especiales")
                  );
                }
              },
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="category"
          label={<span className="font-semibold justify-start">Categoría</span>}
          rules={[
            {
              required: true,
              message: "La categoría es requerida",
            },
            {
              validator: (_, value) => {
                const regex = /^[a-zA-Z0-9\s]*$/;
                if (regex.test(value)) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(
                    new Error("La categoría no puede contener caracteres especiales")
                  );
                }
              },
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="price"
          label={<span className="font-semibold justify-start">Precio</span>}
          rules={[
            {
              required: true,
              message: "El precio es requerido",
            },
            {
              validator: (_, value) => {
                if (value >= 0) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(new Error("El precio no puede ser menor que 0"));
                }
              },
            },
          ]}
        >
          <InputNumber size="large" />
        </Form.Item>
        <Form.Item
          name="stock"
          label={<span className="font-semibold justify-start">Stock</span>}
          rules={[
            {
              required: true,
              message: "El stock es requerido",
            },
            {
              validator: (_, value) => {
                if (value >= 0) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(new Error("El stock no puede ser menor que 0"));
                }
              },
            },
          ]}
        >
          <InputNumber size="large" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

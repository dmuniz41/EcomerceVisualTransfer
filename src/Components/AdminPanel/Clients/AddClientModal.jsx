import { Form, Input } from "antd";
import Modal from "antd/es/modal/Modal";

export const AddClientModal = ({ open, onCancel, onCreate }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      className="flex flex-col"
      title={
        <div className="flex w-full justify-center">
          <span className="font-semibold text-md">Añadir Cliente</span>
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
                  onCreate({
                    name: values.name,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password,
                    cell: values.phoneNumber,
                    payOrders: [],
                    sells: [],
                  });
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
      <Form form={form} layout="horizontal" name="addClient" size="large" clearOnDestroy>
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
          name="lastName"
          label={<span className="font-semibold justify-start">Apellidos</span>}
          rules={[
            {
              required: true,
              message: "Los apellidos son requeridos",
            },
            {
              validator: (_, value) => {
                const regex = /^[a-zA-Z0-9\s]*$/;
                if (regex.test(value)) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(
                    new Error("Los apellidos no puede contener caracteres especiales")
                  );
                }
              },
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label={<span className="font-semibold flex justify-start ">Correo</span>}
          name="email"
          rules={[
            {
              required: true,
              message: "El correo es requerido",
            },
            {
              validator: (_, value) => {
                const regex = /^[\w.-]+@[\w.-]+\.[\w.-]{2,6}$/;
                if (regex.test(value)) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(new Error("Correo inválido"));
                }
              },
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label={<span className="font-semibold flex justify-start ">Teléfono</span>}
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "El teléfono es requerido",
            },
            {
              validator: (_, value) => {
                const regex = /^\d+$/;
                if (regex.test(value) && value.length > 5) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(
                    new Error("El número de telefono debe tener mas de 5 dígitos")
                  );
                }
              },
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label={<span className="font-semibold justify-start">Contraseña</span>}
          name="password"
          rules={[
            {
              required: true,
              message: "La contraseña es requerida",
            },
            {
              validator: (_, value) => {
                const passwordRegex = /^(?=.*[@$!%*#?&]).*$/;
                if (!passwordRegex.test(value)) {
                  return Promise.reject(
                    new Error(
                      "La contraseña debe tener al menos 2 caracteres especiales (/*-!@#$%)"
                    )
                  );
                } else if (value.length < 5) {
                  return Promise.reject(
                    new Error("La contraseña debe tener al menos 5 caracteres ")
                  );
                } else return Promise.resolve();
              },
            },
          ]}
        >
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item
          label={<span className="font-semibold  flex justify-start">Confirmar Contraseña</span>}
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Por favor confirme su contraseña",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Las contraseñas deben ser iguales"));
              },
            }),
          ]}
          dependencies={["password"]}
        >
          <Input.Password size="large" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

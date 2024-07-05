import { Form, Input } from "antd";
import Modal from "antd/es/modal/Modal";

export const AddCategoryModal = ({ open, onCancel, onCreate }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      className="flex flex-col"
      title={
        <div className="flex w-full justify-center">
          <span className="font-semibold text-md">Añadir Categoría</span>
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
                  console.log("🚀 ~ .then ~ values:", values)
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
      <Form form={form} layout="horizontal" name="addCategory" size="large">
        <Form.Item
          name="description"
          label={<span className="font-semibold justify-start">Descripción</span>}
          rules={[
            {
              required: true,
              message: "La descripción es requerida",
            },
            {
              validator: (_, value) => {
                const regex = /^[a-zA-Z]*$/;
                if (regex.test(value)) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(new Error("La descripción no puede contener caracteres especiales"));
                }
              },
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

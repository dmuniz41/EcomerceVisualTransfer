import { Button, Form, Input } from "antd";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Checkbox from "antd/es/checkbox/Checkbox";
import Title from "antd/es/typography/Title";

// TODO: CONSULTAR COMO HACER LAS VALIDACIONES PARA EL NUMERO DE TELEFONO
// TODO: ARREGLAR ESTILOS DEL CAMPO CONFIRMAR CONTRASEÑA

export const Register = () => {
  const navigate = useNavigate();
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const handleCheck = () => {
    setIsTermsChecked(!isTermsChecked);
  };

  const handleSubmit = (values) => {
    if (!isTermsChecked) {
      toast.warning("Debe aceptar los términos de uso y política de privacidad", { position: "top-center" });
    } else {
      axios
        .post(`${import.meta.env.VITE_API_URL}/insertUser`, {
          name: values.name,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          cell: values.phoneNumber,
          payOrders: [],
          sells: [],
        })
        .then(() => navigate("/auth/verifyCode"))
        .catch((error) => {
          toast.error(error.response.data, {
            position: "top-center",
          });
        });
    }
  };

  return (
    <div className="flex w-full justify-center items-center py-4">
      <div className="grid  border-solid border-2 rounded-md p-8 shadow-lg bg-white-500">
        <div className="flex justify-center ">
          <Title level={3}>Crear Cuenta</Title>
        </div>
        <Form name="appRegisterForm" onFinish={handleSubmit} size="large">
          <div className="flex w-full gap-4 justify-center">
            <section className="grid w-full">
              <Form.Item
                className="flex justify-end"
                layout="horizontal"
                label={<span className="font-semibold justify-start">Nombre</span>}
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Campo requerido",
                  },
                  {
                    validator: (_, value) => {
                      const regex = /^[a-zA-Z]*$/;
                      if (regex.test(value)) {
                        return Promise.resolve();
                      } else {
                        return Promise.reject(new Error("El nombre no puede contener caracteres especiales"));
                      }
                    },
                  },
                ]}
              >
                <Input size="large" style={{ width: "470px", marginLeft: "10px" }} />
              </Form.Item>
              <Form.Item
                className="flex justify-end  "
                layout="horizontal"
                label={<span className="font-semibold justify-start">Apellidos</span>}
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Los apellidos son requeridos",
                  },
                  {
                    validator: (_, value) => {
                      const regex = /^[a-zA-Z]*$/;
                      if (regex.test(value)) {
                        return Promise.resolve();
                      } else {
                        return Promise.reject(new Error("Los apellidos no puede contener caracteres especiales"));
                      }
                    },
                  },
                ]}
              >
                <Input size="large" style={{ width: "470px" }} />
              </Form.Item>
              <Form.Item
                className="flex justify-end"
                layout="horizontal"
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
                        return Promise.reject(new Error("El número de telefono debe tener mas de 5 dígitos"));
                      }
                    },
                  },
                ]}
              >
                <Input size="large" style={{ width: "470px" }} className="flex justify-end" />
              </Form.Item>
              <Form.Item
                className="flex justify-end"
                layout="horizontal"
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
                <Input size="large" style={{ width: "470px" }}/>
              </Form.Item>
              <Form.Item
                className="flex justify-end"
                layout="horizontal"
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
                        return Promise.reject(new Error("La contraseña debe tener al menos 2 caracteres especiales (/*-!@#$%)"));
                      } else if (value.length < 5) {
                        return Promise.reject(new Error("La contraseña debe tener al menos 5 caracteres "));
                      } else return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input.Password size="large" style={{ width: "470px" }} />
              </Form.Item>
              <Form.Item
                className="flex justify-end"
                layout="horizontal"
                label={
                  <span className="font-semibold  flex justify-start">
                    Confirmar <br /> Contraseña
                  </span>
                }
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
                <Input.Password size="large" style={{ width: "470px" }} />
              </Form.Item>
            </section>
          </div>

          <section className="grid text-white-500">
            <Form.Item
              className="mb-4"
              valuePropName="privacyTermsChecked"
              rules={[
                {
                  required: true,
                  message: "Campo requerido",
                },
              ]}
            >
              <Checkbox onChange={handleCheck} name="privacyTerms" className="mt-2">
                Acepta nuestros Términos de uso y Política de privacidad
              </Checkbox>
            </Form.Item>
            <Form.Item className="mb-0">
              <Button block type="primary" size="large" htmlType="submit" className=" flex py-2 rounded-md font-medium">
                Registrarse
              </Button>
            </Form.Item>
          </section>
        </Form>
      </div>
    </div>
  );
};

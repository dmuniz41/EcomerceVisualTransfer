import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Title from "antd/es/typography/Title";

import { LoginIcon } from "../Icons/LoginIcon";
import { NewUserIcon } from "../Icons/NewUserIcon";

// TODO: Hacer que al presionar el boton de crear cuenta no se disparen las validaciones del formulario

export const Login = () => {
  const handleSubmit = (values) => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/Login`, {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        Cookies.set("auth_token", `${response.data}`, { expires: 1 });
        navigate("/");
      })
      .catch(() => {
        toast.error("Usuario o contraseña incorrectos", {
          position: "top-center",
        });
      });
  };

  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-center items-center h-full">
      <div className="grid h-[450px] border-solid border-2 rounded-md p-8 justify-center bg-white shadow-lg">
        <div className="flex justify-center pb-5">
          <Title level={3}>Iniciar Sesión</Title>
        </div>
        <Form name="appLoginForm" onFinish={handleSubmit} className="w-[400px]">
          <Form.Item
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
            <Input prefix={<UserOutlined className="site-form-item-icon" />} size="large" placeholder="Correo" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />} size="large" type="password" placeholder="Contraseña" />
          </Form.Item>
          <Form.Item className="mb-4">
            <a className="login-form-forgot" href="">
              ¿Olvidaste tu contraseña?
            </a>
          </Form.Item>
          <div className="grid gap-2 text-white">
            <Form.Item className="mb-0">
              <Button block type="primary" size="large" htmlType="submit" className=" flex py-2 rounded-md font-medium">
                <LoginIcon color="#ffffff" className="text-white" />
                Entrar
              </Button>
            </Form.Item>
            <Button
              onClick={() => navigate("/auth/register")}
              block
              type="default"
              size="large"
              className="flex py-2 rounded-md font-medium text-[#0958d9]"
            >
              <NewUserIcon color="#0958d9" className="text-white" />
              Crear Cuenta
            </Button>
            <span className="font-light text-[#000000]">
              Al iniciar sesión, acepta nuestros <span className="font-semibold text-[#000000]">Términos de uso y Política de privacidad</span>{" "}
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
};

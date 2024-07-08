import { Button, Form, Input } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import {SendArrowIcon} from "../Icons/SendArrowIcon"

export const VerifyCode = () => {
  const handleSubmit = (value) => {
    console.log("🚀 ~ handleSubmit ~ value:", value);
  };
  const handleResendEmail = () => {
    console.log("🚀 ~ handleResendEmail", );
  };
  const [verificationEmail, setVerificationEmail] = useState("daniel@gmail.com");
  return (
    <div className="flex w-full mt-24 justify-center items-center py-4">
      <div className="grid  border-solid border-2 rounded-md px-8 py-10 shadow-lg text-center bg-white-500">
        <Title level={3}>Entrar codigo de verificación</Title>
        <Title level={5}>
          Se ha enviado un código de verificación al correo <span className="font-bold">{verificationEmail}</span> por favor introduzca el código{" "}
        </Title>
        <div className="flex w-full justify-center">
          <Form name="appRegisterForm" onFinish={handleSubmit} size="large" className="flex gap-4">
            <Form.Item className="grid pb-6" layout="vertical" name="verifyCode">
              <Input.OTP length={8} variant="outlined" size="large" style={{ fontWeight: "bold" }} />
            </Form.Item>
            <Button type="primary" size="large" htmlType="submit" className="flex py-2 rounded-md font-medium">
            <SendArrowIcon color="white"/>
            </Button>
          </Form>
        </div>
        <Title level={5} className="mt-2">
          ¿No ha recibido un código? <span className="text-blue-500 hover:cursor-pointer" onClick={handleResendEmail}>Click aqui para reenviar</span>
        </Title>
        <span className="font-thin">
          Este mensage ha sido generado automáticamente, por favor no responda este correo.
          <br /> Para proteger su cuenta no comparta este código{" "}
        </span>
      </div>
    </div>
  );
};

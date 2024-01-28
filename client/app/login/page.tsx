"use client";

import { SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Typography, Divider } from "antd";

const { Title, Text } = Typography;
import { useRouter } from "next/navigation";

type FieldType = {
  username?: string;
  desktop?: string;
};

export default function Login() {
  const router = useRouter();

  const onFinish = () => {
    router.push("/desktop", { scroll: false });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Title level={2}>Ingresar</Title>
      <Text>Ingrese su nombre y numero de escritorio</Text>
      <Divider />
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Nombre del agente"
          name="username"
          rules={[
            {
              required: true,
              message: "¡Por favor, ingresa tu nombre de agente!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Escritorio"
          name="desktop"
          rules={[
            { required: true, message: "¡Por favor, ingresa tu escritorio!" },
          ]}
        >
          <InputNumber min="1" max="99" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

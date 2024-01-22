"use client";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout as LayoutAntd, Menu, theme } from "antd";

const { Sider, Content } = LayoutAntd;

export const Layout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <LayoutAntd style={{ height: "100vh" }}>
      <Sider>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Ingresar",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Fila",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Crear ticket",
            },
          ]}
        />
      </Sider>
      <LayoutAntd>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </LayoutAntd>
    </LayoutAntd>
  );
};

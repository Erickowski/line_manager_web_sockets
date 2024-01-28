"use client";

import { ReactElement } from "react";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout as LayoutAntd, Menu, theme } from "antd";
import Link from "next/link";

const { Sider, Content } = LayoutAntd;

export const Layout = ({ children }: { children?: ReactElement }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <LayoutAntd style={{ height: "100vh" }}>
      <Sider collapsedWidth="0" breakpoint="md">
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link href="/login">Ingresar</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link href="/line">Fila</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link href="/create-ticket">Crear ticket</Link>
          </Menu.Item>
        </Menu>
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
          {children}
        </Content>
      </LayoutAntd>
    </LayoutAntd>
  );
};

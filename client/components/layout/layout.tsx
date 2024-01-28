"use client";

import { ReactElement } from "react";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout as LayoutAntd, Menu, MenuProps, theme } from "antd";
import Link from "next/link";

const { Sider, Content } = LayoutAntd;

const items: MenuProps["items"] = [
  {
    label: <Link href="/login">Ingresar</Link>,
    icon: <UserOutlined />,
    key: "1",
  },
  {
    label: <Link href="/line">Fila</Link>,
    icon: <VideoCameraOutlined />,
    key: "2",
  },
  {
    label: <Link href="/create-ticket">Crear ticket</Link>,
    icon: <UploadOutlined />,
    key: "3",
  },
];

export const Layout = ({ children }: { children: ReactElement }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <LayoutAntd style={{ height: "100vh" }}>
      <Sider collapsedWidth="0" breakpoint="md">
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" items={items} />
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

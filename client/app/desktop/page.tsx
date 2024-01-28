"use client";
import { useMemo } from "react";
import { useRouter } from "next/navigation";

import { CloseOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row, Typography, Button, Divider } from "antd";

import { getUserLocalStorage } from "@/utils";
import { LOCAL_STORAGE_KEYS, PATHNAMES } from "@/types";

const { Title, Text } = Typography;

export default function Desktop() {
  const router = useRouter();
  const user = useMemo(() => {
    return getUserLocalStorage();
  }, []);

  const handleExit = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.username);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.desktop);
    router.push(PATHNAMES.login, { scroll: false });
  };

  const handleNextTicket = () => {
    console.log("Siguiente ticket");
  };

  if (!user.username || !user.desktop) {
    router.push(PATHNAMES.login, { scroll: false });
    return null;
  }

  return (
    <>
      <Row>
        <Col span="20">
          <Title level={2}>{user.username}</Title>
          <Text>Usted esta trabajando en el escritorio: </Text>
          <Text type="success">{user.desktop}</Text>
        </Col>
        <Col span="4">
          <Button shape="round" danger onClick={handleExit}>
            <CloseOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>Esta atendiendo el ticket número:</Text>
          <Text style={{ fontSize: 30 }} type="danger">
            55
          </Text>
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6}>
          <Button onClick={handleNextTicket} shape="round" type="primary">
            <RightOutlined />
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  );
}

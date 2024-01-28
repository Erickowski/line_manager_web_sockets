"use client";
import { useContext, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { CloseOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row, Typography, Button, Divider } from "antd";

import { getUserLocalStorage } from "@/utils";
import { ITicket, LOCAL_STORAGE_KEYS, PATHNAMES } from "@/types";
import { SocketContext } from "@/context";

const { Title, Text } = Typography;

export default function Desktop() {
  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState<ITicket>();
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
    socket.emit("assign-ticket", user, (ticket: ITicket) => {
      setTicket(ticket);
    });
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
      {ticket ? (
        <Row>
          <Col>
            <Text>Esta atendiendo el ticket número:</Text>
            <Text style={{ fontSize: 30 }} type="danger">
              {ticket?.number}
            </Text>
          </Col>
        </Row>
      ) : null}
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

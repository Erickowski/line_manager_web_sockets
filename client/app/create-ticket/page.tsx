"use client";
import { useContext, useState } from "react";

import { DownloadOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row, Typography } from "antd";

import { SocketContext } from "@/context";
import { ITicket } from "@/types";

const { Title, Text } = Typography;

export default function CreateTicket() {
  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState<ITicket>();

  const handleNewTicket = () => {
    socket.emit("create-ticket", null, (ticket: ITicket) => {
      setTicket(ticket);
    });
  };

  return (
    <>
      <Row>
        <Col span={20} offset={2}>
          <Flex justify="center" vertical align="center">
            <Title level={3}>
              Presione el boton para crear un nuevo ticket
            </Title>
            <Button
              type="primary"
              shape="round"
              size="large"
              icon={<DownloadOutlined />}
              onClick={handleNewTicket}
            >
              Nuevo ticket
            </Button>
          </Flex>
        </Col>
      </Row>
      {ticket ? (
        <Row style={{ marginTop: 100 }}>
          <Col span={24}>
            <Flex justify="center" vertical align="center">
              <Text>Su número</Text>
              <br />
              <Text type="success" style={{ fontSize: 55 }}>
                {ticket?.number}
              </Text>
            </Flex>
          </Col>
        </Row>
      ) : null}
    </>
  );
}

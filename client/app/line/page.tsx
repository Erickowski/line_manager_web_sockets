"use client";
import { useContext, useEffect, useState } from "react";

import { Card, Col, Divider, List, Row, Tag, Typography } from "antd";

import { SocketContext } from "@/context";
import { ITicket } from "@/types";
import { getLastTicketsAssigned, ILastTicketsAssigned } from "@/api";

const { Title, Text } = Typography;

export default function Line() {
  const { socket } = useContext(SocketContext);
  const [tickets, setTickets] = useState<ITicket[]>([]);

  useEffect(() => {
    getLastTicketsAssigned().then((data: ILastTicketsAssigned) => {
      setTickets(data.lastTicketsAssigned);
    });
  }, []);

  useEffect(() => {
    socket.on("new-ticket-assigned", (ticketsAssigned: ITicket[]) => {
      setTickets(ticketsAssigned);
    });

    return () => {
      socket.off("new-ticket-assigned");
    };
  }, [socket]);

  return (
    <>
      <Title level={1}>Atendiendo al cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano" key={`agent-${item.id}}`}>
                      {item.username}
                    </Tag>,
                    <Tag color="magenta" key={`desktop-${item.id}}`}>
                      Escritorio: {item.desktop}
                    </Tag>,
                  ]}
                >
                  <Title>No. {item.number}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>Historial</Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.number}`}
                  description={
                    <>
                      <Text type="secondary">En el escritorio</Text>
                      <Tag color="magenta">{item.desktop}</Tag>
                      <Text type="secondary">Agente:</Text>
                      <Tag color="volcano">{item.username}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
}

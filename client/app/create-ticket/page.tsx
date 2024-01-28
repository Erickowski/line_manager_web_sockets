"use client";

import { DownloadOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row, Typography } from "antd";

const { Title, Text } = Typography;

export default function CreateTicket() {
  const handleNewTicket = () => {
    console.log("Nuevo ticket");
  };

  return (
    <>
      <Row>
        <Col span={20} offset={2}>
          <Title level={3}>Presione el boton para crear un nuevo ticket</Title>
          <Button
            type="primary"
            shape="round"
            size="large"
            icon={<DownloadOutlined />}
            onClick={handleNewTicket}
          >
            Nuevo ticket
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 100 }}>
        <Col span={24}>
          <Flex justify="center" vertical align="center">
            <Text>Su número</Text>
            <br />
            <Text type="success" style={{ fontSize: 55 }}>
              55
            </Text>
          </Flex>
        </Col>
      </Row>
    </>
  );
}

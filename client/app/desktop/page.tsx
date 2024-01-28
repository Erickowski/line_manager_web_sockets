"use client";
import { CloseOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row, Typography, Button, Divider } from "antd";

const { Title, Text } = Typography;

export default function Desktop() {
  const handleExit = () => {
    console.log("Salir");
  };

  const handleNextTicket = () => {
    console.log("Siguiente ticket");
  };

  return (
    <>
      <Row>
        <Col span="20">
          <Title level={2}>Erick</Title>
          <Text>Usted esta trabajando en el escritorio: </Text>
          <Text type="success">5</Text>
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

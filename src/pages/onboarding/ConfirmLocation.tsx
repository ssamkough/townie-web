import React, { useState } from "react";
import { Layout, Button, Modal, Typography, Row, Col } from "antd";
import { Link } from "react-router-dom";

const ConfirmLocation = (response: any) => {
  console.log(response);
  const [visible, setModalVisible] = useState(false);

  const loginModal = () => {
    return setModalVisible(true);
  };

  const handleOk = () => {
    return setModalVisible(true);
  };

  const handleCancel = () => {
    return setModalVisible(false);
  };

  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;

  return (
    <Layout className="page-layout">
      <Header className="about-you-header">
        <Title className="onboarding-title">
          Is This Information Accurate?
        </Title>
      </Header>
      <Layout className="page-layout getting-started-layout">
        <Content className="confirm-location-content">
          <Row>
            <Col>
              <Title className="accurate-text">State: {response.state}</Title>
            </Col>
          </Row>
          <Row>
            <Col>
              <Title className="accurate-text">Town: {response.town}</Title>
            </Col>
          </Row>
          <Row className="confirm-location-yes-no">
            <Col>
              <Button onClick={loginModal}>Yes</Button>
            </Col>
            <Col>
              <Button>No</Button>
            </Col>
          </Row>
        </Content>
      </Layout>
      <Footer>
        <Col span={6} offset={6}>
          <Button>
            <Link to="/about-you">Back</Link>
          </Button>
        </Col>
      </Footer>
      <Modal
        title="Login Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            No
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            <Link to="/board">Yes</Link>
          </Button>,
        ]}
      >
        <Title level={4}>Would you like to continue into the Townie?</Title>
      </Modal>
    </Layout>
  );
};

export default ConfirmLocation;

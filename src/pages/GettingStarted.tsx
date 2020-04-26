import React, { useState } from "react";
import { Layout, Row, Col, Typography, Button, Modal, Form, Input } from "antd";
import { Link } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const GettingStarted = () => {
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

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const { Content } = Layout;
  const { Title } = Typography;

  return (
    <Layout className="page-layout getting-started-layout">
      <Row>
        <Col>
          <Content className="getting-started-content">
            <Title>Townie</Title>
            <Title level={3} className="getting-started-tagline">
              welcome to your neighborhood
            </Title>
            <Link to="/about-you">
              <Button size="large" className="getting-started-button">
                <Title level={4}>Get Started</Title>
              </Button>
            </Link>
            <br />
            <Button onClick={loginModal} className="login-modal">
              Have an account? Login here!
            </Button>
          </Content>
        </Col>
      </Row>
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
            <Link to="/home">Login</Link>
          </Button>,
        ]}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default GettingStarted;

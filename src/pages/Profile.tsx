import React, { useState } from "react";
import {
  Layout,
  Row,
  Col,
  Typography,
  Form,
  Button,
  DatePicker,
  Input,
  Radio,
} from "antd";

import Navbar from "../components/Navbar";
import Footie from "../components/Footie";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Profile = () => {
  const [genderValue, setGenderValue] = useState(1);
  const [userObj, setUserObj] = useState({});

  const genderOnChange = (e: any) => {
    return setGenderValue(e.target.value);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;

  return (
    <Layout className="page-layout about-you-layout">
      <Header className="board-header">
        <Navbar state={"board"} />
      </Header>
      <Content className="about-you-content">
        <Row>
          <Col span={12}>
            <Form
              {...layout}
              name="basic"
              size="large"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="First Name"
                name="first_name"
                rules={[
                  {
                    required: true,
                    message: "Please input your first name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="last_name"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                label="Home Address"
                name="home_address"
                rules={[
                  {
                    required: true,
                    message: "Please input your home address!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Zip Code"
                name="zip_code"
                rules={[
                  {
                    required: true,
                    message: "Please input your zip code!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Form>
          </Col>
          <Col span={12}>
            <Form
              {...layout}
              name="basic"
              size="large"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="Phone Number" name="phone_number">
                <Input />
              </Form.Item>

              <Form.Item
                label="Birthday"
                name="birthdate"
                rules={[
                  { required: true, message: "Please input your birthday!" },
                ]}
              >
                <DatePicker />
              </Form.Item>

              <Form.Item label="Gender" name="gender">
                <Radio.Group onChange={genderOnChange} value={genderValue}>
                  <Radio value={1}>Male</Radio>
                  <Radio value={2}>Female</Radio>
                  <Radio value={3}>Custom</Radio>
                </Radio.Group>
              </Form.Item>

              {genderValue === 3 ? (
                <Form.Item label="Custom Pronoun" name="custom_pronoun">
                  <Input />
                </Form.Item>
              ) : (
                <div></div>
              )}
            </Form>
          </Col>
        </Row>
      </Content>
      <Footer>
        <Footie></Footie>
      </Footer>
    </Layout>
  );
};

export default Profile;

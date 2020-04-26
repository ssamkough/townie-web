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
import { Link } from "react-router-dom";
import axios from "axios";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const AboutYou = () => {
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

  const postUserAttributes = async (e: any) => {
    e.preventDefault();

    let responseObj: any = {};
    responseObj = { ...userObj };
    responseObj.user_role = 1;

    if (genderValue === 1) {
      responseObj.gender = "Female";
    } else if (genderValue === 2) {
      responseObj.gender = "Male";
    }

    console.log(responseObj);

    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        responseObj
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  const addFormItem = (prop: any) => (e: any) => {
    console.log(userObj);
    return setUserObj({ ...userObj, [prop]: e.target.value });
  };

  const addDateItem = (date: any) => {
    console.log(userObj);
    return setUserObj({ ...userObj, birthday: date._d });
  };

  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;
  return (
    <Layout className="page-layout about-you-layout">
      <Header className="about-you-header">
        <Title className="onboarding-title">About You</Title>
      </Header>
      <Content className="about-you-content">
        <Row>
          <Col>
            <Title level={4}>
              All information is hidden except for username.
            </Title>
          </Col>
        </Row>
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
                <Input onChange={addFormItem("first_name")} />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="last_name"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <Input onChange={addFormItem("last_name")} />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password onChange={addFormItem("password")} />
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
                <Input onChange={addFormItem("home_address")} />
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
                <Input onChange={addFormItem("zip_code")} />
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
                <Input onChange={addFormItem("username")} />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input onChange={addFormItem("email")} />
              </Form.Item>

              <Form.Item label="Phone Number" name="phone_number">
                <Input onChange={addFormItem("phone_number")} />
              </Form.Item>

              <Form.Item
                label="Birthday"
                name="birthdate"
                rules={[
                  { required: true, message: "Please input your birthday!" },
                ]}
              >
                <DatePicker onChange={addDateItem} />
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
                  <Input onChange={addFormItem("gender")} />
                </Form.Item>
              ) : (
                <div></div>
              )}
            </Form>
          </Col>
        </Row>
      </Content>
      <Footer>
        <Row>
          <Col span={6} offset={6}>
            <Button>
              <Link to="/">Back</Link>
            </Button>
          </Col>
          <Col span={6} offset={6}>
            <Button onClick={postUserAttributes}>
              <Link to="/confirm-location">Next</Link>
            </Button>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

export default AboutYou;

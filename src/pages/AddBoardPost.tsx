import React from "react";
import { Layout, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footie from "../components/Footie";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const AddBoardPost = () => {
  const { Header, Content, Footer } = Layout;

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout className="page-layout about-you-layout">
      <Header className="board-header">
        <Navbar state={"profile"} />
      </Header>
      <Content className="about-you-content">
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
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input your title!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Text"
            name="text"
            rules={[{ required: true, message: "Please input your text!" }]}
          >
            <Input.TextArea rows={10} />
          </Form.Item>

          <Form.Item className="board-post-disclaimer">
            <div>This is disclaimer text for rules and such.</div>
          </Form.Item>

          <Link to="/board">
            <Button>Submit</Button>
          </Link>
        </Form>
      </Content>
      <Footer>
        <Footie></Footie>
      </Footer>
    </Layout>
  );
};

export default AddBoardPost;

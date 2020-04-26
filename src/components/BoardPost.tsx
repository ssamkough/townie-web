import React from "react";
import { Layout, Row, Col } from "antd";

const BoardPost = () => {
  return (
    <Layout className="board-post">
      <Row className="">
        <Col span={4}>views : 132</Col>
        <Col span={20}>maximillian</Col>
      </Row>
      <Row justify="space-between">
        <Col span={2}>share</Col>
        <Col span={2}>report</Col>
        <Col span={2}>34 comments</Col>
        <Col span={12}>submitted 4 hours ago</Col>
      </Row>
    </Layout>
  );
};

export default BoardPost;

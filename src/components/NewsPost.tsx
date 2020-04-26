import React from "react";
import { Layout, Row, Col } from "antd";

import NewsPostImage from "./../assets/images/news-post-template.png";

const NewsPost = () => {
  return (
    <Layout className="news-post">
      <Row className="">
        <Col span={4}>image</Col>
        <Col span={20}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col span={12}>share</Col>
        <Col span={12}>submitted 4 hours ago</Col>
      </Row>
    </Layout>
  );
};

export default NewsPost;

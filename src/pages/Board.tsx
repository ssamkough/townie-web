import React from "react";
import { Layout, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import BoardPost from "../components/BoardPost";
import Footie from "../components/Footie";

const Board = () => {
  const { Header, Content, Footer } = Layout;
  const { Text } = Typography;

  return (
    <Layout className="page-layout">
      <Header className="board-header">
        <Navbar state={"board"} />
      </Header>
      <Content className="about-you-content">
        <Link to="/add-board-post">
          <div className="add-board-post-icon-wrapper">
            <Text>Add Post</Text>
            <PlusOutlined />
          </div>
        </Link>
        <br />
        <br />
        <br />
        <BoardPost />
        <br />
        <BoardPost />
        <br />
        <BoardPost />
        <br />
        <BoardPost />
        <br />
        <BoardPost />
        <br />
        <BoardPost />
        <br />
        <BoardPost />
        <br />
        <BoardPost />
      </Content>
      <Footer>
        <Footie></Footie>
      </Footer>
    </Layout>
  );
};

export default Board;

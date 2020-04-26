import React from "react";
import { Layout } from "antd";

import Navbar from "../components/Navbar";
import Footie from "../components/Footie";

const Board = () => {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout className="page-layout about-you-layout">
      <Header className="board-header">
        <Navbar state={"board"} />
      </Header>
      <Content className="about-you-content"></Content>
      <Footer>
        <Footie></Footie>
      </Footer>
    </Layout>
  );
};

export default Board;

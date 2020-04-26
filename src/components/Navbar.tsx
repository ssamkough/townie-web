import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import {
  HomeOutlined,
  PaperClipOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = (state: any) => {
  const [currentMenuItem, setCurrentMenuItem] = useState(state);

  const handleClick = (e: any) => {
    console.log("click ", e);
    return setCurrentMenuItem(e.key);
  };

  return (
    <Layout>
      <Menu
        onClick={handleClick}
        selectedKeys={[currentMenuItem]}
        mode="horizontal"
        className="navbar"
      >
        <Menu.Item key="home">
          <Link to="/home">
            <HomeOutlined className="navbar-icon" />
          </Link>
        </Menu.Item>
        <Menu.Item key="news">
          <Link to="/news">
            <PaperClipOutlined className="navbar-icon" />
          </Link>
        </Menu.Item>
        <Menu.Item key="board">
          <Link to="/board">
            <MessageOutlined className="navbar-icon" />
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link to="/profile">
            <UserOutlined className="navbar-icon" />
          </Link>
        </Menu.Item>
        <Menu.Item key="sign-out">
          <Link to="/">
            <Button className="navbar-icon">Sign Out</Button>
          </Link>
        </Menu.Item>
      </Menu>
    </Layout>
  );
};

export default Navbar;

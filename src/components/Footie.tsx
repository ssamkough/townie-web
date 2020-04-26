import React from "react";
import { Layout } from "antd";

const Footie = () => {
  const { Header } = Layout;
  return (
    <Layout className="footie">
      <Header className="footie-header">Townie</Header>
    </Layout>
  );
};

export default Footie;

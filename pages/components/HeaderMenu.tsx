import React from 'react';
import { Layout, Menu, theme } from 'antd';

const { Header } = Layout;

export const HeaderMenu: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <ul>
          Home
        </ul>
      </Header>
    </Layout>
  );
};
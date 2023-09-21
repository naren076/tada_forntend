import React, { useState } from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";

const { Header } = Layout;

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "1",
  },
];

const itemsright: MenuProps["items"] = [
  {
    label: "Experiment",
    key: "2",
  },
  {
    label: "Help",
    key: "3",
  },
  {
    label: "Login",
    key: "4",
  },
];


export const HeaderMenu: React.FC = () => {
  const [current, setCurrent] = useState("1");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          disabledOverflow={true}
        />
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={itemsright}
          disabledOverflow={true}
          className="ml-auto"
        />
    </Header>
  );
};
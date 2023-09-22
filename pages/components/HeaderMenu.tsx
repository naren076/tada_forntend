import React, { useState } from "react";
import {
  Layout,
  Menu,
  theme,
  Button,
  Modal,
  Checkbox,
  Form,
  Input,
  ConfigProvider,
} from "antd";
import type { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

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
    label: "Login ",
    key: "4",
    itemIcon: <UserOutlined />,
  },
];

export const HeaderMenu: React.FC = () => {
  const router = useRouter();

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [current, setCurrent] = useState("1");

  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  type LayoutType = Parameters<typeof Form>[0]["layout"];

  const [formLayout, setFormLayout] = useState<LayoutType>("vertical");

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } }
      : null;

  const buttonItemLayout =
    formLayout === "horizontal"
      ? { wrapperCol: { span: 14, offset: 4 } }
      : null;

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  // const handleSubmit = (values) => {
  //   console.log(values)
  // }

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    if (e.key == "4") {
      showModal();
    }

    if (e.key == "1") {
      router.push("/home");
    }

    setCurrent(e.key);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
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
        style={{ marginLeft: "auto" }}
      />

      <ConfigProvider
        theme={{
          token: {
            colorBgElevated: "#D9D9D9",
          },
        }}
      >
        <Modal
          className="my-custommodal-class"
          visible={visible}
          footer={null}
          closeIcon={false}
          mask={false}
          bodyStyle={{
            alignItems: "center",
            justifyContent: "center",
            marginBottom: -20,
          }}
          width={244}
        >
          <Form
            // {...formItemLayout}
            layout={"vertical"}
            form={form}
            initialValues={{ layout: formLayout }}
            onValuesChange={onFormLayoutChange}
          >
            <Form.Item
              label="User name"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              <Input
                placeholder="Username or email address"
                style={{
                  fontSize: "12px",
                  fontWeight: "450",
                  fontStyle: "italic",
                }}
              />
            </Form.Item>
            <Form.Item
              label="Password"
              style={{ fontSize: "12px", fontWeight: "500" }}
            >
              <Input
                placeholder="Password"
                style={{
                  fontSize: "12px",
                  fontWeight: "450",
                  fontStyle: "italic",
                }}
              />
            </Form.Item>
            <Form.Item
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Button
                style={{
                  background: "#C8102E",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: "700",
                  width: 135,
                }}
                onClick={hideModal}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </ConfigProvider>
    </Header>
  );
};

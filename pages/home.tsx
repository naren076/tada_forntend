import { Layout, Space, Table, Button, Dropdown, Tag, Divider } from "antd";
import type { ColumnsType } from "antd/es/table";
import { CloseOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import Closeicon from "../public/images/CloseIcon.png";
import Image from "next/image";

const { Content } = Layout;

interface DataType {
  key: string;
  id: string;
  title: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Clear",
    key: "clear",
    render: (_, record) => (
      <Space size="middle">
        <CloseOutlined style={{ color: "gray" }} />
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    id: "TS0001",
    title: "Drive Bar Extension - Cutline",
  },
  {
    key: "2",
    id: "TS0002",
    title: "Drive Bar Extension Home Position",
  },
  {
    key: "3",
    id: "TS0003",
    title: "Motor and Gearbox - Plantary Gearbox",
  },
  {
    key: "4",
    id: "TS0004",
    title: "Endplay Planet Gears to",
  },
  {
    key: "5",
    id: "TS0005",
    title: "Closure system - Apex Shaft Stack",
  },
];

//dropdown list load
const items: MenuProps["items"] = [
  {
    label: "1st project",
    key: "1",
  },
  {
    label: "2nd project",
    key: "2",
  },
  {
    label: "3rd project",
    key: "3",
  },
  {
    label: "4rd project",
    key: "4",
  },
];

const handleMenuClick: MenuProps["onClick"] = (e) => {
  console.log("click", e);
};

const menuProps = {
  items,
  onClick: handleMenuClick,
};

//clear filter close
const log = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
};

export default function HomePage() {
  return (
    <Content
      style={{ padding: "0 50px", background: "#fff" }}
      className="content-height pt-10"
    >
      <div className="grid grid-cols-2 gap-4">
        {/* div1 */}
        <div className="items-center">
          <p className="homenewshead font-bold text-2xl">
            Recent Stacks & Calculated Parts
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "#888B8D",
              fontFamily: "J&J Circular",
            }}
          >
            Filter by project
          </p>
          <div className="rowhome">
            <div className="columnhome">
              <Dropdown menu={menuProps}>
                <Button
                  style={{
                    color: "#999999",
                    fontStyle: "italic",
                    fontFamily: "J&J Circular",
                  }}
                >
                  <Space>
                    All Projects
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </div>
            <div className="clearfilters">
              <Space size={[0, 8]} wrap>
                <Tag
                  closeIcon={
                    // <Image src={Closeicon} alt="" width={14} height={14} />
                    <CloseOutlined style={{ color: "black" }} />
                  }
                  onClose={log}
                  color="#D9D9D9"
                  style={{
                    fontSize: "14px",
                    color: "#63666A",
                    fontFamily: "J&J Circular",
                  }}
                >
                  Clear Recent
                </Tag>
              </Space>
            </div>
          </div>

          <Divider />

          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            size="small"
          />
        </div>
        {/* div2 */}
        <div className="items-center">
          <div>
            <p className="text-2xl font-bold homenewshead">News and Updates</p>
          </div>
          <div className="flex flex-nowrap">
            <p style={{ color: "#000000" }}>Tolerance Analysis</p>{" "}
            <p style={{ color: "#999999" }}>| August 13, 2023</p>
          </div>
          <div style={{ width: "80%" }}>
            Are you a fan of 6.0 sigma, but wish there was something better?
            We’ve got just the thing for you! We’ve updated the Tolerance
            Analysis options with 6.1 sigma. Try it out in <u>Experiment</u> or{" "}
            <u>Tools</u>.
          </div>
        </div>
      </div>
    </Content>
  );
}

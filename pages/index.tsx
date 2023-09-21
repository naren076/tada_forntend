import messageIcon from "../public/images/Message Icon.svg"
import Image from "next/image";
import { Layout } from 'antd';

const { Content} = Layout;

export default function LoginPage() {
  return (
    <Content style={{ padding: '0 50px', background: "#fff" }} className="content-height pt-10">
       <div className="messageiconrow inline-flex items-center w-full">
        <div className="float-left">
          <Image src={messageIcon} alt="" className="pr-3" />
        </div>
        <div className="float-left">
            <p className="text-2xl font-bold ml-2 homenewshead">
              News and Updates
            </p>
          </div>
        </div>
        <div className="homenewsdate text-base font-semibold flex">
        <p style={{ color: "#000000" }}>Tolerance Analysis</p>{" "}
        <p style={{ color: "#999999" }}>| August 13, 2023</p>
      </div>
      <div className="homenews text-base font-normal">
          Are you a fan of 6.0 sigma, but wish there was something better? We’ve
          got just the thing for you! We’ve updated the Tolerance Analysis
          options with 6.1 sigma. Try it out in <u>Experiment</u> or <u>Tools</u>.
      </div>
  </Content>
)}
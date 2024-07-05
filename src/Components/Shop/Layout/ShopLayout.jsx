import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

import { TopMenu } from "./TopMenu";
import { NavMenu } from "./NavMenu";

const { Header, Content } = Layout;

export const ShopLayout = () => {
  return (
    <Layout className="h-screen">
      <Toaster richColors />
      <Header className="sticky top-0 p-0 z-10 w-full grid bg-[#ffffff] mb-4">
        <TopMenu />
        <NavMenu />
      </Header>
      <Content
        style={{
          padding: "40px 0px 10px 0px",
          backgroundColor: "#f2f2f2",
          overflow: "auto",
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  );
};

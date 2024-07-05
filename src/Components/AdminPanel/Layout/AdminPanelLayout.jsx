import { Image, Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";

import { CategoryIcon } from "../../Icons/CategoryIcon";
import { DashboardIcon } from "../../Icons/DashboardIcon";
import { SalesIcon } from "../../Icons/SalesIcon";
import { ShoppingCartIcon } from "../../Icons/ShoppingCartIcon";
import { UsersIcon } from "../../Icons/UsersIcon";
import TransferLogo from "../../../assets/logo transfermovil.svg";
import { Toaster } from "sonner";

const { Content, Sider } = Layout;

const navLinks = [
  {
    key: "dashboard",
    icon: <DashboardIcon color="white" />,
    label: <span className=" ml-2 text-white-100 hover:text-primary-400 flex font-semibold">Dashboard</span>,
    route: "/admin/dashboard",
  },
  {
    key: "clients",
    icon: <UsersIcon color="white" />,
    label: <span className=" ml-2 text-white-100 hover:text-primary-400 flex font-semibold">Clientes</span>,
    route: "/admin/clients",
  },
  {
    key: "products",
    icon: <ShoppingCartIcon color="white" />,
    label: <span className=" ml-2 text-white-100 hover:text-primary-400 flex font-semibold">Productos</span>,
    route: "/admin/products",
  },
  {
    key: "categories",
    icon: <CategoryIcon color="white" />,
    label: <span className=" ml-2 text-white-100 hover:text-primary-400 flex font-semibold">Categorias</span>,
    route: "/admin/categories",
  },
  {
    key: "sales",
    icon: <SalesIcon color="white" />,
    label: <span className=" ml-2 text-white-100 hover:text-primary-400 flex font-semibold">Ventas</span>,
    route: "/admin/sales",
  },
];
export const AdminPanelLayout = () => {
  return (
    <Layout className="h-screen">
      <Toaster richColors />
      <Sider theme="dark" breakpoint="lg" collapsedWidth="0">
        <div className="flex w-full justify-center h-[64px] items-center">
          <Image width={40} height={40} src={TransferLogo} preview={false} />
        </div>
        <Menu theme="dark" mode="inline">
          {navLinks.map((link) => {
            return (
              <Menu.Item key={link.key} icon={link.icon} >
                <Link to={`${link.route}`}>{link.label}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        {/* <Header /> */}
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div className="p-6 min-h-96  rounded-lg">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

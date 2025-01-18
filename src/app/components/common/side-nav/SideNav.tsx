import Link from "next/link";
import styles from "./SideNav.module.css";
import React from "react";
import { BarChartOutlined, PlusCircleOutlined, PoweroffOutlined } from "@ant-design/icons";
const SideNav = () => {
  const links = [
    {
      name: "My Tasks",
      url: "/dashboard",
      icon: (
        <React.Fragment>
          <PlusCircleOutlined />
        </React.Fragment>
      ),
    },
    {
      name: "Reports",
      url: "/reports",
      icon: (
        <React.Fragment>
          <BarChartOutlined />
        </React.Fragment>
      ),
    },
  ];
  return (
    <div className={styles.nav}>
      <img src="/logo.png" alt="logo" width="150" />
      <div className={styles.linkContainer}>
        {links.map((link, index) => {
          return (
            <Link key={index} href={link.url}>
              <div className={styles.links}>
                {link.icon}
                {link.name}
              </div>
            </Link>
          );
        })}
      </div>

      <div className={styles.logout}>
        <PoweroffOutlined /> <span>Logout</span>
      </div>
    </div>
  );
};

export default SideNav;

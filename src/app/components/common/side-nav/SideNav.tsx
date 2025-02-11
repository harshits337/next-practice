'use client';
import Link from "next/link";
import styles from "./SideNav.module.css";
import React from "react";
import { BarChartOutlined, PlusCircleOutlined, PoweroffOutlined } from "@ant-design/icons";
import { useAuth } from "@/hooks/auth/auth";
import { useSelector } from "react-redux";
const SideNav = () => {
  const {logout }= useAuth();
  const handleLogout = () => {
    logout();
  }

  const authState = useSelector((state : any) => state.auth);
  const links = [
    {
      name: "Profile",
      url: `/profile/${authState?.userDetails?.id}`,
      icon: (
        <React.Fragment>
          <PlusCircleOutlined />
        </React.Fragment>
      ),
    },
    {
      name: "Search",
      url: "/search",
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

      <div className={styles.logout} onClick={()=>handleLogout()}>
        <PoweroffOutlined  /> <span>Logout</span>
      </div>
    </div>
  );
};

export default SideNav;

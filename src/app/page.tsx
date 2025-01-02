"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Card, ConfigProvider, Input, Space } from "antd";
import {
  ClockCircleOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [passowrd, setPassword] = useState("");

  const handleLogIn = () => {
    console.log("userName", userName);
    console.log("passowrd", passowrd);
    if (userName !== "" && passowrd !== "") {
      router.push("/restolayout");
    }
  };
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span style={{ fontSize: 20, fontWeight: 600, paddingLeft: 20 }}>
          Restopay
        </span>
      </div>
      <div className={styles.body} style={{ backgroundColor: "blue" }}>
        <div className={styles.backgroundDiv}></div>
        <div
          style={{ minWidth: "60%", height: "100%", backgroundColor: "#FFF" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
              gap: 45,
            }}
          >
            <div>
              <span
                style={{
                  color: "black",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: 18,
                }}
              >
                Restaurant Login
              </span>
            </div>
            <div style={{ width: "30%" }}>
              <Input
                size="large"
                placeholder="Username"
                prefix={<UserOutlined />}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div style={{ width: "30%" }}>
              <Input
                size="large"
                placeholder="Password"
                type="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <Button
                size="large"
                className={styles.buttonStyle}
                onClick={() => {
                  handleLogIn();
                }}
              >
                Log In
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{
            minWidth: "20%",
            height: "100%",
            backgroundColor: "#0e0d0d",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Card
            className={styles.bodyCard}
            style={{ border: "3px solid gray" }}
          >
            <div>
              <UserOutlined style={{ fontSize: "300%" }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 18, fontWeight: 300 }}>Login</span>
            </div>
          </Card>

          <Card className={styles.bodyCard}>
            <div>
              <ClockCircleOutlined style={{ fontSize: "300%" }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 18, fontWeight: 300 }}>OTP</span>
            </div>
          </Card>
        </div>
      </div>
      <div className={styles.footer}>
        <div
          style={{
            height: "100%",
            fontSize: 16,
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div>
            Need Quick Help? <PhoneOutlined style={{ paddingLeft: 10 }} />
            9011262635
          </div>
          <div>Email us at: yuvraj.mane@yahoo.com</div>
        </div>
      </div>
    </div>
  );
}

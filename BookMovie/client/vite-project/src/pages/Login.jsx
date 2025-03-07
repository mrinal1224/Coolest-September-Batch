import React from "react";
import { Button, Form, Input, message } from "antd";
import {Link} from 'react-router-dom'
import "./auth.css";  // Custom CSS file for better styling

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="title">Login to MovieBook</h1>
        <Form layout="vertical">
          <Form.Item 
            label="Email"
            name="email"
            rules={[{ required: true, message: "Email is required" }]}
          >
            <Input type="email" placeholder="Enter your email" className="input-field"/>
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input type="password" placeholder="Enter your password" className="input-field"/>
          </Form.Item>

          <Button type="primary" block htmlType="submit" className="auth-button">
            Login
          </Button>
        </Form>
        <p className="switch-text">
          New User? <Link to='/register'>Regsiter here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
import React from "react";
import { Button, Form, Input, message } from "antd";
import {Link} from 'react-router-dom'
import "./auth.css";  // Importing CSS for consistency
import { RegisterUser } from "../apiCalls/users";


function Register() {

  const registerData = async(values)=>{
    const response = await RegisterUser(values)
    console.log(response)

  }

  return (
    <div className="auth-container" >
      <div className="auth-box">
        <h1 className="title">Register for MovieBook</h1>
        <Form layout="vertical" onFinish={registerData}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Name is required" }]}
          >
            <Input type="text" placeholder="Enter your name" className="input-field"/>
          </Form.Item>

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
            Register
          </Button>
        </Form>
        <p className="switch-text">
          Already a user?  New User? <Link to='/login'>Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
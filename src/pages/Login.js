import React, { useContext } from 'react';

import { Col, Card, Row, Avatar, Form, Button, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined} from '@ant-design/icons';
import { AuthContext } from '../contexts/authContext';

const Login=(props)=>{

    const { setAuthenticated }=useContext(AuthContext);

    const onFinish = (values) => {
       
            
        // check for error response
        
        setAuthenticated(true);                
        props.history.push('/');
       
    };


    return(
        <div id="loginBackground">
            {/* <Col span={12}> */}
                <Card id="loginCard" title={"nothing"}>
                    <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}>
                        <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"/>
                        </Form.Item>                  
                        <Form.Item>
                            <Button id="loginButton" type="primary" htmlType="submit" className="login-form-button">
                                Login
                            </Button>
                        
                        </Form.Item>
                    </Form>
                </Card>
            {/* </Col>            */}
        </div>       
    )
}
export default Login
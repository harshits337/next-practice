'use client';
import { useAuth } from '@/hooks/auth/auth';
import styles from './auth.module.css'
import {  Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { Fragment, useState } from 'react';
import { LoginRequest } from '@/interfaces/auth';

const Login = () => {

    const [form] = useForm();
    const [loginValues] = useState({
        email : '',
        password : ''
    });
    const {login} = useAuth();
    const onFormSubmit = async  (values : LoginRequest) => {
       login(values)
    }
    return(
        <Fragment>
        <div className={styles.wrapper}>
           
            <div className={styles.title}>Login</div>
            <div className={styles.formContainer}>
                <Form
                    name="login-form"
                    layout="vertical"
                    form={form}
                    initialValues={loginValues}
                    onFinish={onFormSubmit}
                 >

                    <Form.Item label="Email" name="email" rules={[
                        {
                            required : true,
                            message : 'Email is required'
                        }
                    ]}>
                        <Input type='email'/>
                    </Form.Item>

                    <Form.Item label="Password" name="password" rules={[
                        {
                            required : true,
                            message : 'Password is required'
                        }
                    ]}>
                        <Input type='password'/>
                    </Form.Item>
                   
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Login</Button>
                    </Form.Item>

                   
                </Form>
            </div>
        </div>
        </Fragment>
    )
}

export default Login;
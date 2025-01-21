'use client';
import { useLoginCheck } from '@/hooks/auth/auth';
import styles from './auth.module.css'
import {  Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useState } from 'react';

const Login = () => {

    const [form] = useForm();
    const [loginValues, setLoginValues] = useState({
        email : '',
        password : ''
    })

    const {loginCheck} = useLoginCheck();
    const onFormSubmit = (values : unknown) => {
        loginCheck(values);
    }

    return(

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
    )

}

export default Login;
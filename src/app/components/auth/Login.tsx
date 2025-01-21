'use client';
import { useLoginCheck } from '@/hooks/auth/auth';
import styles from './auth.module.css'
import {  Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { Fragment, useState } from 'react';
import { LoginRequest } from '@/interfaces/auth';
import { Alert } from "antd";
import { Spinner } from '../common/spinner/Spinner';

const Login = () => {

    const [form] = useForm();
    const [loginValues] = useState({
        email : '',
        password : ''
    });
    const [showSpin, setShowSpin] = useState(false);
    const [showError, setShowError] = useState(false);
    const {login} = useLoginCheck();
    const onFormSubmit = async  (values : LoginRequest) => {
        setShowSpin(true);
        try {
            const  loginResponse = await login(values);
        console.log(loginResponse)
        if(!loginResponse) {
            setShowError(true);
        }
        } catch (err) {
            console.log(err);
            setShowError(true);   
        }
        setShowSpin(false);
    }
    return(
        <Fragment>
            {showSpin && <Spinner/>}
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
                    {showError && <Form.Item>
                           <Alert message="Invalid email or password" type="error" />
                        </Form.Item>
}
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
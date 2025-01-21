'use client';
import styles from './auth.module.css'
import {  Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useState } from 'react';
const SignUp = () =>{
    const [form] = useForm();
    const [registrationValues] = useState({
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        confirmPassword : ''
    });

    const onFormSubmit = (values : unknown) => {
        console.log(values);
      
    }
    return(
        <div className={styles.wrapper}>
            <div className={styles.title}>
                Sign Up
            </div>
            <div className={styles.formContainer}>
                <Form
                    layout='vertical'
                    form={form}
                    initialValues={registrationValues}
                    name='registration-form'
                    onFinish={onFormSubmit}

                >

                    <Form.Item label="First Name" name="firstName"
                        rules={[
                            {
                                required : true,
                                message : 'Please input your first name'
                            },
                            {
                                pattern: /^[A-Za-z]+$/,
                                message: 'First name should contain letters only'
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Last Name" name="lastName"
                        rules={[
                            {
                                required : true,
                                message : 'Please input your Last name'
                            },
                            {
                                pattern: /^[A-Za-z]+$/,
                                message: 'Last name should contain letters only'
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Email" name="email"
                        rules={[
                            {
                                required : true,
                                message : 'Email is required'
                            },
                            
                        ]}
                    >
                        <Input type='email'/>
                    </Form.Item>

                    <Form.Item label="Password" name="password"
                        rules={[
                            {
                                required : true,
                                message : 'Password is required'
                            },
                            {
                                min: 6,
                                message: 'Password should be minimum 6 characters'
                            }
                        ]}
                    >
                        <Input type='password'/>
                    </Form.Item>
                    <Form.Item label="Confirm Password" name="confirmPassword"
                        rules={[
                            {
                                required : true,
                                message : 'Confirm Password is required'
                            },
                            {
                                min: 6,
                                message: 'Password should be minimum 6 characters'
                            }
                        ]}
                    >
                        <Input type='password'/>
                    </Form.Item>

                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            Sign Up
                        </Button>
                    </Form.Item>

                </Form>
            </div>
            <div></div>
        </div>
    )


}

export default SignUp;
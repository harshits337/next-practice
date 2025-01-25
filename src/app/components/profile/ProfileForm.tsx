'use client';
import {  Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";

import styles from './profile.module.css'

const ProfileForm = () =>{

    const [profileValues] = useState({
        firstName : "",
        lastName : "",
        email : "",
        gender : "",
        dob : "",
        currentCompany : "",
        currentRole : "",
        totalExperience : "",
        title : "",
        about : "",
        username : "",
        skills : [],
        profilePic : "",
        country : "",
        phoneNumber : "",
    })

    const [form] = useForm();
    return(
        <div>
            <Form
                name='profile-form'
                layout="vertical"
                form={form}
                initialValues={profileValues}
            >

                <div className={styles.row}>
                    <Form.Item label="First Name" name="firstName" rules={[
                        {
                            required : true,
                            message  : "First Name is required"
                        }
                    ]}
                        style={{
                            flex: 1
                        }}
                    >
                        <Input/>

                    </Form.Item>
                    <Form.Item label="First Name" name="firstName" rules={[
                        {
                            required : true,
                            message  : "First Name is required"
                        }
                    ]}
                        style={{
                            flex: 1
                        }}
                    >
                        <Input/>

                    </Form.Item>
                    <Form.Item label="First Name" name="firstName" rules={[
                        {
                            required : true,
                            message  : "First Name is required"
                        }
                    ]}
                        style={{
                            flex: 1
                        }}
                    >
                        <Input/>

                    </Form.Item>
                </div>

            </Form>
        </div>
    )
}

export default ProfileForm;
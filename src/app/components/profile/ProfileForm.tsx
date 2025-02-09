"use client";
import { Form, Input, Button, DatePicker, Select, Upload } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import styles from "./profile.module.css";
import { ProfileValues } from "@/interfaces/profile/profileInterfaces";

import { useProfileHook } from "@/hooks/profile";
import { useRouter } from "next/navigation";
import ProfileFormSkeleton from "./profile-form-skeleton";

const { Option } = Select;

interface ProfileFormProps {
  profile?: ProfileValues;
  edit?: boolean;
}

const ProfileForm = ({ edit, profile }: ProfileFormProps) => {
  const [profileValues] = useState<ProfileValues>({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    dob: "",
    currentCompany: "",
    currentRole: "",
    totalExperience: "",
    title: "",
    about: "",
    username: "",
    skills: [],
    profilePic: "",
    country: "",
    phoneNumber: "",
  });

  const [form] = useForm();
  const router = useRouter();

  const { createProfile, userId, updateProfile } = useProfileHook();
  const onFinish = async (values: ProfileValues) => {
    console.log("Received values:", values);

    if (!edit) {
      const res: any = await createProfile(values);
      console.log("res", res);
      if (res.status === "success") {
        console.log("Profile created successfully");
        router.push("/profile/" + userId);
      }
    } else {
      const res: any = await updateProfile(values);
      console.log("res", res);
      if (res.status === "success") {
        console.log("Profile created successfully");
        router.push("/profile/" + userId);
      }
    }
  }
    useEffect(() => {
      if (profile) {
        form.setFieldsValue({
          firstName: profile.firstName,
          lastName: profile.lastName,
          email: profile.email,
          phoneNumber: profile.phoneNumber,
          gender: profile.gender,
          currentCompany: profile.currentCompany,
          currentRole: profile.currentRole,
          totalExperience: profile.totalExperience,
          title: profile.title,
          about: profile.about,
          username: profile.username,
          skills: profile.skills.split(","), // Convert string to array
          country: profile.country,
          dob: "",
        });
      }
    }, [profile, form]);

    if (edit && !profile) {
      return <ProfileFormSkeleton />;
    }

    return (
      <div className={styles.profileForm}>
        <Form
          name="profile-form"
          layout="vertical"
          form={form}
          initialValues={profileValues}
          onFinish={onFinish}
        >
          <div className={styles.row}>
            <div className={styles.col}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "First Name is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>

            <div className={styles.col}>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Last Name is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.col}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Email is required",
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email",
                  },
                ]}
              >
                <Input type="email" />
              </Form.Item>
            </div>

            <div className={styles.col}>
              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Phone Number is required",
                  },
                  {
                    pattern: new RegExp(/^[0-9\b]+$/),
                    message: "Please enter a valid phone number",
                  },
                  {
                    len: 10,
                    message: "Phone number should be 10 digits",
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>
            </div>

            <div className={styles.col}>
              <Form.Item
                label="Gender"
                name="gender"
                rules={[
                  {
                    required: true,
                    message: "Gender is required",
                  },
                ]}
              >
                <Select>
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.col}>
              <Form.Item
                label="Date of Birth"
                name="dob"
                rules={[
                  {
                    required: true,
                    message: "DOB is required",
                  },
                ]}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  disabledDate={(current) =>
                    current && current.toDate() > new Date()
                  }
                />
              </Form.Item>
            </div>

            <div className={styles.col}>
              <Form.Item
                label="Current Company"
                name="currentCompany"
                rules={[
                  {
                    required: true,
                    message: "Current Company is required",
                  },
                  {
                    max: 50,
                    message: "Company name should be less than 50 characters",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className={styles.col}>
              <Form.Item
                label="Current Role"
                name="currentRole"
                rules={[
                  {
                    required: true,
                    message: "Current Role is required",
                  },
                  {
                    max: 50,
                    message: "Role name should be less than 50 characters",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className={styles.col}>
              <Form.Item
                label="title"
                name="title"
                rules={[
                  {
                    required: true,
                    message: "title is required",
                  },
                  {
                    max: 50,
                    message: "Role name should be less than 50 characters",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.col}>
              <Form.Item
                label="Skills"
                name="skills"
                rules={[
                  {
                    required: true,
                    message: "Skills are required",
                  },
                ]}
              >
                <Select
                  mode="tags"
                  style={{ width: "100%" }}
                  placeholder="Skills"
                >
                  <Option value="javascript">JavaScript</Option>
                  <Option value="react">React</Option>
                  <Option value="node">Node</Option>
                  {/* Add more options as needed */}
                </Select>
              </Form.Item>
            </div>

            <div className={styles.col}>
              <Form.Item
                label="Total Experience (in years)"
                name="totalExperience"
                rules={[
                  {
                    required: true,
                    message: "Total Experience is required",
                  },
                  {
                    pattern: new RegExp(/^[0-9]*\.?[0-9]+$/),
                    message: "Please enter a valid number",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.col}>
              <Form.Item
                label="About"
                name="about"
                rules={[
                  {
                    required: true,
                    message: "About is required",
                  },
                  {
                    max: 500,
                    message: "About should be less than 200 words",
                  },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.col}>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Username is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className={styles.col}>
              <Form.Item
                label="Country"
                name="country"
                rules={[
                  {
                    required: true,
                    message: "Country is required",
                  },
                  {
                    max: 50,
                    message: "Country name should be less than 50 characters",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.col}>
              <Form.Item
                label="Profile Picture"
                name="profilePic"
                //   rules={[
                // {
                //   required: true,
                //   message: "Profile Picture is required",
                // },
                //   ]}
              >
                <Upload
                  name="profilePic"
                  listType="picture"
                  beforeUpload={() => false} // Prevent automatic upload
                  accept="image/*"
                  maxCount={1}
                  onChange={async (info) => {
                    const file = info.file.originFileObj;
                    const reader = new FileReader();
                    if (file) {
                      reader.readAsDataURL(file);
                      reader.onload = () => {
                        form.setFieldsValue({ profilePic: reader.result });
                      };
                    }
                  }}
                >
                  <Button>Click to Upload</Button>
                </Upload>
              </Form.Item>
            </div>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  };


export default ProfileForm;

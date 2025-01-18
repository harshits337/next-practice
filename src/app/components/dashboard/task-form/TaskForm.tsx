
import {  Button, Form, Input, Select } from 'antd';
import { useForm } from 'antd/es/form/Form';
import styles from './taskForm.module.css'
const TaskForm = (props : any) => {
    const [form] = useForm();
    const onFinsh = (values: any) => {
        console.log('Received values of form: ', values);
        props.handleSubmit(values);
        form.resetFields();

    }
  return (
  
    <div className={styles.formWrapper}>
        <Form 
        form={form}
        name='task-form'
        layout='vertical'
        onFinish={onFinsh}
    >

        <Form.Item name="title" label="Title" rules={[
            {
                required : true,
            message : 'Please input the title'
            },
            {
                max : 15,
                message : 'Title must be max 15 characters'
            }
        ]}>
            <Input />
        </Form.Item>

        <Form.Item name="description" label="Description" rules={[
            {
                required : true,
            message : 'Please input the description'
            },
            {
                max : 100,
                message : 'Description must be max 100 characters'
            }
        ]}>
            <Input />
        </Form.Item>

        <Form.Item name="status" label="Status" rules={[
            {
                required : true,
            message : 'Please select the status'
            }
        ]}>
            <Select>
                <Select.Option value="Completed">Completed</Select.Option>
                <Select.Option value="Pending">Pending</Select.Option>
            </Select>
        </Form.Item>

        <Form.Item name="priority" label="Priority" rules={[
            {
                required : true,
            message : 'Please select the priority'
            }
        ]}>
            <Select>
                <Select.Option value="high">High</Select.Option>
                <Select.Option value="medium">Medium</Select.Option>
                <Select.Option value="low">Low</Select.Option>
            </Select>
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>

    </Form>
    </div>
  );
};
export default TaskForm;

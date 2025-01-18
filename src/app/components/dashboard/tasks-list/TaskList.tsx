"use client";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import styles from "./tasks.module.css";
import { Button, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import TaskForm from "../task-form/TaskForm";
import { Modal } from "antd";
import React, { useState } from "react";
import Toast from "../../common/toast/Toast";

interface DataType {
  key: number;
  title: string;
  status: string;
  description: string;
  priority: string;
  color: string;
}


const TaskList = () => {

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => {
        const color: string = status === "Completed" ? "green" : "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Priority",
      dataIndex: "priority",
      render: (priority: string) => {
        const color: string =
          priority === "high"
            ? "red"
            : priority === "medium"
            ? "blue"
            : "green";
        return <Tag color={color}>{priority}</Tag>;
      },
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined onClick={() => handleEdit(record)} />
          <DeleteOutlined onClick={() => handleDelete(record)} />
        </Space>
      ),
    },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'info' as 'success' | 'error' | 'info'
  });

  const handleShowToast = (message: string, type: 'success' | 'error' | 'info') => {
    setToast({ show: true, message, type });
  };

  const handleCloseToast = () => {
    setToast({ ...toast, show: false });
  };
  const [selectedTask, setSelectedTask] = useState<any>({});

  const handleSubmit = (values: DataType) => {
    console.log(values);
    setOpenModal(false);
    if (selectedTask && selectedTask.key) {
      const newTasks = tasks.map((tasks) => {
        if (tasks.key === selectedTask.key) {
          return { ...tasks, ...values };
        }
        return tasks;
      });
      setTasks(newTasks);
     
      handleShowToast('Task updated successfully', 'success');
      setSelectedTask({});
      return;
    }

    values.key = tasks.length + 1;
    setTasks([...tasks, values]);
    handleShowToast('Task added successfully', 'success');
    setSelectedTask({});
    
  };

  const handleEdit = (record: DataType) => {
    console.log(record);

    setSelectedTask(record);
    setOpenModal(true);
  };

  const handleDelete = (record: DataType) => {
    console.log(record);
    const newTasks = tasks.filter((task) => task.key !== record.key);
    setTasks(newTasks);
    handleShowToast('Task deleted successfully', 'success');
  };
  const [tasks, setTasks] = useState<DataType[]>([
    {
      key: 1,
      title: "Complete Documentation",
      status: "Completed",
      description: "Complete the project documentation",
      color: "blue",
      priority: "high",
    },
    {
      key: 2,
      title: "Fix Login Bugs",
      status: "Not completed",
      description: "Fix bugs in the login module",
      color: "green",
      priority: "medium",
    },
    {
      key: 3,
      title: "Design Landing Page",
      status: "Not completed",
      description: "Design the new landing page",
      color: "yellow",
      priority: "low",
    },
    {
      key: 4,
      title: "Update User Profile",
      status: "Completed",
      description: "Update the user profile feature",
      color: "purple",
      priority: "medium",
    },
    {
      key: 5,
      title: "Implement Payment Gateway",
      status: "Not completed",
      description: "Implement the payment gateway",
      color: "orange",
      priority: "high",
    },
  ]);
  return (
    <div className={styles.wrapper}>
        {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={handleCloseToast}
        />
      )}
      <div className={styles.addBtn}>
        {" "}
        <Button type="primary" onClick={() => {
            setOpenModal(true);
            setSelectedTask({});
        }}>
          {" "}
          <PlusOutlined /> Add Task
        </Button>
      </div>
      {/* <div className={styles.title}>Here is your tasks for today</div>
            <div className={styles.container}>
                {tasks.map((task,index)=>{
                    return(
                        <div key={index} className={styles.taskCard}>
                            <div className={styles.infoContainer}>
                                <div className={styles.title}>{task.name}</div>
                                <div className={styles.statusContainer}>
                                    <span className={styles.priority}>{task.priority}</span>
                                    <span className={styles.status}>{task.status}</span>
                                </div>
                            </div>
                            <div className={styles.description}>{task.description}</div>
                           
                        </div>
                    )
                })}
            </div> */}

      <Table<DataType>
        columns={columns}
        dataSource={tasks}
        style={{ width: " 100%" }}
      />

      {/* <TaskForm/> */}

      <Modal
        title="Add Task"
        open={openModal}
        footer={false}
        onCancel={() => setOpenModal(false)}
      >
        <TaskForm open={openModal} handleSubmit={handleSubmit} task={selectedTask} />
      </Modal>
    </div>
  );
};

export default TaskList;

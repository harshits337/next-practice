"use client";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import styles from "./tasks.module.css";
import { Button, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import TaskForm from "../task-form/TaskForm";
import { Modal } from "antd";
import React, { useState } from "react";
import Toast from "../../common/toast/Toast";
import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import {Dayjs} from "dayjs";
import dayjs from "dayjs";

const allTasks : DataType[] = [
  {
    key: 1,
    title: "Complete Documentation",
    status: "Completed",
    description: "Complete the project documentation",
    color: "blue",
    priority: "high",
    category : "Documentation",
    createdDate: "2025-01-17",
  },
  {
    key: 2,
    title: "Fix Login Bugs",
    status: "Not completed",
    description: "Fix bugs in the login module",
    color: "green",
    priority: "medium",
    category : "Personal",
    createdDate: "2025-01-15",
  },
  {
    key: 3,
    title: "Design Landing Page",
    status: "Not completed",
    description: "Design the new landing page",
    color: "yellow",
    priority: "low",
    category : "Coding",
    createdDate: "2025-01-18",
  },
  {
    key: 4,
    title: "Update User Profile",
    status: "Completed",
    description: "Update the user profile feature",
    color: "purple",
    priority: "medium",
    category : "Documentation",
    createdDate: "2025-01-18",
  },
  {
    key: 5,
    title: "Implement Payment Gateway",
    status: "Not completed",
    description: "Implement the payment gateway",
    color: "orange",
    priority: "high",
    category : "Workout",
    createdDate: "2025-01-18",
  },
];



const defaultDate = [
  dayjs(new Date().toISOString()),
];

interface DataType {
  key?: number;
  title: string;
  status: string;
  description: string;
  priority: string;
  color: string;
  createdDate: string;
  category : string;
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
      title: "Category",
      dataIndex: "category",
      key: "category",
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
    message: "",
    type: "info" as "success" | "error" | "info",
  });

  const handleShowToast = (
    message: string,
    type: "success" | "error" | "info"
  ) => {
    setToast({ show: true, message, type });
  };

  const handleCloseToast = () => {
    setToast({ ...toast, show: false });
  };
  const [selectedTask, setSelectedTask] = useState<DataType | null>(null);

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

      handleShowToast("Task updated successfully", "success");
      setSelectedTask(null);
      return;
    }

    values.key = allTasks.length + 1;
    setTasks([...tasks, values]);
    handleShowToast("Task added successfully", "success");
    setSelectedTask(null);
  };

  const handleEdit = (record: DataType) => {
    console.log(record);

    setSelectedTask(record);
    setOpenModal(true);
  };

  const handleDelete = (record: DataType) => {
    console.log(record);
    const newTasks = allTasks.filter((task) => {
      return task.key !== record.key && task.createdDate === record.createdDate;
    });
    setTasks(newTasks);
    handleShowToast("Task deleted successfully", "success");
  };

  const onDateChange: DatePickerProps<Dayjs[]>["onChange"] = (date, dateString) => {
  console.log( dateString);

  const newTasks = allTasks.filter((task) => task.createdDate === dateString);
  setTasks(newTasks);

  
};
  const [tasks, setTasks] = useState<DataType[]>(allTasks.filter((task) => task.createdDate === defaultDate[0].format("YYYY-MM-DD")));
  return (
    <div className={styles.wrapper}>
      {/* {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={handleCloseToast}
        />
      )} */}
      <div className={styles.addBtn}>
        <DatePicker
          onChange={onDateChange}
          maxTagCount="responsive"
          defaultValue={defaultDate}
          size="small"
        />
        <Button
          type="primary"
          onClick={() => {
            setOpenModal(true);
            setSelectedTask(null);
          }}
        >
          {" "}
          <PlusOutlined /> Add Task
        </Button>
      </div>
      <Table<DataType>
        columns={columns}
        dataSource={tasks}
        style={{ width: " 100%" }}
      />

      <Modal
        title="Add Task"
        open={openModal}
        footer={false}
        onCancel={() => setOpenModal(false)}
      >
        <TaskForm handleSubmit={handleSubmit} task={selectedTask} />
      </Modal>
    </div>
  );
};

export default TaskList;

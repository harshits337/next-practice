'use client';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import styles from './tasks.module.css'
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
    key: number;
    title: string;
    status: string;
    description: string;
    priority : string;
    color: string;

  }

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render: (status : string) => {
            const color : string = status === 'Completed' ? 'green' : 'red';
            return (
                <Tag color={color}>
                    {status}
                </Tag>
            );
        },
      },
      {
        title: 'Priority',
        dataIndex: 'priority',
        render : (priority : string) => {
            const color : string = priority === 'high' ? 'red' : priority === 'medium' ? 'blue' : 'green';
            return (
                <Tag color={color}>
                    {priority}
                </Tag>
            );
        }
      },
  
   
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
            <EditOutlined />
            <DeleteOutlined />
        </Space>
      ),
    },
  ];
const TaskList = () => {
    const tasks : DataType[] = [
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
            
        }
    ];
    return (
        <div className={styles.wrapper}>
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

            <Table<DataType> columns={columns} dataSource={tasks} />


        </div>
    );
}

export default TaskList;
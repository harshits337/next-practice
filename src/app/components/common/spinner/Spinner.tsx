import { LoadingOutlined } from '@ant-design/icons';
import {  Spin } from 'antd';
import styles from './spinner.module.css'

const {spinner} = styles
export const Spinner = () => { 
    return (
        <div className={spinner}>
           <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        </div>
    )
}
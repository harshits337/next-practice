'use client';
import { LoadingOutlined } from '@ant-design/icons';
import {  Spin } from 'antd';
import styles from './spinner.module.css'
import { useSelector } from 'react-redux';

const {spinner} = styles
export const Spinner = () => { 

    const spinnerState = useSelector((state : any) => state.spinner);
    return (
        spinnerState.show && (
            <div className={spinner}>
           <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        </div>
        )
    )
}
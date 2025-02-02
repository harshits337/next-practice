'use client';
import React, { useEffect } from 'react';
import styles from './toast.module.css';
import toastSlice from '@/redux/toastSlice';
import { useDispatch, useSelector } from 'react-redux';

// interface ToastProps {
//     message: string;
//     type: 'success' | 'error' | 'info';
//     duration?: number;
// }
interface RootState {
    toast: {
        message: string;
        type: 'success' | 'error' | 'info';
        show: boolean;
        duration: number;
        onclose: (() => void) | null;
    };
}

const Toast: React.FC = () => {
    const dispatch = useDispatch();
    

    const toast = useSelector((state: RootState) => state.toast);
    useEffect(() => {
        let timer : NodeJS.Timeout;
        if(toast.show){
            timer = setTimeout(() => {
                console.log("toast closed")
                 dispatch(toastSlice.actions.setToastState({
                     message: '',
                     type: '',
                     show: false,
                     duration: 0,
                     onclose: null
                 }))
             }, toast.duration);
        }

        return () => clearTimeout(timer);
    }, [toast]);

    return (
        <div className={`${styles.toast} ${styles[toast.type]}`}>
            {toast.message}
        </div>
    );
};

export default Toast;

import SignUp from "../components/auth/SignUp";
import styles from './signup.module.css'
export default async function page() {
    return (
        <div className={styles.container}><SignUp/></div>
    )
}
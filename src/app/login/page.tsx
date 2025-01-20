import Login from "../components/auth/Login";
import styles from './page.module.css'
export default async function page() {
    return (
        <div className={styles.container}><Login/></div>
    )
}
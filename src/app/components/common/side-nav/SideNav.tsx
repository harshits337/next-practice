import Link from "next/link";
import styles from './SideNav.module.css'
const SideNav = () => {
    const links = [
        {
            name: 'My Tasks',
            url: '/dashboard',
            icon: 'tasks'

        },
        {
            name: 'Reports',
            url: '/reports',
            icon: 'reports'

        }
    ]
    return (
        <div className={styles.nav}>
            <img src="/logo.png" alt="logo" width="150"/>
           {links.map((link,index)=>{
            return <Link key={index} href={link.url}>
                <div className={styles.links}>{link.name}</div>
            </Link>
           })}

           <div className={styles.logout}>
                <div>Logout</div>
           </div>
        </div>
    );
}

export default SideNav;
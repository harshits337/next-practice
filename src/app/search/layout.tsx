import SideNav from "../components/common/side-nav/SideNav";
import styles  from './layout.module.css';
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
        <div className={styles.sidenav}><SideNav/></div>
        <div className={styles.profileSection}>{children}</div>
    </div>
  );
}

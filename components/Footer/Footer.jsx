import Logo from '../Logo/Logo'
import styles from './footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.wrapper}>
            <div className={styles.flexContainer}>
            <Logo/>
            </div>
        </footer>
    );
}
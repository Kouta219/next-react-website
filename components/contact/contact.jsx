import Social from '../Social/social'
import styles from './contact.module.css'

export default function Contact(){
    return(
        <div className={styles.stack}>
            <h3 className={styles.heading}>Contact</h3>
            <Social iconsize="30px"/>
            <address>cube@web.mail.address</address>
        </div>
    )
}
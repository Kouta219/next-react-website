import styles from './post-body.module.css'

export default function Postbody ({children}){
    return(
        <div className={styles.stack}>
            {children}
        </div>
    )
}
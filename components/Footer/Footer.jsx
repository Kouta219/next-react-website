import Container from '../container/container';
import Logo from '../Logo/Logo'
import Social from '../Social/social'
import styles from './footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.wrapper}>
            <Container>
                <div className={styles.flexContainer}>
                    <Logo/>
                    <Social/>
                </div>
            </Container>
        </footer>
    );
}
import Container from'../container/container'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import styles from '../Header/header.module.css'

export default function Header(){
    return(
        <header>
            <Container large>
                <div className={styles.flexContainer}>
                    <Logo boxOn/>
                    <Nav/>
                </div>
            </Container>
        </header>
    )
}

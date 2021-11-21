import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Any reproduction of these images is strickly prohibited without the express permission of the author.</p>
            <p>&copy; 2006-{new Date().getFullYear()} Eugene Molari Photography</p>
      </footer>
    )
}

export default Footer
import Link from 'next/link'
import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.siteTitle}>
        <Link href="/">
          <a>Eugene Molari Photography</a>
        </Link>
      </div>
    </header>
  )
}

export default Header

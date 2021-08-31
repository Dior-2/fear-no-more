import Link from 'next/link'
import headerStyles from '../../styles/Header.module.css'

export default function Header() {
  return (
    <div>
      <div className={headerStyles.background}>
      <div className={headerStyles.navBlock}>

        <nav className={headerStyles.nav}>

          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a>Request</a>
             </Link>
            </li>

            <li>
              <Link href="/">
                <a>offer</a>
              </Link>
            </li>

          </ul>
        </nav>
        <br />

        <div className={headerStyles.pageName}>
          <p>
            Share your love with ones who need
          </p>
        </div>

      </div>
      </div>

    </div>
  )
}
import HeaderStyles from '../../styles/Header.module.css'

export default function ContactUs() {
  return (
    <div className={HeaderStyles.aboutUs}>
      <div className={HeaderStyles.aboutUs_block}>
        <h1 className={HeaderStyles.aboutUs_title}>
          About Us
        </h1>
        <h2 className={HeaderStyles.aboutUs_body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </h2>
        <h2 className={HeaderStyles.aboutUs_address}>
          123 street Austin TX, 90000
        </h2>
        <h2 className={HeaderStyles.aboutUs_phoneNumber}>
          phone: 123-456-7890
        </h2>
        <h2 className={HeaderStyles.aboutUs_email}>
          Email: fearnomore@fearnomore.com
        </h2>
      </div>
    </div>
  )
}
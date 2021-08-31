import HeaderStyles from '../../styles/Header.module.css'

export default function ContactUs() {
  return (
    <div className={HeaderStyles.contactUs}>

      <form>

      <div className={HeaderStyles.contactUs_title}>
          Contact Us
        </div>

        <div className={HeaderStyles.contactUs_name}>
          <input type="text" name="writeName" placeholder="Name" maxLength="50" required />
        </div>

        <div className={HeaderStyles.contactUs_email}>
          <input type="text" name="writeEmail" placeholder="E-mail" maxLength="100" required />
        </div>

        <div className={HeaderStyles.contactUs_message}>
          <input type="text" name="writeMessage" placeholder="Message" required />
        </div>

        <button type="button" className="ContactUsButton">Send Message</button>
      </form>
  </div>
  )
}
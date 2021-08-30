import Head from 'next/head';
import Layout, { siteTitle } from '../Components/layout';
import Link from 'next/link';

const Login = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div>
          This be login page! You might want to login
        </div>
        <div>
          <label htmlFor="username">You should type in your username</label>
          <input type="text" id="login-username" name="username" placeholder="Enter username..." required />
        </div>
        <div>
          <label htmlFor="username">You should type in your password</label>
          <input type="text" id="login-password" name="password" placeholder="Enter password..." required />
        </div>
        <div>
          <button type="button">
            <Link href="/signup">I want to sign up! :)</Link>
          </button>
          <button type="button">
            <Link href="/">I want to go home! :(</Link>
          </button>
        </div>
        <div>
          <a href="#">You forgot your password, didn't you?</a>
        </div>
      </section>
    </Layout>
  )
}

export default Login;
import Link from "next/link";
import Head from "next/head";

const Layout = ({ children, title }) => {
  return <div className="p-3">
    <Head>
      <title>{title} - Clue Mediator</title>
    </Head>
    <h3><a href="https://www.cluemediator.com/">Clue Mediator</a></h3>
    <br />

    <Link href="/">
      <a style={{ marginRight: 15 }}>Home</a>
    </Link>
    <Link href="/about">
      <a style={{ marginRight: 15 }}>About</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>

    <h1>{title}</h1>
    {children}

    <div style={{ marginTop: 30 }}>
      © {new Date().getFullYear()}
    </div>
  </div>
}

export default Layout;
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>
            <img src="https://i.imgur.com/mOadh85.png"/>
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a>
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>
                About
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        @media screen and (max-width: 420px) {
          header {
            display: flex;
          }
          img {
            margin-bottom: -58px !important;
          }
          ul {
            margin-top: 19px !important;
            margin-left: 48px !important;
          }
        }
        nav {
          margin-top: -20px;
        }
        img {
          width: 48px;
          margin-bottom: -53px;
        }
        ul {
          display: flex;
          justify-content: flex-end;
          margin-top: 14px;
        }
        li {
          padding: 0 20px;
          text-transform: uppercase;
        }
        a {
          font-family: Helvetica;
        }
      `}</style>
    </header>
  );
}
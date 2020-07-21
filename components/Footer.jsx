export default function Footer() {
  return (
    <footer>
      <section>
        <h2>✍️</h2>
        <a href="mailto:code@milcah.dev">code@milcah.dev</a>
        <div></div>
      </section>
      <nav>
        <a className="first-social" href="https://github.com/milcahhalili">
          <img src="https://i.imgur.com/F4OeYPv.png" />
        </a>
        <a href="https://www.linkedin.com/in/milcah-halili/">
          <img src="https://i.imgur.com/kmInX59.png" />
        </a>
      </nav>
      <p className="built-with">
        I built this site with Next.js, React.js, JSON, Zeit, Azure, and 🖤
      </p>
      <style jsx>{`
        section {
          text-align: center;
        }
        a {
          font-family: Helvetica;
        }
        h2 {
          margin-bottom: 4px;
        }
        div {
          margin-bottom: 20px;
        }
        nav {
          text-align: center;
          display: flex;
          justify-content: center;
        }
        nav a {
          margin: 0 10px;
        }
        .first-social {
          margin-left: 40px
        }
        a:last-child {
          margin-right: 40px;
        }
        .built-with {
          text-align: center;
          font-family: monospace;
          margin: 20px 10px 30px 10px;
          line-height: 26px;
        }
      `}</style>
    </footer>
  );
}
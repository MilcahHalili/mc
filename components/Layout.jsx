import Header from './Header';
import Footer from './Footer';

const pageStyle = {
  position: 'relative',
  minHeight: '100vh',
  fontSize: '18px'
}

const mainStyle = {
  paddingBottom: '4.5rem'
}

const footerStyle = {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: '4.5rem'
}

export default function Layout(props) {
  return (
    <div style={pageStyle}>
      <main style={mainStyle}>
      <Header />
      <section>
        {props.children}
      </section>
      </main>
      <footer style={footerStyle}>
        <Footer />
      </footer>
      <style jsx global>{`
        body {
          overflow-x: hidden;
        }
        section {
          margin-top: 53px;
          font-family: Helvetica; 
        }
        @media only screen and (min-width: 420px) {
          section {
            padding: 0;
          }
        }
        h1 {
          font-size: 1.75em;
        }
        h1, a {
          color: #033D77;
        }
        ul {
          list-style-type: none;
        }
        a {
          text-decoration: none;
          font-weight: 900;
        }
        p {
          font-size: 1.25em;
          line-height: 1.5em;
        }
      `}</style>
    </div>
  );
}
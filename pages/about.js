import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <container>
        <main>
          <h2>Hi, 👋🏽 my name is Milcah.</h2>
          <div>
            <img src="https://i.imgur.com/mOadh85.png" />
          </div>
          <article>
            <p>
              Currently, I work at <a href="https://freckbeauty.com">Freck Beauty</a>
              <br />
              as a Full Stack Web Developer,
              <br />
              specializing in front end web development.
            </p>
            <p>
              I love working with <a href="https://softcorestudio.com/">Softcore
              <br />
              Studio</a> to create beautiful
              <br />
              and easeful online experiences.
            </p>
            <p>
              When I'm not helping others solve
              <br />
              challenging problems, I write
              <br />
              lyrical essays, how-to's, and poetry,
              <br />
              build community at <a href="https://www.techstackd.com/">Tech Stack'd</a>,
              <br />
              and enjoy hanging out with my wife.
            </p>
          </article>
        </main>
      </container>
      <style jsx>{`
        @media screen and (max-width: 420px) {
          img {
            width: 75%;
          }
        }
        container {
          display: flex;
          justify-content: center;
          margin-top: -40px;
        }
        h2 {
          text-align: center;
        }
        div {
          display: flex;
          justify-content: center;
          margin-bottom: 40px;
        }
        article {
          width: 400px;
          margin-left: 9%;
        }
      `}</style>
    </Layout>
  );
}
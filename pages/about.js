import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <div classNam="container">
        <main>
          <h2>Hi, 👋🏽 my name is Milcah.</h2>
          <div>
            <img src="https://i.imgur.com/mOadh85.png" />
          </div>
          <article>
            <p>
              Currently, I work at <a href="generalassemb.ly">General Assembly</a>
              <br />
              as an Instructional Associate,
              <br />
              for the Remote Software Engineering Immersive.
            </p>
            <p>
              My favorite designer to work with is <a href="https://softcorestudio.com/">Softcore
              Studio</a>. We've created beautiful
              and easeful online experiences together for Freck Beauty.
            </p>
            <p>
              When I'm not helping humans solve
              <br />
              challenging problems, I write
              <br />
              lyrical essays and poetry,
              <br />
              build community, tend to my garden,
              <br />
              go for nice walks, and cook nice meals with my friends.
            </p>
          </article>
        </main>
      </div>
      <style jsx>{`
        @media screen and (max-width: 420px) {
          img {
            width: 75%;
          }
        }
        .container {
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
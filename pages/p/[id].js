import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Project = props => (
  <Layout>
    <div>
      <h1>{props.project.name}</h1>
      <p>{props.project.description}</p>
      <p>{props.project.technologies}</p>
      <a href={props.project.url}>
        <p>View project here.</p>
      </a>
      <Link href="/">
        <a>
          <p>👈🏽 Back to projects</p>
        </a>
      </Link>
    </div>
    <style jsx>{`
      div {
        margin: 53px 10vw;
      }
    `}</style>
  </Layout>
);

Project.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://my-json-server.typicode.com/milcahhalili/projects.json/projects/${id}`);
  const project = await res.json();
  return { project };
};

export default Project;
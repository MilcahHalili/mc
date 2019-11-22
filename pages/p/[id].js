import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';

const Project = props => (
  <Layout>
    <div>
      <h1>{props.project.name}</h1>
      <p>{props.project.description}</p>
      <p>{props.project.technologies}</p>
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
  
  console.log(`${id}`)
  console.log(`Fetched project: ${project}`);

  return { project };
};

export default Project;
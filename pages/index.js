import React, { Component } from 'react';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import fetch from 'isomorphic-unfetch';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  static async getInitialProps() {
    const res = await fetch('https://my-json-server.typicode.com/milcahhalili/projects.json/projects');
    const data = await res.json();
    return {
      projects: data
    }
  }

  render(props) {
    const { projects } = this.props;
    return (
      <Layout>
        <div>
          {projects.length ? (
            projects.map(
              project =>
              <Projects
                project={project}
                key={project.id}
              />
            )
          ) : ''}
        </div>
        <style jsx>{`
          div {
            cursor: pointer;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
        `}</style>
      </Layout>
    );
  }
}
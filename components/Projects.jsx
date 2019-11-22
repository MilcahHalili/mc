import React, { Component } from 'react';
import Link from 'next/link';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { project } = this.props;
    return (
      <>
        <div className="container">
            <div className="projects-cntnr">
              <Link href="/p/[id]" as={`/p/${project.id}`}>
                <a>
                  <h3>
                    {project.name}
                  </h3>
                </a>
              </Link>
            </div>
        </div>
        <style jsx>{`
          div {
            display: flex;
            align-items: center;
          }
          .container {
            align-items: center;
            justify-content: center;
            width: 45%;
            height: 200px;
            text-align: center;
            margin: 10px 10px;
          }
          .container:nth-of-type(1) {
            background-color: lightblue;
          }
          .container:nth-of-type(2) {
            background-color: yellow;
          }
          .container:nth-of-type(3) {
            background-color: lavender;
          }
          .container:nth-of-type(4) {
            background-color: lightgreen;
          }
          .container:nth-of-type(5) {
            background-color: pink;
          }
          .container:nth-of-type(6) {
            background-color: coral;
          }
          img {
            height: 200px;
          }
          a {
            text-transform: uppercase;
          }
          @media screen and (max-width: 420px) {
            .container {
              width: 100%;
            }
          }
        `}</style>
      </>
    );
  }
}
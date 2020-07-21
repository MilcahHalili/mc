import React, { Component } from 'react';
import Link from 'next/link';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { project } = this.props;
    const img = project.img;
    return (
      <>
        <Link href="/p/[id]" as={`/p/${project.id}`}>
          <div className="container">
              <a>
                <h3>
                  {project.name}
                </h3>
              </a>
          </div>
        </Link>
        <style jsx>{`
          div {
            display: flex;
            align-items: center;
          }
          .container {
            align-items: flex-end;
            width: 45%;
            height: 200px;
            margin: 10px 10px;
            background: url(${img});
            background-position: center;
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
            background-position: 15% 200%;
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
          h3 {
            margin: 0 10px;
            color: white;
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
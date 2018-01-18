import React from 'react';
import QueueAnim from 'rc-queue-anim';

const Intro = () => (
  <section className="container-fluid">
    <ul className="breadcrumb">
      <li className="breadcrumb-item"><a href="javascript:;">Introduction</a></li>
\    </ul>
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1">
        <article className="article">
          <h2 className="article-title">ECE496 Design Porject Course</h2>
          <p>ECE496Y is a full-year umbrella course for all fourth-year design projects. It is a requirement for all fourth-year electrical and computer engineering students, allowing them to integrate the knowledge acquired over the first three years of study in the planning and execution of project proposed either by the student or by a supervisor.

          </p>
          <p>
          In this course, the students will develop skills that allow them to identify a problem given a brief description its context. Given that many real problems are solved by teams, it is essential that students learn how to work in teams and how to plan a project so that all team members become responsible for specific tasks. kjnjnksjdncjkndcjkdns
          </p>
        </article>
      </div>
    </QueueAnim>
  </section>
);

module.exports = Intro;

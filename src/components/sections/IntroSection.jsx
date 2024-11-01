import React from "react";
import TypeWriter from "typewriter-effect";

import {
  PythonOriginalIcon,
  PytorchOriginalIcon,
  ReactOriginalIcon,
  NodejsOriginalIcon,
  MysqlOriginalIcon,
  MongodbOriginalIcon,
  GitOriginalIcon,
  DockerOriginalIcon,
  VscodeOriginalIcon,
  LinuxOriginalIcon,
} from "react-devicons";

const IntroSection = () => {
  return (
    <section id="intro">
      <h1 className="section-heading">Welcome</h1>
      <br />
      <h2>
        Hey, I am{" "}
        <span
          style={{
            display: "inline-flex",
          }}
        >
          <TypeWriter
            options={{
              strings: ["Jainam Doshi!", "Software Developer!", "from India!"],
              autoStart: true,
              loop: true,
              cursor: "_",
            }}
          />
        </span>
      </h2>
      <p>
        👋 Hello there! I am Jainam P. Doshi, Software Engineer from India 🇮🇳.
        💻 I love to design cool apps with latest tech.
      </p>
      <br />
      <p>
        I am a software engineer who loves to make innovative projects. I
        believe in self-learning and have fond of machine learning and fullstack
        development 🚀. I enjoy building neural networks with pytorch and web
        apps with react and node with seamless API integration. Feel free to
        refer to my github projects and follow if you find my work helpful. 😉
      </p>
      <br />
      <p>
        Here's the link to{" "}
        <a href="https://github.com/jpdoshi" target="_blank">
          My Github profile
        </a>
        . All my projects are open source, so be sure to check them out. You can
        always connect with me through E-mail.
      </p>
      <br />
      <br />
      <h2>Favorite Tech</h2>
      <div className="icons">
        <a href="https://python.org/" target="_blank" name="python-devicon">
          <PythonOriginalIcon className="icon" />
        </a>
        <a href="https://pytorch.org/" target="_blank" name="pytorch-devicon">
          <PytorchOriginalIcon className="icon" />
        </a>
        <a href="https://nodejs.org/en" target="_blank" name="node-devicon">
          <NodejsOriginalIcon className="icon" />
        </a>
        <a href="https://react.dev/" target="_blank" name="react-devicon">
          <ReactOriginalIcon className="icon" />
        </a>
        <a href="https://www.mongodb.com/" target="_blank" name="mongo-devicon">
          <MongodbOriginalIcon className="icon" />
        </a>
        <a href="https://www.mysql.com/" target="_blank" name="mysql-devicon">
          <MysqlOriginalIcon className="icon" />
        </a>
        <a href="https://git-scm.com/" target="_blank" name="git-devicon">
          <GitOriginalIcon className="icon" />
        </a>
        <a href="https://www.docker.com/" target="_blank" name="docker-devicon">
          <DockerOriginalIcon className="icon" />
        </a>
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          name="vscode-devicon"
        >
          <VscodeOriginalIcon className="icon" />
        </a>
        <a href="https://linux.org/" target="_blank" name="linux-devicon">
          <LinuxOriginalIcon className="icon" />
        </a>
      </div>
      <br />
      <p>
        Above mentioned is the <code>tech stack</code> I love most to work with,
        for personal and/or work-related projects. I started my learning journey
        with Game development using Unity and C#. I primarily work with MERN
        stack for web projects, Though I have keen interest in Machine Learning
        and AI. I have experience of application deployment using Docker as
        well.
      </p>
      <br />
      <p>
        While having keen interest in exploring various linux-based distros, I
        have experience of using it as my primary desktop operating system.
        There's much more to know about my tech journey, scroll down to explore
        more!
      </p>
      <br />
      <br />
      <a href="mailto:jpdoshi2811@gmail.com" target="_blank" className="btn">
        Get in touch
      </a>
    </section>
  );
};

export default IntroSection;

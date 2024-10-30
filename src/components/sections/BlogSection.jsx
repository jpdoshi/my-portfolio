import React from "react";
import BlogCard from "../BlogCard";

const BlogSection = () => {
  return (
    <section id="blog">
      <h1 className="section-heading">Explore Blog</h1>
      <br />
      <p>
        Blogs are made as I learn and implement new concepts. If you are
        beginner in Computer Science, these blogs may help you understand
        concepts and implement quickly after reading them. All the blogs are
        written in{" "}
        <a href="https://notion.so/about/" target="_blank">
          Notion
        </a>
        . All of them are listed below, check them out:
      </p>
      <br />
      <br />
      <div className="grid">
        <BlogCard
          gradient={["#FFC371", "#FF5F6D"]}
          img="deployment.png"
          title="Steps to deploy Node API"
          url="https://jpdoshi.notion.site/Steps-to-deploy-Node-API-dbf634e53c234f469f0253ee7311844c"
        />
        <BlogCard
          gradient={["#93EDC7", "#1CD8D2"]}
          img="neovim.png"
          title="Setup Neovim for Coding in Windows"
          url="https://jpdoshi.notion.site/Setup-neovim-for-coding-in-windows-31153de340a64c14a240ee635dfd91fd"
        />
        <BlogCard
          gradient={["#6441A5", "#2A0845"]}
          img="eslint.png"
          title="Get Started with Code Linting"
          url="https://jpdoshi.notion.site/Get-started-with-code-linting-11867f86136180078d41feb0f43696df"
        />
        <BlogCard
          gradient={["#EC008C", "#F80759"]}
          img="nlp-basics.png"
          title="NLP Basics - Machine Learning"
          url="https://jpdoshi.notion.site/NLP-Basics-Machine-Learning-12f67f861361805a942ef5af847d0664"
        />
      </div>
    </section>
  );
};

export default BlogSection;

import React from "react";
import BlogCard from "../BlogCard";

const BlogSection = () => {
  return (
    <section id="blog">
      <h1 className="section-heading">Explore Blog</h1>
      <br />
      <div className="grid">
        <BlogCard
          gradient={["#FFC371", "#FF5F6D"]}
          img="deployment.png"
          title="Steps to deploy Node API"
          url="https://jpdoshi.notion.site/Steps-to-deploy-Node-API-dbf634e53c234f469f0253ee7311844c?pvs=4"
        />
        <BlogCard
          gradient={["#93EDC7", "#1CD8D2"]}
          img="neovim.png"
          title="Setup Neovim for Coding in Windows"
          url="https://jpdoshi.notion.site/Setup-neovim-for-coding-in-windows-31153de340a64c14a240ee635dfd91fd?pvs=4"
        />
        <BlogCard
          gradient={["#6441A5", "#2a0845"]}
          img="eslint.png"
          title="Get Started with Code Linting"
          url="https://jpdoshi.notion.site/Get-started-with-code-linting-11867f86136180078d41feb0f43696df?pvs=4"
        />
      </div>
    </section>
  );
};

export default BlogSection;

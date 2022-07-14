import React, { useState, useEffect } from "react";
import "./../global.scss";
import "./../app.scss";
import { Link, graphql } from "gatsby";
import Flipbox from "../components/Flipbox";
import ThemeBtn from "../components/ThemeBtn";

export const pagesQuery = graphql`
  query BlogPostQuery {
    allMdx {
      edges {
        node {
          slug
          frontmatter {
            title
            date
            desc
          }
        }
      }
    }
  }
`;

const App = ({ data }) => {
  const [theme, setTheme] = useState("light");

  return (
    <main id={theme}>
      <div style={{ height: "100vh", flexDirection: "column" }}>
        <h1 className="huge">This is my blog of... amazing stuff</h1>
        <ThemeBtn
          style={{ backgroundColor: "#7d7b7b80" }}
          width="72px"
          theme={theme}
          setTheme={setTheme}
        />
      </div>
      <div style={{ justifyContent: "flex-end" }}>
        <h2 className="huge">Latest</h2>
      </div>
      {data.allMdx.edges.map(({ node }) => {
        return (
          <Flipbox
            key={node.slug}
            flipContent={node.frontmatter.desc}
            frontContent={
              <Link to={"/" + node.slug}>{node.frontmatter.title}</Link>
            }
          />
        );
      })}
    </main>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import "./../global.scss";
import "./../app.scss";
import { Link, graphql } from "gatsby";
import Flipbox from "../components/Flipbox";

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

  useEffect(() => {
    let cookie = window.localStorage.getItem("theme");
    if (!cookie) {
      window.localStorage.setItem("theme", "light");
    } else {
      setTheme(cookie);
      window.localStorage.setItem("theme", cookie);
    }
  }, []);

  return (
    <main id={theme}>
      <div style={{ height: "100vh", flexDirection: "column" }}>
        <h1 className="huge">This is my blog of... amazing stuff</h1>
        <button
          onClick={() => {
            let newTheme;
            theme === "dark" ? (newTheme = "light") : (newTheme = "dark");
            setTheme(newTheme);
            window.localStorage.setItem("theme", newTheme);
          }}
        >
          ChangeTheme
        </button>
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

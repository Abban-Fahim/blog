import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import ThemeBtn from "./ThemeBtn";

export default function Layout(props) {
  console.log(props);
  const [theme, setTheme] = useState("");

  return (
    <main id={theme}>
      <header>
        <h2 className="huge">{props.pageContext.frontmatter.title}</h2>
        <ul>
          <li>
            <ThemeBtn width="32px" theme={theme} setTheme={setTheme} />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </header>
      <section>{props.children}</section>
      <footer>
        <h3 style={{ flex: 1, minWidth: "200px" }}>
          Check out the blog on
          <a href="https://github.com/abban-fahim/blog"> Github</a>
        </h3>
        <h3>Subscribe to my bi-weekly newsletter</h3>
        <input type="email" placeholder="email" />
      </footer>
    </main>
  );
}

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
        <h6>FOOTERSSSSSSSS</h6>
      </footer>
    </main>
  );
}

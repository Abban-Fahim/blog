import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

export default function Layout(props) {
  console.log(props);
  const [theme, setTheme] = useState("");

  useEffect(() => {
    let cookie = window.localStorage.getItem("theme");
    console.log(cookie);
    if (!cookie) {
      window.localStorage.setItem("theme", "light");
    } else {
      setTheme(cookie);
      window.localStorage.setItem("theme", cookie);
    }
  }, []);

  return (
    <main id={theme}>
      <header>
        <h2 className="huge">{props.pageContext.frontmatter.title}</h2>
        <ul>
          <li>
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

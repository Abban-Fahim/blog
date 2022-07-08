import { Link } from "gatsby";
import React from "react";

export default function layout({ children }) {
  return (
    <>
      <header>
        <h1>
          <Link to="/">PICKLY GATSBY</Link>
        </h1>
        <ul>
          <li>
            <Link to="/usage">Usage</Link>
          </li>
          <li>
            <Link to="https://github.com/">Github</Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
      <footer>
        <h6>FOOTERSSSSSSSS</h6>
      </footer>
    </>
  );
}

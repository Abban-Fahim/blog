"use strict";(self.webpackChunkmdx_framework=self.webpackChunkmdx_framework||[]).push([[230],{4580:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var a=n(7294),o=n(1597),r=function(e){var t=e.frontContent,n=e.flipContent,o=e.button,r=(0,a.useState)(!1),l=r[0],m=r[1];function c(){m(!l)}return a.createElement("div",{className:"post",onMouseOver:c,onMouseLeave:c},t,a.createElement("p",{style:{transform:l?"none":"rotateY(180deg)"}},n),o?a.createElement("button",null,o):null)},l=function(e){var t=e.data,n=(0,a.useState)("light"),l=n[0],m=n[1];return(0,a.useEffect)((function(){var e=window.localStorage.getItem("theme");e?(m(e),window.localStorage.setItem("theme",e)):window.localStorage.setItem("theme","light")}),[]),a.createElement("main",{id:l},a.createElement("div",{style:{height:"100vh",flexDirection:"column"}},a.createElement("h1",{className:"huge"},"This is my blog of... amazing stuff"),a.createElement("button",{onClick:function(){var e;m(e="dark"===l?"light":"dark"),window.localStorage.setItem("theme",e)}},"ChangeTheme")),a.createElement("div",{style:{justifyContent:"flex-end"}},a.createElement("h2",{className:"huge"},"Latest")),t.allMdx.edges.map((function(e){var t=e.node;return a.createElement(r,{key:t.slug,flipContent:t.frontmatter.desc,frontContent:a.createElement(o.rU,{to:"/"+t.slug},t.frontmatter.title)})})))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-0638149afe4c408f892a.js.map
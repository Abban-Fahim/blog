"use strict";(self.webpackChunkmdx_framework=self.webpackChunkmdx_framework||[]).push([[350],{119:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.frontContent,n=e.flipContent,A=e.button,l=(0,a.useState)(!1),r=l[0],o=l[1];return a.createElement("div",{className:"post",onMouseOver:function(){return o(!0)},onMouseLeave:function(){return o(!1)}},a.createElement("h2",null,t),a.createElement("p",{style:r?{opacity:1}:{opacity:0}},n),A?a.createElement("button",null,A):null)}},8344:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.lang,n=e.setLang;e.nav;return a.createElement("select",{id:"lang",value:t,onChange:function(e){var a=e.target.value;a!==t&&(n(a),window.location.assign("ar"===a?"/ar"+window.location.pathname:window.location.pathname.slice(3)))}},a.createElement("option",{value:"en"},"English"),a.createElement("option",{value:"ar"},"العربية"))}},2229:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(3366),A=n(7294),l=["theme","setTheme","width"],r=function(e){var t=e.theme,n=e.setTheme,r=e.width,o=(0,a.Z)(e,l);return(0,A.useEffect)((function(){var e=window.localStorage.getItem("theme");e?(n(e),window.localStorage.setItem("theme",e)):window.localStorage.setItem("theme","light")}),[]),A.createElement("button",Object.assign({},o,{onClick:function(){var e;n(e="dark"===t?"light":"dark"),window.localStorage.setItem("theme",e)}}),A.createElement("img",{width:r,src:"dark"===t?"data:image/png;base64,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":"data:image/png;base64,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",alt:""}))}},3967:function(e,t,n){n.r(t);var a=n(3366),A=n(7294),l=n(1597),r=n(119),o=n(2229),u=n(8344),c=["data"];t.default=function(e){var t=e.data,n=(0,a.Z)(e,c),m=(0,A.useState)("light"),i=m[0],s=m[1],d=(0,A.useState)("ar"),g=d[0],f=d[1];return A.createElement("main",{id:i,dir:"rtl"},A.createElement("div",{style:{height:"100vh",flexDirection:"column"}},A.createElement("h1",{className:"huge"},"سلامعليكم"),A.createElement(o.Z,{style:{backgroundColor:"#7d7b7b80"},width:"72px",theme:i,setTheme:s}),A.createElement(u.Z,{lang:g,setLang:f,nav:n.navigate})),A.createElement("div",{style:{justifyContent:"flex-end"}},A.createElement("h2",{className:"huge"},"Latest")),t.allMdx.edges.map((function(e){var t=e.node;return console.log(t),A.createElement(r.Z,{key:t.slug,flipContent:t.frontmatter.desc,frontContent:A.createElement(l.rU,{to:"ar/"+t.slug.slice(0,t.slug.length-3)},t.frontmatter.title)})})))}},3366:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,A={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(A[n]=e[n]);return A}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---src-pages-index-ar-jsx-91ddd6056bee11a550a8.js.map
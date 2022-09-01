"use strict";(self.webpackChunkmdx_framework=self.webpackChunkmdx_framework||[]).push([[780],{8344:function(e,t,n){var a=n(1597),o=n(7294);t.Z=function(e){var t=e.lang,n=e.setLang,r=e.type;return o.createElement("select",{id:"lang",value:t,onChange:function(e){var o=e.target.value,l=window.location.pathname.slice(l);if(o!==t)if(n(o),"post"===r)for(var i=window.location.pathname.split("/"),s=i.length-1;s>0;s--)console.log(i[s],i,i.length),""!==i[s]&&((0,a.c4)(("ar"===o?"/ar/":"/")+i[s]),s=0);else(0,a.c4)("ar"===o?"/ar":"/")}},o.createElement("option",{value:"en"},"English"),o.createElement("option",{value:"ar"},"العربية"))}},2229:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(3366),o=n(7294),r=["theme","setTheme","width"],l=function(e){var t=e.theme,n=e.setTheme,l=e.width,i=(0,a.Z)(e,r);return(0,o.useEffect)((function(){var e=window.localStorage.getItem("theme");e?(n(e),window.localStorage.setItem("theme",e)):window.localStorage.setItem("theme","light")}),[]),o.createElement("button",Object.assign({},i,{onClick:function(){var e;n(e="dark"===t?"light":"dark"),window.localStorage.setItem("theme",e)}}),o.createElement("img",{width:l,src:"dark"===t?"data:image/png;base64,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":"data:image/png;base64,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",alt:""}))}},470:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),o=n(1597),r=n(2229),l=n(8344);function i(e){var t="/ar/"===e.path.slice(0,4);console.log(e);var n=(0,a.useState)(""),i=n[0],s=n[1],h=(0,a.useState)(t?"ar":"en"),c=h[0],u=h[1];return a.createElement("main",{dir:t?"rtl":"ltr",id:i},a.createElement("header",null,a.createElement("h2",{className:"huge"},e.pageContext.frontmatter.title),a.createElement("ul",null,a.createElement("li",null,a.createElement(r.Z,{width:"32px",theme:i,setTheme:s})),a.createElement("li",null,a.createElement(l.Z,{lang:c,setLang:u,type:"post"})),a.createElement("li",null,a.createElement(o.rU,{to:t?"../../ar":"/"},"Home")))),a.createElement("article",null,e.children),a.createElement("footer",null,a.createElement("h3",{style:{flex:1,minWidth:"200px"}},t?"":"Check out the blog on",a.createElement("a",{href:"https://github.com/abban-fahim/blog"}," Github")),a.createElement("h3",null,t?"يشترك إلي الاخباري(English only)":"Subscribe to my bi-weekly newsletter"),a.createElement("input",{type:"email",placeholder:t?"ءِميل":"email"})))}},4991:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return c}});var a=n(3366),o=(n(7294),n(4983)),r=n(470),l=["components"],i={},s={_frontmatter:i},h=r.Z;function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(h,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Well hello there fellow ",(0,o.kt)("strong",{parentName:"p"},"Internet Astronaut"),"!"),(0,o.kt)("p",null,"As you have taken the inconvenience of venturing to and staring at my Blog, you may be interested in its technical anatomy. The keen eyed may pick out that this not your standard Wordpress-Cooking-Blog sort of thing. Nor does this Internet chronicle of mine service a particular topic (say, cooking)."),(0,o.kt)("p",null,"Well there is actually a focus, a pretty ambiguous one - me. It's a cluster-f","*","*","k of everything related to me! And in this spirit, the ingredients of this site are very weird too."),(0,o.kt)("h2",null,"The Gravy"),(0,o.kt)("p",null,"Gravy? I meant ",(0,o.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.com/"},"Gatsby"),". While it is a ",(0,o.kt)("em",{parentName:"p"},"fairly")," simple static site generator, I am in no way pleased with it. Why? Too much magic. I feel that I have too less control over what my site renders and its all being managed by a bunch of cold-hearted capitalists who only dine outside, have no cooking skills, and exploit the environment via a canned food factory. OK in fairness Gatsby does work pretty well out of the box. But it just stops there. Interacting with the raw APIs is a nightmare with scarce documentation and no scaffolding to lean on."),(0,o.kt)("h2",null,"How gravy without broth?"),(0,o.kt)("p",null,"Yet another problem with my tooling has been the lack of choices for the front-end tooling. Gatsby is loaded up with ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," as default, and the story ends there. While React itself isn't the worst, its flaws are sadly inherited from a bigger pain un-affectionately named JavaScript. Any programming interface that is a subset of JavaScript earns itself a lifetime supply of bugs, limitations, and workarounds that are presented as features."),(0,o.kt)("h2",null,"Anyone like vegetables?"),(0,o.kt)("p",null,"For those with scarring childhood memories of being force-fed vegetables, do not continue reading. For the absolute chads from you who consumed vegetables and live a healthy life, allow me to make you puke."),(0,o.kt)("p",null,"The blog content is not written in stacks of html files, as a beginner to web-dev might believe. Instead a syntax called MarkDown was used, a human-readable rich text format that is very well supported by Gatsby's plugin ecosystem. ",(0,o.kt)("strong",{parentName:"p"},"If only it had been used"),". No I even ruined that by specifically using ",(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MarkDownX"),". What does it offer that normal MarkDown doesn't. ",(0,o.kt)("strong",{parentName:"p"},"Nothing that I have had to use it till now"),". So why did I do it? Perhaps its masochistic, but it perfectly fits the analogy of unnecessarily inserting peas and broccoli into undersized mouths."),(0,o.kt)("p",null,"Add to that some dry, lack-luster bread which i also enforced upon myself - translating each entry of the blog into ",(0,o.kt)("strong",{parentName:"p"},"Arabic"),", and you (I) have reached astronomical levels of self-harm."),(0,o.kt)("h2",null,"Serving it... in byte-size"),(0,o.kt)("p",null,"Finally, after weeks of ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Repetitive_strain_injury"},"RSI")," and tears, the abomination of a soup/blog-site was ready. Now how to put it out into the wide world where no one would be able to view my beautiful (ugly) creation."),(0,o.kt)("p",null,"GitHub Pages was my lazy option, as I (at the time of writing this) am broke. Thoughts and prayers would be very much appreciated. Signing off."))}c.isMDXComponent=!0},3366:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---src-pages-first-post-mdx-f7745a889ea59c812dcd.js.map
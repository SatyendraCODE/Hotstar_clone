"use strict";(self.webpackChunkhotstar=self.webpackChunkhotstar||[]).push([[137],{6301:function(e,t,n){n.r(t);var i=n(9439),s=n(2791),r=(n(4569),n(1087)),o=n(6766),a=(n(5141),n(8495)),c=n(7950),l=n(5461),u=n(2621),d=n(8384),m=n(184),f=s.lazy((function(){return Promise.resolve().then(n.bind(n,991))}));t.default=function(e){var t=e.title,n=(0,s.useState)([]),v=(0,i.Z)(n,2),h=v[0],p=v[1],x=!0;(0,s.useLayoutEffect)((function(){j()}),[]);var j=function(){u.Z.get(d.Pf).then((function(e){p(e.data)})).catch((function(e){console.log(e)}))};return(0,m.jsxs)("div",{className:"slider",children:[(0,m.jsx)(r.rU,{to:"#",className:"ms-2 title-slider",children:t}),(0,m.jsx)(o.default,{responsive:a.j,customRightArrow:(0,m.jsx)(c.i,{}),customLeftArrow:(0,m.jsx)(c.q,{}),className:"padding-carousel-slider",children:h.map((function(e,t){return(0,m.jsx)(s.Suspense,{fallback:(0,m.jsx)("div",{className:"img-fallback-lazy-slider-home",children:(0,m.jsx)("i",{className:"fas fa-arrows-rotate"})}),children:(0,m.jsx)("div",{className:"m-1",style:{zIndex:"-10",position:"relative"},onMouseEnter:function(e){x=!1,(0,l.q)(e)},onMouseLeave:function(e){var t=e.currentTarget.parentElement.classList;x=!0,setTimeout((function(){x&&(t.remove("hoverLeft-slider"),t.remove("hoverRight-slider"),t.remove("hover-slider"))}),600)},children:(0,m.jsx)(f,{path:"/".concat(e.type,"/").concat(e.id),imgSrc:e.imgSrc,title:e.Title,category:e.category,discription:e.discription,className:""})})},t)}))})]})}},8495:function(e,t,n){n.d(t,{j:function(){return i}});var i={superLargeDesktop:{breakpoint:{max:4e3,min:1200},items:8,slidesToSlide:7},desktop:{breakpoint:{max:1200,min:800},items:6},tablet:{breakpoint:{max:800,min:464},items:4},mobile:{breakpoint:{max:464,min:0},items:3}}},7950:function(e,t,n){n.d(t,{i:function(){return a},q:function(){return c}});var i=n(4925),s=n(184),r=["onClick"],o=["onClick"],a=function(e){var t=e.onClick,n=(0,i.Z)(e,r),o=(n.onMove,n.carouselState);o.currentSlide,o.deviceType;return(0,s.jsxs)("button",{onClick:function(){return t()},className:"slider__control prev",children:[(0,s.jsx)("i",{className:"fa-solid fa-chevron-right"}),(0,s.jsx)("div",{className:"bg-slider nextBg"})]})},c=function(e){var t=e.onClick,n=(0,i.Z)(e,o),r=(n.onMove,n.carouselState);r.currentSlide,r.deviceType;return(0,s.jsxs)("button",{onClick:function(){return t()},className:"slider__control next",children:[(0,s.jsx)("i",{className:"fa-solid fa-chevron-left"}),(0,s.jsx)("div",{className:"bg-slider prevBg"})]})}}}]);
//# sourceMappingURL=137.50818551.chunk.js.map
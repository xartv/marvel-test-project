(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[7],{213:function(t,e,r){},221:function(t,e,r){"use strict";r.r(e);var n=r(47),c=r(68),a=r(8),s=r(5),i=r(0),o=r(11),u=r(42),l=r(21),p=r(40),b=(r(213),r(3)),m=function(t,e,r){switch(t){case"waiting":return Object(b.jsx)(l.a,{});case"loading":return r?Object(b.jsx)("ul",{className:"comics__grid",children:e}):Object(b.jsx)(l.a,{});case"confirmed":return Object(b.jsx)("ul",{className:"comics__grid",children:e});case"error":return Object(b.jsx)(p.a,{});default:throw new Error("Unexpected process state")}},j=function(){var t=Object(i.useState)([]),e=Object(s.a)(t,2),r=e[0],n=e[1],c=Object(i.useState)(100),l=Object(s.a)(c,2),p=l[0],j=l[1],d=Object(i.useState)(!1),f=Object(s.a)(d,2),h=f[0],v=f[1],g=Object(i.useState)(!1),O=Object(s.a)(g,2),x=O[0],w=O[1],_=Object(u.a)(),k=_.clearError,y=_.getAllComics,C=_.process,N=_.setProcess;Object(i.useEffect)((function(){E(p,!0)}),[]);var E=function(t,e){k(),v(!e),y(t).then(A).then((function(){return N("confirmed")}))},A=function(t){t.length<8&&w(!0),n([].concat(Object(a.a)(r),Object(a.a)(t))),v(!1),j((function(t){return t+8}))},S=r.map((function(t){var e=t.id,r=t.name,n=t.thumbnail,c=t.price,a="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n?{objectFit:"contain"}:null;return c=0===c?"Not available":"".concat(c,"$"),Object(b.jsx)("li",{className:"comics__item",children:Object(b.jsxs)(o.b,{to:"/marvel-test-project/comics/".concat(e),children:[Object(b.jsx)("img",{style:a,src:n,alt:"ultimate war",className:"comics__item-img"}),Object(b.jsx)("div",{className:"comics__item-name",children:r}),Object(b.jsx)("div",{className:"comics__item-price",children:c})]})},e)}));return Object(b.jsxs)("div",{className:"comics__list",children:[m(C,S,h),Object(b.jsx)("button",{disabled:!!h,className:"button button__main button__long",onClick:function(){return E(p)},style:{display:x?"none":"block"},children:Object(b.jsx)("div",{className:"inner",children:"load more"})})]})};e.default=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(n.a,{children:[Object(b.jsx)("title",{children:"Comics page"}),Object(b.jsx)("meta",{name:"description",content:"Page with list of comics"})]}),Object(b.jsx)(c.a,{}),Object(b.jsx)(j,{})]})}},40:function(t,e,r){"use strict";var n=r.p+"static/media/error.2e68414c.gif",c=r(3);e.a=function(){return Object(c.jsx)("img",{style:{width:200,display:"block",margin:"20px auto 0 auto"},src:n,alt:"error"})}},42:function(t,e,r){"use strict";var n=r(4),c=r.n(n),a=r(7),s=r(5),i=r(0);e.a=function(){var t=function(){var t=Object(i.useState)("waiting"),e=Object(s.a)(t,2),r=e[0],n=e[1];return{request:Object(i.useCallback)(function(){var t=Object(a.a)(c.a.mark((function t(e){var r,a,s,i,o,u=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-type":"application/json"},n("loading"),t.prev=4,t.next=7,fetch(e,{method:r,body:a,headers:s});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(i.status));case 10:return t.next=12,i.json();case 12:return o=t.sent,t.abrupt("return",o);case 16:throw t.prev=16,t.t0=t.catch(4),n("error"),t.t0;case 20:case"end":return t.stop()}}),t,null,[[4,16]])})));return function(e){return t.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){n("loading")}),[]),process:r,setProcess:n}}(),e=t.request,r=t.clearError,n=t.process,o=t.setProcess,u="https://gateway.marvel.com:443/v1/public/",l="apikey=21aa5af94424603715dc10109257132d",p=100,b=function(){var t=Object(a.a)(c.a.mark((function t(){var r,n,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:p,t.next=3,e("".concat(u,"characters?limit=9&offset=").concat(r,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(v));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(r){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters/").concat(r,"?limit=9&offset=210&").concat(l));case 2:return n=t.sent,t.abrupt("return",v(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(c.a.mark((function t(r){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e("".concat(u,"characters?name=").concat(r,"&").concat(l));case 3:if(0!==(n=t.sent).data.results.length){t.next=6;break}throw new Error('There is no "'.concat(r,'" in database'));case 6:a=v(n.data.results[0]),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),o("error");case 12:return t.abrupt("return",a);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(a.a)(c.a.mark((function t(){var r,n,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:p,t.next=3,e("".concat(u,"comics?issueNumber=").concat(1,"&orderBy=focDate&limit=").concat(8,"&offset=").concat(r,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(h));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(c.a.mark((function t(r){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"comics/").concat(r,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",h(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){return{id:t.id,name:t.title,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,price:t.prices[0].price,url:t.urls[0].url,description:t.description,pageCount:t.pageCount,language:t.textObjects[0]?t.textObjects[0].language:null}},v=function(t){var e=t.description;return e?e.length>210&&(e="".concat(e.slice(0,207),"...")):e="Ooops..there's no info about this character",{name:t.name,description:e,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,id:t.id,comics:t.comics.items}};return{getAllCharacters:b,getCharacter:m,clearError:r,getAllComics:d,getComic:f,findCharacter:j,process:n,setProcess:o}}},67:function(t,e,r){},68:function(t,e,r){"use strict";var n=r.p+"static/media/Avengers.4065c8f9.png",c=r.p+"static/media/Avengers_logo.9eaf2193.png",a=(r(67),r(3));e.a=function(){return Object(a.jsxs)("div",{className:"app__banner",children:[Object(a.jsx)("img",{src:n,alt:"Avengers"}),Object(a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(a.jsx)("br",{}),"Stay tuned!"]}),Object(a.jsx)("img",{src:c,alt:"Avengers logo"})]})}}}]);
//# sourceMappingURL=7.8394f4f8.chunk.js.map
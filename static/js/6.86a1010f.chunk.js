(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{214:function(e,t,c){},219:function(e,t,c){"use strict";c.r(t);var n=c(5),r=c(2),a=c(11),s=c(0),i=c(47),o=c(42),u=c(55),l=c(68),j=(c(214),c(3)),p=function(e){var t=e.data,c=t.name,n=t.description,r=t.thumbnail,s=t.price,o=t.pageCount,u=t.language;return Object(j.jsxs)("div",{className:"single",children:[Object(j.jsxs)(i.a,{children:[Object(j.jsx)("meta",{name:"description",content:"".concat(c," comics book")}),Object(j.jsx)("title",{children:c})]}),Object(j.jsx)("img",{src:r,alt:c,className:"single__img"}),Object(j.jsxs)("div",{className:"single__info",children:[Object(j.jsx)("h2",{className:"single__name",children:c}),Object(j.jsx)("p",{className:"single__descr",children:n}),Object(j.jsxs)("p",{className:"single__descr",children:[o," pages"]}),Object(j.jsxs)("p",{className:"single__descr",children:["language: ",u]}),Object(j.jsxs)("div",{className:"single__price",children:[s," $"]})]}),Object(j.jsx)(a.b,{to:"../comics",className:"single__back",children:"Back to all"})]})},d=function(e){var t=e.data,c=t.name,n=t.description,r=t.thumbnail;return Object(j.jsxs)("div",{className:"single",children:[Object(j.jsxs)(i.a,{children:[Object(j.jsx)("meta",{name:"description",content:"".concat(c," single page")}),Object(j.jsx)("title",{children:c})]}),Object(j.jsx)("img",{src:r,alt:c,className:"single__img"}),Object(j.jsxs)("div",{className:"single__info",children:[Object(j.jsx)("h2",{className:"single__name",children:c}),Object(j.jsx)("p",{className:"single__descr",children:n})]}),Object(j.jsx)(a.b,{to:"/",className:"single__back",children:"Back main page"})]})};t.default=function(e){var t=Object(r.n)().id,c=Object(s.useState)(""),a=Object(n.a)(c,2),i=a[0],b=a[1],m=Object(o.a)(),h=m.getComic,f=m.getCharacter,g=m.process,x=m.setProcess;Object(s.useEffect)((function(){_(t)}),[t]);var v=function(e){b(e)},O=function(e){b(e)},_=function(t){e.comic&&h(t).then(v).then((function(){return x("confirmed")})),e.char&&f(t).then(O).then((function(){return x("confirmed")}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.a,{}),e.comic?Object(u.a)(g,p,i):e.char?Object(u.a)(g,d,i):null]})}},40:function(e,t,c){"use strict";var n=c.p+"static/media/error.2e68414c.gif",r=c(3);t.a=function(){return Object(r.jsx)("img",{style:{width:200,display:"block",margin:"20px auto 0 auto"},src:n,alt:"error"})}},42:function(e,t,c){"use strict";var n=c(4),r=c.n(n),a=c(7),s=c(5),i=c(0);t.a=function(){var e=function(){var e=Object(i.useState)("waiting"),t=Object(s.a)(e,2),c=t[0],n=t[1];return{request:Object(i.useCallback)(function(){var e=Object(a.a)(r.a.mark((function e(t){var c,a,s,i,o,u=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-type":"application/json"},n("loading"),e.prev=4,e.next=7,fetch(t,{method:c,body:a,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(4),n("error"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){n("loading")}),[]),process:c,setProcess:n}}(),t=e.request,c=e.clearError,n=e.process,o=e.setProcess,u="https://gateway.marvel.com:443/v1/public/",l="apikey=21aa5af94424603715dc10109257132d",j=100,p=function(){var e=Object(a.a)(r.a.mark((function e(){var c,n,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.length>0&&void 0!==a[0]?a[0]:j,e.next=3,t("".concat(u,"characters?limit=9&offset=").concat(c,"&").concat(l));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(g));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(r.a.mark((function e(c){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(u,"characters/").concat(c,"?limit=9&offset=210&").concat(l));case 2:return n=e.sent,e.abrupt("return",g(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(r.a.mark((function e(c){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("".concat(u,"characters?name=").concat(c,"&").concat(l));case 3:if(0!==(n=e.sent).data.results.length){e.next=6;break}throw new Error('There is no "'.concat(c,'" in database'));case 6:a=g(n.data.results[0]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),o("error");case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(r.a.mark((function e(){var c,n,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.length>0&&void 0!==a[0]?a[0]:j,e.next=3,t("".concat(u,"comics?issueNumber=").concat(1,"&orderBy=focDate&limit=").concat(8,"&offset=").concat(c,"&").concat(l));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(f));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(r.a.mark((function e(c){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(u,"comics/").concat(c,"?").concat(l));case 2:return n=e.sent,e.abrupt("return",f(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return{id:e.id,name:e.title,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,price:e.prices[0].price,url:e.urls[0].url,description:e.description,pageCount:e.pageCount,language:e.textObjects[0]?e.textObjects[0].language:null}},g=function(e){var t=e.description;return t?t.length>210&&(t="".concat(t.slice(0,207),"...")):t="Ooops..there's no info about this character",{name:e.name,description:t,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,id:e.id,comics:e.comics.items}};return{getAllCharacters:p,getCharacter:d,clearError:c,getAllComics:m,getComic:h,findCharacter:b,process:n,setProcess:o}}},55:function(e,t,c){"use strict";var n=c(40),r=c(21),a=(c(56),c(3)),s=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(a.jsxs)("div",{className:"skeleton",children:[Object(a.jsxs)("div",{className:"pulse skeleton__header",children:[Object(a.jsx)("div",{className:"pulse skeleton__circle"}),Object(a.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(a.jsx)("div",{className:"pulse skeleton__block"}),Object(a.jsx)("div",{className:"pulse skeleton__block"}),Object(a.jsx)("div",{className:"pulse skeleton__block"})]})]})};t.a=function(e,t,c){switch(e){case"waiting":return Object(a.jsx)(s,{});case"loading":return Object(a.jsx)(r.a,{});case"confirmed":return Object(a.jsx)(t,{data:c});case"error":return Object(a.jsx)(n.a,{});default:throw new Error("Unexpected process state")}}},56:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){"use strict";c(67);var n=c.p+"static/media/Avengers.4065c8f9.png",r=c.p+"static/media/Avengers_logo.9eaf2193.png",a=c(3);t.a=function(){return Object(a.jsxs)("div",{className:"app__banner",children:[Object(a.jsx)("img",{src:n,alt:"Avengers"}),Object(a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(a.jsx)("br",{}),"Stay tuned!"]}),Object(a.jsx)("img",{src:r,alt:"Avengers logo"})]})}}}]);
//# sourceMappingURL=6.86a1010f.chunk.js.map
(this["webpackJsonpfast-company"]=this["webpackJsonpfast-company"]||[]).push([[3],{10:function(e,t,c){"use strict";c.d(t,"b",(function(){return o})),c.d(t,"f",(function(){return u})),c.d(t,"c",(function(){return l})),c.d(t,"d",(function(){return j})),c.d(t,"e",(function(){return d}));var n=c(12),r=c(11),i={searchValue:"",categoryId:0,currentPage:1,sort:{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",sortProperty:r.a.RATING_DESC}},s=Object(n.c)({name:"filter",initialState:i,reducers:{setCategoryId:function(e,t){e.categoryId=t.payload},setSearchValue:function(e,t){e.searchValue=t.payload},setSort:function(e,t){e.sort=t.payload},setCurrentPage:function(e,t){e.currentPage=t.payload},setFilters:function(e,t){Object.keys(t.payload).length?(e.currentPage=Number(t.payload.currentPage),e.sort=t.payload.sort,e.categoryId=Number(t.payload.categoryId)):(e.currentPage=1,e.categoryId=0,e.sort={name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",sortProperty:r.a.RATING_DESC})}}}),a=s.actions,o=a.setCategoryId,u=a.setSort,l=a.setCurrentPage,j=a.setFilters,d=a.setSearchValue;t.a=s.reducer},11:function(e,t,c){"use strict";var n;c.d(t,"a",(function(){return n})),function(e){e.RATING_DESC="rating",e.RATING_ASC="-rating",e.PRICE_DESC="price",e.PRICE_ASC="-price",e.TITLE_DESC="title",e.TITLE_ASC="-title"}(n||(n={}))},116:function(e,t){},119:function(e,t,c){},120:function(e,t,c){"use strict";c.r(t);var n=c(27),r=c.n(n),i=c(9),s=c(7),a=c(18),o=c(2),u=c(0),l=c.n(u),j=c(64),d=c.n(j),b=c(13),h=c(38),O=c(19),f=c.n(O),m=c(28),p=c(48),x=c.n(p),g=c(10),v=c(39),C=c(21),_=function(e){return e.filterSlice},y=function(e){return e.pizzasSlice},w=c(23),N=c(1),k=function(){var e=Object(s.c)(_),t=e.categoryId,c=e.sort,n=e.currentPage,r=e.searchValue,i=Object(s.c)(y),l=i.items,j=i.status,d=Object(a.b)(),O=Object(o.g)(),p=Object(u.useRef)(!1),k=Object(u.useRef)(!1),S=Object(u.useCallback)((function(e){d(Object(g.b)(e)),d(Object(g.c)(1))}),[]),P=function(){var e=Object(m.a)(f.a.mark((function e(){var i,s,a,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=c.sortProperty.replace("-",""),s=c.sortProperty.includes("-")?"asc":"desc",a=t>0?"category=".concat(t):"",o=r?"search=".concat(r):"",d(Object(v.b)({sortBy:i,order:s,category:a,search:o,currentPage:n})),window.scrollTo(0,0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){if(k.current){var e=x.a.stringify({sortProperty:c.sortProperty,categoryId:t,currentPage:n});O("/?".concat(e))}k.current=!0}),[t,c.sortProperty,r,n]),Object(u.useEffect)((function(){p.current||P(),p.current=!1}),[t,c.sortProperty,r,n]),Object(u.useEffect)((function(){if(window.location.search){var e=x.a.parse(window.location.search.substring(1)),t=w.b.find((function(t){return t.sortProperty===e.sortBy}));d(Object(g.d)({searchValue:e.search,categoryId:Number(e.category),currentPage:Number(e.currentPage),sort:t||w.b[0]})),p.current=!0}}),[]);var L=Object(h.a)(new Array(6)).map((function(e,t){return Object(N.jsx)(C.f,{},t)})),z=l.map((function(e){return Object(u.createElement)(C.e,Object(b.a)(Object(b.a)({},e),{},{key:e.id}))}));return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsxs)("div",{className:"content__top",children:[Object(N.jsx)(C.c,{value:t,onChangeCategory:S}),Object(N.jsx)(C.g,{value:c})]}),Object(N.jsx)("h2",{className:"content__title",children:"\u0412\u0441\u0435 \u043f\u0438\u0446\u0446\u044b"}),"error"===j?Object(N.jsxs)("div",{className:"content_error-info",children:[Object(N.jsx)("h2",{children:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 "}),Object(N.jsx)("p",{children:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0438\u0442\u0441\u044b. \u041f\u043e\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435"})]}):Object(N.jsx)("div",{className:"content__items",children:"loading"===j?L:z}),Object(N.jsx)(C.d,{currentPage:n,onPageNumberChange:function(e){console.log(e),d(Object(g.c)(e))}})]})},S=(c(119),c(33)),P=function(){return Object(N.jsxs)("div",{className:"wrapper",children:[Object(N.jsx)(S.a,{}),Object(N.jsx)("div",{className:"content",children:Object(N.jsx)(o.a,{})})]})},L=l.a.lazy((function(){return c.e(0).then(c.bind(null,121))})),z=l.a.lazy((function(){return c.e(1).then(c.bind(null,122))})),I=d()({loader:function(){return c.e(2).then(c.bind(null,123))},loading:function(){return Object(N.jsx)("div",{children:"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b..."})}}),E=function(){return Object(N.jsx)(o.d,{children:Object(N.jsxs)(o.b,{path:"/",element:Object(N.jsx)(P,{}),children:[Object(N.jsx)(o.b,{path:"/",element:Object(N.jsx)(k,{})}),Object(N.jsx)(o.b,{path:"/cart",element:Object(N.jsx)(u.Suspense,{fallback:Object(N.jsx)("div",{children:"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b..."}),children:Object(N.jsx)(L,{})})}),Object(N.jsx)(o.b,{path:"/pizza/:id",element:Object(N.jsx)(u.Suspense,{fallback:Object(N.jsx)("div",{children:"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b..."}),children:Object(N.jsx)(z,{})})}),Object(N.jsx)(o.b,{path:"*",element:Object(N.jsx)(I,{})})]})})};r.a.render(Object(N.jsx)(i.a,{children:Object(N.jsx)(s.a,{store:a.a,children:Object(N.jsx)(E,{})})}),document.getElementById("root"))},14:function(e,t,c){"use strict";c.d(t,"a",(function(){return j})),c.d(t,"e",(function(){return d})),c.d(t,"d",(function(){return b})),c.d(t,"b",(function(){return h}));var n=c(13),r=function(e){return e.reduce((function(e,t){return e+t.price*t.count}),0)},i=c(12),s=function(){var e=localStorage.getItem("cart"),t=e?JSON.parse(e):[];return{items:t,totalPrice:r(t)}}(),a=s.items,o={totalPrice:s.totalPrice,items:a},u=Object(i.c)({name:"cart",initialState:o,reducers:{addItem:function(e,t){var c=e.items.find((function(e){return e.id===t.payload.id}));c?c.count++:e.items.push(Object(n.a)(Object(n.a)({},t.payload),{},{count:1})),e.totalPrice=r(e.items)},minusItem:function(e,t){var c=e.items.find((function(e){return e.id===t.payload.id}));c&&c.count>0&&(c.count--,e.totalPrice-=c.price)},removeItem:function(e,t){e.items=e.items.filter((function(e){return e.id!==t.payload}))},clearItem:function(e){e.items=[],e.totalPrice=0}}}),l=u.actions,j=l.addItem,d=l.removeItem,b=l.minusItem,h=l.clearItem;t.c=u.reducer},18:function(e,t,c){"use strict";c.d(t,"a",(function(){return o})),c.d(t,"b",(function(){return u}));var n=c(7),r=c(12),i=c(10),s=c(14),a=c(39),o=Object(r.a)({reducer:{filterSlice:i.a,cartSlice:s.c,pizzasSlice:a.a}}),u=n.b},21:function(e,t,c){"use strict";c.d(t,"d",(function(){return u})),c.d(t,"e",(function(){return O})),c.d(t,"f",(function(){return m})),c.d(t,"a",(function(){return x})),c.d(t,"b",(function(){return _})),c.d(t,"c",(function(){return y})),c.d(t,"g",(function(){return w.a}));c(49);var n=c(0),r=c(65),i=c.n(r),s=c(66),a=c.n(s),o=c(1),u=function(e){var t=e.currentPage,c=e.onPageNumberChange;return Object(o.jsx)(i.a,{className:a.a.root,breakLabel:"...",nextLabel:">",onPageChange:function(e){return c(e.selected+1)},pageRangeDisplayed:4,pageCount:3,forcePage:t-1,previousLabel:"<"})},l=c(5),j=c(7),d=c(9),b=c(14),h=c(29),O=function(e){var t=e.id,c=e.title,r=e.price,i=e.types,s=e.sizes,a=e.imageUrl,u=Object(n.useState)(0),O=Object(l.a)(u,2),f=O[0],m=O[1],p=Object(n.useState)(0),x=Object(l.a)(p,2),g=x[0],v=x[1],C=["\u0442\u043e\u043d\u043a\u043e\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"],_=Object(j.b)(),y=Object(j.c)(Object(h.b)(t)),w=y?y.count:0;return Object(o.jsx)("div",{className:"pizza-block-wrapper",children:Object(o.jsxs)("div",{className:"pizza-block",children:[Object(o.jsxs)(d.b,{to:"pizza/".concat(t),children:[Object(o.jsx)("img",{className:"pizza-block__image",src:a,alt:"Pizza"}),Object(o.jsx)("h4",{className:"pizza-block__title",children:c})]}),Object(o.jsxs)("div",{className:"pizza-block__selector",children:[Object(o.jsx)("ul",{children:i.map((function(e){return Object(o.jsx)("li",{onClick:function(){m(e)},className:f===e?"active":"",children:C[e]},e)}))}),Object(o.jsx)("ul",{children:s.map((function(e,t){return Object(o.jsxs)("li",{onClick:function(){v(t)},className:g===t?"active":"",children:[e," \u0441\u043c."]},t)}))})]}),Object(o.jsxs)("div",{className:"pizza-block__bottom",children:[Object(o.jsxs)("div",{className:"pizza-block__price",children:[r," \u20bd"]}),Object(o.jsxs)("button",{className:"button button--outline button--add",onClick:function(){var e={id:t,title:c,price:r,imageUrl:a,types:C[f],sizes:s[g],count:0};_(Object(b.a)(e))},children:[Object(o.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),Object(o.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),w>0&&Object(o.jsx)("i",{children:w})]})]})]})})},f=c(67),m=function(){return Object(o.jsxs)(f.a,{className:"pizzaBlock",speed:2,width:280,height:500,viewBox:"0 0 280 500",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(o.jsx)("circle",{cx:"134",cy:"136",r:"125"}),Object(o.jsx)("rect",{x:"0",y:"279",rx:"10",ry:"10",width:"280",height:"23"}),Object(o.jsx)("rect",{x:"0",y:"326",rx:"10",ry:"10",width:"280",height:"88"}),Object(o.jsx)("rect",{x:"0",y:"436",rx:"10",ry:"10",width:"95",height:"30"}),Object(o.jsx)("rect",{x:"125",y:"427",rx:"24",ry:"24",width:"152",height:"45"})]})},p=(c(30),c.p+"static/media/empty-cart.db905d1f.png"),x=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"cart cart--empty",children:[Object(o.jsxs)("h2",{children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f ",Object(o.jsx)("span",{children:"\ud83d\ude04"})," "]}),Object(o.jsxs)("p",{children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0451 \u043f\u0438\u0446\u0446\u0443.",Object(o.jsx)("br",{}),"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."]}),Object(o.jsx)("img",{src:p,alt:"emptyCard"}),Object(o.jsx)(d.b,{to:"/",className:"button button--black",children:Object(o.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})]})})},g=c(69),v=c(70),C=c(18),_=function(e){var t=e.id,c=e.title,n=e.types,r=e.price,i=e.count,s=e.imageUrl,a=e.sizes,u=Object(C.b)();Object(v.a)("CartItem",{id:t,title:c,types:n,price:r,count:i,imageUrl:s,sizes:a});return Object(o.jsxs)("div",{className:"cart__item",children:[Object(o.jsx)("div",{className:"cart__item-img",children:Object(o.jsx)("img",{className:"pizza-block__image",src:s,alt:"Pizza"})}),Object(o.jsxs)("div",{className:"cart__item-info",children:[Object(o.jsx)("h3",{children:c}),Object(o.jsxs)("p",{children:[n,", ",a," \u0441\u043c."]})]}),Object(o.jsxs)("div",{className:"cart__item-count",children:[Object(o.jsx)("button",{disabled:1===i,className:Object(g.a)("button button--outline button--circle cart__item-count-minus",{"cart__item-count-minus-disabled":1===i}),onClick:function(){return u(Object(b.d)({id:t}))},children:Object(o.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(o.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),Object(o.jsx)("b",{children:i}),Object(o.jsx)("button",{className:"button button--outline button--circle cart__item-count-plus",onClick:function(){return u(Object(b.a)({id:t}))},children:Object(o.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(o.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]}),Object(o.jsx)("div",{className:"cart__item-price",children:Object(o.jsxs)("b",{children:[r*i," \u20bd"]})}),Object(o.jsx)("div",{className:"cart__item-remove",children:Object(o.jsx)("div",{className:"button button--outline button--circle",onClick:function(){window.confirm("\u0422\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0447\u0435\u0448\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440")&&u(Object(b.e)(t))},children:Object(o.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(o.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})})]})},y=Object(n.memo)((function(e){var t=e.value,c=e.onChangeCategory;return Object(o.jsx)("div",{className:"categories",children:Object(o.jsx)("ul",{children:["\u0412\u0441\u0435","\u041c\u044f\u0441\u043d\u044b\u0435","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0430\u044f","\u0413\u0440\u0438\u043b\u044c","\u041e\u0441\u0442\u0440\u044b\u0435","\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0435"].map((function(e,n){return Object(o.jsx)("li",{onClick:function(){c(n)},className:t===n?"active":"",children:e},n)}))})})})),w=(c(33),c(23))},23:function(e,t,c){"use strict";c.d(t,"b",(function(){return u}));var n=c(5),r=c(0),i=c(32),s=c(10),a=c(11),o=c(1),u=[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438 (DESC)",sortProperty:a.a.RATING_DESC},{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438 (ASC)",sortProperty:a.a.RATING_ASC},{name:"\u0446\u0435\u043d\u0435 (DESC)",sortProperty:a.a.PRICE_DESC},{name:"\u0446\u0435\u043d\u0435 (ASC)",sortProperty:a.a.PRICE_ASC},{name:"\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443 (DESC)",sortProperty:a.a.TITLE_DESC},{name:"\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443 (ASC)",sortProperty:a.a.TITLE_ASC}],l=Object(r.memo)((function(e){var t=e.value,c=Object(i.b)(),a=Object(r.useState)(!1),l=Object(n.a)(a,2),j=l[0],d=l[1],b=Object(r.useRef)(null);Object(r.useEffect)((function(){var e=function(e){!b.current||e.composedPath().includes(b.current)||j||d(!1)};return document.body.addEventListener("click",e),function(){return document.body.removeEventListener("click",e)}}),[]);return Object(o.jsxs)("div",{ref:b,className:"sort",children:[Object(o.jsxs)("div",{className:"sort__label",children:[Object(o.jsx)("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(o.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),Object(o.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"}),Object(o.jsx)("span",{onClick:function(){return d(!j)},children:t.name})]}),j&&Object(o.jsx)("div",{className:"sort__popup",children:Object(o.jsx)("ul",{children:u.map((function(e,n){return Object(o.jsx)("li",{onClick:function(){!function(e){console.log(e),c(Object(s.f)(e)),d(!1)}(e)},className:t.sortProperty===e.sortProperty?"active":"",children:e.name},n)}))})})]})}));t.a=l},25:function(e,t,c){e.exports={root:"Search_root__1z6jT",input:"Search_input__53uBT",icon:"Search_icon__MmH0b",clearIcon:"Search_clearIcon__LFnIR"}},29:function(e,t,c){"use strict";c.d(t,"a",(function(){return n})),c.d(t,"b",(function(){return r}));var n=function(e){return e.cartSlice},r=function(e){return function(t){return t.cartSlice.items.find((function(t){return t.id===e}))}}},30:function(e,t,c){"use strict";var n=c(5),r=c(0),i=c(68),s=c.n(i),a=c(25),o=c.n(a),u=c(7),l=c(10),j=c(1);t.a=function(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),c=t[0],i=t[1],a=Object(r.useRef)(null),d=Object(u.b)(),b=Object(r.useCallback)(s()((function(e){d(Object(l.e)(e))}),300),[]);return Object(j.jsxs)("div",{className:o.a.root,children:[Object(j.jsxs)("svg",{className:o.a.icon,enableBackground:"new 0 0 32 32",id:"Editable-line",version:"1.1",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("circle",{cx:"14",cy:"14",fill:"none",id:"XMLID_42_",r:"9",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"2"}),Object(j.jsx)("line",{fill:"none",id:"XMLID_44_",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"2",x1:"27",x2:"20.366",y1:"27",y2:"20.366"})]}),Object(j.jsx)("input",{value:c,ref:a,className:o.a.input,placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u0438\u0446\u0446\u044b...",onChange:function(e){i(e.target.value),b(e.target.value)}}),c&&Object(j.jsxs)("svg",{onClick:function(){var e;d(Object(l.e)("")),i(""),null===(e=a.current)||void 0===e||e.focus()},className:o.a.clearIcon,version:"1.1",viewBox:"0 0 50 50",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("g",{id:"Layer_1",children:Object(j.jsx)("polygon",{points:"2.707,48.707 25,26.414 47.293,48.707 48.707,47.293 26.414,25 48.707,2.707 47.293,1.293 25,23.586 2.707,1.293    1.293,2.707 23.586,25 1.293,47.293  "})}),Object(j.jsx)("g",{})]})]})}},33:function(e,t,c){"use strict";var n=c(0),r=c(2),i=c(9),s=c(7),a=c(29),o=c.p+"static/media/pizza-logo.56ac8703.svg",u=c(30),l=c(1);t.a=function(){var e=Object(s.c)(a.a),t=e.items,c=e.totalPrice,j=Object(n.useRef)(!1);Object(n.useEffect)((function(){if(j.current){var e=JSON.stringify(t);localStorage.setItem("cart",e)}j.current=!0}),[t]);var d=t.reduce((function(e,t){return e+t.count}),0),b=Object(r.f)().pathname;return Object(l.jsx)("div",{className:"header",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(i.b,{to:"/",children:Object(l.jsxs)("div",{className:"header__logo",children:[Object(l.jsx)("img",{width:"38",src:o,alt:"Pizza logo"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"React Pizza"}),Object(l.jsx)("p",{children:"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439"})]})]})}),"/cart"!==b&&Object(l.jsx)(u.a,{}),Object(l.jsx)("div",{className:"header__cart",children:"/cart"!==b&&Object(l.jsxs)(i.b,{to:"/cart",className:"button button--cart",children:[Object(l.jsxs)("span",{children:[c," \u20bd"]}),Object(l.jsx)("div",{className:"button__delimiter"}),Object(l.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(l.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(l.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(l.jsx)("span",{children:d})]})})]})})}},39:function(e,t,c){"use strict";c.d(t,"b",(function(){return j}));var n,r=c(19),i=c.n(r),s=c(28),a=c(12),o=c(50),u=c.n(o);!function(e){e.LOADING="loading",e.SUCCESS="success",e.ERROR="error"}(n||(n={}));var l={items:[],status:n.LOADING},j=Object(a.b)("pizza/fetchPizzasStatus",function(){var e=Object(s.a)(i.a.mark((function e(t){var c,n,r,s,a,o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.sortBy,n=t.order,r=t.category,s=t.search,a=t.currentPage,e.next=3,u.a.get("https://628baebb667aea3a3e34800b.mockapi.io/items?page=".concat(a,"&limit=4&").concat(r,"&sortBy=").concat(c,"&order=").concat(n,"&").concat(s));case 3:return o=e.sent,l=o.data,e.abrupt("return",l);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d=Object(a.c)({name:"pizza",initialState:l,reducers:{setItems:function(e,t){e.items=t.payload}},extraReducers:function(e){e.addCase(j.pending,(function(e){e.status=n.LOADING,e.items=[]})),e.addCase(j.fulfilled,(function(e,t){e.items=t.payload,e.status=n.SUCCESS})),e.addCase(j.rejected,(function(e){e.status=n.SUCCESS,e.items=[]}))}});d.actions.setItems,t.a=d.reducer},40:function(e,t,c){e.exports={root:"NotFoundBlock_root__EzAM8",spanNotF:"NotFoundBlock_spanNotF__3Q6vK",description:"NotFoundBlock_description__1IjEO"}},49:function(e,t,c){"use strict";c(0);var n=c(40),r=c.n(n),i=c(1);t.a=function(){return Object(i.jsxs)("div",{className:r.a.root,children:[Object(i.jsxs)("h1",{children:[Object(i.jsx)("span",{className:r.a.spanNotF,children:"\ud83d\ude15"}),Object(i.jsx)("br",{}),"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"]}),Object(i.jsx)("p",{className:r.a.description,children:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u0434\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u043d\u0430\u0448\u0435\u043c \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0435"})]})}},66:function(e,t,c){e.exports={root:"Pagination_root__RVPvC"}}},[[120,4,5]]]);
//# sourceMappingURL=main.74fcbe8f.chunk.js.map
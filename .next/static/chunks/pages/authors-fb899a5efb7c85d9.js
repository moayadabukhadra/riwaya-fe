(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[415],{8867:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authors",function(){return t(8231)}])},866:function(e,a,t){"use strict";var n=t(8682);a.Z={getAllQuotes:function(){return n.Z.get("/quotes")},getRandomQuote:function(){return n.Z.get("".concat("/quote","/random"))}}},8682:function(e,a,t){"use strict";var n=t(6154),s=t(5991),l=t(3454),i=n.Z.create({baseURL:l.env.API_URL||"https://riwaya.rf.gd/api"});i.interceptors.request.use(function(e){var a=s.Z.getState().token;return a&&(e.headers.Authorization="Bearer ".concat(a)),e},function(e){Promise.reject(e)}),a.Z=i},8231:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return b}});var n=t(4610),s=t(7462),l=t(8732),i=t(5893),r=t(8682),c="/author",o={getAllAuthors:function(e){return r.Z.get("/authors",{params:e})},getAuthor:function(e){return r.Z.get("".concat(c,"/").concat(e))},getAuthorBooks:function(e){return r.Z.get("".concat(c,"/").concat(e,"/books"))}},d=t(7294),u=t(8489);t(9008);var m=t(7974),h=function(e){var a=e.author;return(0,i.jsxs)("div",{className:"col-md-4 col-lg-3 p-2 d-flex flex-column bg-light border rounded-2 justify-content-between align-items-center",children:[(0,i.jsx)("div",{className:"mb-2",children:(0,i.jsx)("img",{className:"rounded-circle",width:"150",height:"150",src:(null==a?void 0:a.image)?"https://riwaya.rf.gd/riwaya/storage/app/public/images/"+a.image.path:"/images/placeholders/placeholder.jpg",alt:null==a?void 0:a.name})}),(0,i.jsx)("span",{className:"fw-bold fs-5",children:null==a?void 0:a.name}),(0,m.S)(null==a?void 0:a.bio,50),(0,i.jsxs)("button",{onClick:function(){e.callBack(a)},className:"btn btn-dark d-flex align-items-center justify-content-center gap-1 mt-1",children:[(0,i.jsx)("i",{className:"fa fa-eye"}),"عرض التفاصيل"]})]})},g=t(98),f=t(5935),x=t(9382),p=t(866),j=t(4028),v=t(405),N=t(3879),b=function(){var e,a=(0,l._)((0,d.useState)(),2),t=a[0],r=a[1],c=(0,l._)((0,d.useState)(!0),2),m=c[0],b=c[1],y=(0,l._)((0,d.useState)(),2),w=y[0],k=y[1],_=(0,l._)((0,d.useState)(),2),Z=_[0],A=_[1],S=(0,l._)((0,d.useState)(!1),2),q=S[0],C=S[1],B=(0,l._)((0,d.useState)([]),2),E=B[0],I=B[1],P=(0,l._)((0,d.useState)(),2),z=P[0],O=P[1],R=(0,N.k6)(),Q=function(){return C(!q)},L=(0,l._)((0,d.useState)({with:"image",paginate:"6"}),2),T=L[0],U=L[1],X=function(e){A(e),o.getAuthorBooks(null==e?void 0:e.id).then(function(a){I(a.data),C(!0),R.push("?page="+T.page+Z?"?author="+(null==e?void 0:e.id):0)})};return(0,d.useEffect)(function(){var e=window.location.href.split("=")[1];e&&(o.getAuthor(e).then(function(e){A(e.data),C(!0)}),o.getAuthorBooks(e).then(function(e){I(e.data),C(!0)})),o.getAllAuthors(T).then(function(e){var a=e.data;r(a.data),k(a.links),b(!1),b(!1)}),p.Z.getRandomQuote().then(function(e){O(e.data)})},[T]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(v.ql,{children:[(0,i.jsx)("title",{children:Z?"تحميل وقرائة كتب "+Z.name:" المؤلفين - رواية"}),(0,i.jsx)("meta",{name:"description",content:"اكتشف مجموعة من الأسماء البارزة في عالم الكتابة | استكشف أعمالهم الأدبية وسيرهم الذاتية"})]}),(0,i.jsx)(g.Z,{loading:m}),(0,i.jsxs)("div",{className:"content row justify-content-center justify-content-md-around align-self-center",style:{margin:"100px  auto",alignSelf:"center"},children:[(0,i.jsx)("div",{className:"col-md-3 row border-start",children:(0,i.jsxs)("div",{className:"bg-white rounded-2 p-3",children:[(0,i.jsxs)("div",{className:"d-flex flex-column gap-3",children:[(0,i.jsx)("label",{className:"position-relative d-flex align-items-center position-relative",children:(0,i.jsx)("input",{type:"text",className:"main-search-input",placeholder:"ابحث عن كتاب ,مؤلف , تصنيف..."})}),(0,i.jsxs)("button",{onClick:function(){U((0,s._)((0,n._)({},T),{page:1,query:document.querySelector(".main-search-input").value}))},className:"btn btn-primary w-100 mt-3 my-3 text-white d-flex align-items-center justify-content-center gap-2 mt-auto",children:[(0,i.jsx)("i",{className:"fa fa-search"}),"بحث"]})]}),(0,i.jsx)("div",{className:"d-none d-md-block",children:(0,i.jsx)(j.Z,{quote:z})})]})}),(0,i.jsxs)("div",{className:"col-md-9 row gap-1 justify-content-center",children:[t&&t.map(function(e,a){return(0,i.jsx)(h,{callBack:X,author:e},a)}),(0,i.jsx)("nav",{className:"col-12","aria-label":"...",children:(0,i.jsx)(u.tl,{className:"pagination justify-content-center my-2",listClassName:"justify-content-center gap-1 flex-wrap",children:w&&w.map(function(a){return(0,i.jsx)(u.nt,{className:(a.url?"":"disabled")+(a.active?"active":""),children:(0,i.jsx)(u.kN,{className:"rounded-2",onClick:function(){a.url&&(T.page=a.url.substring(a.url.lastIndexOf("=")+1),o.getAllAuthors(T).then(function(e){var a=e.data;r(a.data),k(a.links)}),R.push("?page="+T.page+Z?"?author="+(null==Z?void 0:Z.id):0))},children:a.label.includes("next")?(0,i.jsx)("i",{className:"fa fa-angle-left"}):a.label.includes("prev")?(0,i.jsx)("i",{className:"fa fa-angle-right"}):null!==(e=a.label)&&void 0!==e?e:a.label})},a.label)})})})]})]}),(0,i.jsxs)(u.u_,{className:"modal-dialog-scrollable modal-lg",isOpen:q,toggle:Q,children:[(0,i.jsx)(u.xB,{className:"d-flex align-items-center justify-content-between w-100",toggle:Q,children:null==Z?void 0:Z.name}),(0,i.jsxs)(u.fe,{className:"custom-scroll",children:[(0,i.jsxs)("div",{className:"d-flex align-items-start gap-2 flex-column",children:[(0,i.jsx)("img",{className:"rounded-1 image-thumbnail",width:"150",src:(null==Z?void 0:Z.image)?"https://riwaya.rf.gd/riwaya/storage/app/public/images/"+Z.image.path:"/images/placeholders/placeholder.jpg",alt:null==Z?void 0:Z.name}),Z&&(0,f.ZP)(null==Z?void 0:Z.bio)]}),(0,i.jsxs)("div",{className:"row justify-content-center",children:[(0,i.jsx)("div",{className:"col-12",children:(0,i.jsxs)("div",{className:"book-section-title mb-4",children:["كتب ل",null==Z?void 0:Z.name]})}),E&&E.map(function(e){return(0,i.jsx)("div",{className:"col-6 col-md-4 col-lg-3 mb-3",children:(0,i.jsx)(x.Z,{book:e})})})]})]}),(0,i.jsx)(u.mz,{children:(0,i.jsx)(u.zx,{color:"light",onClick:Q,children:"الغاء"})})]})]})}},7974:function(e,a,t){"use strict";t.d(a,{S:function(){return n}});var n=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return null!==e&&""!==e&&(e=e.toString()).replace(/<[^>]*>/g,"").substring(0,a)+"..."}},9382:function(e,a,t){"use strict";var n=t(5893);t(7294);var s=t(8489),l=t(9755),i=t.n(l);a.Z=function(e){i()(document).ready(function(){i()(".book-card").on("mouseover",function(){i()(this).removeClass("text-truncate")})});var a,t,l=e.book;return(0,n.jsx)("a",{onMouseEnter:function(){},href:"/books/?book="+l.id,className:"mb-5",children:(0,n.jsx)("div",{className:"card text-white card-has-bg click-col",style:{backgroundImage:"url(".concat(l.image?"https://riwaya.rf.gd/riwaya/storage/app/public/images/"+l.image.path:"/images/placeholders/placeholder.jpg",")")},children:(0,n.jsxs)("div",{className:"card-img-overlay d-flex flex-column",children:[(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsx)("h4",{className:"card-title book-title mt-0 fs-6 text-truncate",style:{whiteSpace:"nowrap"},children:(0,n.jsx)("a",{className:"text-white text-decoration-none ",children:l.title})}),(0,n.jsx)(s.Ct,{color:"primary fw-normal",className:"mb-3",children:null===(a=l.category)||void 0===a?void 0:a.name})]}),(0,n.jsx)("div",{className:"card-footer p-0",children:(0,n.jsxs)("a",{href:"/authors?author="+l.author.id,className:"d-flex gap-1 align-items-center text-decoration-none",children:[(0,n.jsx)("img",{className:"mr-3 rounded-circle",src:l.author.image?"https://riwaya.rf.gd/riwaya/storage/app/public/images/"+l.author.image.path:"/images/placeholders/placeholder.jpg",alt:"author-img",style:{maxWidth:"50px"}}),(0,n.jsx)("div",{className:"media-body",children:(0,n.jsx)("h6",{className:"my-0 text-white d-block",children:null===(t=l.author)||void 0===t?void 0:t.name})})]})})]})})})}},98:function(e,a,t){"use strict";var n=t(8146),s=t(5893);t(7294),a.Z=function(e){return e.loading?(0,s.jsx)("div",{style:{position:"fixed",inset:"0",zIndex:"9999",background:"#fff",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,s.jsx)("div",{className:"book",children:(0,s.jsxs)("div",{className:"inner",children:[(0,s.jsx)("div",{className:"left"}),(0,s.jsx)("div",{className:"middle"}),(0,s.jsx)("div",{className:"right"}),(0,s.jsx)("ul",{children:(0,n._)(Array(18)).map(function(e,a){return(0,s.jsx)("li",{})})})]})})}):null}},4028:function(e,a,t){"use strict";var n=t(5893);t(7294),a.Z=function(e){var a,t,s,l=e.quote;return(0,n.jsx)("div",{className:"box shadow-sm bg-light text-muted",children:(0,n.jsxs)("div",{className:"text",children:[(0,n.jsxs)("p",{className:"mt-1 d-flex align-items-center gap-2 fs-4",children:[(0,n.jsx)("i",{className:"fas fa-quote-right fa2 text-primary",style:{transform:"translateY(-0.5rem)"}}),null==l?void 0:l.body,(0,n.jsx)("i",{style:{transform:"translateY(0.5rem)"},className:"fas fa-quote-left fa2 text-primary"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("img",{alt:"quote-author",className:"rounded-circle",width:"30",src:(null==l?void 0:null===(a=l.author)||void 0===a?void 0:a.image)?"https://riwaya.rf.gd/riwaya/storage/app/public/images/"+(null===(t=l.author)||void 0===t?void 0:t.image.path):"/images/placeholders/placeholder.jpg"}),(0,n.jsx)("small",{className:"fs-6",children:null==l?void 0:null===(s=l.author)||void 0===s?void 0:s.name})]})]})})}}},function(e){e.O(0,[18,879,935,774,888,179],function(){return e(e.s=8867)}),_N_E=e.O()}]);
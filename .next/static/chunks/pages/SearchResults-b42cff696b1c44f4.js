(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[362],{9878:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/SearchResults",function(){return t(8707)}])},8707:function(e,a,t){"use strict";t.r(a);var s=t(5893),i=t(8489),n=t(9382),l=t(7974);a.default=function(e){var a,t,r=null===(a=e.location)||void 0===a?void 0:null===(t=a.state)||void 0===t?void 0:t.data,c=null==r?void 0:r.books,o=null==r?void 0:r.authors;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.W2,{className:"content",children:[(0,s.jsx)("h3",{className:"book-section-title mb-3",children:"الكتب"}),(0,s.jsxs)(i.X2,{className:"mb-5 justify-content-center",children:[c&&(null==c?void 0:c.map(function(e){return(0,s.jsx)("div",{className:"col-6 col-md-4 col-lg-3 col-xl-2 mb-4",children:(0,s.jsx)(n.Z,{book:e},null==e?void 0:e.id)})})),(null==c?void 0:c.length)===0&&(0,s.jsx)("div",{className:"text-center text-primary fs-2",children:"لا يوجد نتائج"})]}),(0,s.jsx)("h3",{className:"book-section-title mb-3",children:"المؤلفين"}),(0,s.jsxs)(i.X2,{className:"mb-5 justify-content-center gap-1",children:[o&&o.map(function(e){return(0,s.jsxs)("div",{className:"col-md-4 col-lg-3 p-2 d-flex flex-column bg-light border rounded-2 justify-content-between align-items-center",children:[(0,s.jsx)("div",{className:"mb-2",children:(0,s.jsx)("img",{className:"rounded-circle",width:"150",height:"150",src:e.image?"https://riwaya.rf.gd/riwaya/storage/app/public/images/"+e.image.path:"/images/placeholders/placeholder.jpg",alt:e.name})}),(0,s.jsx)("span",{className:"fw-bold fs-5",children:e.name}),(0,l.S)(e.bio,50),(0,s.jsxs)("a",{href:"/authors?author="+e.id,className:"btn btn-dark d-flex align-items-center justify-content-center gap-1 mt-1",children:[(0,s.jsx)("i",{className:"fa fa-eye"}),"عرض التفاصيل"]})]})}),(null==o?void 0:o.length)===0&&(0,s.jsx)("div",{className:"text-center text-primary fs-2",children:"لا يوجد نتائج"})]})]})})}},7974:function(e,a,t){"use strict";t.d(a,{S:function(){return s}});var s=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return null!==e&&""!==e&&(e=e.toString()).replace(/<[^>]*>/g,"").substring(0,a)+"..."}},9382:function(e,a,t){"use strict";var s=t(5893);t(7294);var i=t(8489),n=t(9755),l=t.n(n);a.Z=function(e){l()(document).ready(function(){l()(".book-card").on("mouseover",function(){l()(this).removeClass("text-truncate")})});var a,t,n=e.book;return(0,s.jsx)("a",{onMouseEnter:function(){},href:"/books/?book="+n.id,className:"mb-5",children:(0,s.jsx)("div",{className:"card text-white card-has-bg click-col",style:{backgroundImage:"url(".concat(n.image?"https://riwaya.rf.gd/riwaya/storage/app/public/images/"+n.image.path:"/images/placeholders/placeholder.jpg",")")},children:(0,s.jsxs)("div",{className:"card-img-overlay d-flex flex-column",children:[(0,s.jsxs)("div",{className:"card-body",children:[(0,s.jsx)("h4",{className:"card-title book-title mt-0 fs-6 text-truncate",style:{whiteSpace:"nowrap"},children:(0,s.jsx)("a",{className:"text-white text-decoration-none ",children:n.title})}),(0,s.jsx)(i.Ct,{color:"primary fw-normal",className:"mb-3",children:null===(a=n.category)||void 0===a?void 0:a.name})]}),(0,s.jsx)("div",{className:"card-footer p-0",children:(0,s.jsxs)("a",{href:"/authors?author="+n.author.id,className:"d-flex gap-1 align-items-center text-decoration-none",children:[(0,s.jsx)("img",{className:"mr-3 rounded-circle",src:n.author.image?"https://riwaya.rf.gd/riwaya/storage/app/public/images/"+n.author.image.path:"/images/placeholders/placeholder.jpg",alt:"author-img",style:{maxWidth:"50px"}}),(0,s.jsx)("div",{className:"media-body",children:(0,s.jsx)("h6",{className:"my-0 text-white d-block",children:null===(t=n.author)||void 0===t?void 0:t.name})})]})})]})})})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9878)}),_N_E=e.O()}]);
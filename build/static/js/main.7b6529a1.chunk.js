(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{107:function(e,t,a){e.exports=a(130)},112:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(35),s=a.n(c),l=a(14),m=(a(112),a(13));a(121);var i=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(!0),i=Object(l.a)(s,2),o=(i[0],i[1]),d=function(){return c(!1)},E=function(){window.innerWidth<=960?o(!1):o(!0)};return Object(r.useEffect)((function(){E()}),[]),window.addEventListener("resize",E),n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar",style:{position:"sticky"}},n.a.createElement(m.b,{to:"/",className:"navbar-logo",onClick:d},"HYC\xc1R",n.a.createElement("i",{class:"fab fa-typo3"})),n.a.createElement("div",{className:"navbar-container"},n.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!a)}},n.a.createElement("i",{className:a?"fas fa-times":"fas fa-bars"})),n.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{to:"/",className:"nav-links",onClick:d},"HOME")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{to:"/",className:"nav-links",onClick:d}),n.a.createElement("a",{href:"#cards",className:"nav-links"},"BRAND")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{to:"/",className:"nav-links",onClick:d}),n.a.createElement("a",{href:"#merc",className:"nav-links"},"MOST IN DEMAND")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{to:"/",className:"nav-links",onClick:d}),n.a.createElement("a",{href:"mailto:hycar@email.com",className:"nav-links"},"CONTACT US")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{to:"/sign-up",className:"nav-links",onClick:d},"Sign Up")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/",className:"nav-links-mobile",onClick:d},"Sign Up"))))))},o=(a(39),a(48),{cardData:[{img:"images/mr1.webp",text:"Mercedes",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/mr2.jpg",text:"Mercedes2",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/mr3.webp",text:"Mercedes3",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/mr4.jpg",text:"Mercedes4",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/mr5.jpg",text:"Mercedes5",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/mr6.jpg",text:"Mercedes6",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/mr7.jpg",text:"Mercedes7",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/mr8.jpg",text:"Mercedes8",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"}]}),d={dataMerc1:[{img:"images/bm1.jpg",text:"BMW",text1:"BMW 6 Series Gran Turismo",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/bm2.jpg",text:"BMW",text1:"BMW 6 Series Gran Turismo",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/bm3.jpg",text:"BMW",text1:"BMW 6 Series Gran Turismo",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/bm4.jpg",text:"BMW",text1:"BMW 6 Series Gran Turismo",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/bm5.jpg",text:"BMW",text1:"BMW 6 Series Gran Turismo",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/bm6.jpg",text:"BMW",text1:"BMW 6 Series Gran Turismo",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/bm7.jpg",text:"BMW",text1:"BMW 6 Series Gran Turismo",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/bm8.jpg",text:"BMW",text1:"BMW 6 Series Gran Turismo",text2:"00.00$",path:"/services",btn:"More Details"}]},E=a(17);var u=function(){var e=Object(E.f)();return n.a.createElement("div",{className:"cards",id:"cards"},n.a.createElement("div",{className:"cards__container"},n.a.createElement("div",{className:"cards__wrapper"},n.a.createElement("div",{className:"clickformore"},n.a.createElement("h1",{className:"cards__title"},"BMW"),n.a.createElement("p",{className:"description"},n.a.createElement(m.c,{to:"/bmw"},"More"))),n.a.createElement("section",{className:"py-4 container"},n.a.createElement("div",{className:"row justify-content-center"},d.dataMerc1.map((function(t,a){return n.a.createElement("div",{className:"col-11 col-md-6 col-lg-3 mx-0 mb-5"},n.a.createElement("div",{className:"cards__item card p-0 overflow-hidden h-100 shadow",style:{background:"rgb(37, 37, 37)",flex:1,margin:"0 1rem",borderRadius:"10px",marginBottom:"24px"}},n.a.createElement("figure",{className:"cards__item__pic-wrap"},n.a.createElement("img",{src:t.img,className:"card-img-top cards__item__img"})),n.a.createElement("div",{className:"card-body cards__item__info"},n.a.createElement("h5",{className:"card-title cards__item__text"},t.text),n.a.createElement("h5",{className:"card-title cards__item__text"},t.text1),n.a.createElement("h5",{className:"card-title cards__item__text"},t.text2),n.a.createElement("button",{onClick:function(){e.push("/services")},className:"btn1"},t.btn))))})),";")),n.a.createElement("div",{className:"clickformore",id:"merc"},n.a.createElement("h1",{className:"cards__title",style:{marginTop:"5rem"}},"Mercedes"),n.a.createElement("p",{className:"description",style:{marginTop:"5rem"}},n.a.createElement(m.c,{to:"/merc"},"More"))),n.a.createElement("section",{className:"py-4 container"},n.a.createElement("div",{className:"row justify-content-center"},o.cardData.map((function(t,a){return n.a.createElement("div",{className:"col-11 col-md-6 col-lg-3 mx-0 mb-5"},n.a.createElement("div",{className:"cards__item card p-0 overflow-hidden h-100 shadow",style:{background:"rgb(37, 37, 37)",flex:1,margin:"0 1rem",borderRadius:"10px",marginBottom:"24px"}},n.a.createElement("figure",{className:"cards__item__pic-wrap"},n.a.createElement("img",{src:t.img,className:"card-img-top cards__item__img"})),n.a.createElement("div",{className:"card-body cards__item__info"},n.a.createElement("h5",{className:"card-title cards__item__text"},t.text),n.a.createElement("h5",{className:"card-title cards__item__text"},t.text1),n.a.createElement("h5",{className:"card-title cards__item__text"},t.text2),n.a.createElement("button",{onClick:function(){e.push("/services")},className:"btn1"},t.btn))))})),";")))))};a(122);var g=function(){return n.a.createElement("div",{className:"hero-container"},n.a.createElement("video",{src:"/videos/vidAfter1.mp4",autoPlay:!0,loop:!0,muted:!0}),n.a.createElement("div",{className:"action-container"},n.a.createElement("h1",{style:{marginTop:"-8rem"}},"MERCEDES \xc1MG"),n.a.createElement("div",{className:"buttons"},n.a.createElement("input",{className:"search",type:"text",id:"header-search",placeholder:"Search blog posts",name:"s"}),n.a.createElement("button",{type:"submit",className:"button1"},n.a.createElement("a",{href:""},"Search")))),n.a.createElement("form",{action:"/",method:"get"},n.a.createElement("label",{htmlFor:"header-search"},n.a.createElement("span",{className:"visually-hidden"},"Search blog posts"))),n.a.createElement("div",{className:"footer"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:""},"EMOTION")),n.a.createElement("li",null,n.a.createElement("a",{href:""},"DESIGN")),n.a.createElement("li",null,n.a.createElement("a",{href:""},"DRIVING")),n.a.createElement("li",null,n.a.createElement("a",{href:""},"TECHNICAL")),n.a.createElement("li",null,n.a.createElement("a",{href:""},"GALLERY")))))};a(123);var p=function(){return n.a.createElement("div",{className:"footer-container"},n.a.createElement("div",{class:"footer-links"},n.a.createElement("div",{className:"footer-link-wrapper"},n.a.createElement("div",{class:"footer-link-items"},n.a.createElement("h2",null,"About Us"),n.a.createElement(m.b,{to:"/sign-up"},"How it works"),n.a.createElement(m.b,{to:"/"},"Testimonials"),n.a.createElement(m.b,{to:"/"},"Careers"),n.a.createElement(m.b,{to:"/"},"Investors"),n.a.createElement(m.b,{to:"/"},"Terms of Service")),n.a.createElement("div",{class:"footer-link-items"},n.a.createElement("h2",null,"Contact Us"),n.a.createElement(m.b,{to:"/"},"Contact"),n.a.createElement(m.b,{to:"/"},"Support"),n.a.createElement(m.b,{to:"/"},"Destinations"),n.a.createElement(m.b,{to:"/"},"Sponsorships"))),n.a.createElement("div",{className:"footer-link-wrapper"},n.a.createElement("div",{class:"footer-link-items"},n.a.createElement("h2",null,"Videos"),n.a.createElement(m.b,{to:"/"},"Submit Video"),n.a.createElement(m.b,{to:"/"},"Ambassadors"),n.a.createElement(m.b,{to:"/"},"Agency"),n.a.createElement(m.b,{to:"/"},"Influencer")),n.a.createElement("div",{class:"footer-link-items"},n.a.createElement("h2",null,"Social Media"),n.a.createElement(m.b,{to:"/"},"Instagram"),n.a.createElement(m.b,{to:"/"},"Facebook"),n.a.createElement(m.b,{to:"/"},"Youtube"),n.a.createElement(m.b,{to:"/"},"Twitter")))),n.a.createElement("section",{class:"social-media"},n.a.createElement("div",{class:"social-media-wrap"},n.a.createElement("div",{class:"footer-logo"},n.a.createElement(m.b,{to:"/",className:"social-logo"},"HYC\xc1R",n.a.createElement("i",{class:"fab fa-typo3"}))),n.a.createElement("small",{class:"website-rights"},"HYC\xc1R \xa9 2022"),n.a.createElement("div",{class:"social-icons"},n.a.createElement(m.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},n.a.createElement("i",{class:"fab fa-facebook-f"})),n.a.createElement(m.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},n.a.createElement("i",{class:"fab fa-instagram"})),n.a.createElement(m.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},n.a.createElement("i",{class:"fab fa-youtube"})),n.a.createElement(m.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},n.a.createElement("i",{class:"fab fa-twitter"})),n.a.createElement(m.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},n.a.createElement("i",{class:"fab fa-linkedin"}))))))};var b=function(){return n.a.createElement("div",{className:"features"},n.a.createElement("h1",{className:"title"},"Features"),n.a.createElement("section",{className:"container"},n.a.createElement("div",null,n.a.createElement("img",{className:"icon",src:"images/new-xxl.png"}),n.a.createElement("a",{href:"#",className:"link-icon"},"New Cars")),n.a.createElement("div",null,n.a.createElement("img",{className:"icon",src:"images/twitch-tv-2-xxl.png"}),n.a.createElement("a",{href:"#",className:"link-icon"},"Advertising")),n.a.createElement("div",null,n.a.createElement("img",{className:"icon",src:"images/sale-2-xxl.png"}),n.a.createElement("a",{href:"#",className:"link-icon"},"best selling"))))};var x=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i,null),n.a.createElement(g,null),n.a.createElement(b,null),n.a.createElement(u,null),n.a.createElement(p,null))},v=a(32),M=a(33),f=a(44),h=a(43),_=(r.Component,function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(M.a)(a,[{key:"render",value:function(){var e=this.props,t=e.images,a=e.tab,r=e.myRef;return n.a.createElement("div",{className:"thumb",ref:r},t.map((function(e,t){return n.a.createElement("img",{src:e,alt:"",key:t,onClick:function(){return a(t)}})})))}}]),a}(r.Component)),N=(a(124),function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(v.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={products:[{_id:"1",title:"Mercedes-AMG GT",src:["images/car1.jpg","images/car2.jpg","images/car3.jpg","images/car4.jpg","images/car5.jpg"],model:"Model: 2020",transmission:"Transmission: Manual",Engine:"Engine Size: 2L",power:"Power BHP: 178 HP",distance:"Distance Meter: 000 Km",car:"Car State: Clean",price:9e4,colors:["red","black","white","orange"],count:1}],index:0},e.myRef=n.a.createRef(),e.handleTab=function(t){e.setState({index:t});for(var a=e.myRef.current.children,r=0;r<a.length;r++)a[r].className=a[r].className.replace("active","");a[t].className="active"},e}return Object(M.a)(a,[{key:"componentDidMount",value:function(){var e=this.state.index;this.myRef.current.children[e].className="active"}},{key:"render",value:function(){var e=this,t=this.state,a=t.products,r=t.index;return n.a.createElement("body",{style:{backgroundColor:"#333",margin:0,padding:"0.5rem 0 2rem 0"}},n.a.createElement("div",{className:"app"},a.map((function(t){return n.a.createElement("div",{className:"details",key:t._id},n.a.createElement("div",{className:"big-img"},n.a.createElement("img",{src:t.src[r],alt:""})),n.a.createElement("div",{className:"box"},n.a.createElement("div",{className:"row"},n.a.createElement("h2",null,t.title),n.a.createElement("span",null,"$",t.price)),n.a.createElement("p",null,t.model),n.a.createElement("p",null,t.transmission),n.a.createElement("p",null,t.Engine),n.a.createElement("p",null,t.power),n.a.createElement("p",null,t.distance),n.a.createElement("p",null,t.car),n.a.createElement(_,{images:t.src,tab:e.handleTab,myRef:e.myRef}),n.a.createElement("button",{className:"btn1"},"Buy"),n.a.createElement("button",{className:"btn2"},"Add to favorites")))}))))}}]),a}(n.a.Component));var w=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i,null),n.a.createElement(N,null),n.a.createElement(p,null))},y=function(e){var t=Object(E.f)();return n.a.createElement("div",{className:"cards__container"},n.a.createElement("div",{className:"cards__wrapper"},n.a.createElement("div",{className:"clickformore"},n.a.createElement("h1",{className:"cards__title"},"BMW"),n.a.createElement("p",{className:"description"},n.a.createElement("a",{href:"#"},"More"))),n.a.createElement("ul",{className:"cards__items"},n.a.createElement("li",{className:"cards__item"},n.a.createElement(m.b,{className:"cards__item__link"},n.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},n.a.createElement("img",{className:"cards__item__img",src:e.img})),n.a.createElement("div",{className:"cards__item__info"},n.a.createElement("h5",{className:"cards__item__text"},e.text),n.a.createElement("h5",{className:"cards__item__text"},e.text1),n.a.createElement("h5",{className:"cards__item__text"},e.text2),n.a.createElement("button",{onClick:function(){t.push("/Moredetails")},className:"btn"},e.btn)))))))},G=[{img:"images/car1.jpg",text:"Mercedes",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/car2.jpg",text:"Mercedes2",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/car3.jpg",text:"Mercedes3",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/car4.jpg",text:"Mercedes4",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/car5.jpg",text:"Mercedes5",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"}];function j(){return n.a.createElement("div",null,G.map((function(e){return n.a.createElement(y,{img:e.img,text:e.text,text1:e.text1,text2:e.text2,btn:e.btn})})))}function k(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(j,null))}var D=a(172),T=a(174),W=a(165),B=a(168),S=a(180),$=a(170),C=a(177),A=a(173),O=a(179),R=a(59),F=a.n(R),I=a(176),H=a(178),Y=a(83),L=a(175);function U(e){return r.createElement(I.a,Object.assign({variant:"body2",color:"text.secondary",align:"center"},e),"Copyright \xa9 ",r.createElement(C.a,{color:"inherit",href:"/"},"HYC\xc1R")," ",(new Date).getFullYear(),".")}var q=Object(Y.a)();function P(){return r.createElement(L.a,{theme:q},r.createElement(H.a,{component:"main",maxWidth:"xs"},r.createElement(W.a,null),r.createElement(O.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"}},r.createElement(D.a,{sx:{m:1,bgcolor:"secondary.main"}},r.createElement(F.a,null)),r.createElement(I.a,{component:"h1",variant:"h5"},"Sign up"),r.createElement(O.a,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget);console.log({email:t.get("email"),password:t.get("password")})},sx:{mt:3}},r.createElement(A.a,{container:!0,spacing:2},r.createElement(A.a,{item:!0,xs:12,sm:6},r.createElement(B.a,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.createElement(A.a,{item:!0,xs:12,sm:6},r.createElement(B.a,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name"})),r.createElement(A.a,{item:!0,xs:12},r.createElement(B.a,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),r.createElement(A.a,{item:!0,xs:12},r.createElement(B.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})),r.createElement(A.a,{item:!0,xs:12},r.createElement(S.a,{control:r.createElement($.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),r.createElement(T.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2}},"Sign Up"),r.createElement(A.a,{container:!0,justifyContent:"flex-end"},r.createElement(A.a,{item:!0},r.createElement(C.a,{href:"/sign-in",variant:"body2"},"Already have an account? Sign in"))))),r.createElement(U,{sx:{mt:5}})))}function V(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(P,null))}function z(e){return r.createElement(I.a,Object.assign({variant:"body2",color:"text.secondary",align:"center"},e),"Copyright \xa9 ",r.createElement(C.a,{color:"inherit",href:"/"},"HYC\xc1R")," ",(new Date).getFullYear(),".")}var J=Object(Y.a)();function K(){return r.createElement(L.a,{theme:J},r.createElement(H.a,{component:"main",maxWidth:"xs"},r.createElement(W.a,null),r.createElement(O.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"}},r.createElement(D.a,{sx:{m:1,bgcolor:"secondary.main"}},r.createElement(F.a,null)),r.createElement(I.a,{component:"h1",variant:"h5"},"Sign in"),r.createElement(O.a,{component:"form",onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget);console.log({email:t.get("email"),password:t.get("password")})},noValidate:!0,sx:{mt:1}},r.createElement(B.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),r.createElement(B.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.createElement(S.a,{control:r.createElement($.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.createElement(T.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2}},"Sign In"),r.createElement(A.a,{container:!0},r.createElement(A.a,{item:!0,xs:!0},r.createElement(C.a,{href:"#",variant:"body2"},"Forgot password?")),r.createElement(A.a,{item:!0},r.createElement(C.a,{href:"/sign-up",variant:"body2"},"Don't have an account? Sign Up"))))),r.createElement(z,{sx:{mt:8,mb:4}})))}function Q(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(K,null))}var X={cardData:[{img:"images/mr1.webp",text:"Mercedes",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/mr2.jpg",text:"Mercedes2",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/mr3.webp",text:"Mercedes3",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/mr4.jpg",text:"Mercedes4",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/mr5.jpg",text:"Mercedes5",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/mr6.jpg",text:"Mercedes6",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/mr7.jpg",text:"Mercedes7",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/mr8.jpg",text:"Mercedes8",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/mr9.webp",text:"Mercedes9",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/mr10.jpeg",text:"Mercedes10",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/mr11.jpg",text:"Mercedes11",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/mr12.jpg",text:"Mercedes12",text1:"Mercedes-AMG GT",text2:"00.00$",path:"/services",btn:"More Details"}]},Z=function(){var e=Object(E.f)();return n.a.createElement("body",null,n.a.createElement("div",{className:"cards",style:{margin:"-5rem 0 0 0",padding:"2rem 0 0 0"}},n.a.createElement("div",{className:"cards__container"},n.a.createElement("div",{className:"cards__wrapper"},n.a.createElement("div",{className:"clickformore"},n.a.createElement("h1",{className:"cards__title"},"MERCEDES")),n.a.createElement("section",{className:"py-4 container"},n.a.createElement("div",{className:"row justify-content-center"},X.cardData.map((function(t,a){return n.a.createElement("div",{className:"col-11 col-md-6 col-lg-3 mx-0 mb-5"},n.a.createElement("div",{className:"cards__item card p-0 overflow-hidden h-100 shadow",style:{background:"rgb(37, 37, 37)",flex:1,margin:"0 1rem",borderRadius:"10px",marginBottom:"24px"}},n.a.createElement("figure",{className:"cards__item__pic-wrap"},n.a.createElement("img",{src:t.img,className:"card-img-top cards__item__img"})),n.a.createElement("div",{className:"card-body cards__item__info"},n.a.createElement("h5",{className:"card-title cards__item__text"},t.text),n.a.createElement("h5",{className:"card-title cards__item__text"},t.text1),n.a.createElement("h5",{className:"card-title cards__item__text"},t.text2),n.a.createElement("button",{onClick:function(){e.push("/services")},className:"btn1"},t.btn))))})),";"))))))};var ee=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i,null),n.a.createElement(Z,null),n.a.createElement(p,null))},te={dataMerc:[{img:"images/bm1.jpg",text:"BMW",text1:"BMW 6 Series Gran Turismo",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/bm2.jpg",text:"BMW",text1:"BMW 6 Series Gran Turismo",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/bm3.jpg",text:"BMW",text1:"BMW 6 Series Gran Turismo",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/bm4.jpg",text:"BMW",text1:"BMW 6 Series Gran Turismo",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/bm5.jpg",text:"BMW",text1:"BMW 6 Series Gran Turismo",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/bm6.jpg",text:"BMW",text1:"BMW 6 Series Gran Turismo",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/bm7.jpg",text:"BMW",text1:"BMW 6 Series Gran Turismo",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/bm8.jpg",text:"BMW",text1:"BMW 6 Series Gran Turismo",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/bm9.jpg",text:"BMW",text1:"BMW 6 Series Gran Turismo",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/bm10.jpg",text:"BMW",text1:"BMW 6 Series Gran Turismo",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/bm11.jpg",text:"BMW",text1:"BMW 6 Series Gran Turismo",text2:"00.00$",path:"/services",btn:"More Details"},{img:"images/bm12.jpg",text:"BMW",text1:"BMW 6 Series Gran Turismo",text2:"00.00$",path:"/services",btn:"More Details"}]},ae=function(){var e=Object(E.f)();return n.a.createElement("body",null,n.a.createElement("div",{className:"cards",style:{margin:"-5rem 0 0 0",padding:"2rem 0 0 0"}},n.a.createElement("div",{className:"cards__container"},n.a.createElement("div",{className:"cards__wrapper"},n.a.createElement("div",{className:"clickformore"},n.a.createElement("h1",{className:"cards__title"},"BMW")),n.a.createElement("section",{className:"py-4 container"},n.a.createElement("div",{className:"row justify-content-center"},te.dataMerc.map((function(t,a){return n.a.createElement("div",{className:"col-11 col-md-6 col-lg-3 mx-0 mb-5"},n.a.createElement("div",{className:"cards__item card p-0 overflow-hidden h-100 shadow",style:{background:"rgb(37, 37, 37)",flex:1,margin:"0 1rem",borderRadius:"10px",marginBottom:"24px"}},n.a.createElement("figure",{className:"cards__item__pic-wrap"},n.a.createElement("img",{src:t.img,className:"card-img-top cards__item__img"})),n.a.createElement("div",{className:"card-body cards__item__info"},n.a.createElement("h5",{className:"card-title cards__item__text"},t.text),n.a.createElement("h5",{className:"card-title cards__item__text"},t.text1),n.a.createElement("h5",{className:"card-title cards__item__text"},t.text2),n.a.createElement("button",{onClick:function(){e.push("/services")},className:"btn1"},t.btn))))})),";"))))))};var re=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i,null),n.a.createElement(ae,null),n.a.createElement(p,null))};a(129);var ne=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(E.c,null,n.a.createElement(E.a,{path:"/",exact:!0,component:x}),n.a.createElement(E.a,{path:"/services",component:w}),n.a.createElement(E.a,{path:"/products",component:k}),n.a.createElement(E.a,{path:"/sign-up",component:V}),n.a.createElement(E.a,{path:"/sign-in",component:Q}),n.a.createElement(E.a,{path:"/merc",component:ee}),n.a.createElement(E.a,{path:"/bmw",component:re}))))};s.a.render(n.a.createElement(ne,null),document.getElementById("root"))},39:function(e,t,a){},48:function(e,t,a){}},[[107,1,2]]]);
//# sourceMappingURL=main.7b6529a1.chunk.js.map
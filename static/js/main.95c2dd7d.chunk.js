(this["webpackJsonpzengo-challenge"]=this["webpackJsonpzengo-challenge"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var c,i,a,r,o=n(0),s=n.n(o),l=n(14),u=n.n(l),d=(n(73),n(39)),j=n(6),m=n(21),f=n.n(m),p=n(25),x=n(11),h=n(124),b=n(126),O=n(24),g=n(129),v=n(61),C=n.n(v),N=n(62),E=n.n(N),w=n(58),y=n.n(w),I=n(59),B=n.n(I),T=n(2),k=Object(h.a)({root:{margin:"5px",padding:"0px 10px",minWidth:"350px",backgroundColor:"#ffffff",color:"#222626",borderBottom:"1px solid #B7CBCB",display:"flex",flexDirection:"row",alignItems:"center"},imageIcon:{width:"40px"},currency:{color:"#62BEB7",fontSize:"1.5rem",fontWeight:500},icon:{color:"#B7CBCB",cursor:"pointer",marginLeft:"5px",width:"32px"},title:{display:"flex",flexDirection:"row",alignItems:"center",width:"40%"},info:{width:"60%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end"},up:{color:"#61ff61"},down:{color:"#ff6161"},clickable:{cursor:"pointer"}}),D=function(e){var t=e.coinInfo,n=e.setCoinsList,c=e.coinsList,i=e.index,a=k(),r=a.root,o=a.imageIcon,s=a.currency,l=a.clickable,u=a.icon,d=a.title,m=a.info,f=a.up,p=a.down,x=t.name,h=t.image,b=t.price,v=t.pinned,N=t.changePct24hour,w=Object(j.e)(),I=function(){w.push("/detail/".concat(x))},D=function(){var e=Object(O.a)(c),t=e[i];void 0!==t&&(t.pinned=!t.pinned,e[i]=t,n(e))};return Object(T.jsxs)("div",{className:r,children:[Object(T.jsxs)("section",{className:"".concat(d," ").concat(l),onClick:I,children:[Object(T.jsx)("img",{className:o,src:h,title:x}),Object(T.jsx)("h2",{children:x})]}),Object(T.jsxs)("section",{className:m,children:[Object(T.jsxs)("section",{className:l,onClick:I,children:[Object(T.jsx)("span",{children:void 0!==N&&N>0?Object(T.jsx)(y.a,{className:f}):Object(T.jsx)(B.a,{className:p})}),Object(T.jsxs)("span",{className:s,children:["$",b]})]}),v?Object(T.jsx)(g.a,{title:"Unpin from the top",children:Object(T.jsx)(C.a,{className:u,onClick:function(){return D()}})}):Object(T.jsx)(g.a,{title:"Pin to the top",children:Object(T.jsx)(E.a,{className:u,onClick:function(){return D()}})})]})]})},S=n(128);!function(e){e.LOADING="loading",e.COMPLETE="complete",e.ERROR="error"}(c||(c={})),function(e){e.PRICE="price",e.NAME="name"}(i||(i={})),function(e){e[e.WEEK=7]="WEEK",e[e.MONTH=30]="MONTH"}(a||(a={})),function(e){e.BTC="BTC",e.ETC="ETC",e.ETH="ETH",e.XRP="XRP",e.ADA="ADA",e.LTC="LTC",e.TFUEL="TFUEL"}(r||(r={}));n(84);var P=function(){return Object(T.jsx)("div",{className:"lds-dual-ring"})},A=n(127),L=n(47),R=n.n(L);function W(e){return M.apply(this,arguments)}function M(){return(M=Object(p.a)(f.a.mark((function e(t){var n,c,i,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.join(),c="https://min-api.cryptocompare.com/data/pricemultifull?fsyms=".concat(n,"&tsyms=USD"),e.prev=2,e.next=5,R()({url:c,method:"GET"});case 5:return i=e.sent,a=i.data,e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}function U(e){return F.apply(this,arguments)}function F(){return(F=Object(p.a)(f.a.mark((function e(t){var n,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://min-api.cryptocompare.com/data/blockchain/mining/calculator?fsyms=".concat(t,"&tsyms=USD"),e.prev=1,e.next=4,R()({url:n,method:"GET"});case 4:return c=e.sent,i=c.data,e.abrupt("return",i.Data);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var H=Object(h.a)({root:{backgroundColor:"#ffffff",minHeight:"100vh"},container:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center"},title:{color:"#62BEB7"}}),z=function(){var e=H(),t=e.container,n=e.root,c=e.title,a=Object(o.useState)([]),r=Object(x.a)(a,2),s=r[0],l=r[1],u=Object(o.useState)(i.NAME),d=Object(x.a)(u,2),j=d[0],m=d[1],h=Object(o.useState)(!0),O=Object(x.a)(h,2),g=O[0],v=O[1],C=["BTC","ETC","ETH","XRP","ADA","TFUEL"];Object(o.useEffect)((function(){(function(){var e=Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(C);case 2:t=e.sent,n=Object.values(t.RAW).map((function(e){return e.USD})).map((function(e){return{name:e.FROMSYMBOL,image:"https://www.cryptocompare.com".concat(e.IMAGEURL),price:e.PRICE,changePct24hour:e.CHANGEPCT24HOUR,pinned:!1}})),l(n),v(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(T.jsx)("div",{className:n,children:Object(T.jsxs)(b.a,{className:t,maxWidth:"sm",children:[Object(T.jsx)("h1",{className:c,children:"Cryptocurrency coins"}),g?Object(T.jsx)(P,{}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("section",{children:Object(T.jsxs)(A.a,{component:"label",container:!0,alignItems:"center",spacing:1,children:[Object(T.jsx)(A.a,{item:!0,children:"Price"}),Object(T.jsx)(A.a,{item:!0,children:Object(T.jsx)(S.a,{value:j,color:"default",defaultChecked:!0,onChange:function(){m((function(){return j===i.NAME?i.PRICE:i.NAME}))}})}),Object(T.jsx)(A.a,{item:!0,children:"Name"})]})}),null!=s&&s.sort((function(e,t){return e[j]<t[j]?-1:e[j]>t[j]?1:0})).sort((function(e,t){return e.pinned>t.pinned?-1:e.pinned<t.pinned?1:0})).map((function(e,t){return Object(T.jsx)(D,{index:t,coinInfo:e,setCoinsList:l,coinsList:s},t)}))]})]})})},K=n(63),G=n.n(K),X=Object(h.a)({root:{backgroundColor:"#ffffff",minWidth:"100wh",display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"20px",boxSizing:"border-box"},container:{width:"350px",padding:"10px",display:"flex",flexDirection:"column",alignItems:"flex-start",border:"1px solid #B7CBCB",borderRadius:"10px"},imageIcon:{width:"50px"},header:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},title:{fontSize:"20px",fontWeight:400},itemPrice:{fontSize:"32px",fontWeight:500,margin:0},percentage:{fontSize:"18px",margin:0,marginTop:"-5px",color:"#62BEB7"},info:{fontSize:"16px",margin:0},valueData:{marginBottom:"10px"},infoItem:{margin:"0 0 5px 0",color:"#959c9b"},menu:{display:"flex",flexDirection:"row",alignItems:"center",color:"#B7CBCB",width:"350px"},backIcon:{cursor:"pointer"},menuItem:{textAlign:"center"}}),J=function(){var e=Object(j.f)().coin,t=X(),n=t.root,c=t.menu,i=t.menuItem,r=t.backIcon,s=t.container,l=t.imageIcon,u=t.infoItem,d=t.valueData,m=t.header,h=t.title,b=t.itemPrice,O=t.percentage,v=t.info,C=Object(o.useState)(3124),N=Object(x.a)(C,2),E=N[0],w=(N[1],Object(o.useState)(a.WEEK)),y=Object(x.a)(w,2),I=y[0],B=y[1],k=Object(j.e)(),D=Object(o.useState)(),A=Object(x.a)(D,2),L=A[0],R=A[1],W=Object(o.useState)(!0),M=Object(x.a)(W,2),F=M[0],H=M[1];Object(o.useEffect)((function(){(function(){var e=Object(p.a)(f.a.mark((function e(t){var n,c,i,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(t);case 2:n=e.sent,c=n[t],i=c.CoinInfo,a=c.Price,r={name:i.Name,fullName:i.FullName,image:"https://www.cryptocompare.com".concat(i.ImageUrl),price:a.USD,creationDate:i.AssetLaunchDate,blocksNumber:i.BlockNumber,changePct24hour:1.2},R(r),H(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(e)}),[e]);return Object(T.jsx)("div",{className:n,children:F?Object(T.jsx)(P,{}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("section",{className:c,children:[Object(T.jsx)(G.a,{className:r,onClick:function(){return k.push("/")}}),Object(T.jsx)("h3",{className:i,children:"Information "})]}),Object(T.jsxs)("section",{className:s,children:[Object(T.jsxs)("section",{className:m,children:[Object(T.jsx)("img",{alt:"Coin icon from ".concat(null===L||void 0===L?void 0:L.name),className:l,src:null===L||void 0===L?void 0:L.image,title:null===L||void 0===L?void 0:L.name}),Object(T.jsxs)("h2",{className:h,children:[null===L||void 0===L?void 0:L.name,"/USD"]})]}),Object(T.jsxs)("section",{className:d,children:[Object(T.jsxs)("p",{className:b,children:["$",null===L||void 0===L?void 0:L.price]}),Object(T.jsxs)("p",{className:O,children:[void 0!=L&&(null===L||void 0===L?void 0:L.changePct24hour)>=0&&"+",null===L||void 0===L?void 0:L.changePct24hour,"% Today"]})]}),Object(T.jsxs)("section",{className:v,children:[Object(T.jsxs)("p",{className:u,children:["Creation date: ",null===L||void 0===L?void 0:L.creationDate]}),Object(T.jsxs)("p",{className:u,children:["Active blocks: ",null===L||void 0===L?void 0:L.blocksNumber]}),Object(T.jsxs)("p",{className:u,children:["Value from ",I," past days: ",E," "]}),Object(T.jsx)(g.a,{title:"Switch to past ".concat(I===a.WEEK?a.MONTH:a.WEEK," days"),children:Object(T.jsx)(S.a,{defaultChecked:!0,color:"default",value:I,onChange:function(){B((function(){return I===a.WEEK?a.MONTH:a.WEEK}))}})})]})]})]})})},$=function(){return Object(T.jsxs)(d.a,{children:[Object(T.jsx)(j.a,{path:"/",exact:!0,component:z}),Object(T.jsx)(j.a,{path:"/detail/:coin",component:J})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,131)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};u.a.render(Object(T.jsx)(s.a.StrictMode,{children:Object(T.jsx)($,{})}),document.getElementById("root")),V()},73:function(e,t,n){},84:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.95c2dd7d.chunk.js.map
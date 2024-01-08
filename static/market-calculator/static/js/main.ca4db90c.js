(()=>{"use strict";var t={2075:(t,e,n)=>{n.r(e);var r=n(4178),o=n(8149),l=(0,o.createSlice)({name:"settings",initialState:{theme:"dark",comma:".",currency:"$",fractionDigits:2,timer:5},reducers:{changeTheme:function(t,e){t.theme=e.payload},changeComma:function(t,e){t.comma=e.payload},changeCurrency:function(t,e){t.currency=e.payload},incrementFractionDigits:function(t){t.fractionDigits<10&&(t.fractionDigits+=1)},decrementFractionDigits:function(t){t.fractionDigits>1&&(t.fractionDigits-=1)},setFractionDigits:function(t,e){e.payload>=1&&e.payload<=10&&(t.fractionDigits=e.payload)},incrementTimer:function(t){t.timer+=1},decrementTimer:function(t){t.timer>1&&(t.timer-=1)},setTimerAmount:function(t,e){t.timer=e.payload}}}),i=l.actions,u=i.changeTheme,s=i.changeComma,a=i.changeCurrency,c=i.incrementFractionDigits,d=i.decrementFractionDigits,f=i.setFractionDigits,x=i.incrementTimer,g=i.decrementTimer,h=i.setTimerAmount;const y=l.reducer;var b=n(3970),p={key:"root",storage:n(519).default},m=(0,b.persistReducer)(p,y),j=(0,o.configureStore)({reducer:{settings:m},middleware:function(t){return t({serializableCheck:!1})}}),v=(0,b.persistStore)(j),T=n(4387),S=n(5222),B=n(925),C=n(9924),k=n(7881),w=n(4942),O=n(2982),P=n(885),D=n(5004),I=n(1054),R=n(3645),z=n(9385),E=n(5326),_=n(7602);const A={light:{tint:"#ff9500",background:"#f5f5f5",receiptBackground:"#f0f0f0",buttonBackground:"#fff",operatorButtonBackground:"#f0f0f0",textColor:"#333",progressBar:"#8BED4F"},dark:{tint:"#ff9500",background:"#1f1f1f",receiptBackground:"#202325",buttonBackground:"#181a1b",operatorButtonBackground:"#202325",textColor:"#fff",progressBar:"#8BED4F"}};function F(t){var e={flex:1,backgroundColor:A[t].background},n={flex:1,borderRadius:20,alignItems:"center",justifyContent:"center",backgroundColor:A[t].buttonBackground,margin:5},r={fontSize:34,color:A[t].textColor,textAlign:"center"},o={fontSize:32,color:A[t].tint},l={backgroundColor:A[t].operatorButtonBackground},i={color:A[t].tint},u={backgroundColor:A[t].tint},s={fontSize:32,color:A[t].textColor},a={backgroundColor:A[t].operatorButtonBackground},c={fontSize:24,color:A[t].textColor};return{safeContainer:e,container:{flex:1,margin:20,alignItems:"center",justifyContent:"center"},listContainer:{flex:1,width:"100%",height:100,backgroundColor:A[t].receiptBackground,borderRadius:20},listButton:{flex:1,borderRadius:20,alignItems:"center",justifyContent:"center",backgroundColor:A[t].buttonBackground,margin:5,maxHeight:75,maxWidth:75,aspectRatio:1},listItem:{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"center"},listText:{flex:1,fontSize:24,textAlign:"center",color:A[t].textColor},totalDisplay:{fontSize:34,color:A[t].textColor},displayContainer:{justifyContent:"flex-end",alignItems:"flex-end"},displayText:{fontSize:48,color:A[t].textColor},buttonContainer:{flex:3,width:"100%",height:"50%"},row:{flex:1,flexDirection:"row",justifyContent:"space-between",marginBottom:10},button:n,buttonText:r,settingsIcon:o,zeroButton:{flex:1},zeroButtonText:{marginLeft:10},operatorButton:l,operatorButtonText:i,equalButton:u,equalButtonText:s,clearButton:a,clearButtonText:c,animatedView:{backgroundColor:A[t].progressBar,position:"absolute",borderRadius:20,top:0,left:0,bottom:0,right:0},backButton:{margin:20,alignItems:"center",justifyContent:"center",height:10},textInput:{color:A[t].textColor,textAlign:"center",fontSize:30,width:100},settingsText:{fontSize:34,color:A[t].textColor,marginBottom:10},settingsDropdownText:{textAlign:"center",fontSize:20,color:A[t].textColor},settingsContainer:{flex:1,margin:20,alignItems:"center",justifyContent:"center",flexDirection:"column"},settingsRow:{flex:1,width:"100%",alignItems:"center",height:100},settingsInputRow:{flex:1,flexDirection:"row",alignItems:"center",marginBottom:10},changeButton:{flex:1,borderRadius:20,alignItems:"center",justifyContent:"center",backgroundColor:A[t].buttonBackground,maxHeight:75,maxWidth:75,minHeight:50,minWidth:50,aspectRatio:1},settingsBackIcon:{fontSize:32,color:A[t].tint},settingsBackButton:{flex:1,borderRadius:20,maxHeight:75,maxWidth:75,aspectRatio:1,alignItems:"center",justifyContent:"center",backgroundColor:A[t].buttonBackground,margin:5}}}var M=n(8352),N=n(6184),H=n(5637),L=n(694),W=n(1208),V=n(2629);function q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?q(Object(n),!0).forEach((function(e){(0,w.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var K={code:"function anonymous(){const{progressAnimRef,pressableWidth}=this._closure;return{width:progressAnimRef.value*pressableWidth};}",location:"D:\\Projects\\MarketCalculator\\screens\\Calculator.tsx"},$=function(t){var e=t.navigation,n=(0,T.useSelector)((function(t){return t.settings.timer})),r=(0,T.useSelector)((function(t){return t.settings.theme})),o=(0,T.useSelector)((function(t){return t.settings.comma})),l=(0,T.useSelector)((function(t){return t.settings.currency})),i=(0,T.useSelector)((function(t){return t.settings.fractionDigits})),u=F(r),s=(0,D.useRef)(n),a=(0,D.useState)(!1),c=(0,P.default)(a,2),d=c[0],f=c[1],x=(0,D.useState)(n),g=(0,P.default)(x,2),h=g[0],y=g[1],b=(0,D.useState)("0"),p=(0,P.default)(b,2),m=p[0],j=p[1],v=(0,D.useState)(0),S=(0,P.default)(v,2),B=S[0],C=S[1],k=(0,D.useState)(0),w=(0,P.default)(k,2),A=w[0],q=w[1],$=(0,D.useState)([]),U=(0,P.default)($,2),Y=U[0],Z=U[1],J=(0,D.useState)(0),Q=(0,P.default)(J,2),X=Q[0],tt=Q[1],et=(0,N.useSharedValue)(0),nt=function(){et.value=0,et.value=(0,H.withTiming)(1,{duration:1e3*n})},rt=function(){s.current=n,y(s.current),f(!1),et.value=0},ot=(0,L.useAnimatedStyle)(function(){var t=function(){return{width:et.value*X}};return t._closure={progressAnimRef:et,pressableWidth:X},t.__initData=K,t.__workletHash=0xa315485d3ba,t}()),lt=function(t){return t.toFixed(i).replace(".",o)},it=function(t){"0"===m?(j(t.toString()),0!==t&&(f(!0),nt())):(j(m+t.toString()),f(!0),nt(),s.current=n,y(s.current))},ut=function(){if("0"!==m){var t={id:A,price:parseFloat(m.replace(o,".")),count:1};Z([t].concat((0,O.default)(Y))),C(B+parseFloat(m.replace(o,"."))),q(A+1),st()}},st=function(){j("0"),rt()};(0,D.useEffect)((function(){var t=setInterval((function(){d?(s.current>=0&&(s.current-=1,y(s.current)),0==s.current&&("0"!==m&&(ut(),f(!1),s.current=n,y(s.current)),clearInterval(t))):clearInterval(t)}),1e3);return function(){clearInterval(t)}}),[d,m]),(0,D.useEffect)((function(){s.current=n,y(n)}),[n]);var at=(0,D.useCallback)((function(t,e,n){if(C(B-e),1===n)Z(Y.filter((function(e){return e.id!==t})));else{var r=Y.map((function(e){return e.id===t?G(G({},e),{},{count:n-1}):e}));Z(r)}}),[Y,B]),ct=(0,D.useCallback)((function(t,e,n){var r=Y.map((function(r){return r.id===t?(C(B+e),G(G({},r),{},{count:n+1})):r}));Z(r)}),[Y,B]),dt=(0,D.useMemo)((function(){return function(t){var e=t.id,n=t.price,r=t.count;return(0,V.jsxs)(z.default,{style:u.listItem,children:[(0,V.jsx)(E.default,{style:u.listButton,onPress:function(){return at(e,n,r)},children:(0,V.jsx)(I.default,{style:u.buttonText,children:"-"})}),(0,V.jsx)(I.default,{style:u.listText,children:lt(n)}),(0,V.jsxs)(I.default,{style:u.listText,children:["x",r]}),(0,V.jsx)(I.default,{style:u.listText,children:"="}),(0,V.jsx)(I.default,{style:u.listText,children:lt(n*r)}),(0,V.jsx)(E.default,{style:u.listButton,onPress:function(){return ct(e,n,r)},children:(0,V.jsx)(I.default,{style:u.buttonText,children:"+"})})]})}}),[Y,B]);return(0,V.jsx)(_.default,{style:u.safeContainer,children:(0,V.jsxs)(z.default,{style:u.container,children:[(0,V.jsx)(z.default,{style:{width:"100%",height:300,overflow:"hidden"},children:(0,V.jsx)(R.default,{style:u.listContainer,data:Y,renderItem:function(t){var e=t.item;return(0,V.jsx)(dt,{id:e.id,price:e.price,count:e.count})},scrollEnabled:!0,inverted:!0,keyExtractor:function(t){return t.id.toString()}})}),(0,V.jsx)((function(){return(0,V.jsxs)(I.default,{style:u.totalDisplay,children:["Total: ",l+" "+lt(B)]})}),{}),(0,V.jsx)(z.default,{style:u.displayContainer,children:(0,V.jsx)(I.default,{style:u.displayText,children:l+" "+m})}),(0,V.jsxs)(z.default,{style:u.buttonContainer,children:[(0,V.jsxs)(z.default,{style:u.row,children:[(0,V.jsx)(E.default,{style:u.button,onPress:function(){return it(7)},children:(0,V.jsx)(I.default,{style:u.buttonText,children:"7"})}),(0,V.jsx)(E.default,{style:u.button,onPress:function(){return it(8)},children:(0,V.jsx)(I.default,{style:u.buttonText,children:"8"})}),(0,V.jsx)(E.default,{style:u.button,onPress:function(){return it(9)},children:(0,V.jsx)(I.default,{style:u.buttonText,children:"9"})}),(0,V.jsx)(E.default,{style:[u.button,u.operatorButton],onPress:function(){"0"!==m&&(m.length>1?(j(m.substring(0,m.length-1)),nt(),s.current=n,y(s.current)):st())},children:(0,V.jsx)(I.default,{style:[u.buttonText,u.operatorButtonText],children:"<"})})]}),(0,V.jsxs)(z.default,{style:u.row,children:[(0,V.jsx)(E.default,{style:u.button,onPress:function(){return it(4)},children:(0,V.jsx)(I.default,{style:u.buttonText,children:"4"})}),(0,V.jsx)(E.default,{style:u.button,onPress:function(){return it(5)},children:(0,V.jsx)(I.default,{style:u.buttonText,children:"5"})}),(0,V.jsx)(E.default,{style:u.button,onPress:function(){return it(6)},children:(0,V.jsx)(I.default,{style:u.buttonText,children:"6"})}),(0,V.jsx)(E.default,{style:[u.button,u.operatorButton],onPress:st,children:(0,V.jsx)(I.default,{style:[u.buttonText,u.operatorButtonText],children:"CE"})})]}),(0,V.jsxs)(z.default,{style:u.row,children:[(0,V.jsx)(E.default,{style:u.button,onPress:function(){return it(1)},children:(0,V.jsx)(I.default,{style:u.buttonText,children:"1"})}),(0,V.jsx)(E.default,{style:u.button,onPress:function(){return it(2)},children:(0,V.jsx)(I.default,{style:u.buttonText,children:"2"})}),(0,V.jsx)(E.default,{style:u.button,onPress:function(){return it(3)},children:(0,V.jsx)(I.default,{style:u.buttonText,children:"3"})}),(0,V.jsx)(E.default,{style:[u.button,u.operatorButton],onPress:function(){C(0),Z([]),st()},children:(0,V.jsx)(I.default,{style:[u.buttonText,u.operatorButtonText],children:"C"})})]}),(0,V.jsxs)(z.default,{style:u.row,children:[(0,V.jsx)(E.default,{style:[u.button,u.operatorButton],onPress:function(){e.push("Settings")},children:(0,V.jsx)(M.default,{name:"md-settings",style:u.settingsIcon})}),(0,V.jsx)(E.default,{style:[u.button,u.zeroButton],onPress:function(){return it(0)},children:(0,V.jsx)(I.default,{style:[u.buttonText,u.zeroButtonText],children:"0"})}),(0,V.jsx)(E.default,{style:[u.button,u.operatorButton],onPress:function(){"0"!==m&&(nt(),s.current=n,y(s.current)),j(m+o)},children:(0,V.jsx)(I.default,{style:[u.buttonText,u.operatorButtonText],children:o})}),(0,V.jsx)(E.default,{style:[u.button,u.equalButton],onPress:ut,children:(0,V.jsx)(I.default,{style:u.equalButtonText,children:"+"})})]}),(0,V.jsxs)(E.default,{style:[u.button,u.clearButton],onLayout:function(t){tt(t.nativeEvent.layout.width)},onPress:rt,children:[(0,V.jsx)(W.default,{style:[u.animatedView,ot]}),(0,V.jsx)(I.default,{style:u.clearButtonText,children:"Cancel"}),(0,V.jsx)(I.default,{style:u.clearButtonText,children:d?h-1:""})]})]})]})})},U=n(5861),Y=n(6591),Z=n(8471);const J=[{label:"$ Dollar",value:"$"},{label:"\u20ac Euro",value:"\u20ac"},{label:"\xa3 Pound",value:"\xa3"},{label:"\xa5 Yuan",value:"\xa5"},{label:"\u20b9 Rupee",value:"\u20b9"},{label:"\u20ba Lira",value:"\u20ba"},{label:"\u20aa Shekel",value:"\u20aa"},{label:"\u20a9 Won",value:"\u20a9"},{label:"\u20b1 Peso",value:"\u20b1"},{label:"z\u0142 Zloty",value:"z\u0142"},{label:"\u0e3f Baht",value:"\u0e3f"},{label:"\u20ab Dong",value:"\u20ab"}];const Q=[{label:"Dark",value:"dark"},{label:"Light",value:"light"}];var X=n(7928),tt=function(t){var e=t.navigation,n=(0,T.useSelector)((function(t){return t.settings.theme})),r=(0,T.useSelector)((function(t){return t.settings.comma})),o=(0,T.useSelector)((function(t){return t.settings.currency})),l=(0,T.useSelector)((function(t){return t.settings.fractionDigits})),i=(0,T.useSelector)((function(t){return t.settings.timer})),y=(0,T.useDispatch)(),b=F(n),p=(0,D.useState)(!1),m=(0,P.default)(p,2),j=m[0],v=m[1],S=(0,D.useState)(!1),B=(0,P.default)(S,2),C=B[0],k=B[1],w=(0,D.useState)(!1),O=(0,P.default)(w,2),R=O[0],A=O[1],M=(0,D.useCallback)((function(){k(!1),A(!1)}),[]),N=(0,D.useCallback)((function(){v(!1),A(!1)}),[]),H=(0,D.useCallback)((function(){v(!1),k(!1)}),[]);return(0,V.jsx)(_.default,{style:b.safeContainer,children:(0,V.jsxs)(z.default,{style:b.settingsContainer,children:[(0,V.jsx)(E.default,{style:b.settingsBackButton,onPress:function(){e.goBack()},children:(0,V.jsx)(X.default,{name:"arrow-back",style:b.settingsBackIcon})}),(0,V.jsxs)(z.default,{style:[b.settingsRow,{zIndex:5}],children:[(0,V.jsx)(I.default,{style:b.settingsText,children:"Theme"}),(0,V.jsx)(Z.default,{textStyle:b.settingsDropdownText,open:C,onOpen:N,value:n,items:Q,setOpen:k,setValue:function(){},onSelectItem:function(){var t=(0,U.default)((function*(t){void 0!==t.value&&y(u(t.value.toString()))}));return function(e){return t.apply(this,arguments)}}(),theme:"light"===n?"LIGHT":"DARK"})]}),(0,V.jsxs)(z.default,{style:[b.settingsRow,{zIndex:4}],children:[(0,V.jsx)(I.default,{style:b.settingsText,children:"Decimal separator"}),(0,V.jsx)(Z.default,{textStyle:b.settingsDropdownText,open:R,onOpen:H,value:r,items:[{label:". Dot",value:"."},{label:", Comma",value:","}],setOpen:A,setValue:function(){},theme:"light"===n?"LIGHT":"DARK",onSelectItem:function(){var t=(0,U.default)((function*(t){void 0!==t.value&&y(s(t.value.toString()))}));return function(e){return t.apply(this,arguments)}}()})]}),(0,V.jsxs)(z.default,{style:[b.settingsRow,{zIndex:3}],children:[(0,V.jsx)(I.default,{style:b.settingsText,children:"Currency"}),(0,V.jsx)(Z.default,{textStyle:b.settingsDropdownText,open:j,onOpen:M,value:o,items:J,setOpen:v,setValue:function(){},theme:"light"===n?"LIGHT":"DARK",onSelectItem:function(){var t=(0,U.default)((function*(t){void 0!==t.value&&y(a(t.value.toString()))}));return function(e){return t.apply(this,arguments)}}(),searchable:!0})]}),(0,V.jsxs)(z.default,{style:[b.settingsRow,{zIndex:2}],children:[(0,V.jsx)(I.default,{style:b.settingsText,children:"Timer"}),(0,V.jsxs)(z.default,{style:b.settingsInputRow,children:[(0,V.jsx)(E.default,{style:b.changeButton,onPress:function(){i>1&&y(g())},children:(0,V.jsx)(I.default,{style:b.buttonText,children:"-"})}),(0,V.jsx)(Y.default,{value:i.toString(),style:b.textInput,onChangeText:function(){var t=(0,U.default)((function*(t){isNaN(Number(t))||"0"===t||y(h(Number(t)))}));return function(e){return t.apply(this,arguments)}}(),keyboardType:"numeric",inputMode:"numeric",maxLength:4,clearTextOnFocus:!0,textAlign:"center"}),(0,V.jsx)(E.default,{style:b.changeButton,onPress:function(){y(x())},children:(0,V.jsx)(I.default,{style:b.buttonText,children:"+"})})]})]}),(0,V.jsxs)(z.default,{style:[b.settingsRow,{zIndex:1}],children:[(0,V.jsx)(I.default,{style:b.settingsText,children:"Fraction digits"}),(0,V.jsxs)(z.default,{style:b.settingsInputRow,children:[(0,V.jsx)(E.default,{style:b.changeButton,onPress:function(){y(d())},children:(0,V.jsx)(I.default,{style:b.buttonText,children:"-"})}),(0,V.jsx)(Y.default,{value:l.toString(),style:b.textInput,onChangeText:function(){var t=(0,U.default)((function*(t){isNaN(Number(t))||"0"===t||y(f(Number(t)))}));return function(e){return t.apply(this,arguments)}}(),keyboardType:"numeric",inputMode:"numeric",maxLength:4,clearTextOnFocus:!0,textAlign:"center"}),(0,V.jsx)(E.default,{style:b.changeButton,onPress:function(){y(c())},children:(0,V.jsx)(I.default,{style:b.buttonText,children:"+"})})]})]})]})})},et=n(8584);function nt(){var t=(0,k.default)(),e=(0,T.useSelector)((function(t){return t.settings.theme}));return(0,V.jsx)(S.default,{theme:"dark"===e?B.default:C.default,children:(0,V.jsxs)(t.Navigator,{initialRouteName:"Home",children:[(0,V.jsx)(t.Screen,{name:"Home",component:$,options:{headerShown:!1,title:"Market Calculator"}}),(0,V.jsx)(t.Screen,{name:"Settings",component:tt,options:{headerShown:!1,title:"Settings | Market Calculator"}})]})})}n(6162).init({dsn:"https://94d928b7a1c5d0fa9963c8b6c58ff15c@o4506534835322880.ingest.sentry.io/4506534838534144",enableInExpoDevelopment:!1,debug:!1}),(0,r.default)((function(){return(0,V.jsx)(T.Provider,{store:j,children:(0,V.jsx)(et.PersistGate,{loading:null,persistor:v,children:(0,V.jsx)(nt,{})})})}))}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var l=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(l.exports,l,l.exports,n),l.loaded=!0,l.exports}n.m=t,(()=>{var t=[];n.O=(e,r,o,l)=>{if(!r){var i=1/0;for(c=0;c<t.length;c++){for(var[r,o,l]=t[c],u=!0,s=0;s<r.length;s++)(!1&l||i>=l)&&Object.keys(n.O).every((t=>n.O[t](r[s])))?r.splice(s--,1):(u=!1,l<i&&(i=l));if(u){t.splice(c--,1);var a=o();void 0!==a&&(e=a)}}return e}l=l||0;for(var c=t.length;c>0&&t[c-1][2]>l;c--)t[c]=t[c-1];t[c]=[r,o,l]}})(),n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},(()=>{var t,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var l=Object.create(null);n.r(l);var i={};t=t||[null,e({}),e([]),e(e)];for(var u=2&o&&r;"object"==typeof u&&!~t.indexOf(u);u=e(u))Object.getOwnPropertyNames(u).forEach((t=>i[t]=()=>r[t]));return i.default=()=>r,n.d(l,i),l}})(),n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}(),n.hmd=t=>((t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.p="/market-calculator/",(()=>{var t={179:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,l,[i,u,s]=r,a=0;if(i.some((e=>0!==t[e]))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var c=s(n)}for(e&&e(r);a<i.length;a++)l=i[a],n.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return n.O(c)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var r=n.O(void 0,[583],(()=>n(2075)));r=n.O(r)})();
//# sourceMappingURL=main.ca4db90c.js.map
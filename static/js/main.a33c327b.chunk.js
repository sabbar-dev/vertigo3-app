(window["webpackJsonpvertigo3-app"]=window["webpackJsonpvertigo3-app"]||[]).push([[0],{101:function(e,t,a){e.exports=a(138)},106:function(e,t,a){},130:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),c=a.n(s),o=(a(106),a(9)),i=a(7),l=a(10),p=a(11),m=a(12),u=a(50),d=a(30),g=a(6),h=a(23),v=a(51),f=(a(124),a(40)),E=a.n(f),b=(n.Component,a(53)),w=a.n(b);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(p.a)(t).call(this))).draw=function(){var t=e.state,a=(t.drag,t.rect),n=t.canvas.current.getContext("2d");n.lineWidth=3,n.strokeStyle="#FF0000",n.fillStyle="#FF0000";var r=a.startX>a.mouseStartX?a.startX-250:a.startX-180,s=a.startY>a.mouseStartY?a.startY-50:a.startY-5;n.strokeRect(r,s,a.width,a.height),console.log(n)},e.clearCanvas=function(t){var a=e.state,n=a.canvas;a.rect;e.setState({drag:!1,rect:{}}),n.current.getContext("2d").clearRect(0,0,n.current.width,n.current.height),setTimeout((function(){return e.draw()}),300)},e.showRipple=function(t){if(t.preventDefault(),0===t.button){var a=t.currentTarget,n=a.offsetWidth,r=a.getBoundingClientRect(),s=t.pageX-r.x-n/2,c={top:t.pageY-r.y-n/2+"px",left:s+"px",height:n+"px",width:n+"px"},o=e.state.count+1;e.setState({spanStyles:S({},e.state.spanStyles,Object(g.a)({},o,c)),count:o}),e.props.showVideoControls()}},e.renderRippleSpan=function(){var t=e.state,a=(t.showRipple,t.spanStyles),n=void 0===a?{}:a,s=Object.keys(n);return s&&s.length>0?s.map((function(e,t){return r.a.createElement("span",{key:"spanCount_"+t,className:"",style:S({},n[e])})})):null},e.callCleanUp=function(t,a){var n=e.state.bounce;clearTimeout(n),e.setState({bounce:setTimeout((function(){return t()}),a)})},e.cleanUp=function(){e.setState({spanStyles:{},count:0})},e.state={name:"React",selectionArea:r.a.createRef(),canvas:r.a.createRef(),ripples:r.a.createRef(),rect:{},drag:!1,spanStyles:{},count:0},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.selectionArea.current,a=t.offsetWidth,n=t.offsetHeight;this.setState({offsetWidth:a,offsetHeight:n}),this.mc=new w.a(this.state.selectionArea.current),this.mc.get("pan").set({direction:w.a.DIRECTION_HORIZONTAL}),this.mc.on("press",(function(t){if(console.log(t.type+" gesture detected."),"press"===t.type){var a=t.srcEvent,n=e.state.selectionArea.current,r=n.offsetLeft,s=n.offsetTop;e.setState({rect:{mouseStartX:a.pageX-r,mouseStartY:a.pageY-s,startX:a.pageX-r,startY:a.pageY-s},drag:!0}),e.props.handleVideoPlayer.pause()}})),this.mc.on("panleft panright panup pandown panend pancancel pressup tap",(function(t){console.log(t.type+" gesture detected.");var a=e.state,n=a.drag,r=a.rect,s=a.canvas,c=t.srcEvent,o=e.state.selectionArea.current,i=o.offsetLeft,l=o.offsetTop;if("tap"===t.type||"pressup"===t.type||"pancancel"===t.type||"panend"===t.type){if(n){var p=r.startX>r.mouseStartX?r.width-100:r.width+100,m=r.startY>r.mouseStartY?r.height-100:r.height+100;r.startX>r.mouseStartX?r.startX:r.startX,r.startY>r.mouseStartY?r.startY:r.startY;e.setState({rect:S({},r,{width:p,height:m}),drag:!1}),s.current.getContext("2d").clearRect(0,0,s.current.width,s.current.height),e.draw()}return e.props.getSelectionValue(t.type,r)}if(n){var u=r.mouseStartX-(c.pageX-i),d=r.mouseStartY-(c.pageY-l);console.log(u,d,c),e.setState({rect:S({},r,{startX:r.mouseStartX-u,startY:r.mouseStartY-d,width:2*u,height:2*d})}),s.current.getContext("2d").clearRect(0,0,s.current.width,s.current.height),e.draw()}}))}},{key:"componentWillUnmount",value:function(){this.mc.destroy()}},{key:"render",value:function(){var e=this,t=this.state,a=t.drag,n=(t.rect,t.offsetWidth),s=t.offsetHeight,c=this.props,o=c.children,i=void 0===o?null:o,l=c.classes,p=void 0===l?"":l;c.onClickHandler;return r.a.createElement("div",{ref:this.state.selectionArea,className:"ripple "+p,onContextMenu:function(e){return e.preventDefault(),!1}},i,r.a.createElement("canvas",{id:"canvas",className:"selection-area",ref:this.state.canvas,width:n,height:s,style:a?{border:"4px solid green"}:{},onContextMenu:function(e){return e.preventDefault(),!1}}),r.a.createElement("div",{className:"rippleContainer",onMouseDown:this.showRipple,onMouseUp:function(){return e.callCleanUp(e.cleanUp,2e3)},onContextMenu:function(e){return e.preventDefault(),!1}},this.renderRippleSpan()))}}]),t}(n.Component),P=a(88),x=a(41),j=a(42),k=a(89),M=a.n(k);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}r.a.Component;var D=a(21),R=a(35),T=a.n(R),Y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={path:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.map=T.a.map("map").setView([-16.886647,139.05126],12),T.a.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:20}).addTo(this.map),this.layer=T.a.layerGroup().addTo(this.map),this.updateMarkers(this.props.markersData);for(var t=[[-16.885394,139.053434],[-16.872355,139.048864],[-16.861054,139.052021],[-16.85818,139.06477],[-16.863576,139.069434],[-16.863876,139.079434],[-16.864976,139.079999]],a=function(a){setTimeout((function(){e.setState({path:[].concat(Object(D.a)(e.state.path),[t[a]])})}),3e3*a)},n=0;n<t.length;n++)a(n)}},{key:"componentDidUpdate",value:function(e,t){t.path!==this.state.path&&this.updatePath()}},{key:"updateMarkers",value:function(e){var t=this;this.layer.clearLayers(),e.forEach((function(e){T.a.marker(e.latLng,{title:e.title}).addTo(t.layer)}))}},{key:"updatePath",value:function(){this.layer.clearLayers(),new(T.a.Polyline.extend({options:{speed:"",bearing:""}}))(this.state.path,{speed:"143",bearing:"38"}).addTo(this.map)}},{key:"render",value:function(){return r.a.createElement("div",{id:"map",style:{width:"100%",height:this.props.mapHeight+"px"}})}}]),t}(r.a.Component),B=(r.a.Component,a(25)),N=a(90),X=a.n(N),H=a(91),U=a.n(H);function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var V=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={boatToGliderPosition:{startPoint:{x:16.4257555847569,y:10.512483574244415},controlPoint:{x:175,y:7},endPoint:{x:231,y:89.5}},draggingPointKeys:null,vSliderPosition:{startPoint:{x:1,y:22.3},endPoint:{x:1,y:82.7}},hSliderPosition:{startPoint:{x:120,y:160},endPoint:{x:120,y:160}}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleMouseDown",value:function(e){this.setState({draggingPointKeys:e})}},{key:"handleMouseUp",value:function(){this.setState({draggingPointKeys:null}),document.documentElement.style.overflow="auto"}},{key:"handleMouseMove",value:function(e,t){e.stopPropagation();var a=0,n=0;"mouseMove"===t&&(a=e.clientX,n=e.clientY),"touchMove"===t&&(a=e.touches[0].clientX,n=e.touches[0].clientY);var r=this.props,s=r.viewBoxWidth,c=r.viewBoxHeight,o=this.state.draggingPointKeys;if(o){document.documentElement.style.overflow="hidden";var i=this.node.getBoundingClientRect(),l=a-i.left,p=n-i.top,m=l*s/i.width,u=p*c/i.height,d=o.split("."),h=Object(B.a)(d,2),v=h[0],f=h[1];return"boatToGliderPosition"===v&&this.setState(Object(g.a)({},v,W({},this.state[v],Object(g.a)({},f,{x:m,y:u})))),"vSliderPosition"===v&&u>0&&u<150&&this.setState(Object(g.a)({},v,W({},this.state[v],Object(g.a)({},f,W({},this.state[v][f],{y:u}))))),"hSliderPosition"===v&&m>0&&m<230&&this.setState(Object(g.a)({},v,W({},this.state[v],Object(g.a)({},f,W({},this.state[v][f],{x:m}))))),!1}}},{key:"render",value:function(){var e=this,t=this.props,a=t.viewBoxWidth,n=t.viewBoxHeight,s=t.activeMode,c=this.state,o=c.boatToGliderPosition,i=c.vSliderPosition,l=c.hSliderPosition,p=c.draggingPointKeys,m="\n      M ".concat(o.startPoint.x,",").concat(o.startPoint.y,"\n      Q ").concat(o.controlPoint.x,",").concat(o.controlPoint.y,"\n        ").concat(o.endPoint.x,",").concat(o.endPoint.y,"\n    ");return r.a.createElement("svg",{ref:function(t){return e.node=t},viewBox:"0 0 ".concat(a," ").concat(n),onMouseMove:function(t){return p&&e.handleMouseMove(t,"mouseMove")},onTouchMove:function(t){return p&&e.handleMouseMove(t,"touchMove")},onMouseUp:function(){return p&&e.handleMouseUp()},onTouchEnd:function(){return p&&e.handleMouseUp()},onMouseLeave:function(){return p&&e.handleMouseUp()},onTouchCancel:function(){return p&&e.handleMouseUp()},style:{overflow:"visible"}},r.a.createElement("rect",{width:a,height:"15",fill:"rgb(33, 185, 245)",className:"sky"}),r.a.createElement("g",{className:"boat-glider-bezier"},r.a.createElement(Q,{instructions:m}),r.a.createElement(I,{coordinates:o.startPoint}),r.a.createElement(L,{coordinates:o.controlPoint,onMouseDown:function(){return e.handleMouseDown("boatToGliderPosition.controlPoint")}}),r.a.createElement(K,{coordinates:o.endPoint,onMouseDown:function(){return e.handleMouseDown("boatToGliderPosition.endPoint")}})),"manual"!==s&&r.a.createElement("g",{className:"verticle-slider"},"surFace"===s?r.a.createElement(F,{coordinates:i.startPoint,mode:s,onMouseDown:function(){return e.handleMouseDown("vSliderPosition.startPoint")}}):r.a.createElement(J,{coordinates:i.startPoint}),r.a.createElement(Z,{from:i.startPoint,to:i.endPoint}),"seaBed"===s?r.a.createElement(F,{mode:s,coordinates:i.endPoint,onMouseDown:function(){return e.handleMouseDown("vSliderPosition.endPoint")}}):r.a.createElement(J,{coordinates:i.endPoint})),r.a.createElement("g",{className:"horizontal-slider"},r.a.createElement(F,{coordinates:l.startPoint,mode:"manual",onMouseDown:function(){return"manual"===s&&e.handleMouseDown("hSliderPosition.startPoint")}})))}}]),t}(r.a.PureComponent),Z=function(e){var t=e.from,a=e.to;return r.a.createElement("line",{x1:t.x,y1:t.y+20,x2:a.x,y2:a.y+20,stroke:"rgb(255, 0, 0)",strokeWidth:2})},Q=function(e){var t=e.instructions;return r.a.createElement("path",{d:t,fill:"none",stroke:"rgb(255, 0, 0)",strokeWidth:2})},I=function(e){var t=e.coordinates;e.onMouseDown;return r.a.createElement("image",{xlinkHref:X.a,height:"15",width:"15",x:t.x-10,y:t.y-10})},K=function(e){var t=e.coordinates,a=e.onMouseDown;return r.a.createElement("image",{xlinkHref:U.a,height:"20",width:"20",x:t.x-10,y:t.y-10,onMouseDown:a,onTouchStart:a,style:{cursor:"-webkit-grab"}})},L=function(e){var t=e.coordinates,a=e.onMouseDown;return r.a.createElement("ellipse",{cx:t.x,cy:t.y,rx:3,ry:3,fill:"rgb(255, 255, 255, 0.60)",stroke:"rgb(244, 0, 137, 0.60)",strokeWidth:2,onMouseDown:a,onTouchStart:a,style:{cursor:"-webkit-grab"}})},J=function(e){var t=e.coordinates;return r.a.createElement("ellipse",{transform:"translate(0 18.25)",cx:t.x,cy:t.y,rx:3,ry:3,fill:"rgb(244, 0, 0)"})},F=function(e){var t=e.coordinates,a=e.onMouseDown,n=e.mode,s=t.x,c=t.y;return r.a.createElement(r.a.Fragment,null,r.a.createElement("g",{style:{cursor:"-webkit-grab"},transform:"translate(".concat("manual"===n?s:-2," ").concat(c-3,")"),onMouseDown:a,onTouchStart:a},"manual"===n?r.a.createElement("polygon",{fill:"rgb(244, 0, 0)",points:"6.04 0 6.04 13 15.82 13 7.42 17.73 5.35 18.78 3.54 16.96 0 20.5 3.54 24.04 7.07 20.5 5.38 18.81 7.51 18.24 27.77 13 47.04 13 47.04 0 6.04 0"}):r.a.createElement("path",{fill:"rgb(244, 0, 0)",d:"M7.5,0V13h9.79L5.89,18.74A3,3,0,1,0,6,19.5a2.3,2.3,0,0,0,0-.26L29.23,13H48.5V0Z"}),r.a.createElement("text",{transform:"translate(10 10.25)",style:{pointerEvents:"none",userSelect:"none",fontSize:"10px",fontWeight:"500"}},"".concat(Math.round("manual"===n?s:100*c)/100,"m"))),"manual"===n&&r.a.createElement("rect",{x:"1.35",y:"1.35",width:"6.66",height:"6.66",transform:"translate(117 177.5) rotate(-45)",stroke:"rgb(244, 0, 0)",fill:"rgb(0, 0, 0, 0)"}))},G=a(161),q=a(8),_=a(167);Object(G.a)({root:{width:500}});Object(q.a)({root:{color:"#cd0909"},thumb:{height:18,width:18,top:5},active:{},valueLabel:{left:"calc(-50% + 4px)",fontSize:14,top:-35},track:{height:2,borderRadius:4,backgroundColor:"transparent"},rail:{height:2,borderRadius:4,backgroundColor:"transparent"}})(_.a);Object(G.a)({root:{height:"295px",position:"absolute",bottom:"40px"}});Object(q.a)({root:{height:300,color:"#cd0909"},active:{},valueLabel:{transform:"rotate(90deg) !important",left:"calc(-50% + 14px)",top:"calc(-50% + -21px)",fontSize:14},track:{height:2,borderRadius:4},rail:{height:2,borderRadius:4,backgroundColor:"transparent"}})(_.a);r.a.Component,a(162),a(92),Object(G.a)((function(e){return{fab:{zIndex:1e3,right:10,position:"fixed"}}}));a(164),a(165),a(163),a(94),a(93),Object(G.a)((function(e){return{close:{padding:e.spacing(.5)}}}));a(130);var $=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={expandFrame:!1,expandSonar:!1,expandMap:!1,activeMode:"surFace",hidePopup:!1,percentBarMenu:!1,dataSelection:""},a.showNotification=function(e,t){var n={showBar:!0,msg:e,duration:t};a.setState({notification:n}),setTimeout((function(){return a.setState({notification:{}})}),t||2e3)},a.closeNotification=function(){a.setState({notification:{}})},a.setDataSelection=function(e){a.state.dataSelection===e?a.setState({dataSelection:"",percentBarMenu:!1}):a.setState({dataSelection:e,percentBarMenu:!0})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=(t.notification,t.expandMap,t.expandSonar,t.activeMode,t.hidePopup),n=t.percentBarMenu,s=t.dataSelection;return r.a.createElement("div",{class:"main-container"},r.a.createElement("div",{className:"dev-mode-version",onClick:function(){return document.location.reload(!0)}},"v0.0.4"),r.a.createElement("div",{class:"top-sec"},r.a.createElement("div",{class:"left-sidebar"},r.a.createElement("div",{class:"nav-wrapper"},r.a.createElement("div",{class:"dr-btn btn-half nav-btn-bg-1 btn-l"},"Surface"),r.a.createElement("div",{class:"dr-btn btn-half bg-olive-dark btn-r"},"Seabed"),r.a.createElement("div",{class:"dr-btn btn-full nav-btn-bg-2"},"manual",r.a.createElement("span",null,r.a.createElement("img",{src:"images/remote.png",class:"remote-icon"})))),r.a.createElement("div",{class:"state-wrapper bg-olive-light"},r.a.createElement("div",{class:"state-labels"},r.a.createElement("span",{class:"state-title"},"Depth"),r.a.createElement("span",{class:"state-value"},"24.1 m")),r.a.createElement("div",{class:"state-labels"},r.a.createElement("span",{class:"state-title"},"Speed"),r.a.createElement("span",{class:"state-value"},"1.96 kts")),r.a.createElement("div",{class:"state-labels"},r.a.createElement("span",{class:"state-title"},"G.Depth"),r.a.createElement("span",{class:"state-value"},"24.1 m")),r.a.createElement("div",{class:"state-labels"},r.a.createElement("span",{class:"state-title"},"G.Attitude"),r.a.createElement("span",{class:"state-value"},"25.2 m")),r.a.createElement("div",{class:"state-labels"},r.a.createElement("span",{class:"state-title"},"G.Speed"),r.a.createElement("span",{class:"state-value"},"1.96 kts")),r.a.createElement("div",{class:"state-labels"},r.a.createElement("span",{class:"state-title",style:{fontSize:16}},"Image qual"),r.a.createElement("span",{class:"red-text",style:{display:"block"}},"focus"),r.a.createElement("span",{class:"green-text"},"Exposure")),r.a.createElement("div",{class:"state-labels"},r.a.createElement("span",{class:"state-title"},"Time"),r.a.createElement("span",{class:"state-value"},"4:07:03")),r.a.createElement("div",{class:"state-labels"},r.a.createElement("span",{class:"state-title"},"Distance"),r.a.createElement("span",{class:"state-value"},"18.3 km"))),r.a.createElement("div",{class:"info-wrapper bg-olive-dark"},r.a.createElement("span",{class:"info-text"},r.a.createElement("div",{class:"info-inner-wrapper"},r.a.createElement("span",{class:"info-label"},"Coral cover"),r.a.createElement("span",{class:"info-value"},"23%")),r.a.createElement("div",{class:"info-inner-wrapper"},r.a.createElement("span",{class:"info-label"},"Starfish"),r.a.createElement("span",{class:"info-value"},"1076")),r.a.createElement("div",{class:"info-inner-wrapper"},r.a.createElement("span",{class:"info-label"},"Seagrass"),r.a.createElement("span",{class:"info-value"},"3%")),r.a.createElement("div",{class:"info-inner-wrapper"},r.a.createElement("span",{class:"info-label"},"Sand"),r.a.createElement("span",{class:"info-value"},"36%"))))),r.a.createElement("div",{class:"main-video-wrapper"},r.a.createElement("div",{class:"main-wrapper"},r.a.createElement("img",{class:"main-img",src:"images/Rectangle 130.png"})),r.a.createElement("div",{class:"video-controller-wrapper"},r.a.createElement("span",{class:"video-icon-wrapper record-icon-wrapper"},r.a.createElement("img",{src:"images/record-icon.svg",class:"video-icon record-icon"})),r.a.createElement("span",{class:"video-icon-wrapper pause-icon-wrapper"},r.a.createElement("img",{src:"images/pause-icon.svg",class:"video-icon pause-icon"})),r.a.createElement("span",{class:"video-icon-wrapper setting-icon-wrapper"},r.a.createElement("img",{src:"images/setting-icon.svg",class:"video-icon setting-icon"})))),r.a.createElement("div",{class:"right-sidebar"},r.a.createElement("div",{class:"map-wrapper"},r.a.createElement("img",{class:"map-img",src:"images/right-sideImg.png"}),r.a.createElement("div",{class:"map-controller-wrapper"},r.a.createElement("span",{class:"map-icon-wrap sizing-icon-wrapper"},r.a.createElement("img",{src:"images/sizing-icon.svg",class:"map-icon sizing-icon"})),r.a.createElement("span",{class:"map-icon-wrap zoom-icon-wrapper"},r.a.createElement("img",{src:"images/zoom-icon.svg",class:"map-icon zoom-icon"})))),r.a.createElement("div",{class:"sonar-wrapper"},r.a.createElement("img",{class:"sonar-img",src:"images/right-sideImg1.png"}),r.a.createElement("div",{class:"sonar-controller-wrapper"},r.a.createElement("span",{class:"sonar-icon-wrap empty-icon-wrapper"},r.a.createElement("img",{src:"images/zoming-icon.svg",class:"sonar-icon empty-icon"})),r.a.createElement("span",{class:"sonar-icon-wrap loop-icon-wrapper"},r.a.createElement("img",{src:"images/loop-icon.svg",class:"sonar-icon loop-icon"})),r.a.createElement("span",{class:"sonar-icon-wrap sizing-icon-wrapper"},r.a.createElement("img",{src:"images/sizing-icon.svg",class:"sonar-icon sizing-icon"})))))),r.a.createElement("div",{class:"bottom-sec"},r.a.createElement("div",{class:"data-wrapper"},r.a.createElement("div",{class:"data-inner-wrap"},r.a.createElement("div",{class:"data-item border-brown bg-brown ".concat("ho"===s?"active":""),onClick:function(){return e.setDataSelection("ho")}},r.a.createElement("img",{class:"data-img",src:"images/Picture10.png"}),r.a.createElement("span",{class:"data-label"},"Ho"),r.a.createElement("span",{class:"play-icon-wrap"},r.a.createElement("img",{class:"play-icon",src:"images/play-small-icon.svg"}))),r.a.createElement("div",{class:"data-item border-violet bg-violet ".concat("hs"===s?"active":""),onClick:function(){return e.setDataSelection("hs")}},r.a.createElement("img",{class:"data-img",src:"images/Picture11.png"}),r.a.createElement("span",{class:"data-label"},"Hs"),r.a.createElement("span",{class:"play-icon-wrap"},r.a.createElement("img",{class:"play-icon",src:"images/play-small-icon.svg"})))),r.a.createElement("div",{class:"data-inner-wrap"},r.a.createElement("div",{class:"data-item border-blue-d bg-blue-d ".concat("cs"===s?"active":""),onClick:function(){return e.setDataSelection("cs")}},r.a.createElement("img",{class:"data-img",src:"images/Picture12.png"}),r.a.createElement("span",{class:"data-label"},"Cs"),r.a.createElement("span",{class:"play-icon-wrap"},r.a.createElement("img",{class:"play-icon",src:"images/play-small-icon.svg"}))),r.a.createElement("div",{class:"data-item border-blue-l bg-blue-l ".concat("si"===s?"active":""),onClick:function(){return e.setDataSelection("si")}},r.a.createElement("img",{class:"data-img",src:"images/Picture13.png"}),r.a.createElement("span",{class:"data-label"},"Si"),r.a.createElement("span",{class:"play-icon-wrap"},r.a.createElement("img",{class:"play-icon",src:"images/play-small-icon.svg"})))),r.a.createElement("div",{class:"data-inner-wrap"},r.a.createElement("div",{class:"data-item border-yellow-l bg-yellow-l ".concat("zm"===s?"active":""),onClick:function(){return e.setDataSelection("zm")}},r.a.createElement("img",{class:"data-img",src:"images/Picture14.png"}),r.a.createElement("span",{class:"data-label"},"Zm"),r.a.createElement("span",{class:"play-icon-wrap"},r.a.createElement("img",{class:"play-icon",src:"images/play-small-icon.svg"}))),r.a.createElement("div",{class:"data-item border-yellow-d bg-yellow-d ".concat("hd"===s?"active":""),onClick:function(){return e.setDataSelection("hd")}},r.a.createElement("img",{class:"data-img",src:"images/Picture15.png"}),r.a.createElement("span",{class:"data-label"},"Hd"),r.a.createElement("span",{class:"play-icon-wrap"},r.a.createElement("img",{class:"play-icon",src:"images/play-small-icon.svg"})))),r.a.createElement("div",{class:"data-inner-wrap data-inner-wrap_lg"},r.a.createElement("div",{class:"data-item border-orange bg-orange ".concat("hu"===s?"active":""),onClick:function(){return e.setDataSelection("hu")}},r.a.createElement("img",{class:"data-img",src:"images/Picture16.png"}),r.a.createElement("span",{class:"data-label"},"Hu"),r.a.createElement("span",{class:"play-icon-wrap"},r.a.createElement("img",{class:"play-icon",src:"images/play-small-icon.svg"}))),r.a.createElement("div",{class:"dr-pagination-wrapper"},r.a.createElement("ul",{class:"dr-pagination"},r.a.createElement("li",{class:"first-item dr-pagination-item"},r.a.createElement("a",{href:"#"},"Starfish")),r.a.createElement("li",{class:"second-item dr-pagination-item"},r.a.createElement("a",{href:"#"},"1")),r.a.createElement("li",{class:"third-item dr-pagination-item"},r.a.createElement("a",{href:"#"},"2")),r.a.createElement("li",{class:"fourth-item dr-pagination-item"},r.a.createElement("a",{href:"#"},"5")),r.a.createElement("li",{class:"fifth-item dr-pagination-item"},r.a.createElement("a",{href:"#"},"10"))))),n&&r.a.createElement("div",{class:"percentage-bar-wrapper",onClick:function(){return e.setState({percentBarMenu:!1,dataSelection:""})}},r.a.createElement("span",{class:"percentage-bar-item"},"0%"),r.a.createElement("span",{class:"percentage-bar-item"},"2%"),r.a.createElement("span",{class:"percentage-bar-item"},"10%"),r.a.createElement("span",{class:"percentage-bar-item"},"20%"),r.a.createElement("span",{class:"percentage-bar-item"},"30%"),r.a.createElement("span",{class:"percentage-bar-item"},"40%"),r.a.createElement("span",{class:"percentage-bar-item"},"50%"),r.a.createElement("span",{class:"percentage-bar-item"},"60%"),r.a.createElement("span",{class:"percentage-bar-item"},"70%"),r.a.createElement("span",{class:"percentage-bar-item"},"80%"),r.a.createElement("span",{class:"percentage-bar-item"},"90%"),r.a.createElement("span",{class:"percentage-bar-item"},"100%")))),!a&&r.a.createElement("div",{class:"popup-layer"},r.a.createElement("div",{class:"dr-popup-wrapper"},r.a.createElement("span",{class:"dr-close-btn",onClick:function(){return e.setState({hidePopup:!0})}},r.a.createElement("img",{src:"images/close-icon.svg",class:"close-icon"})),r.a.createElement("span",{class:"dr-popup-label"},"Training set:"),r.a.createElement("div",{class:"dr-popup-inner-wrap"},r.a.createElement("div",{class:"popup-item"},r.a.createElement("div",{class:"popup-img-wrapper"},r.a.createElement("img",{src:"images/Picture3.png",class:"popup-img"})),r.a.createElement("span",{class:"popup-label bg-red-l"},r.a.createElement("span",{class:"popup-text"},"Halophila Ovalis"))),r.a.createElement("div",{class:"popup-item"},r.a.createElement("div",{class:"popup-img-wrapper"},r.a.createElement("img",{src:"images/Picture4.png",class:"popup-img"})),r.a.createElement("span",{class:"popup-label bg-green"},r.a.createElement("span",{class:"popup-text"},"Cymodocea Serrulata"))),r.a.createElement("div",{class:"popup-item"},r.a.createElement("div",{class:"popup-img-wrapper"},r.a.createElement("img",{src:"images/Picture5.png",class:"popup-img"})),r.a.createElement("span",{class:"popup-label bg-yellow"},r.a.createElement("span",{class:"popup-text"},"Zostera Muelleri"))),r.a.createElement("div",{class:"popup-item"},r.a.createElement("div",{class:"popup-img-wrapper"},r.a.createElement("img",{src:"images/Picture6.png",class:"popup-img"})),r.a.createElement("span",{class:"popup-label bg-blue-d"},r.a.createElement("span",{class:"popup-text"},"Halodule Uninervis"))),r.a.createElement("div",{class:"popup-item"},r.a.createElement("div",{class:"popup-img-wrapper"},r.a.createElement("img",{src:"images/Picture7.png",class:"popup-img"})),r.a.createElement("span",{class:"popup-label bg-orange"},r.a.createElement("span",{class:"popup-text"},"Halophila Spinulosa"))),r.a.createElement("div",{class:"popup-item"},r.a.createElement("div",{class:"popup-img-wrapper"},r.a.createElement("img",{src:"images/Picture8.png",class:"popup-img"})),r.a.createElement("span",{class:"popup-label bg-violet"},r.a.createElement("span",{class:"popup-text"},"Syringodium cordifolia"))),r.a.createElement("div",{class:"popup-item"},r.a.createElement("div",{class:"popup-img-wrapper"},r.a.createElement("img",{src:"images/Picture9.png",class:"popup-img"})),r.a.createElement("span",{class:"popup-label bg-blue-l"},r.a.createElement("span",{class:"popup-text"},"Halophila Decipiens"))),r.a.createElement("div",{class:"popup-item"},r.a.createElement("div",{class:"popup-img-wrapper"}),r.a.createElement("span",{class:"popup-label"})),r.a.createElement("div",{class:"popup-item"},r.a.createElement("div",{class:"popup-img-wrapper"}),r.a.createElement("span",{class:"popup-label"})),r.a.createElement("div",{class:"popup-item"},r.a.createElement("div",{class:"popup-img-wrapper"},r.a.createElement("img",{src:"images/Picture17.png",class:"popup-img"})),r.a.createElement("span",{class:"popup-label bg-pink"},r.a.createElement("span",{class:"popup-text"},"Pentaceraster mammillatus"))),r.a.createElement("div",{class:"popup-item"},r.a.createElement("div",{class:"popup-img-wrapper"}),r.a.createElement("span",{class:"popup-label"})),r.a.createElement("div",{class:"popup-item"},r.a.createElement("div",{class:"popup-img-wrapper"},r.a.createElement("img",{src:"images/question.png",class:"popup-img"})),r.a.createElement("span",{class:"popup-label bg-red-d"},r.a.createElement("span",{class:"popup-text"},"Unkonw")))))))}}]),t}(r.a.Component),ee=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",render:function(){return r.a.createElement(d.a,{to:"/dashboard"})}}),r.a.createElement(d.b,{path:"/dashboard",render:function(){return r.a.createElement($,e.props)}}))}}]),t}(n.Component),te=Object(d.g)(ee),ae=a(96),ne=a.n(ae),re=(a(135),a(136),a(137),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).enableNoSleep=function(e){try{(new ne.a).enable(),document.removeEventListener("touchstart",a.enableNoSleep,!1)}catch(t){console.log(t)}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("touchstart",this.enableNoSleep,!1)}},{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement(d.d,null,r.a.createElement(te,{path:"/"})))}}]),t}(n.Component)),se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,t){navigator.serviceWorker.register(e,{scope:"/vertigo3-app/"}).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(re,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/vertigo3-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/vertigo3-app","/service-worker.js");se?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ce(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ce(t,e)}))}}()},89:function(e,t,a){e.exports=a.p+"static/media/underwater-test-vid.5a07032b.mp4"},90:function(e,t,a){e.exports=a.p+"static/media/sonar-boat.91066902.png"},91:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAqCAIAAABnU3G2AAAABnRSTlMAAAAAAABupgeRAAAFHklEQVR42u1YCU8bZxDNHyxplNJQKoVAQ2IOqRVKoVxppESBJFVFErWNg50IKBa0EEhDRVJoCwaM8YHxfRsf+F6v79vgvt2v3aJGlUqKgJU8Gq1213vM+2bem1mfO1ezmtXs7NuVpuYXs/O8h/HzwmuaSqcSuStNLTyG8ejhN+lk3usOREL0QP9NHiPZ84YCexGfJxgNxx8/+pavMNrbOjOpAsDAkZOZH+f4imR2Zj4Zz/p9YXg4GFuXbvIVicPupiKJYIAK+qPhIB30R3gT+uhTsUatX1+Tfzl4q72tA6UVjSTAEOCJRZOpZK6u7jwPYIhEz6rVai5TymfLhVwFMNKJHADEY+kEnYFn0wWRSMwDJB3tnS6HF5pLUynEDSTYxukMOglxcCabLsbpNFIUCdOhQEynM55dPAs/LSJi4EHoJBU4TMZzwPCnI2m5Cn61mBz3hh+cURjXWq8bdKZ8toTosfDQK+ivw+7RagyQYLHo+dDd+329gz3dffX1l47/9XduD71ZXJZtKDBWPBOPffZp17uQZPS50+6plKooKhAj4I+ir/s8IYV8+4ue/pNYxabLzftl5vWpZB5b8BVkRUkYDWaJZFIgEPzbjQ0NDX29A5Lvp1UKDa4vF5mHgCFQKnQPpAKcefLd6ImWxLZ6J0bFEQTWEluyk0pkc9lCPlekojQumBifvHP7rkQytbOjj4SpTCZfKlYQfTG3T5iNFo6pxM8OJg7brmRy6nTq+4fp6VCQIop52BOs8iBRCBqVUyocQGEZeWUJTRyXofHtOrwoJ/jy0srFix+cJllbr15Xq7SoCpQHEZw0W2/EWf1hnANw2JmK2osotzRNZ2du39pUAwC0ksDgxBTpIl2CICROYGCHnATjH448/qih8fRh/PJ6GZER1ScACHPAAcxO2GIf8PArSRQHhqQLhyi/Yv4AiV2Tyu4Nf1X33onPJiKRKJPKV1j9ISECQyQcZzD4o4iMldQgRAlzFKsHOS51bxcbzoNOxfw+CIa75udedXd3nwQMk8FSPWDmJUaL/6oWNARoEQB4dv1upw+V47A6NUr1pnTDZrH5vL4YRafiWSIJhxnFrQWXKHYMKycTWYvJ/uvSCnJ1/BgGBwfSqSxEiRQMWWD0ZiQBa+ly+Ow2t8Pmxlhh1FsNO3rZqnRqYvLzGzdwr0DQ9nJ+Ab/ielYJ8gQPN5VkkoV/MIrrV9i3W3fnZl/ie/jChYv/F8bY2Dg7uhbTCeZNhA/A4HbtMXlw7aEtOO0MDMwaOq1Zsal4MDT89nNamj9Bg5fLlF63P0YlsfZslphEpVN/YyMrRVCRXLGomHYEVCu/S4XCpx0dnUeGcb7u/UK+jBcAAKYjEABJAACUE4vBYzM7LHqjSavXabRKpVIoFP6XxzY2fjw0NDz3Yk6tVns93miETtBZTsE5PeRkg2AjhwAPrqqUqqN+zblKhX0y54UCFJAQDOCD1ew06m3abb1Ota2UbY4+Eb5z2j+sv3Rz8NbEuES6sgGS+L3haDhBBJ1rTdjBGTaGiGxdcbQXdHV1VcrVGJUKIRvQJZbTqHiryWHSW416k15jWv1N+vX94x+5r7UKwHhMawuvFhVyNWa2LblqS67GIQbkIz9uZGQERIc0IQm7NrfT5LTqbBatlfEd89KbpZ7uXn58bff394VDlM3iMhlsZq3VqrXadHatQjsjmWm5zLe/CVdX1/Q6k2Zbt76yLhaKBVcFtT+va1azmtWsZjXjnf0Bg/SXIIFa41QAAAAASUVORK5CYII="},93:function(e,t,a){e.exports=a.p+"static/media/for-sure.13620510.mp3"}},[[101,1,2]]]);
//# sourceMappingURL=main.a33c327b.chunk.js.map
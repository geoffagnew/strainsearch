(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e){e.exports=["Relaxed","Creative","Focused","Hungry","Energetic","Giggly","Euphoric","Talkative","Aroused","Happy"]},,,function(e){e.exports=["Depression","Insomnia","Stress","Cramps","Nausea","Headaches","Eye Pressure","Inflammation","Spasticity","Seizures","Muscle Spasms"]},,,,,,,function(e,t,a){e.exports=a.p+"static/media/icon-strain-sativa.c3e2c88b.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-strain-indica.1b31c239.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-strain-hybrid.4d8ee991.svg"},,,function(e,t,a){e.exports=a(80)},,,,,function(e,t,a){},,,,,function(e,t,a){},,,function(e,t,a){},,,,,,function(e,t,a){},,,,,function(e,t,a){},,,function(e,t,a){},,,function(e,t,a){},,,,function(e,t,a){},,,function(e,t,a){},,,function(e,t,a){},,,function(e,t,a){},,,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(19),s=a.n(c),r=a(83),l=a(4),o=a(5),m=a(7),d=a(6),u=a(8),h=a(84),f=a(81),p=a(11),b=a(14),E=a(33),v=(a(31),function(e){return i.a.createElement("div",{id:"filterblock"},null!==e.filterHead?i.a.createElement("h1",{className:"font-weight-bold h2 mb-3 mt-0"},e.filterHead):"",null!==e.filterSubhead?i.a.createElement("h2",{className:"h5 mb-3"},e.filterSubhead):"",e.filterOptions.map(function(e){return i.a.createElement(E.a,{key:e,to:"/effects/".concat(e),className:"btn btn-outline-primary btn-sm mr-2 mb-2"},e)}))}),g=(a(36),function(e){return e.currentView===e.id?i.a.createElement("li",{className:"tabs__tab tabs__tab--active"},i.a.createElement("a",{href:e.tabText,"data-id":e.id,onClick:e.handleTabClick},e.tabText)):i.a.createElement("li",{className:"tabs__tab"},i.a.createElement("a",{href:e.tabText,"data-id":e.id,onClick:e.handleTabClick},e.tabText))}),w=(a(39),{id:"recreactional",head:"Find the marijuana strain to suit your mood",subHead:"I want to feel:",options:p}),N={id:"medicinal",head:"Find the right marijuana strain for what ails you",subHead:"I want to treat:",options:b},S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleTabClick=function(e){e.preventDefault();var t=e.target.dataset.id;"recreational"===a.state.selectedView?a.setState({selectedView:t,selectedViewDetails:N}):a.setState({selectedView:t,selectedViewDetails:w})},a.state={selectedView:"recreational",selectedViewDetails:w},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"home-wrap"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"panel-home"},i.a.createElement("div",{className:"panel-col-1 panel-flash px-5"},i.a.createElement("span",null,"Image Laurie Rowan")),i.a.createElement("div",{className:"panel-col-2 px-5"},i.a.createElement("ul",{className:"tabs mb-0"},i.a.createElement(g,{tabText:"Recreational effects",currentView:this.state.selectedView,handleTabClick:this.handleTabClick,id:"recreational"}),i.a.createElement(g,{tabText:"Medicinal effects",currentView:this.state.selectedView,handleTabClick:this.handleTabClick,id:"medicinal"})),i.a.createElement(v,{filterHead:this.state.selectedViewDetails.head,filterSubhead:this.state.selectedViewDetails.subHead,filterOptions:this.state.selectedViewDetails.options})))))}}]),t}(n.Component),y=a(20),j=(a(45),a(48),{id:"recreactional",head:"Find the marijuana strain to suit your mood",options:p}),k={id:"medicinal",head:"Find the right marijuana strain for what ails you",options:b},O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleTabClick=function(e){e.preventDefault();var t=e.target.dataset.id;"recreational"===a.state.selectedView?a.setState({selectedView:t,selectedViewDetails:k}):a.setState({selectedView:t,selectedViewDetails:j})},a.state={selectedView:"recreational",selectedViewDetails:j},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(y.SlideDown,{closed:!this.props.searchVisible,className:"search-dropdown-slidedown"},i.a.createElement("div",{className:"search-shelf-wrapper",key:"shelf-wrapper"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row py-4"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("ul",{className:"tabs mb-3"},i.a.createElement(g,{tabText:"Recreational effects",currentView:this.state.selectedView,handleTabClick:this.handleTabClick,id:"recreational"}),i.a.createElement(g,{tabText:"Medicinal effects",currentView:this.state.selectedView,handleTabClick:this.handleTabClick,id:"medicinal"})),i.a.createElement(v,{filterHead:null,filterSubhead:null,filterOptions:this.state.selectedViewDetails.options}))))))}}]),t}(n.Component),V=(a(50),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"contentblock"},this.props.children)}}]),t}(n.Component)),x=a(82),C=a(21),T=a.n(C),D=a(22),I=a.n(D),L=a(23),H=a.n(L),P=(a(53),function(e){var t=e.strainName,a=e.iconSize;switch(t){case"sativa":return i.a.createElement("span",{className:"icon-strain--list"},i.a.createElement("img",{src:T.a,width:a,height:a,alt:"Sativa icon"}));case"indica":return i.a.createElement("span",{className:"icon-strain--list"},i.a.createElement("img",{src:I.a,width:a,height:a,alt:"Indica icon"}));default:return i.a.createElement("span",{className:"icon-strain--list"},i.a.createElement("img",{src:H.a,width:a,height:a,alt:"Hybrid icon"}))}}),F=(a(56),function(e){return i.a.createElement(x.a,{to:"/effects/".concat(e.effectId,"/strain/").concat(e.strainName),className:e.shouldHide},i.a.createElement("li",{onClick:e.strainSelected,className:"strain-list__item py-2 px-4"},i.a.createElement("h3",{className:"h6 mb-0 font-weight-bold"},e.strainName),i.a.createElement("span",{className:"strain-race"},i.a.createElement(P,{strainName:e.strainRace,iconSize:"15px"})," ",e.strainRace),i.a.createElement("span",{className:"ml-1"},-1!==p.indexOf(e.strainEffect)?"\u2014 Desired effect: ":"\u2014 Useful for treating ",e.strainEffect)))}),R="6jcA9bi",_=(a(60),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).buildStrainProfile=function(e){var t;fetch("http://strainapi.evanbusse.com/".concat(R,"/strains/search/name/").concat(e)).then(function(e){return e.json()}).then(function(n){return a.setState({strainName:e,strainDetails:n}),t=n[0].id,fetch("http://strainapi.evanbusse.com/".concat(R,"/strains/data/effects/").concat(t))}).then(function(e){return e.json()}).then(function(e){return a.setState({strainEffects:e}),fetch("http://strainapi.evanbusse.com/".concat(R,"/strains/data/flavors/").concat(t))}).then(function(e){return e.json()}).then(function(e){a.setState({strainFlavors:e,isLoaded:!0})}).catch(function(e){return console.log("Request failed",e)})},a.state={strainName:null,strainDetails:null,strainEffects:null,strainFlavors:null,isLoaded:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.buildStrainProfile(e)}},{key:"componentDidUpdate",value:function(e,t){var a=this.props.match.params.id;e.match.params.id!==a&&this.buildStrainProfile(a)}},{key:"render",value:function(){var e,t=this.state,a=t.strainName,n=t.strainDetails,c=t.strainEffects,s=t.strainFlavors;return e=t.isLoaded?i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h2",null,a),i.a.createElement("p",{className:"capitalize"},i.a.createElement(P,{strainName:n[0].race,iconSize:"25px"})," ",n[0].race),i.a.createElement("p",null,n[0].desc))),i.a.createElement("div",{className:"row"},s.length>0?i.a.createElement("div",{className:"col-md-12 border-tb pt-3 pb-2 mb-3"},i.a.createElement("h4",{className:"h6 font-weight-bold d-inline-block"},"Flavors: ")," ",s.map(function(e){return i.a.createElement("span",{key:e,className:"mx-1 font-weight-normal"},e)})):""),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h3",{className:"h5 font-weight-bold mb-3"},"Strain characteristics")),c.positive.length>0?i.a.createElement("div",{className:"col-md-4"},i.a.createElement("h4",{className:"h6 font-weight-bold"},"Positive:"),i.a.createElement("ul",{className:"strain-list"},c.positive.map(function(e){return i.a.createElement("li",{key:e},e)}))):"",c.negative.length>0?i.a.createElement("div",{className:"col-md-4"},i.a.createElement("h4",{className:"h6 font-weight-bold"},"Negative:"),i.a.createElement("ul",{className:"strain-list"},c.negative.map(function(e){return i.a.createElement("li",{key:e},e)}))):"",c.medical.length>0?i.a.createElement("div",{className:"col-md-4"},i.a.createElement("h4",{className:"h6 font-weight-bold"},"Medicinal:"),i.a.createElement("ul",{className:"strain-list"},c.medical.map(function(e){return i.a.createElement("li",{key:e},e)}))):"")):i.a.createElement("h4",{className:"h5 text-center"},"Data is loading"),i.a.createElement("div",{className:"col-md-8 py-5 px-5 strain-profile"},i.a.createElement("div",{className:"strain-profile-body"},e))}}]),t}(n.Component)),M=(a(63),function(e){return i.a.createElement("button",{onClick:e.toggleStrains,className:"btn btn-outline-primary btn-sm mr-2 mb-2 filter-btn",id:e.customCssId},e.btnText)}),z=(a(66),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).toggleStrains=function(e){var t=e.target.textContent.toLowerCase();"reset"===t&&(t="all"),a.setState({strainVisible:t})},a.strainSelected=function(){a.state.strainProfileSelected||a.setState({strainProfileSelected:!0})},a.toggleSearch=function(e){e.preventDefault(),a.state.searchVisible?a.setState({searchVisible:!1}):a.setState({searchVisible:!0})},a.buildStrainList=function(e){a.state.searchVisible&&a.setState({searchVisible:!1}),fetch("http://strainapi.evanbusse.com/".concat(R,"/strains/search/effect/").concat(e)).then(function(e){return e.json()}).then(function(t){return a.setState({strains:t,effectId:e,strainsLoaded:!0,strainVisible:"all",strainProfileSelected:!1})}).catch(function(e){return console.log("Something went wrong ".concat(e))})},a.state={strains:[],effectId:null,strainVisible:null,strainsLoaded:!1,strainProfileSelected:!1,searchVisible:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.buildStrainList(e)}},{key:"componentDidUpdate",value:function(e,t){var a=this.props.match.params.id;a!==e.match.params.id&&null!==e.match.params.id&&this.buildStrainList(a)}},{key:"render",value:function(){var e,t=this;this.state.effectId&&(e=this.state.effectId);var a,n,c=this.state.strains;return this.state.strains.length>0?("sativa"!==this.state.strainVisible&&"indica"!==this.state.strainVisible&&"hybrid"!==this.state.strainVisible||(a="hide"),n=c.map(function(e){return i.a.createElement(F,{key:e.id,effectId:t.state.effectId,strainName:e.name,strainRace:e.race,strainEffect:e.effect,strainSelected:t.strainSelected,shouldHide:t.state.strainVisible!==e.race?a:"show"})})):n=i.a.createElement("li",{className:"pt-5 px-4"},i.a.createElement("h3",{className:"h6 mb-0"},"Strain data is loading")),i.a.createElement("div",null,i.a.createElement(O,{searchVisible:this.state.searchVisible}),i.a.createElement(V,null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row my-5"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement("h1",{className:"capitalize"},this.props.match.params.id)),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("a",{href:"/new-search",className:"btn btn-primary float-right",onClick:this.toggleSearch},!1===this.state.searchVisible?"Start new search":"Close search"))),i.a.createElement("div",{className:"row strain-view-wrap"},i.a.createElement("div",{className:"col-md-4 strain-list-wrapper pb-4 px-0"},this.state.strainsLoaded&&i.a.createElement("div",{className:"strains-filter py-3 px-4"},i.a.createElement("p",{className:"mb-1 filter-heading"},"Filter by type"),i.a.createElement(M,{btnText:"Sativa",customCssId:"colour-sativa",toggleStrains:this.toggleStrains}),i.a.createElement(M,{btnText:"Indica",customCssId:"colour-indica",toggleStrains:this.toggleStrains}),i.a.createElement(M,{btnText:"Hybrid",customCssId:"colour-hybrid",toggleStrains:this.toggleStrains}),"all"!==this.state.strainVisible?i.a.createElement(M,{btnText:"Reset",customCssId:"colour-reset",toggleStrains:this.toggleStrains}):""),i.a.createElement("ul",{className:"strain-list pl-0"},n)),i.a.createElement(f.a,{path:"/effects/".concat(e,"/strain/:id"),component:_}),!this.state.strainProfileSelected&&i.a.createElement("div",{className:"col-md-8 pt-5 px-5 strain-placeholder-text"},i.a.createElement("h4",{className:"h5 text-center"},"Select a strain from the sidebar to get started."))))))}}]),t}(n.Component)),B=(a(69),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).buildPage=function(e){fetch("".concat(window.location.origin,"/data/").concat(e,".json")).then(function(e){return e.json()}).then(function(e){return a.setState({pageTitle:e.pageTitle,pageBody:e.pageBody,contentLoaded:!0})}).catch(function(e){return console.log("Something went wrong ".concat(e))})},a.state={contentLoaded:!1,pageTitle:null,pageBody:null},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.path;this.buildPage(e)}},{key:"componentDidUpdate",value:function(e){var t=this.props.match.path;t!==e.match.path&&this.buildPage(t)}},{key:"render",value:function(){var e,t,a=this.state,n=a.pageTitle,c=a.pageBody;return a.contentLoaded?(e=c,t=n):e="Loading",i.a.createElement(V,null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row my-5"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",null,t))),i.a.createElement("div",{className:"row general-page-wrapper"},i.a.createElement("div",{className:"col-md-10 offset-md-1 pt-5 pb-4 px-0"},i.a.createElement("p",null,e)))))}}]),t}(n.Component)),W=function(e){return i.a.createElement(V,null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row general-page-wrapper"},i.a.createElement("div",{className:"col-md-10 offset-md-1 pt-5 pb-4 px-0"},i.a.createElement("p",null,"Error. We can't find the page you're looking for.")))))},U=function(){return i.a.createElement(h.a,null,i.a.createElement(f.a,{path:"/",component:S,exact:!0}),i.a.createElement(f.a,{path:"/effects/:id",component:z}),i.a.createElement(f.a,{path:"/about-strain-search",component:B}),i.a.createElement(f.a,{path:"/disclaimer",component:B}),i.a.createElement(f.a,{component:W}))},A=(a(72),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"mainnav",className:"py-4 px-5"},i.a.createElement("span",null,i.a.createElement(E.a,{to:"/"},"Strain Search")),i.a.createElement("nav",null,i.a.createElement("ul",{className:"mb-0"},i.a.createElement("li",null,i.a.createElement(E.a,{to:"/about-strain-search"},"About SS")),i.a.createElement("li",null,i.a.createElement(E.a,{to:"/disclaimer"},"Disclaimer")))))}}]),t}(n.Component)),J=(a(75),a(77),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(A,null),i.a.createElement(U,null))}}]),t}(n.Component)),q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(i.a.createElement(r.a,null,i.a.createElement(J,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");q?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):G(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):G(e)})}}()}],[[26,2,1]]]);
//# sourceMappingURL=main.974fa475.chunk.js.map
(this.webpackJsonpnews_app=this.webpackJsonpnews_app||[]).push([[0],{12:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(6),i=n.n(o),s=n(1),c=n(2),l=n(4),u=n(3),p=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,this.props.article.title),r.a.createElement("h3",null,"from ",this.props.article.source.name),this.props.article.urlToImage?r.a.createElement("img",{src:this.props.article.urlToImage,alt:"image not loaded",style:{maxWidth:"30%"}}):null,this.props.article.author?r.a.createElement("p",null,r.a.createElement("p",null,"author :",this.props.article.author),r.a.createElement("p",null," published at : ",this.props.article.publishedAt)," "):r.a.createElement("p",null,"published at : ",this.props.article.publishedAt),r.a.createElement("p",null,this.props.article.description),r.a.createElement("p",null,this.props.article.content))}}]),n}(r.a.Component),h=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).getStyle={border:"3px solid green",padding:"10px",background:"white",margin:"auto",width:"70%",borderRadius:"20px"},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return console.log("from news",this.props.newsarticles),this.props.newsarticles.map((function(e){return r.a.createElement("div",{style:t.getStyle},r.a.createElement(p,{article:e}),"  ")}))}}]),n}(r.a.Component);var y=function(){return r.a.createElement("h1",{style:{textAlign:"center"}},"News App in React")},b=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).getStyle={border:"3px solid green",padding:"10px",background:"f8f8ff",margin:"auto",width:"70%",borderRadius:"10px"},t.getbuttonstyle={borderRadius:"12px",background:"lightblue",cursor:"pointer"},t.selectedCountry="R",t}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:this.getStyle},r.a.createElement("button",{style:this.getbuttonstyle,onClick:this.props.category.bind(this,"category=business")},"Bussiness")," "," ",r.a.createElement("button",{style:this.getbuttonstyle,onClick:this.props.category.bind(this,"category=entertainment")},"Entertainment")," ",r.a.createElement("button",{style:this.getbuttonstyle,onClick:this.props.category.bind(this,"category=general")},"General")," ",r.a.createElement("button",{style:this.getbuttonstyle,onClick:this.props.category.bind(this,"category=health")},"Health")," ",r.a.createElement("button",{style:this.getbuttonstyle,onClick:this.props.category.bind(this,"category=science")},"Science")," ",r.a.createElement("button",{style:this.getbuttonstyle,onClick:this.props.category.bind(this,"category=sports")},"Sports")," ",r.a.createElement("button",{style:this.getbuttonstyle,onClick:this.props.category.bind(this,"category=technology")},"Technology")," ","  ",r.a.createElement("input",{type:"textfield"}))}}]),n}(r.a.Component),g=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={},t.category=function(e){console.log(e);fetch("https://newsapi.org/v2/top-headlines?country=us&"+e+"&apiKey=29bae5c10b734c0e98ec58a6d640b817").then((function(t){return t.json()})).then((function(e){t.setState({newsfromapi:e})})).catch()},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=29bae5c10b734c0e98ec58a6d640b817").then((function(t){return t.json()})).then((function(e){t.setState({newsfromapi:e})})).catch()}},{key:"render",value:function(){return console.log("here",this.state.newsfromapi),r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(b,{category:this.category}),this.state.newsfromapi&&"ok"===this.state.newsfromapi.status?r.a.createElement(h,{newsarticles:this.state.newsfromapi.articles}):null)}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,n){t.exports=n(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.deb5031e.chunk.js.map
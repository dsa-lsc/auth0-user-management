module.exports=function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){var a=n(1),r=process.env.PORT||3e3;a.listen(r,(function(){console.log("Server started on port",r)}))},function(t,e,n){var a=n(2),r=n(3),s=(n(4),n(5)),i=n(8),c=a();c.use(r({scopes:"read:connections"})),c.get("/",(function(t,e){e.header("Content-Type","text/html"),e.status(200).send(s({baseUrl:e.locals.baseUrl}))})),c.get("/meta",(function(t,e){e.status(200).send(i)})),t.exports=c},function(t,e){t.exports=require("express")},function(t,e){t.exports=require("auth0-oauth2-express")},function(t,e){t.exports=require("webtask-tools")},function(t,e,n){var a=n(6);t.exports=function(t){var e,n="",r=t||{};return function(t){n=n+'<!DOCTYPE html><html><head><title>My Extension</title><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="#{description}"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="shortcut icon" href="https://cdn.auth0.com/styleguide/2.0.1/lib/logos/img/favicon.png"><link rel="apple-touch-icon" href="apple-touch-icon.png"><link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/manage/v0.3.973/css/index.min.css"><link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styleguide/3.1.6/index.css"><script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"><\/script><script type="text/javascript" src="https://fb.me/react-0.14.0.min.js"><\/script><script type="text/javascript" src="https://fb.me/react-dom-0.14.0.js"><\/script><script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"><\/script><script type="text/javascript" src="https://cdn.auth0.com/js/jwt-decode-1.4.0.min.js"><\/script><script type="text/javascript" src="https://cdn.auth0.com/js/navbar-1.0.1.min.js"><\/script><script type="text/javascript">if (!sessionStorage.getItem("token")) {\n  window.location.href = \''+a.escape(null==(e=t)?"":e)+'/login\';\n}\n<\/script></head><body class="a0-extension"><header class="dashboard-header"><nav class="navbar navbar-default" role="navigation"><div class="container"><div class="navbar-header"><h1 class="navbar-brand"><a href="http://manage.auth0.com/"><span>Auth0</span></a></h1></div><div class="collapse navbar-collapse" id="navbar-collapse"></div><script type="text/babel">ReactDOM.render(\n  <Navbar baseUrl="'+a.escape(null==(e=t)?"":e)+'"/>,\n  document.getElementById(\'navbar-collapse\')\n);<\/script></div></nav></header><div class="container"><div class="row"><section class="content-page current"><div class="col-xs-12"><div class="row"><div class="col-xs-12 content-header"><ol class="breadcrumb"><li><a href="http://manage.auth0.com/">Auth0 Dashboard</a></li><li><a href="#">Extensions</a></li></ol><h1>My Extension</h1></div></div><div id="extension"><script type="text/babel">var Extension = React.createClass({\n  render: function() {\n    return (\n      <div>\n        <div className="widget-title title-with-nav-bars">\n          <ul className="nav nav-tabs">\n            <li className="active">\n              <a data-toggle="tab" href="#tab1" aria-expanded="true"><span className="tab-title">Tab 1</span></a>\n            </li>\n            <li>\n              <a data-toggle="tab" href="#tab2"><span className="tab-title">Tab 2</span></a>\n            </li>\n            <li>\n              <a data-toggle="tab" href="#tab3"><span className="tab-title">Tab 3</span></a>\n            </li>\n          </ul>\n        </div>\n        <div id="content-area" className="tab-content">\n          <div id="tab1" className="tab-pane active"></div>\n          <div id="tab2" className="tab-pane"></div>\n          <div id="tab3" className="tab-pane"></div>\n        </div>\n      </div>\n    );\n  }\n});\n\nReactDOM.render(\n  <Extension />,\n  document.getElementById(\'extension\')\n);<\/script></div></div></section></div></div></body></html>'}.call(this,"baseUrl"in r?r.baseUrl:"undefined"!=typeof baseUrl?baseUrl:void 0),n}},function(t,e,n){"use strict";var a=Object.prototype.hasOwnProperty;function r(t,e){return Array.isArray(t)?function(t,e){for(var n,a="",s="",i=Array.isArray(e),c=0;c<t.length;c++)(n=r(t[c]))&&(i&&e[c]&&(n=o(n)),a=a+s+n,s=" ");return a}(t,e):t&&"object"==typeof t?function(t){var e="",n="";for(var r in t)r&&t[r]&&a.call(t,r)&&(e=e+n+r,n=" ");return e}(t):t||""}function s(t){if(!t)return"";if("object"==typeof t){var e="";for(var n in t)a.call(t,n)&&(e=e+n+":"+t[n]+";");return e}return t+""}function i(t,e,n,a){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(a?t:t+'="'+t+'"');var r=typeof e;return"object"!==r&&"function"!==r||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=o(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}e.merge=function t(e,n){if(1===arguments.length){for(var a=e[0],r=1;r<e.length;r++)a=t(a,e[r]);return a}for(var i in n)if("class"===i){var c=e[i]||[];e[i]=(Array.isArray(c)?c:[c]).concat(n[i]||[])}else if("style"===i){c=(c=s(e[i]))&&";"!==c[c.length-1]?c+";":c;var o=s(n[i]);o=o&&";"!==o[o.length-1]?o+";":o,e[i]=c+o}else e[i]=n[i];return e},e.classes=r,e.style=s,e.attr=i,e.attrs=function(t,e){var n="";for(var c in t)if(a.call(t,c)){var o=t[c];if("class"===c){o=r(o),n=i(c,o,!1,e)+n;continue}"style"===c&&(o=s(o)),n+=i(c,o,!1,e)}return n};var c=/["&<>]/;function o(t){var e=""+t,n=c.exec(e);if(!n)return t;var a,r,s,i="";for(a=n.index,r=0;a<e.length;a++){switch(e.charCodeAt(a)){case 34:s="&quot;";break;case 38:s="&amp;";break;case 60:s="&lt;";break;case 62:s="&gt;";break;default:continue}r!==a&&(i+=e.substring(r,a)),r=a+1,i+=s}return r!==a?i+e.substring(r,a):i}e.escape=o,e.rethrow=function t(e,a,r,s){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&a||s))throw e.message+=" on line "+r,e;try{s=s||n(7).readFileSync(a,"utf8")}catch(n){t(e,null,r)}var i=3,c=s.split("\n"),o=Math.max(r-i,0),l=Math.min(c.length,r+i);i=c.slice(o,l).map((function(t,e){var n=e+o+1;return(n==r?"  > ":"    ")+n+"| "+t})).join("\n");throw e.path=a,e.message=(a||"Pug")+":"+r+"\n"+i+"\n\n"+e.message,e}},function(t,e){t.exports=require("fs")},function(t){t.exports=JSON.parse('{"title":"User Management","name":"auth0-user-management","version":"0.0.4","author":"dsa-lsc","description":"This is an ambitious extension","type":"application","repository":"https://github.com/auth0/auth0-user-management","keywords":["auth0","extension"]}')}]);
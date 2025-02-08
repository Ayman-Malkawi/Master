/*! This file is auto-generated */
!function(){var e={9756:function(e){e.exports=function(e,n){var r,t,i=0;function o(){var o,u,l=r,s=arguments.length;e:for(;l;){if(l.args.length===arguments.length){for(u=0;u<s;u++)if(l.args[u]!==arguments[u]){l=l.next;continue e}return l!==r&&(l===t&&(t=l.prev),l.prev.next=l.next,l.next&&(l.next.prev=l.prev),l.next=r,l.prev=null,r.prev=l,r=l),l.val}l=l.next}for(o=new Array(s),u=0;u<s;u++)o[u]=arguments[u];return l={args:o,val:e.apply(null,o)},r?(r.prev=l,l.next=r):t=l,i===n.maxSize?(t=t.prev).next=null:i++,r=l,l.val}return n=n||{},o.clear=function(){r=null,t=null,i=0},o}}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={exports:{}};return e[t](o,o.exports,r),o.exports}r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};!function(){"use strict";r.r(t),r.d(t,{PluginArea:function(){return x},getPlugin:function(){return h},getPlugins:function(){return w},registerPlugin:function(){return f},unregisterPlugin:function(){return v},withPluginContext:function(){return c}});var e=window.wp.element,n=r(9756),i=r.n(n),o=window.wp.hooks;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},u.apply(null,arguments)}var l=window.wp.compose;const{Consumer:s,Provider:a}=(0,e.createContext)({name:null,icon:null}),c=n=>(0,l.createHigherOrderComponent)((r=>t=>(0,e.createElement)(s,null,(i=>(0,e.createElement)(r,u({},t,n(i,t)))))),"withPluginContext");class p extends e.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){const{name:n,onError:r}=this.props;r&&r(n,e)}render(){return this.state.hasError?null:this.props.children}}var g=window.wp.primitives;var d=(0,e.createElement)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(g.Path,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"}));const m={};function f(e,n){if("object"!=typeof n)return console.error("No settings object provided!"),null;if("string"!=typeof e)return console.error("Plugin name must be string."),null;if(!/^[a-z][a-z0-9-]*$/.test(e))return console.error('Plugin name must include only lowercase alphanumeric characters or dashes, and start with a letter. Example: "my-plugin".'),null;m[e]&&console.error(`Plugin "${e}" is already registered.`),n=(0,o.applyFilters)("plugins.registerPlugin",n,e);const{render:r,scope:t}=n;if("function"!=typeof r)return console.error('The "render" property must be specified and must be a valid function.'),null;if(t){if("string"!=typeof t)return console.error("Plugin scope must be string."),null;if(!/^[a-z][a-z0-9-]*$/.test(t))return console.error('Plugin scope must include only lowercase alphanumeric characters or dashes, and start with a letter. Example: "my-page".'),null}return m[e]={name:e,icon:d,...n},(0,o.doAction)("plugins.pluginRegistered",n,e),n}function v(e){if(!m[e])return void console.error('Plugin "'+e+'" is not registered.');const n=m[e];return delete m[e],(0,o.doAction)("plugins.pluginUnregistered",n,e),n}function h(e){return m[e]}function w(e){return Object.values(m).filter((n=>n.scope===e))}class P extends e.Component{constructor(){super(...arguments),this.setPlugins=this.setPlugins.bind(this),this.memoizedContext=i()(((e,n)=>({name:e,icon:n}))),this.state=this.getCurrentPluginsState()}getCurrentPluginsState(){return{plugins:w(this.props.scope).map((e=>{let{icon:n,name:r,render:t}=e;return{Plugin:t,context:this.memoizedContext(r,n)}}))}}componentDidMount(){(0,o.addAction)("plugins.pluginRegistered","core/plugins/plugin-area/plugins-registered",this.setPlugins),(0,o.addAction)("plugins.pluginUnregistered","core/plugins/plugin-area/plugins-unregistered",this.setPlugins)}componentWillUnmount(){(0,o.removeAction)("plugins.pluginRegistered","core/plugins/plugin-area/plugins-registered"),(0,o.removeAction)("plugins.pluginUnregistered","core/plugins/plugin-area/plugins-unregistered")}setPlugins(){this.setState(this.getCurrentPluginsState)}render(){return(0,e.createElement)("div",{style:{display:"none"}},this.state.plugins.map((n=>{let{context:r,Plugin:t}=n;return(0,e.createElement)(a,{key:r.name,value:r},(0,e.createElement)(p,{name:r.name,onError:this.props.onError},(0,e.createElement)(t,null)))})))}}var x=P}(),(window.wp=window.wp||{}).plugins=t}();
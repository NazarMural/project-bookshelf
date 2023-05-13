function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},r=n.parcelRequire0a78;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},n.parcelRequire0a78=r),r.register("kyEFX",(function(t,n){var i,s;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var r={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},s=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"5ZPII":"index.812fc9ec.js","8ovDh":"support-img1.a2f76ef8.png","cUNuN":"support-img2.77b370d8.png","hBvZY":"support-img3.15050564.png","ctymN":"support-img4.237e22ae.png","aMc5M":"support-img5.181cb1fa.png","7ytG9":"support-img6.9b5889b4.png","1lCPH":"support-img7.4459924d.png","eRnj2":"support-img8.88cae6e7.png","gImvE":"support-img9.b95fdd75.png","5UbS1":"index.a4cad71b.css"}'));async function o(e){const t=await fetch(`https://books-backend.p.goit.global/books/${e}`);if(!t.ok)throw new Error(t.status);return await t.json()}async function a(e){const t=await fetch(`https://books-backend.p.goit.global/books/category?category=${e}`);if(!t.ok)throw new Error(t.status);return await t.json()}var l,c,d={};function u(){t(d).Loading.hourglass({clickToClose:!0,svgColor:"#4F2EE8"})}function h(){t(d).Loading.remove()}l=void 0===n?"undefined"==typeof window?d:window:n,c=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n,i,s,r,o="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l="Success",c="Failure",d="Warning",u="Info",h={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},p="Success",f="Failure",m="Warning",g="Info",v={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},y="Show",_="Ask",b="Prompt",w={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},x="Standard",k="Hourglass",C="Circle",T="Arrows",I="Dots",S="Pulse",E="Custom",N="Notiflix",P={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},R="Standard",L="Hourglass",A="Circle",M="Arrows",O="Dots",D="Pulse",z={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},F=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+o)},W=function(e){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+e+o)},U=function(t){return t||(t="head"),null!==e.document[t]||(F('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},j=function(t,n){if(!U("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}},B=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=t&&"[object Object]"===Object.prototype.toString.call(n[i])?B(e[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return e},q=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},H=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},V=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},$=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},G=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},X=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},Y=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},K=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},J=0,Q=function(n,i,s,r){if(!U("body"))return!1;t||le.Notify.init({});var o=B(!0,t,{});if("object"==typeof s&&!Array.isArray(s)||"object"==typeof r&&!Array.isArray(r)){var p={};"object"==typeof s?p=s:"object"==typeof r&&(p=r),t=B(!0,t,p)}var f=t[n.toLocaleLowerCase("en")];J++,"string"!=typeof i&&(i="Notiflix "+n),t.plainText&&(i=q(i)),!t.plainText&&i.length>t.messageMaxLength&&(t=B(!0,t,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>t.messageMaxLength&&(i=i.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(f.fontAwesomeIconColor=f.background),t.cssAnimation||(t.cssAnimationDuration=0);var m=e.document.getElementById(h.wrapID)||e.document.createElement("div");if(m.id=h.wrapID,m.style.width=t.width,m.style.zIndex=t.zindex,m.style.opacity=t.opacity,"center-center"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.top=t.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===t.position?(m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.left="auto"):"left-top"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===t.position?(m.style.left=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=t.distance,m.style.top=t.distance,m.style.left="auto",m.style.bottom="auto"),t.backOverlay){var g=e.document.getElementById(h.overlayID)||e.document.createElement("div");g.id=h.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=t.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=f.backOverlayColor||t.backOverlayColor,g.className=t.cssAnimation?"nx-with-animation":"",g.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(h.overlayID)||e.document.body.appendChild(g)}e.document.getElementById(h.wrapID)||e.document.body.appendChild(m);var v=e.document.createElement("div");v.id=t.ID+"-"+J,v.className=t.className+" "+f.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof s?"nx-with-close-button":"")+" "+("function"==typeof s?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),v.style.fontSize=t.fontSize,v.style.color=f.textColor,v.style.background=f.background,v.style.borderRadius=t.borderRadius,v.style.pointerEvents="all",t.rtl&&(v.setAttribute("dir","rtl"),v.classList.add("nx-rtl-on")),v.style.fontFamily='"'+t.fontFamily+'", '+a,t.cssAnimation&&(v.style.animationDuration=t.cssAnimationDuration+"ms");var y="";if(t.closeButton&&"function"!=typeof s&&(y='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+f.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)v.innerHTML='<i style="color:'+f.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+f.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?y:"");else{var _="";n===l?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+f.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===c?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+f.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===d?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+f.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===u&&(_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+f.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),v.innerHTML=_+'<span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?y:"")}else v.innerHTML='<span class="nx-message">'+i+"</span>"+(t.closeButton?y:"");if("left-bottom"===t.position||"right-bottom"===t.position){var b=e.document.getElementById(h.wrapID);b.insertBefore(v,b.firstChild)}else e.document.getElementById(h.wrapID).appendChild(v);var w=e.document.getElementById(v.id);if(w){var x,k,C=function(){w.classList.add("nx-remove");var t=e.document.getElementById(h.overlayID);t&&0>=m.childElementCount&&t.classList.add("nx-remove"),clearTimeout(x)},T=function(){if(w&&null!==w.parentNode&&w.parentNode.removeChild(w),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var t=e.document.getElementById(h.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(k)};if(t.closeButton&&"function"!=typeof s&&e.document.getElementById(v.id).querySelector("span.nx-close-button").addEventListener("click",(function(){C();var e=setTimeout((function(){T(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof s||t.clickToClose)&&w.addEventListener("click",(function(){"function"==typeof s&&s(),C();var e=setTimeout((function(){T(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof s){var I=function(){x=setTimeout((function(){C()}),t.timeout),k=setTimeout((function(){T()}),t.timeout+t.cssAnimationDuration)};I(),t.pauseOnHover&&(w.addEventListener("mouseenter",(function(){w.classList.add("nx-paused"),clearTimeout(x),clearTimeout(k)})),w.addEventListener("mouseleave",(function(){w.classList.remove("nx-paused"),I()})))}}if(t.showOnlyTheLastOne&&0<J)for(var S,E=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+J+"])"),N=0;N<E.length;N++)null!==(S=E[N]).parentNode&&S.parentNode.removeChild(S);t=B(!0,t,o)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ee=function(t,i,s,r,o,l){if(!U("body"))return!1;n||le.Report.init({});var c={};if("object"==typeof o&&!Array.isArray(o)||"object"==typeof l&&!Array.isArray(l)){var d={};"object"==typeof o?d=o:"object"==typeof l&&(d=l),c=B(!0,n,{}),n=B(!0,n,d)}var u=n[t.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+t),"string"!=typeof s&&(t===p?s='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':t===f?s='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':t===m?s='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':t===g&&(s='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof r&&(r="Okay"),n.plainText&&(i=q(i),s=q(s),r=q(r)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",s='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',r="Okay"),s.length>n.messageMaxLength&&(i="Possible HTML Tags Error",s='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',r="Okay"),r.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",s='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',r="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),s.length>n.messageMaxLength&&(s=s.substring(0,n.messageMaxLength)+"..."),r.length>n.buttonMaxLength&&(r=r.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var h=e.document.createElement("div");h.id=v.ID,h.className=n.className,h.style.zIndex=n.zindex,h.style.borderRadius=n.borderRadius,h.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(h.setAttribute("dir","rtl"),h.classList.add("nx-rtl-on")),h.style.display="flex",h.style.flexWrap="wrap",h.style.flexDirection="column",h.style.alignItems="center",h.style.justifyContent="center";var y="",_=!0===n.backOverlayClickToClose;n.backOverlay&&(y='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(_?" nx-report-click-to-close":"")+'" style="background:'+(u.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var b,w,x="";if(t===p?(b=n.svgSize,w=u.svgColor,b||(b="110px"),w||(w="#32c682"),x='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+b+'" height="'+b+'" fill="'+w+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):t===f?x=function(e,t){return e||(e="110px"),t||(t="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,u.svgColor):t===m?x=function(e,t){return e||(e="110px"),t||(t="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,u.svgColor):t===g&&(x=function(e,t){return e||(e="110px"),t||(t="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,u.svgColor)),h.innerHTML=y+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+x+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+u.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+u.messageColor+';">'+s+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+u.buttonBackground+"; color:"+u.buttonColor+';">'+r+"</a></div>",!e.document.getElementById(h.id)){e.document.body.appendChild(h);var k=function(){var t=e.document.getElementById(h.id);t.classList.add("nx-remove");var i=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t),clearTimeout(i)}),n.cssAnimationDuration)};e.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof o&&o(),k()})),y&&_&&e.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){k()}))}n=B(!0,n,c)},te=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ne=function(t,n,s,r,o,l,c,d,u){if(!U("body"))return!1;i||le.Confirm.init({});var h=B(!0,i,{});"object"!=typeof u||Array.isArray(u)||(i=B(!0,i,u)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof s&&(s="Do you agree with me?"),"string"!=typeof o&&(o="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof d&&(d=void 0),i.plainText&&(n=q(n),s=q(s),o=q(o),l=q(l)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",s='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',o="Okay",l="..."),s.length>i.messageMaxLength&&(n="Possible HTML Tags Error",s='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',o="Okay",l="..."),(o.length||l.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",s='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',o="Okay",l="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),s.length>i.messageMaxLength&&(s=s.substring(0,i.messageMaxLength)+"..."),o.length>i.buttonsMaxLength&&(o=o.substring(0,i.buttonsMaxLength)+"..."),l.length>i.buttonsMaxLength&&(l=l.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var p=e.document.createElement("div");p.id=w.ID,p.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),p.style.zIndex=i.zindex,p.style.padding=i.distance,i.rtl&&(p.setAttribute("dir","rtl"),p.classList.add("nx-rtl-on"));var f="string"==typeof i.position?i.position.trim():"center";p.classList.add("nx-position-"+f),p.style.fontFamily='"'+i.fontFamily+'", '+a;var m="";i.backOverlay&&(m='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof c&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+l+"</a>");var v="",y=null,x=void 0;if(t===_||t===b){y=r||"";var k=t===_||200<y.length?Math.ceil(1.5*y.length):250;v='<div><input id="NXConfirmValidationInput" type="text" '+(t===b?'value="'+y+'"':"")+' maxlength="'+k+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(p.innerHTML=m+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+s+v+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+o+"</a>"+g+"</div></div>",!e.document.getElementById(p.id)){e.document.body.appendChild(p);var C=e.document.getElementById(p.id),T=e.document.getElementById("NXConfirmButtonOk"),I=e.document.getElementById("NXConfirmValidationInput");I&&(I.focus(),I.setSelectionRange(0,(I.value||"").length),I.addEventListener("keyup",(function(e){var n=e.target.value;t===_&&n!==y?(e.preventDefault(),I.classList.add("nx-validation-failure"),I.classList.remove("nx-validation-success")):(t===_&&(I.classList.remove("nx-validation-failure"),I.classList.add("nx-validation-success")),("enter"===(e.key||"").toLocaleLowerCase("en")||13===e.keyCode)&&T.dispatchEvent(new Event("click")))}))),T.addEventListener("click",(function(e){if(t===_&&y&&I){if((I.value||"").toString()!==y)return I.focus(),I.classList.add("nx-validation-failure"),e.stopPropagation(),e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0,!1;I.classList.remove("nx-validation-failure")}"function"==typeof c&&(t===b&&I&&(x=I.value||""),c(x)),C.classList.add("nx-remove");var n=setTimeout((function(){null!==C.parentNode&&(C.parentNode.removeChild(C),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof c&&e.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof d&&(t===b&&I&&(x=I.value||""),d(x)),C.classList.add("nx-remove");var e=setTimeout((function(){null!==C.parentNode&&(C.parentNode.removeChild(C),clearTimeout(e))}),i.cssAnimationDuration)}))}i=B(!0,i,h)},ie=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},se=function(t,n,i,r,o){if(!U("body"))return!1;s||le.Loading.init({});var l=B(!0,s,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var c={};"object"==typeof n?c=n:"object"==typeof i&&(c=i),s=B(!0,s,c)}var d="";if("string"==typeof n&&0<n.length&&(d=n),r){var u="";0<(d=d.length>s.messageMaxLength?q(d).toString().substring(0,s.messageMaxLength)+"...":q(d).toString()).length&&(u='<p id="'+s.messageID+'" class="nx-loading-message" style="color:'+s.messageColor+";font-size:"+s.messageFontSize+';">'+d+"</p>"),s.cssAnimation||(s.cssAnimationDuration=0);var h="";if(t===x)h=H(s.svgSize,s.svgColor);else if(t===k)h=V(s.svgSize,s.svgColor);else if(t===C)h=$(s.svgSize,s.svgColor);else if(t===T)h=G(s.svgSize,s.svgColor);else if(t===I)h=X(s.svgSize,s.svgColor);else if(t===S)h=Y(s.svgSize,s.svgColor);else if(t===E&&null!==s.customSvgCode&&null===s.customSvgUrl)h=s.customSvgCode||"";else if(t===E&&null!==s.customSvgUrl&&null===s.customSvgCode)h='<img class="nx-custom-loading-icon" width="'+s.svgSize+'" height="'+s.svgSize+'" src="'+s.customSvgUrl+'" alt="Notiflix">';else{if(t===E&&(null===s.customSvgUrl||null===s.customSvgCode))return F('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;h=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(s.svgSize,"#f8f8f8","#32c682")}var p=parseInt((s.svgSize||"").replace(/[^0-9]/g,"")),f=e.innerWidth,m=p>=f?f-40+"px":p+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+s.className+"-icon"+(0<d.length?" nx-with-message":"")+'">'+h+"</div>",v=e.document.createElement("div");v.id=P.ID,v.className=s.className+(s.cssAnimation?" nx-with-animation":"")+(s.clickToClose?" nx-loading-click-to-close":""),v.style.zIndex=s.zindex,v.style.background=s.backgroundColor,v.style.animationDuration=s.cssAnimationDuration+"ms",v.style.fontFamily='"'+s.fontFamily+'", '+a,v.style.display="flex",v.style.flexWrap="wrap",v.style.flexDirection="column",v.style.alignItems="center",v.style.justifyContent="center",s.rtl&&(v.setAttribute("dir","rtl"),v.classList.add("nx-rtl-on")),v.innerHTML=g+u,!e.document.getElementById(v.id)&&(e.document.body.appendChild(v),s.clickToClose)&&e.document.getElementById(v.id).addEventListener("click",(function(){v.classList.add("nx-remove");var e=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(e))}),s.cssAnimationDuration)}))}else if(e.document.getElementById(P.ID))var y=e.document.getElementById(P.ID),_=setTimeout((function(){y.classList.add("nx-remove");var e=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(e))}),s.cssAnimationDuration);clearTimeout(_)}),o);s=B(!0,s,l)},re=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},oe=0,ae=function(t,n,i,s,o,l){var c;if(Array.isArray(i)){if(1>i.length)return F("Array of HTMLElements should contains at least one HTMLElement."),!1;c=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return F("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return F("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var d=e.document.querySelectorAll(i);if(1>d.length)return F('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;c=d}r||le.Block.init({});var u=B(!0,r,{});if("object"==typeof s&&!Array.isArray(s)||"object"==typeof o&&!Array.isArray(o)){var h={};"object"==typeof s?h=s:"object"==typeof o&&(h=o),r=B(!0,r,h)}var p="";"string"==typeof s&&0<s.length&&(p=s),r.cssAnimation||(r.cssAnimationDuration=0);var f=z.className;"string"==typeof r.className&&(f=r.className.trim());var m="number"==typeof r.querySelectorLimit?r.querySelectorLimit:200,g=(c||[]).length>=m?m:c.length,v="nx-block-temporary-position";if(t){for(var y,_=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],b=0;b<g;b++)if(y=c[b]){if(-1<_.indexOf(y.tagName.toLocaleLowerCase("en")))break;var w=y.querySelectorAll("[id^="+z.ID+"]");if(1>w.length){var x="";n&&(x=n===L?V(r.svgSize,r.svgColor):n===A?$(r.svgSize,r.svgColor):n===M?G(r.svgSize,r.svgColor):n===O?X(r.svgSize,r.svgColor):n===D?Y(r.svgSize,r.svgColor):H(r.svgSize,r.svgColor));var k='<span class="'+f+'-icon" style="width:'+r.svgSize+";height:"+r.svgSize+';">'+x+"</span>",C="";0<p.length&&(p=p.length>r.messageMaxLength?q(p).substring(0,r.messageMaxLength)+"...":q(p),C='<span style="font-size:'+r.messageFontSize+";color:"+r.messageColor+';" class="'+f+'-message">'+p+"</span>"),oe++;var T=e.document.createElement("div");T.id=z.ID+"-"+oe,T.className=f+(r.cssAnimation?" nx-with-animation":""),T.style.position=r.position,T.style.zIndex=r.zindex,T.style.background=r.backgroundColor,T.style.animationDuration=r.cssAnimationDuration+"ms",T.style.fontFamily='"'+r.fontFamily+'", '+a,T.style.display="flex",T.style.flexWrap="wrap",T.style.flexDirection="column",T.style.alignItems="center",T.style.justifyContent="center",r.rtl&&(T.setAttribute("dir","rtl"),T.classList.add("nx-rtl-on")),T.innerHTML=k+C;var I,S=e.getComputedStyle(y).getPropertyValue("position"),E="string"==typeof S?S.toLocaleLowerCase("en"):"relative",N=Math.round(1.25*parseInt(r.svgSize))+40,P="";N>(y.offsetHeight||0)&&(P="min-height:"+N+"px;"),I=y.getAttribute("id")?"#"+y.getAttribute("id"):y.classList[0]?"."+y.classList[0]:(y.tagName||"").toLocaleLowerCase("en");var R="",j=-1>=["absolute","relative","fixed","sticky"].indexOf(E);if(j||0<P.length){if(!U("head"))return!1;j&&(R="position:relative!important;");var K='<style id="Style-'+z.ID+"-"+oe+'">'+I+"."+v+"{"+R+P+"}</style>",J=e.document.createRange();J.selectNode(e.document.head);var Q=J.createContextualFragment(K);e.document.head.appendChild(Q),y.classList.add(v)}y.appendChild(T)}}}else var Z=function(t){var n=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t);var i=t.getAttribute("id"),s=e.document.getElementById("Style-"+i);s&&null!==s.parentNode&&s.parentNode.removeChild(s),clearTimeout(n)}),r.cssAnimationDuration)},ee=function(e){if(e&&0<e.length)for(var t,n=0;n<e.length;n++)(t=e[n])&&(t.classList.add("nx-remove"),Z(t));else W("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},te=function(e){var t=setTimeout((function(){e.classList.remove(v),clearTimeout(t)}),r.cssAnimationDuration+300)},ne=setTimeout((function(){for(var e,t=0;t<g;t++)(e=c[t])&&(te(e),w=e.querySelectorAll("[id^="+z.ID+"]"),ee(w));clearTimeout(ne)}),l);r=B(!0,r,u)},le={Notify:{init:function(e){t=B(!0,h,e),j(K,"NotiflixNotifyInternalCSS")},merge:function(e){return t?void(t=B(!0,t,e)):(F("You have to initialize the Notify module before call Merge function."),!1)},success:function(e,t,n){Q(l,e,t,n)},failure:function(e,t,n){Q(c,e,t,n)},warning:function(e,t,n){Q(d,e,t,n)},info:function(e,t,n){Q(u,e,t,n)}},Report:{init:function(e){n=B(!0,v,e),j(Z,"NotiflixReportInternalCSS")},merge:function(e){return n?void(n=B(!0,n,e)):(F("You have to initialize the Report module before call Merge function."),!1)},success:function(e,t,n,i,s){ee(p,e,t,n,i,s)},failure:function(e,t,n,i,s){ee(f,e,t,n,i,s)},warning:function(e,t,n,i,s){ee(m,e,t,n,i,s)},info:function(e,t,n,i,s){ee(g,e,t,n,i,s)}},Confirm:{init:function(e){i=B(!0,w,e),j(te,"NotiflixConfirmInternalCSS")},merge:function(e){return i?void(i=B(!0,i,e)):(F("You have to initialize the Confirm module before call Merge function."),!1)},show:function(e,t,n,i,s,r,o){ne(y,e,t,null,n,i,s,r,o)},ask:function(e,t,n,i,s,r,o,a){ne(_,e,t,n,i,s,r,o,a)},prompt:function(e,t,n,i,s,r,o,a){ne(b,e,t,n,i,s,r,o,a)}},Loading:{init:function(e){s=B(!0,P,e),j(ie,"NotiflixLoadingInternalCSS")},merge:function(e){return s?void(s=B(!0,s,e)):(F("You have to initialize the Loading module before call Merge function."),!1)},standard:function(e,t){se(x,e,t,!0,0)},hourglass:function(e,t){se(k,e,t,!0,0)},circle:function(e,t){se(C,e,t,!0,0)},arrows:function(e,t){se(T,e,t,!0,0)},dots:function(e,t){se(I,e,t,!0,0)},pulse:function(e,t){se(S,e,t,!0,0)},custom:function(e,t){se(E,e,t,!0,0)},notiflix:function(e,t){se(N,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),se(null,null,null,!1,e)},change:function(t){!function(t){"string"!=typeof t&&(t="");var n=e.document.getElementById(P.ID);if(n)if(0<t.length){t=t.length>s.messageMaxLength?q(t).substring(0,s.messageMaxLength)+"...":q(t);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=t;else{var r=e.document.createElement("p");r.id=s.messageID,r.className="nx-loading-message nx-loading-message-new",r.style.color=s.messageColor,r.style.fontSize=s.messageFontSize,r.innerHTML=t,n.appendChild(r)}}else F("Where is the new message?")}(t)}},Block:{init:function(e){r=B(!0,z,e),j(re,"NotiflixBlockInternalCSS")},merge:function(e){return r?void(r=B(!0,r,e)):(F('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(e,t,n){ae(!0,R,e,t,n)},hourglass:function(e,t,n){ae(!0,L,e,t,n)},circle:function(e,t,n){ae(!0,A,e,t,n)},arrows:function(e,t,n){ae(!0,M,e,t,n)},dots:function(e,t,n){ae(!0,O,e,t,n)},pulse:function(e,t,n){ae(!0,D,e,t,n)},remove:function(e,t){"number"!=typeof t&&(t=0),ae(!1,null,e,null,null,t)}}};return"object"==typeof e.Notiflix?B(!0,e.Notiflix,{Notify:le.Notify,Report:le.Report,Confirm:le.Confirm,Loading:le.Loading,Block:le.Block}):{Notify:le.Notify,Report:le.Report,Confirm:le.Confirm,Loading:le.Loading,Block:le.Block}},"function"==typeof define&&define.amd?define([],(function(){return c(l)})):"object"==typeof d?d=c(l):l.Notiflix=c(l);const p=document.querySelector(".list-categories"),f=document.querySelector(".books-cards__list");function m(){const e=document.querySelector(".books-cards__title");e&&e.remove(),function(){document.querySelectorAll(".category__link").forEach((e=>{e.classList.remove("current-category")}));const e=document.querySelector(".category__link-all");e.classList.contains("current-category")&&e.classList.remove("current-category")}(),f.innerHTML=""}function g(e){const t=e.split(" "),n=t.pop(t[t.length-1]),i=`<h1 class="books-cards__title">${t.join(" ")}\n        <span class="books-cards__title-accent"> ${n}</span></h1>`;f.insertAdjacentHTML("beforebegin",i)}function v(e){const t=e.map((e=>{const{_id:t,book_image:n,title:i,author:s}=e;return`\n    <li data-id="${t}" class="category-books__item">\n    <a href="" class="category-books__link">\n    <div class="category-books__img-thumb">\n    <img src="${n}" alt="${i}" class="category-books__img">\n    <p class="card-overlay">Quick view</p>\n    </div>\n    <h2 class="category-books__title">${i}</h2>\n    <p class="category-books__author">${s}</p>\n    </a>\n    </li>`})).join("");f.insertAdjacentHTML("beforeend",t)}p.addEventListener("click",(async function(e){f.classList.remove("top-books-list"),f.classList.add("category-books-list"),e.preventDefault(),e.target.classList.contains("category__link-all")&&(m(),e.target.classList.add("current-category"),w());if(e.target.classList.contains("category__link")){u(),m();const t=e.target.textContent;e.target.classList.add("current-category"),g(t);v(await a(t)),h()}}));function y(){window.scrollTo({top:0,behavior:"smooth"})}function _(e){const t=document.querySelectorAll(".js-cat-link");console.log(t),[...t].forEach((t=>{t.textContent===e?t.classList.add("current-category"):t.classList.contains("current-category")&&t.classList.remove("current-category")}))}({btnToTop:document.querySelector(".button-up")}).btnToTop.addEventListener("click",(()=>{y()}));const b={booksCardsList:document.querySelector(".books-cards__list"),booksCardsTitle:null,topBooksCategories:null,booksCardsButton:null};function w(){u(),o("top-books").then((e=>{console.log(b.booksCardsList),b.booksCardsList.classList.remove("category-books-list"),b.booksCardsList.classList.add("top-books-list"),b.booksCardsList.innerHTML="",g("Best Sellers Books"),function(e){const t=e.map((({list_name:e})=>`\n    <li class="top-books__item">\n    <h2 class="top-books-title">${e}</h2>\n    <ul class="top-books-categories__list">\n                \n    </ul>\n    <div class="top-books__button-box">\n    <button class="top-books__button" data-list_name="${e}">See More</button>\n    </div>\n    </li>\n    `)).join("");b.booksCardsList.insertAdjacentHTML("beforeend",t)}(e),b.topBooksCategories=document.querySelectorAll(".top-books-categories__list"),b.booksCardsButton=document.querySelector(".top-books__button"),function(e){let t=0;console.log(e[t].books),b.topBooksCategories.forEach((n=>{const i=e[t].books.map((({_id:e,book_image:t,title:n,author:i})=>`\n          <li data-id="${e}" class="category-books__item is-hidden-books">\n          <a href="" class="category-books__link">\n          <div class="category-books__img-thumb">\n          <img src="${t}" alt="${n}" class="category-books__img">\n          <p class="card-overlay">Quick view</p>\n          </div>\n          <h2 class="category-books__title">${n}</h2>\n          <p class="category-books__author">${i}</p>\n          </a>\n          </li>`)).join("");n.insertAdjacentHTML("beforeend",i),t++}))}(e),h()})).catch((()=>{console.log("Проблема з запитом!")}))}b.booksCardsList.addEventListener("click",(async function(e){if(e.preventDefault(),!e.target.classList.contains("top-books__button"))return void console.log("Ти натиснув не на кнопку.");console.log("Ти натиснув на кнопку."),b.booksCardsList.classList.remove("top-books-list"),b.booksCardsList.classList.add("category-books-list");const t=e.target.dataset.list_name;console.log(t),b.booksCardsTitle=document.querySelector(".books-cards__title"),b.booksCardsTitle.remove(),_(t),g(t),b.booksCardsList.innerHTML="",u();const n=await a(t);h(),y(),v(n)})),w();const x=document.querySelector(".list-categories");x.insertAdjacentHTML("afterbegin",'<li><a href="./index.html" class="js-cat-link category__link-all current-category">All category</a></li>'),async function(){const e=await o("category-list"),t=[];for(const{list_name:n}of e)t.push(n);console.log(t);const n=t.sort(((e,t)=>e.localeCompare(t))).map((e=>`<li class="category__item"><a href="" class="js-cat-link category__link">${e}</a></li>`)).join("");x.insertAdjacentHTML("beforeend",n)}();var k;k=new URL(r("kyEFX").resolve("8ovDh"),import.meta.url).toString();var C;C=new URL(r("kyEFX").resolve("cUNuN"),import.meta.url).toString();var T;T=new URL(r("kyEFX").resolve("hBvZY"),import.meta.url).toString();var I;I=new URL(r("kyEFX").resolve("ctymN"),import.meta.url).toString();var S;S=new URL(r("kyEFX").resolve("aMc5M"),import.meta.url).toString();var E;E=new URL(r("kyEFX").resolve("7ytG9"),import.meta.url).toString();var N;N=new URL(r("kyEFX").resolve("1lCPH"),import.meta.url).toString();var P;P=new URL(r("kyEFX").resolve("eRnj2"),import.meta.url).toString();var R;R=new URL(r("kyEFX").resolve("gImvE"),import.meta.url).toString();const L=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:new URL(k)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:new URL(C)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:new URL(T)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:new URL(I)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:new URL(S)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:new URL(E)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:new URL(N)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:new URL(P)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:new URL(R)}];function A(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function M(e={},t={}){Object.keys(t).forEach((n=>{void 0===e[n]?e[n]=t[n]:A(t[n])&&A(e[n])&&Object.keys(t[n]).length>0&&M(e[n],t[n])}))}const O={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function D(){const e="undefined"!=typeof document?document:{};return M(e,O),e}const z={document:O,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function F(){const e="undefined"!=typeof window?window:{};return M(e,z),e}function W(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}function U(e,t=0){return setTimeout(e,t)}function j(){return Date.now()}function B(e,t="x"){const n=F();let i,s,r;const o=function(e){const t=F();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}(e);return n.WebKitCSSMatrix?(s=o.transform||o.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map((e=>e.replace(",","."))).join(", ")),r=new n.WebKitCSSMatrix("none"===s?"":s)):(r=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=r.toString().split(",")),"x"===t&&(s=n.WebKitCSSMatrix?r.m41:16===i.length?parseFloat(i[12]):parseFloat(i[4])),"y"===t&&(s=n.WebKitCSSMatrix?r.m42:16===i.length?parseFloat(i[13]):parseFloat(i[5])),s||0}function q(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function H(...e){const t=Object(e[0]),n=["__proto__","constructor","prototype"];for(let s=1;s<e.length;s+=1){const r=e[s];if(null!=r&&(i=r,!("undefined"!=typeof window&&void 0!==window.HTMLElement?i instanceof HTMLElement:i&&(1===i.nodeType||11===i.nodeType)))){const e=Object.keys(Object(r)).filter((e=>n.indexOf(e)<0));for(let n=0,i=e.length;n<i;n+=1){const i=e[n],s=Object.getOwnPropertyDescriptor(r,i);void 0!==s&&s.enumerable&&(q(t[i])&&q(r[i])?r[i].__swiper__?t[i]=r[i]:H(t[i],r[i]):!q(t[i])&&q(r[i])?(t[i]={},r[i].__swiper__?t[i]=r[i]:H(t[i],r[i])):t[i]=r[i])}}}var i;return t}function V(e,t,n){e.style.setProperty(t,n)}function $({swiper:e,targetPosition:t,side:n}){const i=F(),s=-e.translate;let r,o=null;const a=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const l=t>s?"next":"prev",c=(e,t)=>"next"===l&&e>=t||"prev"===l&&e<=t,d=()=>{r=(new Date).getTime(),null===o&&(o=r);const l=Math.max(Math.min((r-o)/a,1),0),u=.5-Math.cos(l*Math.PI)/2;let h=s+u*(t-s);if(c(h,t)&&(h=t),e.wrapperEl.scrollTo({[n]:h}),c(h,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout((()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:h})})),void i.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=i.requestAnimationFrame(d)};d()}function G(e,t=""){return[...e.children].filter((e=>e.matches(t)))}function X(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:[t]),n}function Y(e,t){const n=[];for(;e.previousElementSibling;){const i=e.previousElementSibling;t?i.matches(t)&&n.push(i):n.push(i),e=i}return n}function K(e,t){const n=[];for(;e.nextElementSibling;){const i=e.nextElementSibling;t?i.matches(t)&&n.push(i):n.push(i),e=i}return n}function J(e,t){return F().getComputedStyle(e,null).getPropertyValue(t)}function Q(e){let t,n=e;if(n){for(t=0;null!==(n=n.previousSibling);)1===n.nodeType&&(t+=1);return t}}function Z(e,t){const n=[];let i=e.parentElement;for(;i;)t?i.matches(t)&&n.push(i):n.push(i),i=i.parentElement;return n}function ee(e,t,n){const i=F();return n?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}let te,ne,ie;function se(){return te||(te=function(){const e=F(),t=D();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),te}function re(e={}){return ne||(ne=function({userAgent:e}={}){const t=se(),n=F(),i=n.navigator.platform,s=e||n.navigator.userAgent,r={ios:!1,android:!1},o=n.screen.width,a=n.screen.height,l=s.match(/(Android);?[\s\/]+([\d.]+)?/);let c=s.match(/(iPad).*OS\s([\d_]+)/);const d=s.match(/(iPod)(.*OS\s([\d_]+))?/),u=!c&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h="Win32"===i;let p="MacIntel"===i;return!c&&p&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${a}`)>=0&&(c=s.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),p=!1),l&&!h&&(r.os="android",r.android=!0),(c||u||d)&&(r.os="ios",r.ios=!0),r}(e)),ne}function oe(){return ie||(ie=function(){const e=F();let t=!1;function n(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(n()){const n=String(e.navigator.userAgent);if(n.includes("Version/")){const[e,i]=n.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));t=e<16||16===e&&i<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),ie}const ae=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(n){const t=n.querySelector(`.${e.params.lazyPreloaderClass}`);t&&t.remove()}},le=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},ce=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const i="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),s=e.activeIndex,r=s+i-1;if(e.params.rewind)for(let i=s-t;i<=r+t;i+=1){const t=(i%n+n)%n;t!==s&&t>r&&le(e,t)}else for(let i=Math.max(r-t,0);i<=Math.min(r+t,n-1);i+=1)i!==s&&i>r&&le(e,i)};var de={updateSize:function(){const e=this;let t,n;const i=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:i.clientWidth,n=void 0!==e.params.height&&null!==e.params.height?e.params.height:i.clientHeight,0===t&&e.isHorizontal()||0===n&&e.isVertical()||(t=t-parseInt(J(i,"padding-left")||0,10)-parseInt(J(i,"padding-right")||0,10),n=n-parseInt(J(i,"padding-top")||0,10)-parseInt(J(i,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function n(e,n){return parseFloat(e.getPropertyValue(t(n))||0)}const i=e.params,{wrapperEl:s,slidesEl:r,size:o,rtlTranslate:a,wrongRTL:l}=e,c=e.virtual&&i.virtual.enabled,d=c?e.virtual.slides.length:e.slides.length,u=G(r,`.${e.params.slideClass}, swiper-slide`),h=c?e.virtual.slides.length:u.length;let p=[];const f=[],m=[];let g=i.slidesOffsetBefore;"function"==typeof g&&(g=i.slidesOffsetBefore.call(e));let v=i.slidesOffsetAfter;"function"==typeof v&&(v=i.slidesOffsetAfter.call(e));const y=e.snapGrid.length,_=e.slidesGrid.length;let b=i.spaceBetween,w=-g,x=0,k=0;if(void 0===o)return;"string"==typeof b&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*o:"string"==typeof b&&(b=parseFloat(b)),e.virtualSize=-b,u.forEach((e=>{a?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),i.centeredSlides&&i.cssMode&&(V(s,"--swiper-centered-offset-before",""),V(s,"--swiper-centered-offset-after",""));const C=i.grid&&i.grid.rows>1&&e.grid;let T;C&&e.grid.initSlides(h);const I="auto"===i.slidesPerView&&i.breakpoints&&Object.keys(i.breakpoints).filter((e=>void 0!==i.breakpoints[e].slidesPerView)).length>0;for(let s=0;s<h;s+=1){let r;if(T=0,u[s]&&(r=u[s]),C&&e.grid.updateSlide(s,r,h,t),!u[s]||"none"!==J(r,"display")){if("auto"===i.slidesPerView){I&&(u[s].style[t("width")]="");const o=getComputedStyle(r),a=r.style.transform,l=r.style.webkitTransform;if(a&&(r.style.transform="none"),l&&(r.style.webkitTransform="none"),i.roundLengths)T=e.isHorizontal()?ee(r,"width",!0):ee(r,"height",!0);else{const e=n(o,"width"),t=n(o,"padding-left"),i=n(o,"padding-right"),s=n(o,"margin-left"),a=n(o,"margin-right"),l=o.getPropertyValue("box-sizing");if(l&&"border-box"===l)T=e+s+a;else{const{clientWidth:n,offsetWidth:o}=r;T=e+t+i+s+a+(o-n)}}a&&(r.style.transform=a),l&&(r.style.webkitTransform=l),i.roundLengths&&(T=Math.floor(T))}else T=(o-(i.slidesPerView-1)*b)/i.slidesPerView,i.roundLengths&&(T=Math.floor(T)),u[s]&&(u[s].style[t("width")]=`${T}px`);u[s]&&(u[s].swiperSlideSize=T),m.push(T),i.centeredSlides?(w=w+T/2+x/2+b,0===x&&0!==s&&(w=w-o/2-b),0===s&&(w=w-o/2-b),Math.abs(w)<.001&&(w=0),i.roundLengths&&(w=Math.floor(w)),k%i.slidesPerGroup==0&&p.push(w),f.push(w)):(i.roundLengths&&(w=Math.floor(w)),(k-Math.min(e.params.slidesPerGroupSkip,k))%e.params.slidesPerGroup==0&&p.push(w),f.push(w),w=w+T+b),e.virtualSize+=T+b,x=T,k+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+v,a&&l&&("slide"===i.effect||"coverflow"===i.effect)&&(s.style.width=`${e.virtualSize+b}px`),i.setWrapperSize&&(s.style[t("width")]=`${e.virtualSize+b}px`),C&&e.grid.updateWrapperSize(T,p,t),!i.centeredSlides){const t=[];for(let n=0;n<p.length;n+=1){let s=p[n];i.roundLengths&&(s=Math.floor(s)),p[n]<=e.virtualSize-o&&t.push(s)}p=t,Math.floor(e.virtualSize-o)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-o)}if(c&&i.loop){const t=m[0]+b;if(i.slidesPerGroup>1){const n=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/i.slidesPerGroup),s=t*i.slidesPerGroup;for(let e=0;e<n;e+=1)p.push(p[p.length-1]+s)}for(let n=0;n<e.virtual.slidesBefore+e.virtual.slidesAfter;n+=1)1===i.slidesPerGroup&&p.push(p[p.length-1]+t),f.push(f[f.length-1]+t),e.virtualSize+=t}if(0===p.length&&(p=[0]),0!==b){const n=e.isHorizontal()&&a?"marginLeft":t("marginRight");u.filter(((e,t)=>!(i.cssMode&&!i.loop)||t!==u.length-1)).forEach((e=>{e.style[n]=`${b}px`}))}if(i.centeredSlides&&i.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(b||0)})),e-=b;const t=e-o;p=p.map((e=>e<0?-g:e>t?t+v:e))}if(i.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(b||0)})),e-=b,e<o){const t=(o-e)/2;p.forEach(((e,n)=>{p[n]=e-t})),f.forEach(((e,n)=>{f[n]=e+t}))}}if(Object.assign(e,{slides:u,snapGrid:p,slidesGrid:f,slidesSizesGrid:m}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){V(s,"--swiper-centered-offset-before",-p[0]+"px"),V(s,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+n))}if(h!==d&&e.emit("slidesLengthChange"),p.length!==y&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),f.length!==_&&e.emit("slidesGridLengthChange"),i.watchSlidesProgress&&e.updateSlidesOffset(),!(c||i.cssMode||"slide"!==i.effect&&"fade"!==i.effect)){const t=`${i.containerModifierClass}backface-hidden`,n=e.el.classList.contains(t);h<=i.maxBackfaceHiddenSlides?n||e.el.classList.add(t):n&&e.el.classList.remove(t)}},updateAutoHeight:function(e){const t=this,n=[],i=t.virtual&&t.params.virtual.enabled;let s,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const o=e=>i?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{n.push(e)}));else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){const e=t.activeIndex+s;if(e>t.slides.length&&!i)break;n.push(o(e))}else n.push(o(t.activeIndex));for(s=0;s<n.length;s+=1)if(void 0!==n[s]){const e=n[s].offsetHeight;r=e>r?e:r}(r||0===r)&&(t.wrapperEl.style.height=`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let i=0;i<t.length;i+=1)t[i].swiperSlideOffset=(e.isHorizontal()?t[i].offsetLeft:t[i].offsetTop)-n-e.cssOverflowAdjustment()},updateSlidesProgress:function(e=this&&this.translate||0){const t=this,n=t.params,{slides:i,rtlTranslate:s,snapGrid:r}=t;if(0===i.length)return;void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();let o=-e;s&&(o=e),i.forEach((e=>{e.classList.remove(n.slideVisibleClass)})),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=n.spaceBetween;"string"==typeof a&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:"string"==typeof a&&(a=parseFloat(a));for(let e=0;e<i.length;e+=1){const l=i[e];let c=l.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=i[0].swiperSlideOffset);const d=(o+(n.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+a),u=(o-r[0]+(n.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+a),h=-(o-c),p=h+t.slidesSizesGrid[e];(h>=0&&h<t.size-1||p>1&&p<=t.size||h<=0&&p>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),i[e].classList.add(n.slideVisibleClass)),l.progress=s?-d:d,l.originalProgress=s?-u:u}},updateProgress:function(e){const t=this;if(void 0===e){const n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}const n=t.params,i=t.maxTranslate()-t.minTranslate();let{progress:s,isBeginning:r,isEnd:o,progressLoop:a}=t;const l=r,c=o;if(0===i)s=0,r=!0,o=!0;else{s=(e-t.minTranslate())/i;const n=Math.abs(e-t.minTranslate())<1,a=Math.abs(e-t.maxTranslate())<1;r=n||s<=0,o=a||s>=1,n&&(s=0),a&&(s=1)}if(n.loop){const n=t.getSlideIndexByData(0),i=t.getSlideIndexByData(t.slides.length-1),s=t.slidesGrid[n],r=t.slidesGrid[i],o=t.slidesGrid[t.slidesGrid.length-1],l=Math.abs(e);a=l>=s?(l-s)/o:(l+o-r)/o,a>1&&(a-=1)}Object.assign(t,{progress:s,progressLoop:a,isBeginning:r,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!r||c&&!o)&&t.emit("fromEdge"),t.emit("progress",s)},updateSlidesClasses:function(){const e=this,{slides:t,params:n,slidesEl:i,activeIndex:s}=e,r=e.virtual&&n.virtual.enabled,o=e=>G(i,`.${n.slideClass}${e}, swiper-slide${e}`)[0];let a;if(t.forEach((e=>{e.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)})),r)if(n.loop){let t=s-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),a=o(`[data-swiper-slide-index="${t}"]`)}else a=o(`[data-swiper-slide-index="${s}"]`);else a=t[s];if(a){a.classList.add(n.slideActiveClass);let e=K(a,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!e&&(e=t[0]),e&&e.classList.add(n.slideNextClass);let i=Y(a,`.${n.slideClass}, swiper-slide`)[0];n.loop,i&&i.classList.add(n.slidePrevClass)}e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:i,params:s,activeIndex:r,realIndex:o,snapIndex:a}=t;let l,c=e;const d=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if(void 0===c&&(c=function(e){const{slidesGrid:t,params:n}=e,i=e.rtlTranslate?e.translate:-e.translate;let s;for(let e=0;e<t.length;e+=1)void 0!==t[e+1]?i>=t[e]&&i<t[e+1]-(t[e+1]-t[e])/2?s=e:i>=t[e]&&i<t[e+1]&&(s=e+1):i>=t[e]&&(s=e);return n.normalizeSlideIndex&&(s<0||void 0===s)&&(s=0),s}(t)),i.indexOf(n)>=0)l=i.indexOf(n);else{const e=Math.min(s.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/s.slidesPerGroup)}if(l>=i.length&&(l=i.length-1),c===r)return l!==a&&(t.snapIndex=l,t.emit("snapIndexChange")),void(t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=d(c)));let u;u=t.virtual&&s.virtual.enabled&&s.loop?d(c):t.slides[c]?parseInt(t.slides[c].getAttribute("data-swiper-slide-index")||c,10):c,Object.assign(t,{previousSnapIndex:a,snapIndex:l,previousRealIndex:o,realIndex:u,previousIndex:r,activeIndex:c}),t.initialized&&ce(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),o!==u&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,n=t.params,i=e.closest(`.${n.slideClass}, swiper-slide`);let s,r=!1;if(i)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===i){r=!0,s=e;break}if(!i||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=s,n.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var ue={getTranslate:function(e=(this.isHorizontal()?"x":"y")){const{params:t,rtlTranslate:n,translate:i,wrapperEl:s}=this;if(t.virtualTranslate)return n?-i:i;if(t.cssMode)return i;let r=B(s,e);return r+=this.cssOverflowAdjustment(),n&&(r=-r),r||0},setTranslate:function(e,t){const n=this,{rtlTranslate:i,params:s,wrapperEl:r,progress:o}=n;let a,l=0,c=0;n.isHorizontal()?l=i?-e:e:c=e,s.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:c,s.cssMode?r[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-c:s.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),r.style.transform=`translate3d(${l}px, ${c}px, 0px)`);const d=n.maxTranslate()-n.minTranslate();a=0===d?0:(e-n.minTranslate())/d,a!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e=0,t=this.params.speed,n=!0,i=!0,s){const r=this,{params:o,wrapperEl:a}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const l=r.minTranslate(),c=r.maxTranslate();let d;if(d=i&&e>l?l:i&&e<c?c:e,r.updateProgress(d),o.cssMode){const e=r.isHorizontal();if(0===t)a[e?"scrollLeft":"scrollTop"]=-d;else{if(!r.support.smoothScroll)return $({swiper:r,targetPosition:-d,side:e?"left":"top"}),!0;a.scrollTo({[e?"left":"top"]:-d,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(d),n&&(r.emit("beforeTransitionStart",t,s),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(d),n&&(r.emit("beforeTransitionStart",t,s),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,n&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}};function he({swiper:e,runCallbacks:t,direction:n,step:i}){const{activeIndex:s,previousIndex:r}=e;let o=n;if(o||(o=s>r?"next":s<r?"prev":"reset"),e.emit(`transition${i}`),t&&s!==r){if("reset"===o)return void e.emit(`slideResetTransition${i}`);e.emit(`slideChangeTransition${i}`),"next"===o?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}var pe={slideTo:function(e=0,t=this.params.speed,n=!0,i,s){"string"==typeof e&&(e=parseInt(e,10));const r=this;let o=e;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:h,wrapperEl:p,enabled:f}=r;if(r.animating&&a.preventInteractionOnTransition||!f&&!i&&!s)return!1;const m=Math.min(r.params.slidesPerGroupSkip,o);let g=m+Math.floor((o-m)/r.params.slidesPerGroup);g>=l.length&&(g=l.length-1);const v=-l[g];if(a.normalizeSlideIndex)for(let e=0;e<c.length;e+=1){const t=-Math.floor(100*v),n=Math.floor(100*c[e]),i=Math.floor(100*c[e+1]);void 0!==c[e+1]?t>=n&&t<i-(i-n)/2?o=e:t>=n&&t<i&&(o=e+1):t>=n&&(o=e)}if(r.initialized&&o!==u){if(!r.allowSlideNext&&v<r.translate&&v<r.minTranslate())return!1;if(!r.allowSlidePrev&&v>r.translate&&v>r.maxTranslate()&&(u||0)!==o)return!1}let y;if(o!==(d||0)&&n&&r.emit("beforeSlideChangeStart"),r.updateProgress(v),y=o>u?"next":o<u?"prev":"reset",h&&-v===r.translate||!h&&v===r.translate)return r.updateActiveIndex(o),a.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==a.effect&&r.setTranslate(v),"reset"!==y&&(r.transitionStart(n,y),r.transitionEnd(n,y)),!1;if(a.cssMode){const e=r.isHorizontal(),n=h?v:-v;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),t&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{p[e?"scrollLeft":"scrollTop"]=n}))):p[e?"scrollLeft":"scrollTop"]=n,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1}))}else{if(!r.support.smoothScroll)return $({swiper:r,targetPosition:n,side:e?"left":"top"}),!0;p.scrollTo({[e?"left":"top"]:n,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(v),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,i),r.transitionStart(n,y),0===t?r.transitionEnd(n,y):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(n,y))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e=0,t=this.params.speed,n=!0,i){if("string"==typeof e){e=parseInt(e,10)}const s=this;let r=e;return s.params.loop&&(s.virtual&&s.params.virtual.enabled?r+=s.virtual.slidesBefore:r=s.getSlideIndexByData(r)),s.slideTo(r,t,n,i)},slideNext:function(e=this.params.speed,t=!0,n){const i=this,{enabled:s,params:r,animating:o}=i;if(!s)return i;let a=r.slidesPerGroup;"auto"===r.slidesPerView&&1===r.slidesPerGroup&&r.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<r.slidesPerGroupSkip?1:a,c=i.virtual&&r.virtual.enabled;if(r.loop){if(o&&!c&&r.loopPreventsSliding)return!1;i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft}return r.rewind&&i.isEnd?i.slideTo(0,e,t,n):i.slideTo(i.activeIndex+l,e,t,n)},slidePrev:function(e=this.params.speed,t=!0,n){const i=this,{params:s,snapGrid:r,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=i;if(!l)return i;const d=i.virtual&&s.virtual.enabled;if(s.loop){if(c&&!d&&s.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}function u(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const h=u(a?i.translate:-i.translate),p=r.map((e=>u(e)));let f=r[p.indexOf(h)-1];if(void 0===f&&s.cssMode){let e;r.forEach(((t,n)=>{h>=t&&(e=n)})),void 0!==e&&(f=r[e>0?e-1:e])}let m=0;if(void 0!==f&&(m=o.indexOf(f),m<0&&(m=i.activeIndex-1),"auto"===s.slidesPerView&&1===s.slidesPerGroup&&s.slidesPerGroupAuto&&(m=m-i.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),s.rewind&&i.isBeginning){const s=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(s,e,t,n)}return i.slideTo(m,e,t,n)},slideReset:function(e=this.params.speed,t=!0,n){return this.slideTo(this.activeIndex,e,t,n)},slideToClosest:function(e=this.params.speed,t=!0,n,i=.5){const s=this;let r=s.activeIndex;const o=Math.min(s.params.slidesPerGroupSkip,r),a=o+Math.floor((r-o)/s.params.slidesPerGroup),l=s.rtlTranslate?s.translate:-s.translate;if(l>=s.snapGrid[a]){const e=s.snapGrid[a];l-e>(s.snapGrid[a+1]-e)*i&&(r+=s.params.slidesPerGroup)}else{const e=s.snapGrid[a-1];l-e<=(s.snapGrid[a]-e)*i&&(r-=s.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,s.slidesGrid.length-1),s.slideTo(r,e,t,n)},slideToClickedSlide:function(){const e=this,{params:t,slidesEl:n}=e,i="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let s,r=e.clickedIndex;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;s=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-i/2||r>e.slides.length-e.loopedSlides+i/2?(e.loopFix(),r=e.getSlideIndex(G(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),U((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-i?(e.loopFix(),r=e.getSlideIndex(G(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),U((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}};function fe(e){const t=this,n=D(),i=F(),s=t.touchEventsData;s.evCache.push(e);const{params:r,touches:o,enabled:a}=t;if(!a)return;if(!r.simulateTouch&&"mouse"===e.pointerType)return;if(t.animating&&r.preventInteractionOnTransition)return;!t.animating&&r.cssMode&&r.loop&&t.loopFix();let l=e;l.originalEvent&&(l=l.originalEvent);let c=l.target;if("wrapper"===r.touchEventsTarget&&!t.wrapperEl.contains(c))return;if("which"in l&&3===l.which)return;if("button"in l&&l.button>0)return;if(s.isTouched&&s.isMoved)return;const d=!!r.noSwipingClass&&""!==r.noSwipingClass,u=e.composedPath?e.composedPath():e.path;d&&l.target&&l.target.shadowRoot&&u&&(c=u[0]);const h=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,p=!(!l.target||!l.target.shadowRoot);if(r.noSwiping&&(p?function(e,t=this){return function t(n){if(!n||n===D()||n===F())return null;n.assignedSlot&&(n=n.assignedSlot);const i=n.closest(e);return i||n.getRootNode?i||t(n.getRootNode().host):null}(t)}(h,c):c.closest(h)))return void(t.allowClick=!0);if(r.swipeHandler&&!c.closest(r.swipeHandler))return;o.currentX=l.pageX,o.currentY=l.pageY;const f=o.currentX,m=o.currentY,g=r.edgeSwipeDetection||r.iOSEdgeSwipeDetection,v=r.edgeSwipeThreshold||r.iOSEdgeSwipeThreshold;if(g&&(f<=v||f>=i.innerWidth-v)){if("prevent"!==g)return;e.preventDefault()}Object.assign(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=f,o.startY=m,s.touchStartTime=j(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,r.threshold>0&&(s.allowThresholdMove=!1);let y=!0;c.matches(s.focusableElements)&&(y=!1,"SELECT"===c.nodeName&&(s.isTouched=!1)),n.activeElement&&n.activeElement.matches(s.focusableElements)&&n.activeElement!==c&&n.activeElement.blur();const _=y&&t.allowTouchMove&&r.touchStartPreventDefault;!r.touchStartForcePreventDefault&&!_||c.isContentEditable||l.preventDefault(),t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!r.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",l)}function me(e){const t=D(),n=this,i=n.touchEventsData,{params:s,touches:r,rtlTranslate:o,enabled:a}=n;if(!a)return;if(!s.simulateTouch&&"mouse"===e.pointerType)return;let l=e;if(l.originalEvent&&(l=l.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&n.emit("touchMoveOpposite",l));const c=i.evCache.findIndex((e=>e.pointerId===l.pointerId));c>=0&&(i.evCache[c]=l);const d=i.evCache.length>1?i.evCache[0]:l,u=d.pageX,h=d.pageY;if(l.preventedByNestedSwiper)return r.startX=u,void(r.startY=h);if(!n.allowTouchMove)return l.target.matches(i.focusableElements)||(n.allowClick=!1),void(i.isTouched&&(Object.assign(r,{startX:u,startY:h,prevX:n.touches.currentX,prevY:n.touches.currentY,currentX:u,currentY:h}),i.touchStartTime=j()));if(s.touchReleaseOnEdges&&!s.loop)if(n.isVertical()){if(h<r.startY&&n.translate<=n.maxTranslate()||h>r.startY&&n.translate>=n.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(u<r.startX&&n.translate<=n.maxTranslate()||u>r.startX&&n.translate>=n.minTranslate())return;if(t.activeElement&&l.target===t.activeElement&&l.target.matches(i.focusableElements))return i.isMoved=!0,void(n.allowClick=!1);if(i.allowTouchCallbacks&&n.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;r.currentX=u,r.currentY=h;const p=r.currentX-r.startX,f=r.currentY-r.startY;if(n.params.threshold&&Math.sqrt(p**2+f**2)<n.params.threshold)return;if(void 0===i.isScrolling){let e;n.isHorizontal()&&r.currentY===r.startY||n.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:p*p+f*f>=25&&(e=180*Math.atan2(Math.abs(f),Math.abs(p))/Math.PI,i.isScrolling=n.isHorizontal()?e>s.touchAngle:90-e>s.touchAngle)}if(i.isScrolling&&n.emit("touchMoveOpposite",l),void 0===i.startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(i.startMoving=!0)),i.isScrolling||n.zoom&&n.params.zoom&&n.params.zoom.enabled&&i.evCache.length>1)return void(i.isTouched=!1);if(!i.startMoving)return;n.allowClick=!1,!s.cssMode&&l.cancelable&&l.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&l.stopPropagation();let m=n.isHorizontal()?p:f,g=n.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;s.oneWayMovement&&(m=Math.abs(m)*(o?1:-1),g=Math.abs(g)*(o?1:-1)),r.diff=m,m*=s.touchRatio,o&&(m=-m,g=-g);const v=n.touchesDirection;n.swipeDirection=m>0?"prev":"next",n.touchesDirection=g>0?"prev":"next";const y=n.params.loop&&!s.cssMode;if(!i.isMoved){if(y&&n.loopFix({direction:n.swipeDirection}),i.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(e)}i.allowMomentumBounce=!1,!s.grabCursor||!0!==n.allowSlideNext&&!0!==n.allowSlidePrev||n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let _;i.isMoved&&v!==n.touchesDirection&&y&&Math.abs(m)>=1&&(n.loopFix({direction:n.swipeDirection,setTranslate:!0}),_=!0),n.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=m+i.startTranslate;let b=!0,w=s.resistanceRatio;if(s.touchReleaseOnEdges&&(w=0),m>0?(y&&!_&&i.currentTranslate>(s.centeredSlides?n.minTranslate()-n.size/2:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>n.minTranslate()&&(b=!1,s.resistance&&(i.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+i.startTranslate+m)**w))):m<0&&(y&&!_&&i.currentTranslate<(s.centeredSlides?n.maxTranslate()+n.size/2:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-("auto"===s.slidesPerView?n.slidesPerViewDynamic():Math.ceil(parseFloat(s.slidesPerView,10)))}),i.currentTranslate<n.maxTranslate()&&(b=!1,s.resistance&&(i.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-i.startTranslate-m)**w))),b&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&"next"===n.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!n.allowSlidePrev&&"prev"===n.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),n.allowSlidePrev||n.allowSlideNext||(i.currentTranslate=i.startTranslate),s.threshold>0){if(!(Math.abs(m)>s.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,void(r.diff=n.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}s.followFinger&&!s.cssMode&&((s.freeMode&&s.freeMode.enabled&&n.freeMode||s.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&s.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(i.currentTranslate),n.setTranslate(i.currentTranslate))}function ge(e){const t=this,n=t.touchEventsData,i=n.evCache.findIndex((t=>t.pointerId===e.pointerId));if(i>=0&&n.evCache.splice(i,1),["pointercancel","pointerout","pointerleave"].includes(e.type)){if(!("pointercancel"===e.type&&(t.browser.isSafari||t.browser.isWebView)))return}const{params:s,touches:r,rtlTranslate:o,slidesGrid:a,enabled:l}=t;if(!l)return;if(!s.simulateTouch&&"mouse"===e.pointerType)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",c),n.allowTouchCallbacks=!1,!n.isTouched)return n.isMoved&&s.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,void(n.startMoving=!1);s.grabCursor&&n.isMoved&&n.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=j(),u=d-n.touchStartTime;if(t.allowClick){const e=c.path||c.composedPath&&c.composedPath();t.updateClickedSlide(e&&e[0]||c.target),t.emit("tap click",c),u<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",c)}if(n.lastClickTime=j(),U((()=>{t.destroyed||(t.allowClick=!0)})),!n.isTouched||!n.isMoved||!t.swipeDirection||0===r.diff||n.currentTranslate===n.startTranslate)return n.isTouched=!1,n.isMoved=!1,void(n.startMoving=!1);let h;if(n.isTouched=!1,n.isMoved=!1,n.startMoving=!1,h=s.followFinger?o?t.translate:-t.translate:-n.currentTranslate,s.cssMode)return;if(t.params.freeMode&&s.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let p=0,f=t.slidesSizesGrid[0];for(let e=0;e<a.length;e+=e<s.slidesPerGroupSkip?1:s.slidesPerGroup){const t=e<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;void 0!==a[e+t]?h>=a[e]&&h<a[e+t]&&(p=e,f=a[e+t]-a[e]):h>=a[e]&&(p=e,f=a[a.length-1]-a[a.length-2])}let m=null,g=null;s.rewind&&(t.isBeginning?g=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(m=0));const v=(h-a[p])/f,y=p<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(u>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(v>=s.longSwipesRatio?t.slideTo(s.rewind&&t.isEnd?m:p+y):t.slideTo(p)),"prev"===t.swipeDirection&&(v>1-s.longSwipesRatio?t.slideTo(p+y):null!==g&&v<0&&Math.abs(v)>s.longSwipesRatio?t.slideTo(g):t.slideTo(p))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(c.target===t.navigation.nextEl||c.target===t.navigation.prevEl)?c.target===t.navigation.nextEl?t.slideTo(p+y):t.slideTo(p):("next"===t.swipeDirection&&t.slideTo(null!==m?m:p+y),"prev"===t.swipeDirection&&t.slideTo(null!==g?g:p))}}function ve(){const e=this,{params:t,el:n}=e;if(n&&0===n.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:s,snapGrid:r}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=o&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||a?e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=s,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function ye(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function _e(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:i}=e;if(!i)return;let s;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();s=0===r?0:(e.translate-e.minTranslate())/r,s!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function be(e){ae(this,e.target),this.update()}let we=!1;function xe(){}const ke=(e,t)=>{const n=D(),{params:i,el:s,wrapperEl:r,device:o}=e,a=!!i.nested,l="on"===t?"addEventListener":"removeEventListener",c=t;s[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:a}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&s[l]("click",e.onClick,!0),i.cssMode&&r[l]("scroll",e.onScroll),i.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",ve,!0):e[c]("observerUpdate",ve,!0),s[l]("load",e.onLoad,{capture:!0})};const Ce=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var Te={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Ie(e,t){return function(n={}){const i=Object.keys(n)[0],s=n[i];"object"==typeof s&&null!==s?(["navigation","pagination","scrollbar"].indexOf(i)>=0&&!0===e[i]&&(e[i]={auto:!0}),i in e&&"enabled"in s?(!0===e[i]&&(e[i]={enabled:!0}),"object"!=typeof e[i]||"enabled"in e[i]||(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),H(t,n)):H(t,n)):H(t,n)}}const Se={eventsEmitter:{on(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof t)return i;const s=n?"unshift":"push";return e.split(" ").forEach((e=>{i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][s](t)})),i},once(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof t)return i;function s(...n){i.off(e,s),s.__emitterProxy&&delete s.__emitterProxy,t.apply(i,n)}return s.__emitterProxy=t,i.on(e,s,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof e)return n;const i=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[i](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed?n:n.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach(((i,s)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[e].splice(s,1)}))})),n):n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsListeners)return t;let n,i,s;"string"==typeof e[0]||Array.isArray(e[0])?(n=e[0],i=e.slice(1,e.length),s=t):(n=e[0].events,i=e[0].data,s=e[0].context||t),i.unshift(s);return(Array.isArray(n)?n:n.split(" ")).forEach((e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach((t=>{t.apply(s,[e,...i])})),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach((e=>{e.apply(s,i)}))})),t}},update:de,translate:ue,transition:{setTransition:function(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`),n.emit("setTransition",e,t)},transitionStart:function(e=!0,t){const n=this,{params:i}=n;i.cssMode||(i.autoHeight&&n.updateAutoHeight(),he({swiper:n,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e=!0,t){const n=this,{params:i}=n;n.animating=!1,i.cssMode||(n.setTransition(0),he({swiper:n,runCallbacks:e,direction:t,step:"End"}))}},slide:pe,loop:{loopCreate:function(e){const t=this,{params:n,slidesEl:i}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;G(i,`.${n.slideClass}, swiper-slide`).forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)})),t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})},loopFix:function({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:i,activeSlideIndex:s,byController:r,byMousewheel:o}={}){const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:l,allowSlidePrev:c,allowSlideNext:d,slidesEl:u,params:h}=a;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&h.virtual.enabled)return t&&(h.centeredSlides||0!==a.snapIndex?h.centeredSlides&&a.snapIndex<h.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0):a.slideTo(a.virtual.slides.length,0,!1,!0)),a.allowSlidePrev=c,a.allowSlideNext=d,void a.emit("loopFix");const p="auto"===h.slidesPerView?a.slidesPerViewDynamic():Math.ceil(parseFloat(h.slidesPerView,10));let f=h.loopedSlides||p;f%h.slidesPerGroup!=0&&(f+=h.slidesPerGroup-f%h.slidesPerGroup),a.loopedSlides=f;const m=[],g=[];let v=a.activeIndex;void 0===s?s=a.getSlideIndex(a.slides.filter((e=>e.classList.contains(h.slideActiveClass)))[0]):v=s;const y="next"===n||!n,_="prev"===n||!n;let b=0,w=0;if(s<f){b=Math.max(f-s,h.slidesPerGroup);for(let e=0;e<f-s;e+=1){const t=e-Math.floor(e/l.length)*l.length;m.push(l.length-t-1)}}else if(s>a.slides.length-2*f){w=Math.max(s-(a.slides.length-2*f),h.slidesPerGroup);for(let e=0;e<w;e+=1){const t=e-Math.floor(e/l.length)*l.length;g.push(t)}}if(_&&m.forEach((e=>{a.slides[e].swiperLoopMoveDOM=!0,u.prepend(a.slides[e]),a.slides[e].swiperLoopMoveDOM=!1})),y&&g.forEach((e=>{a.slides[e].swiperLoopMoveDOM=!0,u.append(a.slides[e]),a.slides[e].swiperLoopMoveDOM=!1})),a.recalcSlides(),"auto"===h.slidesPerView&&a.updateSlides(),h.watchSlidesProgress&&a.updateSlidesOffset(),t)if(m.length>0&&_)if(void 0===e){const e=a.slidesGrid[v],t=a.slidesGrid[v+b]-e;o?a.setTranslate(a.translate-t):(a.slideTo(v+b,0,!1,!0),i&&(a.touches[a.isHorizontal()?"startX":"startY"]+=t))}else i&&a.slideToLoop(e,0,!1,!0);else if(g.length>0&&y)if(void 0===e){const e=a.slidesGrid[v],t=a.slidesGrid[v-w]-e;o?a.setTranslate(a.translate-t):(a.slideTo(v-w,0,!1,!0),i&&(a.touches[a.isHorizontal()?"startX":"startY"]+=t))}else a.slideToLoop(e,0,!1,!0);if(a.allowSlidePrev=c,a.allowSlideNext=d,a.controller&&a.controller.control&&!r){const t={slideRealIndex:e,slideTo:!1,direction:n,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach((e=>{!e.destroyed&&e.params.loop&&e.loopFix(t)})):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix(t)}a.emit("loopFix")},loopDestroy:function(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const i=[];e.slides.forEach((e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;i[t]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),i.forEach((e=>{n.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}},grabCursor:{setGrabCursor:function(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))},unsetGrabCursor:function(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}},events:{attachEvents:function(){const e=this,t=D(),{params:n}=e;e.onTouchStart=fe.bind(e),e.onTouchMove=me.bind(e),e.onTouchEnd=ge.bind(e),n.cssMode&&(e.onScroll=_e.bind(e)),e.onClick=ye.bind(e),e.onLoad=be.bind(e),we||(t.addEventListener("touchstart",xe),we=!0),ke(e,"on")},detachEvents:function(){ke(this,"off")}},breakpoints:{setBreakpoint:function(){const e=this,{realIndex:t,initialized:n,params:i,el:s}=e,r=i.breakpoints;if(!r||r&&0===Object.keys(r).length)return;const o=e.getBreakpoint(r,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const a=(o in r?r[o]:void 0)||e.originalParams,l=Ce(e,i),c=Ce(e,a),d=i.enabled;l&&!c?(s.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!l&&c&&(s.classList.add(`${i.containerModifierClass}grid`),(a.grid.fill&&"column"===a.grid.fill||!a.grid.fill&&"column"===i.grid.fill)&&s.classList.add(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const n=i[t]&&i[t].enabled,s=a[t]&&a[t].enabled;n&&!s&&e[t].disable(),!n&&s&&e[t].enable()}));const u=a.direction&&a.direction!==i.direction,h=i.loop&&(a.slidesPerView!==i.slidesPerView||u);u&&n&&e.changeDirection(),H(e.params,a);const p=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),d&&!p?e.disable():!d&&p&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",a),h&&n&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",a)},getBreakpoint:function(e,t="window",n){if(!e||"container"===t&&!n)return;let i=!1;const s=F(),r="window"===t?s.innerHeight:n.clientHeight,o=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:r*t,point:e}}return{value:e,point:e}}));o.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<o.length;e+=1){const{point:r,value:a}=o[e];"window"===t?s.matchMedia(`(min-width: ${a}px)`).matches&&(i=r):a<=n.clientWidth&&(i=r)}return i||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:i}=n;if(i){const t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*i;e.isLocked=e.size>n}else e.isLocked=1===e.snapGrid.length;!0===n.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===n.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:n,rtl:i,el:s,device:r}=e,o=function(e,t){const n=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((i=>{e[i]&&n.push(t+i)})):"string"==typeof e&&n.push(t+e)})),n}(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:i},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&"column"===n.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),s.classList.add(...t),e.emitContainerClasses()},removeClasses:function(){const{el:e,classNames:t}=this;e.classList.remove(...t),this.emitContainerClasses()}}},Ee={};class Ne{getSlideIndex(e){const{slidesEl:t,params:n}=this,i=Q(G(t,`.${n.slideClass}, swiper-slide`)[0]);return Q(e)-i}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=G(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const i=n.minTranslate(),s=(n.maxTranslate()-i)*e+i;n.translateTo(s,void 0===t?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((n=>{const i=e.getSlideClasses(n);t.push({slideEl:n,classNames:i}),e.emit("_slideClass",n,i)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const{params:n,slides:i,slidesGrid:s,slidesSizesGrid:r,size:o,activeIndex:a}=this;let l=1;if(n.centeredSlides){let e,t=i[a].swiperSlideSize;for(let n=a+1;n<i.length;n+=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,l+=1,t>o&&(e=!0));for(let n=a-1;n>=0;n-=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,l+=1,t>o&&(e=!0))}else if("current"===e)for(let e=a+1;e<i.length;e+=1){(t?s[e]+r[e]-s[a]<o:s[e]-s[a]<o)&&(l+=1)}else for(let e=a-1;e>=0;e-=1){s[a]-s[e]<o&&(l+=1)}return l}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;function i(){const t=e.rtlTranslate?-1*e.translate:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&ae(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled)i(),e.params.autoHeight&&e.updateAutoHeight();else{if(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides){const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(t.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||i()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const n=this,i=n.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(n.el.classList.remove(`${n.params.containerModifierClass}${i}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if("string"==typeof n&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.shadowEl&&(t.isElement=!0);const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=(()=>{if(n&&n.shadowRoot&&n.shadowRoot.querySelector){return n.shadowRoot.querySelector(i())}return G(n,i())[0]})();return!s&&t.params.createElements&&(s=X("div",t.params.wrapperClass),n.append(s),G(n,`.${t.params.slideClass}`).forEach((e=>{s.append(e)}))),Object.assign(t,{el:n,wrapperEl:s,slidesEl:t.isElement?n:s,mounted:!0,rtl:"rtl"===n.dir.toLowerCase()||"rtl"===J(n,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===n.dir.toLowerCase()||"rtl"===J(n,"direction")),wrongRTL:"-webkit-box"===J(s,"display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach((e=>{e.complete?ae(t,e):e.addEventListener("load",(e=>{ae(t,e.target)}))})),ce(t),t.initialized=!0,ce(t),t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const n=this,{params:i,el:s,wrapperEl:r,slides:o}=n;return void 0===n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),i.loop&&n.loopDestroy(),t&&(n.removeClasses(),s.removeAttribute("style"),r.removeAttribute("style"),o&&o.length&&o.forEach((e=>{e.classList.remove(i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),n.emit("destroy"),Object.keys(n.eventsListeners).forEach((e=>{n.off(e)})),!1!==e&&(n.el.swiper=null,W(n)),n.destroyed=!0),null}static extendDefaults(e){H(Ee,e)}static get extendedDefaults(){return Ee}static get defaults(){return Te}static installModule(e){Ne.prototype.__modules__||(Ne.prototype.__modules__=[]);const t=Ne.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>Ne.installModule(e))),Ne):(Ne.installModule(e),Ne)}constructor(...e){let t,n;1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?n=e[0]:[t,n]=e,n||(n={}),n=H({},n),t&&!n.el&&(n.el=t);const i=D();if(n.el&&"string"==typeof n.el&&i.querySelectorAll(n.el).length>1){const e=[];return i.querySelectorAll(n.el).forEach((t=>{const i=H({},n,{el:t});e.push(new Ne(i))})),e}const s=this;s.__swiper__=!0,s.support=se(),s.device=re({userAgent:n.userAgent}),s.browser=oe(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],n.modules&&Array.isArray(n.modules)&&s.modules.push(...n.modules);const r={};s.modules.forEach((e=>{e({params:n,swiper:s,extendParams:Ie(n,r),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})}));const o=H({},Te,r);return s.params=H({},o,Ee,n),s.originalParams=H({},s.params),s.passedParams=H({},n),s.params&&s.params.on&&Object.keys(s.params.on).forEach((e=>{s.on(e,s.params.on[e])})),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===s.params.direction,isVertical:()=>"vertical"===s.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return 8388608*Math.trunc(this.translate/8388608)},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}}Object.keys(Se).forEach((e=>{Object.keys(Se[e]).forEach((t=>{Ne.prototype[t]=Se[e][t]}))})),Ne.use([function({swiper:e,on:t,emit:n}){const i=F();let s=null,r=null;const o=()=>{e&&!e.destroyed&&e.initialized&&(n("beforeResize"),n("resize"))},a=()=>{e&&!e.destroyed&&e.initialized&&n("orientationchange")};t("init",(()=>{e.params.resizeObserver&&void 0!==i.ResizeObserver?e&&!e.destroyed&&e.initialized&&(s=new ResizeObserver((t=>{r=i.requestAnimationFrame((()=>{const{width:n,height:i}=e;let s=n,r=i;t.forEach((({contentBoxSize:t,contentRect:n,target:i})=>{i&&i!==e.el||(s=n?n.width:(t[0]||t).inlineSize,r=n?n.height:(t[0]||t).blockSize)})),s===n&&r===i||o()}))})),s.observe(e.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",a))})),t("destroy",(()=>{r&&i.cancelAnimationFrame(r),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",a)}))},function({swiper:e,extendParams:t,on:n,emit:i}){const s=[],r=F(),o=(t,n={})=>{const o=new(r.MutationObserver||r.WebkitMutationObserver)((t=>{if(e.__preventObserver__)return;if(1===t.length)return void i("observerUpdate",t[0]);const n=function(){i("observerUpdate",t[0])};r.requestAnimationFrame?r.requestAnimationFrame(n):r.setTimeout(n,0)}));o.observe(t,{attributes:void 0===n.attributes||n.attributes,childList:void 0===n.childList||n.childList,characterData:void 0===n.characterData||n.characterData}),s.push(o)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",(()=>{if(e.params.observer){if(e.params.observeParents){const t=Z(e.el);for(let e=0;e<t.length;e+=1)o(t[e])}o(e.el,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}})),n("destroy",(()=>{s.forEach((e=>{e.disconnect()})),s.splice(0,s.length)}))}]);var Pe=Ne;const Re=document.querySelector(".list-support"),Le=(Me(Ae=L),Ae.map((({title:e,url:t,img:n,key:i})=>`<li class="swiper-slide support__item"><span>${i}</span>\n            <a class="support__link" href="${t}" target="_blank"\n                  rel="noreferrer noopener nofollow">\n                <img\n                    class="support__image"\n                    src="${n}"\n                    data-source="${t}"\n                    alt="${e}"\n                />\n            </a>\n        </li>`)).join(""));var Ae;Re.insertAdjacentHTML("beforeend",Le);new Pe(".swiper",{direction:"vertical",breakpointsBase:Re,centeredSlidesBounds:!0,loop:!0,effect:"flip",cssMode:!0,slidesPerView:4,spaceBetween:10,breakpoints:{320:{slidesPerView:4,spaceBetween:20},768:{slidesPerView:6,spaceBetween:20}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"}});function Me(e){return e[0].key="01",e[1].key="02",e[2].key="03",e[3].key="04",e[4].key="05",e[5].key="06",e[6].key="07",e[7].key="08",e[8].key="09",e}Me(L),console.log(L);var Oe,De,ze,Fe=Oe={};function We(){throw new Error("setTimeout has not been defined")}function Ue(){throw new Error("clearTimeout has not been defined")}function je(e){if(De===setTimeout)return setTimeout(e,0);if((De===We||!De)&&setTimeout)return De=setTimeout,setTimeout(e,0);try{return De(e,0)}catch(t){try{return De.call(null,e,0)}catch(t){return De.call(this,e,0)}}}!function(){try{De="function"==typeof setTimeout?setTimeout:We}catch(e){De=We}try{ze="function"==typeof clearTimeout?clearTimeout:Ue}catch(e){ze=Ue}}();var Be,qe=[],He=!1,Ve=-1;function $e(){He&&Be&&(He=!1,Be.length?qe=Be.concat(qe):Ve=-1,qe.length&&Ge())}function Ge(){if(!He){var e=je($e);He=!0;for(var t=qe.length;t;){for(Be=qe,qe=[];++Ve<t;)Be&&Be[Ve].run();Ve=-1,t=qe.length}Be=null,He=!1,function(e){if(ze===clearTimeout)return clearTimeout(e);if((ze===Ue||!ze)&&clearTimeout)return ze=clearTimeout,clearTimeout(e);try{ze(e)}catch(t){try{return ze.call(null,e)}catch(t){return ze.call(this,e)}}}(e)}}function Xe(e,t){this.fun=e,this.array=t}function Ye(){}Fe.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];qe.push(new Xe(e,t)),1!==qe.length||He||je(Ge)},Xe.prototype.run=function(){this.fun.apply(null,this.array)},Fe.title="browser",Fe.browser=!0,Fe.env={},Fe.argv=[],Fe.version="",Fe.versions={},Fe.on=Ye,Fe.addListener=Ye,Fe.once=Ye,Fe.off=Ye,Fe.removeListener=Ye,Fe.removeAllListeners=Ye,Fe.emit=Ye,Fe.prependListener=Ye,Fe.prependOnceListener=Ye,Fe.listeners=function(e){return[]},Fe.binding=function(e){throw new Error("process.binding is not supported")},Fe.cwd=function(){return"/"},Fe.chdir=function(e){throw new Error("process.chdir is not supported")},Fe.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ke=!1,Je=!1,Qe="${JSCORE_VERSION}",Ze=function(e,t){if(!e)throw et(t)},et=function(e){return new Error("Firebase Database ("+Qe+") INTERNAL ASSERT FAILED: "+e)},tt=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},nt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=s>>2,d=(3&s)<<4|o>>4;let u=(15&o)<<2|l>>6,h=63&l;a||(h=64,r||(u=64)),i.push(n[c],n[d],n[u],n[h])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(tt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw new it;const l=s<<2|r>>4;if(i.push(l),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const st=function(e){const t=tt(e);return nt.encodeByteArray(t,!0)},rt=function(e){return st(e).replace(/\./g,"")},ot=function(e){try{return nt.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function at(e){return lt(void 0,e)}function lt(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=lt(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ct=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,dt=()=>{try{return ct()||(()=>{if(void 0===Oe||void 0===Oe.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&ot(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},ut=e=>{var t,n;return null===(n=null===(t=dt())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ht=e=>{const t=ut(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},pt=e=>{var t;return null===(t=dt())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[rt(JSON.stringify({alg:"none",type:"JWT"})),rt(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function vt(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function yt(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function _t(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function bt(){const e=gt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function wt(){return!0===Ke||!0===Je}function xt(){try{return"object"==typeof indexedDB}catch(e){return!1}}class kt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ct.prototype.create)}}class Ct{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(Tt,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new kt(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const Tt=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e){return JSON.parse(e)}function St(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=It(ot(r[0])||""),n=It(ot(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:s}},Nt=function(e){const t=Et(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},Pt=function(e){const t=Et(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Lt(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function At(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Mt(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function Ot(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(Dt(n)&&Dt(r)){if(!Ot(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function Dt(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zt(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Ft(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function Wt(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),s=1518500249):(i=o^a^l,s=1859775393):e<60?(i=o&a|l&(o|a),s=2400959708):(i=o^a^l,s=3395469782);const t=(r<<5|r>>>27)+i+c+s+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<t;)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function jt(e,t){const n=new Bt(e,t);return n.subscribe.bind(n)}class Bt{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=qt),void 0===i.error&&(i.error=qt),void 0===i.complete&&(i.complete=qt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function qt(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vt=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,Ze(i<e.length,"Surrogate pair missing trail surrogate.");s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},$t=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(e){return e&&e._delegate?e._delegate:e}class Xt{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ft;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Kt{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Yt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=[];var Qt,Zt;(Zt=Qt||(Qt={}))[Zt.DEBUG=0]="DEBUG",Zt[Zt.VERBOSE=1]="VERBOSE",Zt[Zt.INFO=2]="INFO",Zt[Zt.WARN=3]="WARN",Zt[Zt.ERROR=4]="ERROR",Zt[Zt.SILENT=5]="SILENT";const en={debug:Qt.DEBUG,verbose:Qt.VERBOSE,info:Qt.INFO,warn:Qt.WARN,error:Qt.ERROR,silent:Qt.SILENT},tn=Qt.INFO,nn={[Qt.DEBUG]:"log",[Qt.VERBOSE]:"log",[Qt.INFO]:"info",[Qt.WARN]:"warn",[Qt.ERROR]:"error"},sn=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=nn[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class rn{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Qt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?en[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Qt.DEBUG,...e),this._logHandler(this,Qt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Qt.VERBOSE,...e),this._logHandler(this,Qt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Qt.INFO,...e),this._logHandler(this,Qt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Qt.WARN,...e),this._logHandler(this,Qt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Qt.ERROR,...e),this._logHandler(this,Qt.ERROR,...e)}constructor(e){this.name=e,this._logLevel=tn,this._logHandler=sn,this._userLogHandler=null,Jt.push(this)}}let on,an;const ln=new WeakMap,cn=new WeakMap,dn=new WeakMap,un=new WeakMap,hn=new WeakMap;let pn={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return cn.get(e);if("objectStoreNames"===t)return e.objectStoreNames||dn.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gn(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function fn(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(an||(an=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(vn(this),t),gn(ln.get(this))}:function(...t){return gn(e.apply(vn(this),t))}:function(t,...n){const i=e.call(vn(this),t,...n);return dn.set(i,t.sort?t.sort():[t]),gn(i)}}function mn(e){return"function"==typeof e?fn(e):(e instanceof IDBTransaction&&function(e){if(cn.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));cn.set(e,t)}(e),t=e,(on||(on=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,pn):e);var t}function gn(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(gn(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&ln.set(t,e)})).catch((()=>{})),hn.set(t,e),t}(e);if(un.has(e))return un.get(e);const t=mn(e);return t!==e&&(un.set(e,t),hn.set(t,e)),t}const vn=e=>hn.get(e);function yn(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=gn(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(gn(o.result),e.oldVersion,e.newVersion,gn(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const _n=["get","getKey","getAll","getAllKeys","count"],bn=["put","add","delete","clear"],wn=new Map;function xn(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(wn.get(t))return wn.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=bn.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!_n.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return wn.set(t,r),r}pn=(e=>({...e,get:(t,n,i)=>xn(t,n)||e.get(t,n,i),has:(t,n)=>!!xn(t,n)||e.has(t,n)}))(pn);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kn{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Cn=new rn("@firebase/app"),Tn={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},In=new Map,Sn=new Map;function En(e,t){try{e.container.addComponent(t)}catch(n){Cn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Nn(e){const t=e.name;if(Sn.has(t))return Cn.debug(`There were multiple attempts to register component ${t}.`),!1;Sn.set(t,e);for(const t of In.values())En(t,e);return!0}function Pn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rn=new Ct("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ln{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rn.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Xt("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw Rn.create("bad-app-name",{appName:String(s)});var r;if(n||(n=null===(r=dt())||void 0===r?void 0:r.config),!n)throw Rn.create("no-options");const o=In.get(s);if(o){if(Ot(n,o.options)&&Ot(i,o.config))return o;throw Rn.create("duplicate-app",{appName:s})}const a=new Kt(s);for(const e of Sn.values())a.addComponent(e);const l=new Ln(n,i,a);return In.set(s,l),l}function Mn(e="[DEFAULT]"){const t=In.get(e);if(!t&&"[DEFAULT]"===e)return An();if(!t)throw Rn.create("no-app",{appName:e});return t}function On(e,t,n){var i;let s=null!==(i=Tn[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Cn.warn(e.join(" "))}Nn(new Xt(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}let Dn=null;function zn(){return Dn||(Dn=yn("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw Rn.create("idb-open",{originalErrorMessage:e.message})}))),Dn}async function Fn(e,t){try{const n=(await zn()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,Wn(e)),n.done}catch(e){if(e instanceof kt)Cn.warn(e.message);else{const t=Rn.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Cn.warn(t.message)}}}function Wn(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=jn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=jn(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),qn(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qn(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=rt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Bn(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function jn(){return(new Date).toISOString().substring(0,10)}class Bn{async runIndexedDBEnvironmentCheck(){return!!xt()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{return(await zn()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Wn(e))}catch(e){if(e instanceof kt)Cn.warn(e.message);else{const t=Rn.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Cn.warn(t.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Fn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Fn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function qn(e){return rt(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hn;Hn="",Nn(new Xt("platform-logger",(e=>new kn(e)),"PRIVATE")),Nn(new Xt("heartbeat",(e=>new Un(e)),"PRIVATE")),On("@firebase/app","0.9.9",Hn),On("@firebase/app","0.9.9","esm2017"),On("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
On("firebase","9.21.0","app");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vn="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $n{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),St(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:It(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Rt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new $n(t)}}catch(e){}return new Gn},Yn=Xn("localStorage"),Kn=Xn("sessionStorage"),Jn=new rn("@firebase/database"),Qn=function(){let e=1;return function(){return e++}}(),Zn=function(e){const t=Vt(e),n=new Ut;n.update(t);const i=n.digest();return nt.encodeByteArray(i)},ei=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=ei.apply(null,i):t+="object"==typeof i?St(i):i,t+=" "}return t};let ti=null,ni=!0;const ii=function(e,t){Ze(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Jn.logLevel=Qt.VERBOSE,ti=Jn.log.bind(Jn),t&&Kn.set("logging_enabled",!0)):"function"==typeof e?ti=e:(ti=null,Kn.remove("logging_enabled"))},si=function(...e){if(!0===ni&&(ni=!1,null===ti&&!0===Kn.get("logging_enabled")&&ii(!0)),ti){const t=ei.apply(null,e);ti(t)}},ri=function(e){return function(...t){si(e,...t)}},oi=function(...e){const t="FIREBASE INTERNAL ERROR: "+ei(...e);Jn.error(t)},ai=function(...e){const t=`FIREBASE FATAL ERROR: ${ei(...e)}`;throw Jn.error(t),new Error(t)},li=function(...e){const t="FIREBASE WARNING: "+ei(...e);Jn.warn(t)},ci=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},di=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=yi(e),i=yi(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},ui=function(e,t){return e===t?0:e<t?-1:1},hi=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+St(t))},pi=function(e){if("object"!=typeof e||null===e)return St(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=St(t[i]),n+=":",n+=pi(e[t[i]]);return n+="}",n},fi=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function mi(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const gi=function(e){Ze(!ci(e),"Invalid JSON number");const t=1023;let n,i,s,r,o;0===e?(i=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=r+t,s=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,s=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(s%2?1:0),s=Math.floor(s/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const vi=new RegExp("^-?(0*)\\d{1,10}$"),yi=function(e){if(vi.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},_i=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw li("Exception was thrown by user callback.",t),e}),Math.floor(0))}},bi=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wi{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){li(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(si("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',li(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class ki{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}ki.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ci=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ti{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,i,s=!1,r="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yn.get("host:"+e)||this._host}}function Ii(e,t,n){let i;if(Ze("string"==typeof t,"typeof type must == string"),Ze("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return mi(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{incrementCounter(e,t=1){Rt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return at(this.counters_)}constructor(){this.counters_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei={},Ni={};function Pi(e){const t=e.toString();return Ei[t]||(Ei[t]=new Si),Ei[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ri{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&_i((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ri(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(wt()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ai(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Ci.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Li.forceAllow_=!0}static forceDisallow(){Li.forceDisallow_=!0}static isAvailable(){return!wt()&&(!!Li.forceAllow_||!(Li.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=St(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=st(t),i=fi(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(wt())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=St(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ri(e),this.stats_=Pi(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Ii(t,"long_polling",e))}}class Ai{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||si("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){wt()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{si("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,wt())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=Qn(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ai.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){si("frame writing exception"),e.stack&&si(e.stack),si(e)}}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi=null;"undefined"!=typeof MozWebSocket?Mi=MozWebSocket:"undefined"!=typeof WebSocket&&(Mi=WebSocket);class Oi{static connectionURL_(e,t,n,i,s){const r={v:"5"};return!wt()&&"undefined"!=typeof location&&location.hostname&&Ci.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r.ac=i),s&&(r.p=s),Ii(e,"websocket",r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yn.set("previous_websocket_failure",!0);try{let e;if(wt()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${Vn}/${Oe.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new Mi(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Oi.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Mi&&!Oi.forceDisallow_}static previouslyFailed(){return Yn.isInMemoryStorage||!0===Yn.get("previous_websocket_failure")}markConnectionHealthy(){Yn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=It(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Ze(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=St(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=fi(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ri(this.connId),this.stats_=Pi(t),this.connURL=Oi.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}}Oi.responsesRequiredToBeHealthy=2,Oi.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Di{static get ALL_TRANSPORTS(){return[Li,Oi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Oi&&Oi.isAvailable();let n=t&&!Oi.previouslyFailed();if(e.webSocketOnly&&(t||li("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Oi];else{const e=this.transports_=[];for(const t of Di.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);Di.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}Di.globalTransportInitialized_=!1;class zi{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=bi((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=hi("t",e),n=hi("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=hi("t",e),n=hi("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=hi("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?oi("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):oi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&li("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),bi((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):bi((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,i,s,r,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ri("c:"+this.id+":"),this.transportManager_=new Di(t),this.log_("Connection created"),this.start_()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){Ze(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},Ze(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends Wi{static getInstance(){return new Ui}getInitialEvent(e){return Ze("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||vt()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function Bi(){return new ji("")}function qi(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Hi(e){return e.pieces_.length-e.pieceNum_}function Vi(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ji(e.pieces_,t)}function $i(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Gi(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Xi(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ji(t,0)}function Yi(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof ji)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ji(n,0)}function Ki(e){return e.pieceNum_>=e.pieces_.length}function Ji(e,t){const n=qi(e),i=qi(t);if(null===n)return t;if(n===i)return Ji(Vi(e),Vi(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Qi(e,t){const n=Gi(e,0),i=Gi(t,0);for(let e=0;e<n.length&&e<i.length;e++){const t=di(n[e],i[e]);if(0!==t)return t}return n.length===i.length?0:n.length<i.length?-1:1}function Zi(e,t){if(Hi(e)!==Hi(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function es(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Hi(e)>Hi(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class ts{constructor(e,t){this.errorPrefix_=t,this.parts_=Gi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=$t(this.parts_[e]);ns(this)}}function ns(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+is(e))}function is(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends Wi{static getInstance(){return new ss}getInitialEvent(e){return Ze("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends Fi{sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(St(s)),Ze(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new ft,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),Ze(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Ze(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;rs.warnOnListenWarnings_(r,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Rt(e,"w")){const n=Lt(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();li(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||Pt(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Nt(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Ze(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+St(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):oi("Unrecognized action received from server: "+St(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Ze(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+rs.nextConnectionId_++,s=this.lastSessionId;let r=!1,o=null;const a=function(){o?o.close():(r=!0,n())},l=function(e){Ze(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);r?si("getToken() completed but was canceled"):(si("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new zi(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{li(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),r||(this.repoInfo_.nodeAdmin&&li(e),a())}}}interrupt(e){si("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){si("Resuming connection for reason: "+e),delete this.interruptReasons_[e],At(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>pi(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new ji(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){si("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){si("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";wt()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Vn.replace(/\./g,"-")]=1,vt()?e["framework.cordova"]=1:_t()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ui.getInstance().currentlyOnline();return At(this.interruptReasons_)&&e}constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=rs.nextPersistentConnectionId_++,this.log_=ri("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!wt())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ss.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Ui.getInstance().on("online",this.onOnline_,this)}}rs.nextPersistentConnectionId_=0,rs.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class os{static Wrap(e,t){return new os(e,t)}constructor(e,t){this.name=e,this.node=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new os("[MIN_NAME]",e),i=new os("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return os.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls;class cs extends as{static get __EMPTY_NODE(){return ls}static set __EMPTY_NODE(e){ls=e}compare(e,t){return di(e.name,t.name)}isDefinedOn(e){throw et("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return os.MIN}maxPost(){return new os("[MAX_NAME]",ls)}makePost(e,t){return Ze("string"==typeof e,"KeyIndex indexValue must always be a string."),new os(e,ls)}toString(){return".key"}}const ds=new cs;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class hs{copy(e,t,n,i,s){return new hs(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ps.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return ps.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,hs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,hs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:hs.RED,this.left=null!=i?i:ps.EMPTY_NODE,this.right=null!=s?s:ps.EMPTY_NODE}}hs.RED=!0,hs.BLACK=!1;class ps{insert(e,t){return new ps(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,hs.BLACK,null,null))}remove(e){return new ps(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,hs.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new us(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new us(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new us(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new us(this.root_,null,this.comparator_,!0,e)}constructor(e,t=ps.EMPTY_NODE){this.comparator_=e,this.root_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fs(e,t){return di(e.name,t.name)}function ms(e,t){return di(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs;ps.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new hs(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const vs=function(e){return"number"==typeof e?"number:"+gi(e):"string:"+e},ys=function(e){if(e.isLeafNode()){const t=e.val();Ze("string"==typeof t||"number"==typeof t||"object"==typeof t&&Rt(t,".sv"),"Priority must be a string or number.")}else Ze(e===gs||e.isEmpty(),"priority of unexpected type.");Ze(e===gs||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let _s,bs,ws;class xs{static set __childrenNodeConstructor(e){_s=e}static get __childrenNodeConstructor(){return _s}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xs(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:xs.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ki(e)?this:".priority"===qi(e)?this.priorityNode_:xs.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:xs.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=qi(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Ze(".priority"!==n||1===Hi(e),".priority must be the last token in a path"),this.updateImmediateChild(n,xs.__childrenNodeConstructor.EMPTY_NODE.updateChild(Vi(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+vs(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?gi(this.value_):this.value_,this.lazyHash_=Zn(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xs.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xs.__childrenNodeConstructor?-1:(Ze(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=xs.VALUE_TYPE_ORDER.indexOf(t),s=xs.VALUE_TYPE_ORDER.indexOf(n);return Ze(i>=0,"Unknown leaf type: "+t),Ze(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=xs.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Ze(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),ys(this.priorityNode_)}}xs.VALUE_TYPE_ORDER=["object","boolean","number","string"];const ks=new class extends as{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?di(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return os.MIN}maxPost(){return new os("[MAX_NAME]",new xs("[PRIORITY-POST]",ws))}makePost(e,t){const n=bs(e);return new os(t,new xs("[PRIORITY-POST]",n))}toString(){return".priority"}},Cs=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Cs,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}}const Is=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new hs(a,o.node,hs.BLACK,null,null);{const l=parseInt(r/2,10)+t,c=s(t,l),d=s(l+1,i);return o=e[l],a=n?n(o):o,new hs(a,o.node,hs.BLACK,c,d)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const c=s(r+1,a),d=e[r],u=n?n(d):d;l(new hs(u,d.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,hs.BLACK):(a(i,hs.BLACK),a(i,hs.RED))}return r}(new Ts(e.length));return new ps(i||t,r)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss;const Es={};class Ns{static get Default(){return Ze(Es&&ks,"ChildrenNode.ts has not been loaded"),Ss=Ss||new Ns({".priority":Es},{".priority":ks}),Ss}get(e){const t=Lt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ps?t:null}hasIndex(e){return Rt(this.indexSet_,e.toString())}addIndex(e,t){Ze(e!==ds,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(os.Wrap);let r,o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?Is(n,e.getCompare()):Es;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=r,new Ns(c,l)}addToIndexes(e,t){const n=Mt(this.indexes_,((n,i)=>{const s=Lt(this.indexSet_,i);if(Ze(s,"Missing index implementation for "+i),n===Es){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(os.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),Is(n,s.getCompare())}return Es}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new os(e.name,i))),s.insert(e,e.node)}}));return new Ns(n,this.indexSet_)}removeFromIndexes(e,t){const n=Mt(this.indexes_,(n=>{if(n===Es)return n;{const i=t.get(e.name);return i?n.remove(new os(e.name,i)):n}}));return new Ns(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps;class Rs{static get EMPTY_NODE(){return Ps||(Ps=new Rs(new ps(ms),null,Ns.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ps}updatePriority(e){return this.children_.isEmpty()?this:new Rs(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Ps:t}}getChild(e){const t=qi(e);return null===t?this:this.getImmediateChild(t).getChild(Vi(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Ze(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new os(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?Ps:this.priorityNode_;return new Rs(i,r,s)}}updateChild(e,t){const n=qi(e);if(null===n)return t;{Ze(".priority"!==qi(e)||1===Hi(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Vi(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(ks,((r,o)=>{t[r]=o.val(e),n++,s&&Rs.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+vs(this.getPriority().val())+":"),this.forEachChild(ks,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Zn(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new os(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new os(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new os(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,os.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,os.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ls?-1:0}withIndex(e){if(e===ds||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Rs(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ds||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(ks),n=t.getIterator(ks);let i=e.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===ds?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&ys(this.priorityNode_),this.children_.isEmpty()&&Ze(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}Rs.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Ls=new class extends Rs{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Rs.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new ps(ms),Rs.EMPTY_NODE,Ns.Default)}};Object.defineProperties(os,{MIN:{value:new os("[MIN_NAME]",Rs.EMPTY_NODE)},MAX:{value:new os("[MAX_NAME]",Ls)}}),cs.__EMPTY_NODE=Rs.EMPTY_NODE,xs.__childrenNodeConstructor=Rs,gs=Ls,function(e){ws=e}(Ls);function As(e,t=null){if(null===e)return Rs.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Ze(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new xs(e,As(t))}if(e instanceof Array){let n=Rs.EMPTY_NODE;return mi(e,((t,i)=>{if(Rt(e,t)&&"."!==t.substring(0,1)){const e=As(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(As(t))}{const n=[];let i=!1;if(mi(e,((e,t)=>{if("."!==e.substring(0,1)){const s=As(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new os(e,s)))}})),0===n.length)return Rs.EMPTY_NODE;const s=Is(n,fs,(e=>e.name),ms);if(i){const e=Is(n,ks.getCompare());return new Rs(s,As(t),new Ns({".priority":e},{".priority":ks}))}return new Rs(s,As(t),Ns.Default)}}!function(e){bs=e}(As);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ms extends as{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?di(e.name,t.name):s}makePost(e,t){const n=As(e),i=Rs.EMPTY_NODE.updateChild(this.indexPath_,n);return new os(t,i)}maxPost(){const e=Rs.EMPTY_NODE.updateChild(this.indexPath_,Ls);return new os("[MAX_NAME]",e)}toString(){return Gi(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,Ze(!Ki(e)&&".priority"!==qi(e),"Can't create PathIndex with empty path or .priority key")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=new class extends as{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?di(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return os.MIN}maxPost(){return os.MAX}makePost(e,t){const n=As(e);return new os(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(e){return{type:"value",snapshotNode:e}}function zs(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Fs(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Ws(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Us{updateChild(e,t,n,i,s,r){Ze(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=r&&(n.isEmpty()?e.hasChild(t)?r.trackChildChange(Fs(t,o)):Ze(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?r.trackChildChange(zs(t,n)):r.trackChildChange(Ws(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(ks,((e,i)=>{t.hasChild(e)||n.trackChildChange(Fs(e,i))})),t.isLeafNode()||t.forEachChild(ks,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(Ws(t,i,s))}else n.trackChildChange(zs(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Rs.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}constructor(e){this.index_=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,s,r){return this.matches(new os(t,n))||(n=Rs.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Rs.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Rs.EMPTY_NODE);const s=this;return t.forEachChild(ks,((e,t)=>{s.matches(new os(e,t))||(i=i.updateImmediateChild(e,Rs.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}constructor(e){this.indexedFilter_=new Us(e.getIndex()),this.index_=e.getIndex(),this.startPost_=js.getStartPost_(e),this.endPost_=js.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new os(t,n))||(n=Rs.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=Rs.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=Rs.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(Rs.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,Rs.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let r;if(this.reverse_){const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else r=this.index_.getCompare();const o=e;Ze(o.numChildren()===this.limit_,"");const a=new os(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=d&&(d.name===t||o.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const u=null==d?1:r(d,a);if(c&&!n.isEmpty()&&u>=0)return null!=s&&s.trackChildChange(Ws(t,n,e)),o.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(Fs(t,e));const n=o.updateImmediateChild(t,Rs.EMPTY_NODE);return null!=d&&this.rangedFilter_.matches(d)?(null!=s&&s.trackChildChange(zs(d.name,d.node)),n.updateImmediateChild(d.name,d.node)):n}}return n.isEmpty()?e:c&&r(l,a)>=0?(null!=s&&(s.trackChildChange(Fs(l.name,l.node)),s.trackChildChange(zs(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,Rs.EMPTY_NODE)):e}constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new js(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Ze(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Ze(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return Ze(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Ze(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Ze(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ks}copy(){const e=new qs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ks}}function Hs(e){const t={};if(e.isDefault())return t;let n;if(e.index_===ks?n="$priority":e.index_===Os?n="$value":e.index_===ds?n="$key":(Ze(e.index_ instanceof Ms,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=St(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=St(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+St(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=St(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+St(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Vs(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==ks&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s extends Fi{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Ze(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=$s.getListenId_(e,n),o={};this.listens_[r]=o;const a=Hs(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),Lt(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=$s.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Hs(e._queryParams),n=e._path.toString(),i=new ft;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+zt(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=It(o.responseText)}catch(e){li("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&li("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=ri("p:rest:"),this.listens_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=Rs.EMPTY_NODE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(){return{value:null,children:new Map}}function Ys(e,t,n){if(Ki(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=qi(t);e.children.has(i)||e.children.set(i,Xs());Ys(e.children.get(i),t=Vi(t),n)}}function Ks(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{Ks(i,new ji(t.toString()+"/"+e),n)}))}class Js{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&mi(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;mi(e,((e,i)=>{i>0&&Rt(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),bi(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Js(e);const n=1e4+2e4*Math.random();bi(this.reportStats_.bind(this),Math.floor(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zs,er;function tr(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(er=Zs||(Zs={}))[er.OVERWRITE=0]="OVERWRITE",er[er.MERGE=1]="MERGE",er[er.ACK_USER_WRITE=2]="ACK_USER_WRITE",er[er.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class nr{operationForChild(e){if(Ki(this.path)){if(null!=this.affectedTree.value)return Ze(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ji(e));return new nr(Bi(),t,this.revert)}}return Ze(qi(this.path)===e,"operationForChild called for unrelated child."),new nr(Vi(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Zs.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{operationForChild(e){return Ki(this.path)?new ir(this.source,Bi()):new ir(this.source,Vi(this.path))}constructor(e,t){this.source=e,this.path=t,this.type=Zs.LISTEN_COMPLETE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{operationForChild(e){return Ki(this.path)?new sr(this.source,Bi(),this.snap.getImmediateChild(e)):new sr(this.source,Vi(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Zs.OVERWRITE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{operationForChild(e){if(Ki(this.path)){const t=this.children.subtree(new ji(e));return t.isEmpty()?null:t.value?new sr(this.source,Bi(),t.value):new rr(this.source,Bi(),t)}return Ze(qi(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new rr(this.source,Vi(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Zs.MERGE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ki(e))return this.isFullyInitialized()&&!this.filtered_;const t=qi(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function lr(e,t,n,i,s,r){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw et("Should only compare child_ events.");const i=new os(t.childName,t.snapshotNode),s=new os(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function cr(e,t){return{eventCache:e,serverCache:t}}function dr(e,t,n,i){return cr(new or(t,n,i),e.serverCache)}function ur(e,t,n,i){return cr(e.eventCache,new or(t,n,i))}function hr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function pr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fr;class mr{static fromObject(e){let t=new mr(null);return mi(e,((e,n)=>{t=t.set(new ji(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Bi(),value:this.value};if(Ki(e))return null;{const n=qi(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(Vi(e),t);if(null!=s){return{path:Yi(new ji(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Ki(e))return this;{const t=qi(e),n=this.children.get(t);return null!==n?n.subtree(Vi(e)):new mr(null)}}set(e,t){if(Ki(e))return new mr(t,this.children);{const n=qi(e),i=(this.children.get(n)||new mr(null)).set(Vi(e),t),s=this.children.insert(n,i);return new mr(this.value,s)}}remove(e){if(Ki(e))return this.children.isEmpty()?new mr(null):new mr(null,this.children);{const t=qi(e),n=this.children.get(t);if(n){const i=n.remove(Vi(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new mr(null):new mr(this.value,s)}return this}}get(e){if(Ki(e))return this.value;{const t=qi(e),n=this.children.get(t);return n?n.get(Vi(e)):null}}setTree(e,t){if(Ki(e))return t;{const n=qi(e),i=(this.children.get(n)||new mr(null)).setTree(Vi(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new mr(this.value,s)}}fold(e){return this.fold_(Bi(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(Yi(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Bi(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Ki(e))return null;{const i=qi(e),s=this.children.get(i);return s?s.findOnPath_(Vi(e),Yi(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Bi(),t)}foreachOnPath_(e,t,n){if(Ki(e))return this;{this.value&&n(t,this.value);const i=qi(e),s=this.children.get(i);return s?s.foreachOnPath_(Vi(e),Yi(t,i),n):new mr(null)}}foreach(e){this.foreach_(Bi(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Yi(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(fr||(fr=new ps(ui)),fr))()){this.value=e,this.children=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{static empty(){return new gr(new mr(null))}constructor(e){this.writeTree_=e}}function vr(e,t,n){if(Ki(t))return new gr(new mr(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=Ji(s,t);return r=r.updateChild(o,n),new gr(e.writeTree_.set(s,r))}{const i=new mr(n),s=e.writeTree_.setTree(t,i);return new gr(s)}}}function yr(e,t,n){let i=e;return mi(n,((e,n)=>{i=vr(i,Yi(t,e),n)})),i}function _r(e,t){if(Ki(t))return gr.empty();{const n=e.writeTree_.setTree(t,new mr(null));return new gr(n)}}function br(e,t){return null!=wr(e,t)}function wr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ji(n.path,t)):null}function xr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(ks,((e,n)=>{t.push(new os(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new os(e,n.value))})),t}function kr(e,t){if(Ki(t))return e;{const n=wr(e,t);return new gr(null!=n?new mr(n):e.writeTree_.subtree(t))}}function Cr(e){return e.writeTree_.isEmpty()}function Tr(e,t){return Ir(Bi(),e.writeTree_,t)}function Ir(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?(Ze(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=Ir(Yi(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Yi(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(e,t){return Ur(t,e)}function Er(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));Ze(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;for(;s&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Nr(t,i.path)?s=!1:es(i.path,t.path)&&(r=!0)),o--}if(s){if(r)return function(e){e.visibleWrites=Rr(e.allWrites,Pr,Bi()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=_r(e.visibleWrites,i.path);else{mi(i.children,(t=>{e.visibleWrites=_r(e.visibleWrites,Yi(i.path,t))}))}return!0}return!1}function Nr(e,t){if(e.snap)return es(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&es(Yi(e.path,n),t))return!0;return!1}function Pr(e){return e.visible}function Rr(e,t,n){let i=gr.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)es(n,e)?(t=Ji(n,e),i=vr(i,t,r.snap)):es(e,n)&&(t=Ji(e,n),i=vr(i,Bi(),r.snap.getChild(t)));else{if(!r.children)throw et("WriteRecord should have .snap or .children");if(es(n,e))t=Ji(n,e),i=yr(i,t,r.children);else if(es(e,n))if(t=Ji(e,n),Ki(t))i=yr(i,Bi(),r.children);else{const e=Lt(r.children,qi(t));if(e){const n=e.getChild(Vi(t));i=vr(i,Bi(),n)}}}}}return i}function Lr(e,t,n,i,s){if(i||s){const r=kr(e.visibleWrites,t);if(!s&&Cr(r))return n;if(s||null!=n||br(r,Bi())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(es(e.path,t)||es(t,e.path))};return Tr(Rr(e.allWrites,r,t),n||Rs.EMPTY_NODE)}return null}{const i=wr(e.visibleWrites,t);if(null!=i)return i;{const i=kr(e.visibleWrites,t);if(Cr(i))return n;if(null!=n||br(i,Bi())){return Tr(i,n||Rs.EMPTY_NODE)}return null}}}function Ar(e,t,n,i){return Lr(e.writeTree,e.treePath,t,n,i)}function Mr(e,t){return function(e,t,n){let i=Rs.EMPTY_NODE;const s=wr(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(ks,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=kr(e.visibleWrites,t);return n.forEachChild(ks,((e,t)=>{const n=Tr(kr(s,new ji(e)),t);i=i.updateImmediateChild(e,n)})),xr(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return xr(kr(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function Or(e,t,n,i){return function(e,t,n,i,s){Ze(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Yi(t,n);if(br(e.visibleWrites,r))return null;{const t=kr(e.visibleWrites,r);return Cr(t)?s.getChild(n):Tr(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function Dr(e,t){return function(e,t){return wr(e.visibleWrites,t)}(e.writeTree,Yi(e.treePath,t))}function zr(e,t,n,i,s,r){return function(e,t,n,i,s,r,o){let a;const l=kr(e.visibleWrites,t),c=wr(l,Bi());if(null!=c)a=c;else{if(null==n)return[];a=Tr(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<s;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,s,r)}function Fr(e,t,n){return function(e,t,n,i){const s=Yi(t,n),r=wr(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return Tr(kr(e.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Wr(e,t){return Ur(Yi(e.treePath,t),e.writeTree)}function Ur(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{trackChildChange(e){const t=e.type,n=e.childName;Ze("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Ze(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,Ws(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,Fs(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,zs(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw et("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Ws(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class qr{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new or(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:pr(this.viewCache_),s=zr(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(e,t,n,i,s){const r=new jr;let o,a;if(n.type===Zs.OVERWRITE){const l=n;l.source.fromUser?o=Gr(e,t,l.path,l.snap,i,s,r):(Ze(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Ki(l.path),o=$r(e,t,l.path,l.snap,i,s,a,r))}else if(n.type===Zs.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,l)=>{const c=Yi(n,i);Xr(t,qi(c))&&(a=Gr(e,a,c,l,s,r,o))})),i.foreach(((i,l)=>{const c=Yi(n,i);Xr(t,qi(c))||(a=Gr(e,a,c,l,s,r,o))})),a}(e,t,l.path,l.children,i,s,r):(Ze(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=Kr(e,t,l.path,l.children,i,s,a,r))}else if(n.type===Zs.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,s,r){let o;if(null!=Dr(i,n))return t;{const a=new qr(i,t,s),l=t.eventCache.getNode();let c;if(Ki(n)||".priority"===qi(n)){let n;if(t.serverCache.isFullyInitialized())n=Ar(i,pr(t));else{const e=t.serverCache.getNode();Ze(e instanceof Rs,"serverChildren would be complete if leaf node"),n=Mr(i,e)}c=e.filter.updateFullNode(l,n,r)}else{const s=qi(n);let d=Fr(i,s,t.serverCache);null==d&&t.serverCache.isCompleteForChild(s)&&(d=l.getImmediateChild(s)),c=null!=d?e.filter.updateChild(l,s,d,Vi(n),a,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(l,s,Rs.EMPTY_NODE,Vi(n),a,r):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Ar(i,pr(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,r)))}return o=t.serverCache.isFullyInitialized()||null!=Dr(i,Bi()),dr(t,c,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,i,s,r):function(e,t,n,i,s,r,o){if(null!=Dr(s,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(Ki(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return $r(e,t,n,l.getNode().getChild(n),s,r,a,o);if(Ki(n)){let i=new mr(null);return l.getNode().forEachChild(ds,((e,t)=>{i=i.set(new ji(e),t)})),Kr(e,t,n,i,s,r,a,o)}return t}{let c=new mr(null);return i.foreach(((e,t)=>{const i=Yi(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),Kr(e,t,n,c,s,r,a,o)}}(e,t,a.path,a.affectedTree,i,s,r)}else{if(n.type!==Zs.LISTEN_COMPLETE)throw et("Unknown operation type: "+n.type);o=function(e,t,n,i,s){const r=t.serverCache,o=ur(t,r.getNode(),r.isFullyInitialized()||Ki(n),r.isFiltered());return Vr(e,o,n,i,Br,s)}(e,t,n.path,i,r)}const l=r.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=hr(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Ds(hr(t)))}}(t,o,l),{viewCache:o,changes:l}}function Vr(e,t,n,i,s,r){const o=t.eventCache;if(null!=Dr(i,n))return t;{let a,l;if(Ki(n))if(Ze(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=pr(t),s=Mr(i,n instanceof Rs?n:Rs.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),s,r)}else{const n=Ar(i,pr(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const c=qi(n);if(".priority"===c){Ze(1===Hi(n),"Can't have a priority with additional path components");const s=o.getNode();l=t.serverCache.getNode();const r=Or(i,n,s,l);a=null!=r?e.filter.updatePriority(s,r):o.getNode()}else{const d=Vi(n);let u;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=Or(i,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(c).updateChild(d,e):o.getNode().getImmediateChild(c)}else u=Fr(i,c,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),c,u,d,s,r):o.getNode()}}return dr(t,a,o.isFullyInitialized()||Ki(n),e.filter.filtersNodes())}}function $r(e,t,n,i,s,r,o,a){const l=t.serverCache;let c;const d=o?e.filter:e.filter.getIndexedFilter();if(Ki(n))c=d.updateFullNode(l.getNode(),i,null);else if(d.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=d.updateFullNode(l.getNode(),e,null)}else{const e=qi(n);if(!l.isCompleteForPath(n)&&Hi(n)>1)return t;const s=Vi(n),r=l.getNode().getImmediateChild(e).updateChild(s,i);c=".priority"===e?d.updatePriority(l.getNode(),r):d.updateChild(l.getNode(),e,r,s,Br,null)}const u=ur(t,c,l.isFullyInitialized()||Ki(n),d.filtersNodes());return Vr(e,u,n,s,new qr(s,u,r),a)}function Gr(e,t,n,i,s,r,o){const a=t.eventCache;let l,c;const d=new qr(s,t,r);if(Ki(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=dr(t,c,!0,e.filter.filtersNodes());else{const s=qi(n);if(".priority"===s)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=dr(t,c,a.isFullyInitialized(),a.isFiltered());else{const r=Vi(n),c=a.getNode().getImmediateChild(s);let u;if(Ki(r))u=i;else{const e=d.getCompleteChild(s);u=null!=e?".priority"===$i(r)&&e.getChild(Xi(r)).isEmpty()?e:e.updateChild(r,i):Rs.EMPTY_NODE}if(c.equals(u))l=t;else{l=dr(t,e.filter.updateChild(a.getNode(),s,u,r,d,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Xr(e,t){return e.eventCache.isCompleteForChild(t)}function Yr(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Kr(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Ki(n)?i:new mr(null).setTree(n,i);const d=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(d.hasChild(n)){const l=Yr(0,t.serverCache.getNode().getImmediateChild(n),i);c=$r(e,c,new ji(n),l,s,r,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!d.hasChild(n)&&!l){const l=Yr(0,t.serverCache.getNode().getImmediateChild(n),i);c=$r(e,c,new ji(n),l,s,r,o,a)}})),c}class Jr{get query(){return this.query_}constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Us(n.getIndex()),s=(r=n).loadsAllData()?new Us(r.getIndex()):r.hasLimit()?new Bs(r):new js(r);var r;this.processor_=function(e){return{filter:e}}(s);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(Rs.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(Rs.EMPTY_NODE,a.getNode(),null),d=new or(l,o.isFullyInitialized(),i.filtersNodes()),u=new or(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=cr(u,d),this.eventGenerator_=new ar(this.query_)}}function Qr(e,t){const n=pr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ki(t)&&!n.getImmediateChild(qi(t)).isEmpty())?n.getChild(t):null}function Zr(e){return 0===e.eventRegistrations_.length}function eo(e,t,n){const i=[];if(n){Ze(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,s);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const s=e.eventRegistrations_[i];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function to(e,t,n,i){t.type===Zs.MERGE&&null!==t.source.queryId&&(Ze(pr(e.viewCache_),"We should always have a full cache before handling merges"),Ze(hr(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=Hr(e.processor_,s,t,n,i);var o,a;return o=e.processor_,a=r.viewCache,Ze(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),Ze(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),Ze(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,no(e,r.changes,r.viewCache.eventCache.getNode(),null)}function no(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const s=[],r=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),lr(e,s,"child_removed",t,i,n),lr(e,s,"child_added",t,i,n),lr(e,s,"child_moved",r,i,n),lr(e,s,"child_changed",t,i,n),lr(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io,so;class ro{constructor(){this.views=new Map}}function oo(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return Ze(null!=r,"SyncTree gave us an op for an invalid query."),to(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(to(r,t,n,i));return s}}function ao(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=Ar(n,s?i:null),r=!1;e?r=!0:i instanceof Rs?(e=Mr(n,i),r=!1):(e=Rs.EMPTY_NODE,r=!1);const o=cr(new or(e,r,!1),new or(i,s,!1));return new Jr(t,o)}return o}function lo(e,t,n,i,s,r){const o=ao(e,t,i,s,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(ks,((e,t)=>{i.push(zs(e,t))}));return n.isFullyInitialized()&&i.push(Ds(n.getNode())),no(e,i,n.getNode(),t)}(o,n)}function co(e,t,n,i){const s=t._queryIdentifier,r=[];let o=[];const a=mo(e);if("default"===s)for(const[t,s]of e.views.entries())o=o.concat(eo(s,n,i)),Zr(s)&&(e.views.delete(t),s.query._queryParams.loadsAllData()||r.push(s.query));else{const t=e.views.get(s);t&&(o=o.concat(eo(t,n,i)),Zr(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||r.push(t.query)))}return a&&!mo(e)&&r.push(new(Ze(io,"Reference.ts has not been loaded"),io)(t._repo,t._path)),{removed:r,events:o}}function uo(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function ho(e,t){let n=null;for(const i of e.views.values())n=n||Qr(i,t);return n}function po(e,t){if(t._queryParams.loadsAllData())return go(e);{const n=t._queryIdentifier;return e.views.get(n)}}function fo(e,t){return null!=po(e,t)}function mo(e){return null!=go(e)}function go(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo=1;class yo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new mr(null),this.pendingWriteTree_={visibleWrites:gr.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _o(e,t,n,i,s){return function(e,t,n,i,s){Ze(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=vr(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,s),s?Eo(e,new sr({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function bo(e,t,n,i){!function(e,t,n,i){Ze(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=yr(e.visibleWrites,t,n),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i);const s=mr.fromObject(n);return Eo(e,new rr({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,s))}function wo(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(Er(e.pendingWriteTree_,t)){let t=new mr(null);return null!=i.snap?t=t.set(Bi(),!0):mi(i.children,(e=>{t=t.set(new ji(e),!0)})),Eo(e,new nr(i.path,t,n))}return[]}function xo(e,t,n){return Eo(e,new sr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function ko(e,t,n,i,s=!1){const r=t._path,o=e.syncPointTree_.get(r);let a=[];if(o&&("default"===t._queryIdentifier||fo(o,t))){const l=co(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),s=e.syncPointTree_.findOnPath(r,((e,t)=>mo(t)));if(n&&!s){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&mo(t)){return[go(t)]}{let e=[];return t&&(e=uo(t)),mi(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],s=i.query,r=Ro(e,i);e.listenProvider_.startListening(zo(s),Lo(e,s),r.hashFn,r.onComplete)}}}if(!s&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(zo(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(Ao(t));e.listenProvider_.stopListening(zo(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=Ao(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function Co(e,t,n,i){const s=Mo(e,i);if(null!=s){const i=Oo(s),r=i.path,o=i.queryId,a=Ji(r,t);return Do(e,r,new sr(tr(o),a,n))}return[]}function To(e,t,n,i=!1){const s=t._path;let r=null,o=!1;e.syncPointTree_.foreachOnPath(s,((e,t)=>{const n=Ji(e,s);r=r||ho(t,n),o=o||mo(t)}));let a,l=e.syncPointTree_.get(s);if(l?(o=o||mo(l),r=r||ho(l,Bi())):(l=new ro,e.syncPointTree_=e.syncPointTree_.set(s,l)),null!=r)a=!0;else{a=!1,r=Rs.EMPTY_NODE;e.syncPointTree_.subtree(s).foreachChild(((e,t)=>{const n=ho(t,Bi());n&&(r=r.updateImmediateChild(e,n))}))}const c=fo(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=Ao(t);Ze(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=vo++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let d=lo(l,t,n,Sr(e.pendingWriteTree_,s),r,a);if(!c&&!o&&!i){const n=po(l,t);d=d.concat(function(e,t,n){const i=t._path,s=Lo(e,t),r=Ro(e,n),o=e.listenProvider_.startListening(zo(t),s,r.hashFn,r.onComplete),a=e.syncPointTree_.subtree(i);if(s)Ze(!mo(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!Ki(e)&&t&&mo(t))return[go(t).query];{let e=[];return t&&(e=e.concat(uo(t).map((e=>e.query)))),mi(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(zo(i),Lo(e,i))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return d}function Io(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=ho(n,Ji(e,t));if(i)return i}));return Lr(i,t,s,n,!0)}function So(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const s=Ji(e,n);i=i||ho(t,s)}));let s=e.syncPointTree_.get(n);s?i=i||ho(s,Bi()):(s=new ro,e.syncPointTree_=e.syncPointTree_.set(n,s));const r=null!=i,o=r?new or(i,!0,!1):null;return function(e){return hr(e.viewCache_)}(ao(s,t,Sr(e.pendingWriteTree_,t._path),r?o.getNode():Rs.EMPTY_NODE,r))}function Eo(e,t){return No(t,e.syncPointTree_,null,Sr(e.pendingWriteTree_,Bi()))}function No(e,t,n,i){if(Ki(e.path))return Po(e,t,n,i);{const s=t.get(Bi());null==n&&null!=s&&(n=ho(s,Bi()));let r=[];const o=qi(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Wr(i,o);r=r.concat(No(a,l,e,t))}return s&&(r=r.concat(oo(s,e,i,n))),r}}function Po(e,t,n,i){const s=t.get(Bi());null==n&&null!=s&&(n=ho(s,Bi()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=Wr(i,t),l=e.operationForChild(t);l&&(r=r.concat(Po(l,s,o,a)))})),s&&(r=r.concat(oo(s,e,i,n))),r}function Ro(e,t){const n=t.query,i=Lo(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||Rs.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=Mo(e,n);if(i){const n=Oo(i),s=n.path,r=n.queryId,o=Ji(s,t);return Do(e,s,new ir(tr(r),o))}return[]}(e,n._path,i):function(e,t){return Eo(e,new ir({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return ko(e,n,null,i)}}}}function Lo(e,t){const n=Ao(t);return e.queryToTagMap.get(n)}function Ao(e){return e._path.toString()+"$"+e._queryIdentifier}function Mo(e,t){return e.tagToQueryMap.get(t)}function Oo(e){const t=e.indexOf("$");return Ze(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ji(e.substr(0,t))}}function Do(e,t,n){const i=e.syncPointTree_.get(t);Ze(i,"Missing sync point for query tag that we're tracking");return oo(i,n,Sr(e.pendingWriteTree_,t),null)}function zo(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Ze(so,"Reference.ts has not been loaded"),so)(e._repo,e._path):e}class Fo{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Fo(t)}node(){return this.node_}constructor(e){this.node_=e}}class Wo{getImmediateChild(e){const t=Yi(this.path_,e);return new Wo(this.syncTree_,t)}node(){return Io(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const Uo=function(e,t,n){return e&&"object"==typeof e?(Ze(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?jo(e[".sv"],t,n):"object"==typeof e[".sv"]?Bo(e[".sv"],t):void Ze(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},jo=function(e,t,n){if("timestamp"===e)return n.timestamp;Ze(!1,"Unexpected server value: "+e)},Bo=function(e,t,n){e.hasOwnProperty("increment")||Ze(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&Ze(!1,"Unexpected increment value: "+i);const s=t.node();if(Ze(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return"number"!=typeof r?i:r+i},qo=function(e,t,n,i){return Vo(t,new Wo(n,e),i)},Ho=function(e,t,n){return Vo(e,new Fo(t),n)};function Vo(e,t,n){const i=e.getPriority().val(),s=Uo(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=Uo(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new xs(r,As(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new xs(s))),i.forEachChild(ks,((e,i)=>{const s=Vo(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Go(e,t){let n=t instanceof ji?t:new ji(t),i=e,s=qi(n);for(;null!==s;){const e=Lt(i.node.children,s)||{children:{},childCount:0};i=new $o(s,i,e),n=Vi(n),s=qi(n)}return i}function Xo(e){return e.node.value}function Yo(e,t){e.node.value=t,ea(e)}function Ko(e){return e.node.childCount>0}function Jo(e,t){mi(e.node.children,((n,i)=>{t(new $o(n,e,i))}))}function Qo(e,t,n,i){n&&!i&&t(e),Jo(e,(e=>{Qo(e,t,!0,i)})),n&&i&&t(e)}function Zo(e){return new ji(null===e.parent?e.name:Zo(e.parent)+"/"+e.name)}function ea(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Xo(e)&&!Ko(e)}(n),s=Rt(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,ea(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,ea(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const ta=/[\[\].#$\/\u0000-\u001F\u007F]/,na=/[\[\].#$\u0000-\u001F\u007F]/,ia=function(e){return"string"==typeof e&&0!==e.length&&!ta.test(e)},sa=function(e){return"string"==typeof e&&0!==e.length&&!na.test(e)},ra=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!ci(e)||e&&"object"==typeof e&&Rt(e,".sv")},oa=function(e,t,n,i){i&&void 0===t||aa(Ht(e,"value"),t,n)},aa=function(e,t,n){const i=n instanceof ji?new ts(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+is(i));if("function"==typeof t)throw new Error(e+"contains a function "+is(i)+" with contents = "+t.toString());if(ci(t))throw new Error(e+"contains "+t.toString()+" "+is(i));if("string"==typeof t&&t.length>10485760/3&&$t(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+is(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if(mi(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!ia(t)))throw new Error(e+" contains an invalid key ("+t+") "+is(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=$t(a),ns(o),aa(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=$t(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&s)throw new Error(e+' contains ".value" child '+is(i)+" in addition to actual children.")}},la=function(e,t,n,i){if(i&&void 0===t)return;const s=Ht(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(s+" must be an object containing the children to replace.");const r=[];mi(t,((e,t)=>{const i=new ji(e);if(aa(s,t,Yi(n,i)),".priority"===$i(i)&&!ra(t))throw new Error(s+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(i)})),function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const s=Gi(i);for(let t=0;t<s.length;t++)if(".priority"===s[t]&&t===s.length-1);else if(!ia(s[t]))throw new Error(e+"contains an invalid key ("+s[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(Qi);let s=null;for(n=0;n<t.length;n++){if(i=t[n],null!==s&&es(s,i))throw new Error(e+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}}(s,r)},ca=function(e,t,n,i){if(!(i&&void 0===n||sa(n)))throw new Error(Ht(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},da=function(e,t){if(".info"===qi(t))throw new Error(e+" failed = Can't modify data under /.info/")},ua=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!ia(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),sa(e)}(n))throw new Error(Ht(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ha{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function pa(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||Zi(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function fa(e,t,n){pa(e,n),ma(e,(e=>es(e,t)||es(t,e)))}function ma(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){t(s.path)?(ga(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function ga(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();ti&&si("event: "+n.toString()),_i(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ha,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xs(),this.transactionQueueTree_=new $o,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function ya(e,t,n){if(e.stats_=Pi(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new $s(e.repoInfo_,((t,n,i,s)=>{wa(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>xa(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{St(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new rs(e.repoInfo_,t,((t,n,i,s)=>{wa(e,t,n,i,s)}),(t=>{xa(e,t)}),(t=>{!function(e,t){mi(t,((t,n)=>{ka(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Ni[n]||(Ni[n]=t()),Ni[n]}(e.repoInfo_,(()=>new Qs(e.stats_,e.server_))),e.infoData_=new Gs,e.infoSyncTree_=new yo({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=xo(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),ka(e,"connected",!1),e.serverSyncTree_=new yo({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);fa(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function _a(e){const t=e.infoData_.getNode(new ji(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function ba(e){return(t=(t={timestamp:_a(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function wa(e,t,n,i,s){e.dataUpdateCount++;const r=new ji(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=Mt(n,(e=>As(e)));o=function(e,t,n,i){const s=Mo(e,i);if(s){const i=Oo(s),r=i.path,o=i.queryId,a=Ji(r,t),l=mr.fromObject(n);return Do(e,r,new rr(tr(o),a,l))}return[]}(e.serverSyncTree_,r,t,s)}else{const t=As(n);o=Co(e.serverSyncTree_,r,t,s)}else if(i){const t=Mt(n,(e=>As(e)));o=function(e,t,n){const i=mr.fromObject(n);return Eo(e,new rr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=As(n);o=xo(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=Ra(e,r)),fa(e.eventQueue_,a,o)}function xa(e,t){ka(e,"connected",t),!1===t&&function(e){Sa(e,"onDisconnectEvents");const t=ba(e),n=Xs();Ks(e.onDisconnect_,Bi(),((i,s)=>{const r=qo(i,s,e.serverSyncTree_,t);Ys(n,i,r)}));let i=[];Ks(n,Bi(),((t,n)=>{i=i.concat(xo(e.serverSyncTree_,t,n));const s=Da(e,t);Ra(e,s)})),e.onDisconnect_=Xs(),fa(e.eventQueue_,Bi(),i)}(e)}function ka(e,t,n){const i=new ji("/.info/"+t),s=As(n);e.infoData_.updateSnapshot(i,s);const r=xo(e.infoSyncTree_,i,s);fa(e.eventQueue_,i,r)}function Ca(e){return e.nextWriteId_++}function Ta(e,t,n,i,s){Sa(e,"set",{path:t.toString(),value:n,priority:i});const r=ba(e),o=As(n,i),a=Io(e.serverSyncTree_,t),l=Ho(o,a,r),c=Ca(e),d=_o(e.serverSyncTree_,t,l,c,!0);pa(e.eventQueue_,d),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const r="ok"===n;r||li("set at "+t+" failed: "+n);const o=wo(e.serverSyncTree_,c,!r);fa(e.eventQueue_,t,o),Ea(e,s,n,i)}));const u=Da(e,t);Ra(e,u),fa(e.eventQueue_,u,[])}function Ia(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function Sa(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),si(n,...t)}function Ea(e,t,n,i){t&&_i((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let s=e;i&&(s+=": "+i);const r=new Error(s);r.code=e,t(r)}}))}function Na(e,t,n){return Io(e.serverSyncTree_,t,n)||Rs.EMPTY_NODE}function Pa(e,t=e.transactionQueueTree_){if(t||Oa(e,t),Xo(t)){const n=Aa(e,t);Ze(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),s=Na(e,t,i);let r=s;const o=s.hash();for(let e=0;e<n.length;e++){const i=n[e];Ze(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const s=Ji(t,i.path);r=r.updateChild(s,i.currentOutputSnapshotRaw)}const a=r.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{Sa(e,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(wo(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Oa(e,Go(e.transactionQueueTree_,t)),Pa(e,e.transactionQueueTree_),fa(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)_i(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{li("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Ra(e,t)}}),o)}(e,Zo(t),n)}else Ko(t)&&Jo(t,(t=>{Pa(e,t)}))}function Ra(e,t){const n=La(e,t),i=Zo(n);return function(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=Ji(n,l.path);let d,u=!1;if(Ze(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,d=l.abortReason,s=s.concat(wo(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)u=!0,d="maxretry",s=s.concat(wo(e.serverSyncTree_,l.currentWriteId,!0));else{const n=Na(e,l.path,r);l.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){aa("transaction failed: Data returned ",i,l.path);let t=As(i);"object"==typeof i&&null!=i&&Rt(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=ba(e),c=Ho(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=Ca(e),r.splice(r.indexOf(o),1),s=s.concat(_o(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),s=s.concat(wo(e.serverSyncTree_,o,!0))}else u=!0,d="nodata",s=s.concat(wo(e.serverSyncTree_,l.currentWriteId,!0))}fa(e.eventQueue_,n,s),s=[],u&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===d?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(d),!1,null)))))}var o;Oa(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)_i(i[e]);Pa(e,e.transactionQueueTree_)}(e,Aa(e,n),i),i}function La(e,t){let n,i=e.transactionQueueTree_;for(n=qi(t);null!==n&&void 0===Xo(i);)i=Go(i,n),n=qi(t=Vi(t));return i}function Aa(e,t){const n=[];return Ma(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Ma(e,t,n){const i=Xo(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Jo(t,(t=>{Ma(e,t,n)}))}function Oa(e,t){const n=Xo(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Yo(t,n.length>0?n:void 0)}Jo(t,(t=>{Oa(e,t)}))}function Da(e,t){const n=Zo(La(e,t)),i=Go(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{za(e,t)})),za(e,i),Qo(i,(t=>{za(e,t)})),n}function za(e,t){const n=Xo(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Ze(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):(Ze(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(wo(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?Yo(t,void 0):n.length=r+1,fa(e.eventQueue_,Zo(t),s);for(let e=0;e<i.length;e++)_i(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=function(e,t){const n=Wa(e),i=n.namespace;"firebase.com"===n.domain&&ai(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||ai("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&li("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Ti(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new ji(n.pathString)}},Wa=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let d=e.indexOf("/");-1===d&&(d=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(d,u)),d<u&&(s=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(d,u)));const h=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):li(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in h&&(r=h.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ua{getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+St(this.snapshot.exportVal())}constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}}class ja{getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Ze(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qa{get key(){return Ki(this._path)?null:$i(this._path)}get ref(){return new Ha(this._repo,this._path)}get _queryIdentifier(){const e=Vs(this._queryParams),t=pi(e);return"{}"===t?"default":t}get _queryObject(){return Vs(this._queryParams)}isEqual(e){if(!((e=Gt(e))instanceof qa))return!1;const t=this._repo===e._repo,n=Zi(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}}class Ha extends qa{get parent(){const e=Xi(this._path);return null===e?null:new Ha(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new qs,!1)}}class Va{get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ji(e),n=Ga(this.ref,e);return new Va(this._node.getChild(t),n,ks)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Va(n,Ga(this.ref,t),ks))))}hasChild(e){const t=new ji(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}constructor(e,t,n){this._node=e,this.ref=t,this._index=n}}function $a(e,t){return(e=Gt(e))._checkNotDeleted("ref"),void 0!==t?Ga(e._root,t):e._root}function Ga(e,t){var n,i,s,r;return null===qi((e=Gt(e))._path)?(n="child",i="path",r=!1,(s=t)&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),ca(n,i,s,r)):ca("child","path",t,!1),new Ha(e._repo,Yi(e._path,t))}function Xa(e,t){e=Gt(e),da("set",e._path),oa("set",t,e._path,!1);const n=new ft;return Ta(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Ya(e,t){la("update",t,e._path,!1);const n=new ft;return function(e,t,n,i){Sa(e,"update",{path:t.toString(),value:n});let s=!0;const r=ba(e),o={};if(mi(n,((n,i)=>{s=!1,o[n]=qo(Yi(t,n),As(i),e.serverSyncTree_,r)})),s)si("update() called with empty data.  Don't do anything."),Ea(0,i,"ok",void 0);else{const s=Ca(e),r=bo(e.serverSyncTree_,t,o,s);pa(e.eventQueue_,r),e.server_.merge(t.toString(),n,((n,r)=>{const o="ok"===n;o||li("update at "+t+" failed: "+n);const a=wo(e.serverSyncTree_,s,!o),l=a.length>0?Ra(e,t):t;fa(e.eventQueue_,l,a),Ea(0,i,n,r)})),mi(n,(n=>{const i=Da(e,Yi(t,n));Ra(e,i)})),fa(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}function Ka(e){e=Gt(e);const t=new Ba((()=>{})),n=new Ja(t);return function(e,t,n){const i=So(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then((i=>{const s=As(i).withIndex(t._queryParams.getIndex());let r;if(To(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())r=xo(e.serverSyncTree_,t._path,s);else{const n=Lo(e.serverSyncTree_,t);r=Co(e.serverSyncTree_,t._path,s,n)}return fa(e.eventQueue_,t._path,r),ko(e.serverSyncTree_,t,n,null,!0),s}),(n=>(Sa(e,"get for query "+St(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new Va(t,new Ha(e._repo,e._path),e._queryParams.getIndex())))}class Ja{respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Ua("value",this,new Va(e.snapshotNode,new Ha(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ja(this,e,t):null}matches(e){return e instanceof Ja&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}constructor(e){this.callbackContext=e}}!function(e){Ze(!io,"__referenceConstructor has already been defined"),io=e}(Ha),function(e){Ze(!so,"__referenceConstructor has already been defined"),so=e}(Ha);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qa={};let Za=!1;function el(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||ai("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),si("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Fa(r,s),c=l.repoInfo;void 0!==Oe&&Oe.env&&(a=Oe.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,r=`http://${a}?ns=${c.namespace}`,l=Fa(r,s),c=l.repoInfo):o=!l.repoInfo.secure;const d=s&&o?new ki(ki.OWNER):new xi(e.name,e.options,t);ua("Invalid Firebase Database URL",l),Ki(l.path)||ai("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(e,t,n,i){let s=Qa[t.name];s||(s={},Qa[t.name]=s);let r=s[e.toURLString()];r&&ai("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new va(e,Za,n,i),s[e.toURLString()]=r,r}(c,e,d,new wi(e.name,n));return new tl(u,e)}class tl{get _repo(){return this._instanceStarted||(ya(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ha(this._repo,Bi())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Qa[t];n&&n[e.key]===e||ai(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Ia(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&ai("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}function nl(e=Mn(),t){const n=Pn(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=ht("database");e&&function(e,t,n,i={}){(e=Gt(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&ai("Cannot call useEmulator() after instance has already been initialized.");const s=e._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&ai('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ki(ki.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:mt(i.mockUserToken,e.app.options.projectId);r=new ki(t)}!function(e,t,n,i){e.repoInfo_=new Ti(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(s,t,n,r)}(n,...e)}return n}rs.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},rs.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){Vn="9.21.0",Nn(new Xt("database",((e,{instanceIdentifier:t})=>el(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),On("@firebase/database","0.14.4",e),On("@firebase/database","0.14.4","esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();function il(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n}Object.create;Object.create;function sl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rl=sl,ol=new Ct("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),al=new rn("@firebase/auth");function ll(e,...t){al.logLevel<=Qt.ERROR&&al.error(`Auth (9.21.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(e,...t){throw hl(e,...t)}function dl(e,...t){return hl(e,...t)}function ul(e,t,n){const i=Object.assign(Object.assign({},rl()),{[t]:n});return new Ct("auth","Firebase",i).create(t,{appName:e.name})}function hl(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return ol.create(e,...t)}function pl(e,t,...n){if(!e)throw hl(t,...n)}function fl(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ll(t),new Error(t)}function ml(e,t){e||fl(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function vl(){return"http:"===yl()||"https:"===yl()}function yl(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(vl()||yt()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bl{get(){return _l()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,ml(t>e,"Short delay should be less than long delay!"),this.isMobile=vt()||_t()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(e,t){ml(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void fl("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void fl("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void fl("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Cl=new bl(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Il(e,t,n,i,s={}){return Sl(e,s,(async()=>{let s={},r={};i&&("GET"===t?r=i:s={body:JSON.stringify(i)});const o=zt(Object.assign({key:e.config.apiKey},r)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),xl.fetch()(Nl(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function Sl(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},kl),t);try{const t=new Pl(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw Rl(e,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const t=s.ok?r.errorMessage:r.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Rl(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw Rl(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw Rl(e,"user-disabled",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw ul(e,a,o);cl(e,a)}}catch(t){if(t instanceof kt)throw t;cl(e,"network-request-failed",{message:String(t)})}}async function El(e,t,n,i,s={}){const r=await Il(e,t,n,i,s);return"mfaPendingCredential"in r&&cl(e,"multi-factor-auth-required",{_serverResponse:r}),r}function Nl(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?wl(e.config,s):`${e.config.apiScheme}://${s}`}class Pl{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(dl(this.auth,"network-request-failed"))),Cl.get())}))}}function Rl(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=dl(e,t,i);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ll(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(e){return 1e3*Number(e)}function Ml(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return ll("JWT malformed, contained fewer than 3 sections"),null;try{const e=ot(n);return e?JSON.parse(e):(ll("Failed to decode base64 JWT payload"),null)}catch(e){return ll("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ol(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof kt&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Dl{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{_initializeTime(){this.lastSignInTime=Ll(this.lastLoginAt),this.creationTime=Ll(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(e){var t;const n=e.auth,i=await e.getIdToken(),s=await Ol(e,async function(e,t){return Il(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));pl(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=il(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const d=e.isAnonymous,u=!(e.email&&r.passwordHash||(null==a?void 0:a.length)),h=!!d&&u,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new zl(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wl{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pl(e.idToken,"internal-error"),pl(void 0!==e.idToken,"internal-error"),pl(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Ml(e);return pl(t,"internal-error"),pl(void 0!==t.exp,"internal-error"),pl(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return pl(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Sl(e,{},(async()=>{const n=zt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,r=Nl(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",xl.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,r=new Wl;return n&&(pl("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),i&&(pl("string"==typeof i,"internal-error",{appName:e}),r.accessToken=i),s&&(pl("number"==typeof s,"internal-error",{appName:e}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wl,this.toJSON())}_performRefresh(){return fl("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(e,t){pl("string"==typeof e||void 0===e,"internal-error",{appName:t})}class jl{async getIdToken(e){const t=await Ol(this,this.stsTokenManager.getToken(this.auth,e));return pl(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Gt(e),i=await n.getIdToken(t),s=Ml(i);pl(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Ll(Al(s.auth_time)),issuedAtTime:Ll(Al(s.iat)),expirationTime:Ll(Al(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Gt(e);await Fl(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(pl(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new jl(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){pl(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Fl(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ol(this,async function(e,t){return Il(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,r,o,a,l,c;const d=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,h=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,p=null!==(r=t.photoURL)&&void 0!==r?r:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:x}=t;pl(y&&x,e,"internal-error");const k=Wl.fromJSON(this.name,x);pl("string"==typeof y,e,"internal-error"),Ul(d,e.name),Ul(u,e.name),pl("boolean"==typeof _,e,"internal-error"),pl("boolean"==typeof b,e,"internal-error"),Ul(h,e.name),Ul(p,e.name),Ul(f,e.name),Ul(m,e.name),Ul(g,e.name),Ul(v,e.name);const C=new jl({uid:y,auth:e,email:u,emailVerified:_,displayName:d,isAnonymous:b,photoURL:p,phoneNumber:h,tenantId:f,stsTokenManager:k,createdAt:g,lastLoginAt:v});return w&&Array.isArray(w)&&(C.providerData=w.map((e=>Object.assign({},e)))),m&&(C._redirectEventId=m),C}static async _fromIdTokenResponse(e,t,n=!1){const i=new Wl;i.updateFromServerResponse(t);const s=new jl({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Fl(s),s}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=il(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Dl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zl(s.createdAt||void 0,s.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=new Map;function ql(e){ml(e instanceof Function,"Expected a class definition");let t=Bl.get(e);return t?(ml(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Bl.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Hl.type="NONE";const Vl=Hl;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(e,t,n){return`firebase:${e}:${t}:${n}`}class Gl{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jl._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Gl(ql(Vl),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=i[0]||ql(Vl);const r=$l(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(r);if(t){const i=jl._fromJSON(e,t);n!==s&&(o=i),s=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(r)}catch(e){}}))),new Gl(s,e,n)):new Gl(s,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=$l(this.userKey,i.apiKey,s),this.fullPersistenceKey=$l("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ql(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Yl(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ec(t))return"Blackberry";if(tc(t))return"Webos";if(Kl(t))return"Safari";if((t.includes("chrome/")||Jl(t))&&!t.includes("edge/"))return"Chrome";if(Zl(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Yl(e=gt()){return/firefox\//i.test(e)}function Kl(e=gt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Jl(e=gt()){return/crios\//i.test(e)}function Ql(e=gt()){return/iemobile/i.test(e)}function Zl(e=gt()){return/android/i.test(e)}function ec(e=gt()){return/blackberry/i.test(e)}function tc(e=gt()){return/webos/i.test(e)}function nc(e=gt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ic(){return bt()&&10===document.documentMode}function sc(e=gt()){return nc(e)||Zl(e)||tc(e)||ec(e)||/windows phone/i.test(e)||Ql(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rc(e,t=[]){let n;switch(e){case"Browser":n=Xl(gt());break;case"Worker":n=`${Xl(gt())}-${e}`;break;default:n=e}return`${n}/JsCore/9.21.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oc(e,t){return Il(e,"GET","/v2/recaptchaConfig",Tl(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(e){return void 0!==e&&void 0!==e.enterprise}class lc{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(e){return new Promise(((t,n)=>{const i=document.createElement("script");var s,r;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=dl("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)}))}function dc(e){return`__${e}${Math.floor(1e6*Math.random())}`}class uc{async verify(e="verify",t=!1){function n(t,n,i){const s=window.grecaptcha;ac(s)?s.enterprise.ready((()=>{s.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{oc(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new lc(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((s=>{if(!t&&ac(window.grecaptcha))n(s,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));cc("https://www.google.com/recaptcha/enterprise.js?render="+s).then((()=>{n(s,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}constructor(e){this.type="recaptcha-enterprise",this.auth=mc(e)}}async function hc(e,t,n,i=!1){const s=new uc(e);let r;try{r=await s.verify(n)}catch(e){r=await s.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ql(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Gl.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return pl(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fl(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Gt(e):null;return t&&pl(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&pl(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ql(e))}))}async initializeRecaptchaConfig(){const e=await oc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new lc(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new uc(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ct("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ql(e)||this._popupRedirectResolver;pl(t,this,"argument-error"),this.redirectPersistenceManager=await Gl.create(this,[ql(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return pl(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pl(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){al.logLevel<=Qt.WARN&&al.warn(`Auth (9.21.0): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gc(this),this.idTokenSubscription=new gc(this),this.beforeStateQueue=new pc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ol,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}}function mc(e){return Gt(e)}class gc{get next(){return pl(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=jt((e=>this.observer=e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(e,t,n){const i=mc(e);pl(i._canInitEmulator,i,"emulator-config-failed"),pl(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),r=yc(t),{host:o,port:a}=function(e){const t=yc(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const e=s[1];return{host:e,port:_c(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:_c(t)}}}(t),l=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function yc(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function _c(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class bc{toJSON(){return fl("not implemented")}_getIdTokenResponse(e){return fl("not implemented")}_linkToIdToken(e,t){return fl("not implemented")}_getReauthenticationResolver(e){return fl("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wc(e,t){return Il(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xc(e,t){return El(e,"POST","/v1/accounts:signInWithPassword",Tl(e,t))}async function kc(e,t){return Il(e,"POST","/v1/accounts:sendOobCode",Tl(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cc extends bc{static _fromEmailAndPassword(e,t){return new Cc(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Cc(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await hc(e,n,"signInWithPassword");return xc(e,t)}return xc(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await hc(e,n,"signInWithPassword");return xc(e,t)}return Promise.reject(t)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return El(e,"POST","/v1/accounts:signInWithEmailLink",Tl(e,t))}(e,{email:this._email,oobCode:this._password});default:cl(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return wc(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return El(e,"POST","/v1/accounts:signInWithEmailLink",Tl(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:cl(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tc(e,t){return El(e,"POST","/v1/accounts:signInWithIdp",Tl(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends bc{static _fromParams(e){const t=new Ic(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):cl("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=il(t,["providerId","signInMethod"]);if(!n||!i)return null;const r=new Ic(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(e){return Tc(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Tc(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tc(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zt(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ec extends bc{static _fromVerification(e,t){return new Ec({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ec({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return El(e,"POST","/v1/accounts:signInWithPhoneNumber",Tl(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await El(e,"POST","/v1/accounts:signInWithPhoneNumber",Tl(e,t));if(n.temporaryProof)throw Rl(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return El(e,"POST","/v1/accounts:signInWithPhoneNumber",Tl(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Sc)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return n||t||i||s?new Ec({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{static parseLink(e){const t=function(e){const t=Ft(Wt(e)).link,n=t?Ft(Wt(t)).deep_link_id:null,i=Ft(Wt(e)).deep_link_id;return(i?Ft(Wt(i)).link:null)||i||n||t||e}(e);try{return new Nc(t)}catch(e){return null}}constructor(e){var t,n,i,s,r,o;const a=Ft(Wt(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);pl(l&&c&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=c,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pc{static credential(e,t){return Cc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Nc.parseLink(t);return pl(n,"argument-error"),Cc._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Pc.PROVIDER_ID}}Pc.PROVIDER_ID="password",Pc.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Pc.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rc{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc extends Rc{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ac extends Lc{static credential(e){return Ic._fromParams({providerId:Ac.PROVIDER_ID,signInMethod:Ac.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ac.credentialFromTaggedObject(e)}static credentialFromError(e){return Ac.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ac.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Ac.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ac.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mc extends Lc{static credential(e,t){return Ic._fromParams({providerId:Mc.PROVIDER_ID,signInMethod:Mc.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Mc.credentialFromTaggedObject(e)}static credentialFromError(e){return Mc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Mc.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Mc.GOOGLE_SIGN_IN_METHOD="google.com",Mc.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oc extends Lc{static credential(e){return Ic._fromParams({providerId:Oc.PROVIDER_ID,signInMethod:Oc.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oc.credentialFromTaggedObject(e)}static credentialFromError(e){return Oc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Oc.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Oc.GITHUB_SIGN_IN_METHOD="github.com",Oc.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dc extends Lc{static credential(e,t){return Ic._fromParams({providerId:Dc.PROVIDER_ID,signInMethod:Dc.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Dc.credentialFromTaggedObject(e)}static credentialFromError(e){return Dc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Dc.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function zc(e,t){return El(e,"POST","/v1/accounts:signUp",Tl(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dc.TWITTER_SIGN_IN_METHOD="twitter.com",Dc.PROVIDER_ID="twitter.com";class Fc{static async _fromIdTokenResponse(e,t,n,i=!1){const s=await jl._fromIdTokenResponse(e,n,i),r=Wc(n);return new Fc({user:s,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Wc(n);return new Fc({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Wc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uc extends kt{static _fromErrorAndOperation(e,t,n,i){return new Uc(e,t,n,i)}constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Uc.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function jc(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Uc._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bc(e,t,n=!1){const i=await Ol(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Fc._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function qc(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await Ol(e,jc(i,s,t,e),n);pl(r.idToken,i,"internal-error");const o=Ml(r.idToken);pl(o,i,"internal-error");const{sub:a}=o;return pl(e.uid===a,i,"user-mismatch"),Fc._forOperation(e,s,r)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&cl(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hc(e,t,n=!1){const i="signIn",s=await jc(e,i,t),r=await Fc._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}async function Vc(e,t){return Hc(mc(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $c(e,t,n){var i;pl((null===(i=n.url)||void 0===i?void 0:i.length)>0,e,"invalid-continue-uri"),pl(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(pl(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(pl(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gc(e,t,n){var i;const s=mc(e),r={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(i=s._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const e=await hc(s,r,"signUpPassword");o=zc(s,e)}else o=zc(s,r).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await hc(s,r,"signUpPassword");return zc(s,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),l=await Fc._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function Xc(e,t,n){return Vc(Gt(e),Pc.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yc(e,t){const n=Gt(e),i={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&$c(n.auth,i,t);const{email:s}=await async function(e,t){return kc(e,t)}(n.auth,i);s!==e.email&&await e.reload()}function Kc(e,t,n,i){return Gt(e).onAuthStateChanged(t,n,i)}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jc{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc extends Jc{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);ic()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=gt();return Kl(e)||nc(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=sc(),this._shouldAllowMigration=!0}}Qc.type="LOCAL";const Zc=Qc;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed extends Jc{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}ed.type="SESSION";const td=ed;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nd{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new nd(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function id(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nd.receivers=[];class sd{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const l=id("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function od(){return void 0!==rd().WorkerGlobalScope&&"function"==typeof rd().importScripts}class ad{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function ld(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function cd(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new ad(e).toPromise()}(),t(await cd()))}))}))}async function dd(e,t,n){const i=ld(e,!0).put({fbase_key:t,value:n});return new ad(i).toPromise()}function ud(e,t){const n=ld(e,!0).delete(t);return new ad(n).toPromise()}class hd{async _openDb(){return this.db||(this.db=await cd()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return od()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nd._getInstance(od()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new sd(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cd();return await dd(e,"__sak","1"),await ud(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>dd(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ld(e,!1).get(t),i=await new ad(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>ud(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ld(e,!1).getAll();return new ad(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}hd.type="LOCAL";const pd=hd;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
dc("rcb"),new bl(3e4,6e4);async function fd(e,t,n){var i;const s=await n.verify();try{let r;if(pl("string"==typeof s,e,"argument-error"),pl("recaptcha"===n.type,e,"argument-error"),r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){pl("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Il(e,"POST","/v2/accounts/mfaEnrollment:start",Tl(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{pl("signin"===t.type,e,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;pl(n,e,"missing-multi-factor-info");const o=await function(e,t){return Il(e,"POST","/v2/accounts/mfaSignIn:start",Tl(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Il(e,"POST","/v1/accounts:sendVerificationCode",Tl(e,t))}(e,{phoneNumber:r.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class md{verifyPhoneNumber(e,t){return fd(this.auth,e,Gt(t))}static credential(e,t){return Ec._fromVerification(e,t)}static credentialFromResult(e){const t=e;return md.credentialFromTaggedObject(t)}static credentialFromError(e){return md.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ec._fromTokenResponse(t,n):null}constructor(e){this.providerId=md.PROVIDER_ID,this.auth=mc(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gd(e,t){return t?ql(t):(pl(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */md.PROVIDER_ID="phone",md.PHONE_SIGN_IN_METHOD="phone";class vd extends bc{_getIdTokenResponse(e){return Tc(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Tc(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Tc(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function yd(e){return Hc(e.auth,new vd(e),e.bypassAuthState)}function _d(e){const{auth:t,user:n}=e;return pl(n,t,"internal-error"),qc(n,new vd(e),e.bypassAuthState)}async function bd(e){const{auth:t,user:n}=e;return pl(n,t,"internal-error"),Bc(n,new vd(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yd;case"linkViaPopup":case"linkViaRedirect":return bd;case"reauthViaPopup":case"reauthViaRedirect":return _d;default:cl(this.auth,"internal-error")}}resolve(e){ml(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ml(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=new bl(2e3,1e4);class kd extends wd{async executeNotNull(){const e=await this.execute();return pl(e,this.auth,"internal-error"),e}async onExecution(){ml(1===this.filter.length,"Popup operations only handle one event");const e=id();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(dl(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(dl(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kd.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(dl(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,xd.get())};e()}constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,kd.currentPopupAction&&kd.currentPopupAction.cancel(),kd.currentPopupAction=this}}kd.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cd=new Map;class Td extends wd{async execute(){let e=Cd.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Ed(t),i=Sd(e);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Cd.set(this.auth._key(),e)}return this.bypassAuthState||Cd.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function Id(e,t){Cd.set(e._key(),t)}function Sd(e){return ql(e._redirectPersistence)}function Ed(e){return $l("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nd(e,t,n=!1){const i=mc(e),s=gd(i,t),r=new Td(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class Pd{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ld(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ld(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(dl(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rd(e))}saveEventToCache(e){this.cachedEventUids.add(Rd(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Rd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ld({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ad=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Md=/^https?/;async function Od(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Il(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Dd(e))return}catch(e){}cl(e,"unauthorized-domain")}function Dd(e){const t=gl(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!Md.test(n))return!1;if(Ad.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=new bl(3e4,6e4);function Fd(){const e=rd().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Wd=null;function Ud(e){return Wd=Wd||function(e){return new Promise(((t,n)=>{var i,s,r;function o(){Fd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Fd(),n(dl(e,"network-request-failed"))},timeout:zd.get()})}if(null===(s=null===(i=rd().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=rd().gapi)||void 0===r?void 0:r.load)){const t=dc("iframefcb");return rd()[t]=()=>{gapi.load?o():n(dl(e,"network-request-failed"))},cc(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Wd=null,e}))}(e),Wd}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=new bl(5e3,15e3),Bd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hd(e){const t=e.config;pl(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?wl(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.21.0"},s=qd.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${zt(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class $d{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Gd(e,t,n,i=500,s=600){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Vd),{width:i.toString(),height:s.toString(),top:r,left:o}),c=gt().toLowerCase();n&&(a=Jl(c)?"_blank":n),Yl(c)&&(t=t||"http://localhost",l.scrollbars="yes");const d=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=gt()){var t;return nc(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new $d(null);const u=window.open(t||"",a,d);pl(u,e,"popup-blocked");try{u.focus()}catch(e){}return new $d(u)}const Xd=encodeURIComponent("fac");async function Yd(e,t,n,i,s,r){pl(e.config.authDomain,e,"auth-domain-config-required"),pl(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.21.0",eventId:s};if(t instanceof Rc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",At(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(r||{}))o[e]=t}if(t instanceof Lc){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const l=await e._getAppCheckToken(),c=l?`#${Xd}=${encodeURIComponent(l)}`:"";return`${function({config:e}){return e.emulator?wl(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${zt(a).slice(1)}${c}`}const Kd=class{async _openPopup(e,t,n,i){var s;ml(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return Gd(e,await Yd(e,t,n,gl(),i),id())}async _openRedirect(e,t,n,i){await this._originValidation(e);return function(e){rd().location.href=e}(await Yd(e,t,n,gl(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(ml(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Ud(e),n=rd().gapi;return pl(n,e,"internal-error"),t.open({where:document.body,url:Hd(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bd,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const s=dl(e,"network-request-failed"),r=rd().setTimeout((()=>{i(s)}),jd.get());function o(){rd().clearTimeout(r),n(t)}t.ping(o).then(o,(()=>{i(s)}))}))))}(e),n=new Pd(e);return t.register("authEvent",(t=>{pl(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==s&&t(!!s),cl(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Od(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sc()||Kl()||nc()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=td,this._completeRedirectFn=Nd,this._overrideRedirectResult=Id}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jd{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){pl(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qd=pt("authIdTokenMaxAge")||300;let Zd=null;var eu;eu="Browser",Nn(new Xt("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:r,authDomain:o}=n.options;pl(r&&!r.includes(":"),"invalid-api-key",{appName:n.name}),pl(!(null==o?void 0:o.includes(":")),"argument-error",{appName:n.name});const a={apiKey:r,authDomain:o,clientPlatform:eu,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rc(eu)},l=new fc(n,i,s,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ql);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Nn(new Xt("auth-internal",(e=>{const t=mc(e.getProvider("auth").getImmediate());return new Jd(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),On("@firebase/auth","0.23.1",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(eu)),On("@firebase/auth","0.23.1","esm2017");An({apiKey:"AIzaSyBwj1joeH7cezMQGrV_588ARC2goYFAeHk",authDomain:"book-e1fb3.firebaseapp.com",projectId:"book-e1fb3",storageBucket:"book-e1fb3.appspot.com",messagingSenderId:"701181474870",appId:"1:701181474870:web:8861dfbbd1f6265a608097",measurementId:"G-1S54659S3E"});const tu=function(e=Mn()){const t=Pn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Pn(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Ot(n.getOptions(),null!=t?t:{}))return e;cl(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Kd,persistence:[pd,Zc,td]}),i=pt("authTokenSyncURL");if(i){const e=(s=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Qd)return;const i=null==t?void 0:t.token;Zd!==i&&(Zd=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){Gt(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){Gt(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var s;const r=ut("auth");return r&&vc(n,`http://${r}`),n}();let nu=null,iu=!1;const su=document.querySelector(".js-list__nav"),ru=document.querySelector("[openSignUp]"),ou=document.querySelector(".modal__btn"),au=document.querySelector(".modal-book-btn__signUp");ru.addEventListener("click",ku);const lu=document.querySelector("[logOut]");lu.addEventListener("click",(function(){(e=tu,Gt(e).signOut()).then((()=>{localStorage.removeItem("uid"),localStorage.removeItem("user-name"),iu=!1})).catch((e=>{}));var e}));const cu={timeout:5e3};async function du(e,t){return await Gc(tu,e,t)}async function uu(e,t){return await Xc(tu,e,t)}function hu(e){e?(iu=!0,su.classList.add("show"),lu.classList.add("show"),ru.classList.remove("show"),su.closest(".header__box").classList.add("autorizationstyle"),au.classList.add("is-hidden"),ou.classList.remove("is-hidden")):(iu=!1,su.classList.remove("show"),lu.classList.remove("show"),ru.classList.add("show"),su.closest(".header__box").classList.remove("autorizationstyle"),au.classList.remove("is-hidden"),ou.classList.add("is-hidden"))}function pu(e){if(iu&&nu){return Ya($a(nl(),`users/${nu}/${e._id}`),e),!0}return!1}function fu(e){if(iu&&nu){const n=$a(nl(),`users/${nu}/${e}`);return da("remove",(t=n)._path),Xa(t,null),!0}var t;return!1}async function mu(){let e=null;return await Kc(tu,(e=>{e&&(nu=e.uid)})),await Ka(Ga($a(nl()),`users/${nu}`)).then((t=>{t.exists()?(console.log(t.val()),e=[...Object.values(t.val())]):console.log("No data available")})).catch((e=>{console.error(e)})),e}localStorage.getItem("uid")&&(nu=localStorage.getItem("uid")),Kc(tu,(e=>{e?(nu=e.uid,localStorage.setItem("uid",nu),console.log("User signed in:",e),hu(e.emailVerified)):(localStorage.removeItem("uid"),localStorage.removeItem("user-name"),iu=!1,hu(null),console.log("User signed out"))}));const gu=document.querySelector("[modalSignUp]"),vu=document.querySelector("[modalForm]"),yu=document.querySelector("[buttonSignUp]"),_u=document.querySelector("[buttonSignIn]");gu.addEventListener("click",(function(e){(e.target===e.currentTarget||e.target.closest(".k-modal__close"))&&Tu()})),vu.addEventListener("submit",(function(e){e.preventDefault();const{name:n,email:i,password:s}=e.target.elements;if(!bu)return function(e,n){uu(e,n).then((e=>{console.log(e),nu=e.user.uid,localStorage.setItem("uid",nu),hu(e.user.emailVerified),vu.reset(),wu.forEach((e=>{e.classList.remove("hide-label")})),Tu()})).catch((e=>{console.log(e),t(d).Notify.failure("Неверный пароль или почта!")}))}(i.value,s.value);n.value&&i.value&&s.value?du(i.value,s.value).then((e=>{console.log(e),localStorage.setItem("user-name",n.value),vu.reset(),wu.forEach((e=>{e.classList.remove("hide-label")})),Tu(),Yc(tu.currentUser).then((()=>{console.log("SENT EMAIL => CHECK"),t(d).Notify.success("Успешно зарегистрировано, проверьте почту для верификации!",cu)}))})).catch((e=>{console.log(e),t(d).Notify.failure("Случилась ошибка, повтори снова!")})):t(d).Notify.failure("Введите все поля!")})),yu.addEventListener("click",(function(){bu=!0,xu(yu,_u),vu.elements.name.closest(".k-modal__block").style.display="block",vu.publish.textContent="Sign up"})),_u.addEventListener("click",(function(){bu=!1,xu(_u,yu),vu.elements.name.closest(".k-modal__block").style.display="none",vu.publish.textContent="Sign In"}));let bu=!0;const wu=document.querySelectorAll(".k-modal__input");function xu(e,t){e.classList.add("active"),t.classList.remove("active")}function ku(){gu.classList.add("k-modal--active"),document.body.style.overflow="hidden",document.addEventListener("keydown",Cu)}function Cu(e){"Escape"===e.code&&Tu()}function Tu(){gu.classList.remove("k-modal--active"),document.body.style.overflow="overlay",document.removeEventListener("keydown",Cu)}wu.forEach((e=>{e.addEventListener("input",(e=>{e.target.value?e.target.classList.add("hide-label"):e.target.classList.remove("hide-label")}))}));const Iu=document.querySelector(".books-cards__list"),Su=document.querySelector(".backdrop--hidden"),Eu=document.querySelector(".close-btn"),Nu=document.querySelector(".book-container"),Pu=document.querySelector(".modal__btn"),Ru=document.querySelector(".modal-book-btn__signUp");function Lu(){Su.classList.add("backdrop--hidden"),Nu.innerHTML=""}Iu.addEventListener("click",(async function(e){let t=!0;if("DIV"===e.target.nodeName||"P"===e.target.nodeName||"H2"===e.target.nodeName||"A"===e.target.nodeName){Eu.addEventListener("click",Lu);const n=e.target.closest(".category-books__item").dataset.id;Su.classList.remove("backdrop--hidden");const i=await o(n);Nu.insertAdjacentHTML("beforeend",function({_id:e,book_image:t,buy_links:n,title:i,description:s,author:r}){const o=`<img src="${t}" alt="${i}" />\n  <h2>${i}</h2>\n  <p>${r}</p>\n  <p>${s}</p>\n  <svg width="10" height="10"><use href="${n}"></use></svg>`;return Pu.dataset.id=`${e}`,o}(i));const s=await mu();if(null!==s)for(let e=0;e<s.length;e++)if(s[e]._id===n){t=!1;break}Pu.textContent=t?"Add to shopping list":"Remove from the shopping list"}})),Ru.addEventListener("click",ku),Pu.addEventListener("click",(async function(e){let t=!0;const n=await mu(),i=Pu.dataset.id,s=await o(i);if(null!==n)for(let e=0;e<n.length;e++)if(n[e]._id===i){t=!1;break}t?(pu(s),Pu.textContent="Remove from the shopping list"):(fu(i),Pu.textContent="Add to shopping list")}));const Au=document.querySelector("body"),Mu=document.querySelector(".header"),Ou=document.querySelector(".logo__text"),Du=document.querySelector("#toggle"),zu=document.querySelector(".js-open-menu"),Fu=document.querySelector(".js-link-home"),Wu=document.querySelector(".js-link-shoping"),Uu=document.querySelector(".js-icon"),ju=document.querySelector(".icon__burger--open"),Bu=document.querySelector(".js-close-menu"),qu=document.querySelector(".icon__burger--close");Du.addEventListener("click",(function(e){console.log(e.currentTarget),Au.classList.toggle("dark-theme"),Mu.classList.toggle("dark"),Ou.classList.toggle("dark__icon"),zu.classList.toggle("button-black"),ju.classList.toggle("icon-black"),Bu.classList.toggle("button-black"),qu.classList.toggle("icon-black"),Fu.classList.contains("current")||Fu.classList.toggle("dark__text");Wu.classList.contains("current")||Wu.classList.toggle("dark__text");Uu.classList.contains("current")||Uu.classList.toggle("dark__icon")}));const Hu=document.querySelector(".js-open-menu"),Vu=document.querySelector(".js-close-menu"),$u=document.querySelector(".js-menu-container");Hu.addEventListener("click",(function(){Hu.classList.add("is-open"),$u.classList.add("is-open"),Hu.classList.contains("is-open")&&(Vu.classList.add("is-open"),Vu.classList.toggle("block"),Hu.style.display="none")})),Vu.addEventListener("click",(function(){Hu.classList.remove("is-open"),Vu.classList.toggle("block"),Vu.classList.remove("is-open"),$u.classList.remove("is-open"),Hu.style.display="block"}));getComputedStyle(Vu).display;let Gu=null;!function(){for(let e in localStorage){if(!localStorage.hasOwnProperty(e))continue;console.log("key ==>",e),console.log(localStorage.getItem(e));const{img:t,description:n,title:i,author:s,genre:r}=JSON.parse(localStorage.getItem(e));Gu+=`<div>\n            <img src="${t}" alt=""/>\n            <div class="main_description">\n                <div>\n                    <div>\n                        <h3>${i}</h3>\n                        <p>${r}</p>\n                    </div>\n                    <button></button>\n                </div>\n                <p>${n}</p>\n                <div>\n                    <span>${s}</span>\n                    <span></span>\n                </div>\n            </div>\n        </div>`}if(!Gu)return document.querySelector("#shoplist__main").insertAdjacentHTML("beforeend",'<include src="./partials/shoppingList.html"></include>');document.querySelector("#shoplist__main").insertAdjacentHTML("beforeend",Gu)}();
//# sourceMappingURL=index.812fc9ec.js.map

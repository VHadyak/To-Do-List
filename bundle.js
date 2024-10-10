(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=JSON.parse(localStorage.getItem("tasks"))||[],n=JSON.parse(localStorage.getItem("completed"))||[];class a{constructor(t,e,n,a,r,o=0){this.title=t,this.description=e,this.date=n,this.priority=a,this.path=r,this.id=function(){const t=(JSON.parse(localStorage.getItem("tasks"))||[]).map((t=>t.id));let e;do{e=Math.floor(1e4*Math.random())}while(t.includes(e));return e}(),this.projectID=isNaN(Number(o))?0:Number(o)}}function r(t){const e=document.querySelector(`.task[data-id='${t}']`);e&&e.remove()}function o(t,n,a,o,i,c,s){const d=e.findIndex((t=>t.id===Number(s))),u=e[d],l=u.projectID,m=u.date;!function(t,e,n,a,r,o){t.title=e,t.description=n,t.date=a,t.priority=r,t.path=o}(u,t,n,a,o,i);const h=document.querySelectorAll("li:not(:first-child):not(:last-child)"),f=function(t){return Array.from(t).filter((t=>t.classList.contains("item-highlight"))).length>0}(h);!function(t,e,n,a){const o=document.querySelector("#project-container").querySelector(".project");if(t.projectID!==e){const i=D.find((t=>t.id===Number(e))),c=D.find((e=>e.id===t.projectID));if(a||n===Number(e)&&c.name===t.path||r(t.id),c&&o){const e=c.items.findIndex((e=>e.id===Number(t.id)));-1!==e&&c.items.splice(e,1)}i&&!i.items.some((e=>e.id===Number(t.id)))&&(i.addTask(t),t.projectID=Number(e))}}(u,c,l,f),function(t,e,n){n.forEach((n=>{n.classList.contains("item-highlight")&&e!==t.date&&r(t.id)}))}(u,m,h),function(t,e,n,a){document.querySelector(`.task[data-id="${t}"]`)&&function(t,e,n,a){const r=document.querySelector(`div.task[data-id="${a}"]`),o=r.querySelector("div.task-title"),i=r.querySelector("div.date"),c=r.querySelector("div.priority");o.textContent=t,i.textContent=e,c.textContent=n,v(i,r),k(c,r)}(e,n,a,t)}(s,t,a,o),localStorage.setItem("tasks",JSON.stringify(e)),localStorage.setItem("projects",JSON.stringify(D))}function i(t,n){const a=D.findIndex((e=>e.id===t.projectID));if(-1!==a){const t=D[a],e=t.items.findIndex((t=>t.id===n));t.items.splice(e,1)}localStorage.setItem("tasks",JSON.stringify(e)),localStorage.setItem("projects",JSON.stringify(D))}function c(t){const n=t.getAttribute("data-id"),a=e.filter((t=>t.projectID===Number(n)));document.querySelectorAll(".task").forEach((t=>t.remove())),a.forEach((t=>{S(t)}))}function s(t){c(t)}const d=t.p+"3cb7be8fc316456fa877.svg",u=t.p+"83a48180b851938452a8.svg",l=document.querySelector("div#project-container"),m=document.querySelector("div#task-container"),h=document.querySelector("#clickTask"),f=document.querySelector("div.content-wrapper"),g=document.querySelector("div.flex-task");function p(){const t=document.querySelector("dialog.task-dialog select#path");t.innerHTML="",D.forEach((e=>{const n=document.createElement("option");n.value=e.name,n.id=e.id,n.textContent=e.name,t.appendChild(n)}))}function y(){const t=document.querySelectorAll(".task .drop-up-wrapper"),e=document.querySelectorAll(".checkTask");let n=document.querySelector(".deleteAll");n?n.style.display="block":(n=document.createElement("button"),n.classList.add("deleteAll"),n.textContent="Delete All",f&&h&&g.insertBefore(n,h)),e.forEach((t=>{if(t&&t.classList.contains("checkTask")){const e=t.nextElementSibling;e&&(t.checked=!0,t.disabled=!0,e.classList.add("checkbox-disabled"))}})),t.forEach((t=>{t.remove()})),h&&(h.style.display="none")}function b(){const t=document.querySelector(".deleteAll");h&&(h.style.display="block"),t&&t.remove()}function w(t){const e=document.createElement("div"),n=document.createElement("div");e.classList.add("project"),n.classList.add("project-title"),e.setAttribute("data-id",t.id),n.textContent=t.name;const{wrapper:a,menu:r}=E(d),o=document.createElement("button"),i=document.createElement("button");var c;o.classList.add("deleteProject"),i.classList.add("editProject"),i.textContent="Edit",o.textContent="Delete",r.appendChild(i),r.appendChild(o),e.appendChild(n),e.appendChild(a),l.appendChild(e),C(e,n.textContent),c=e,l.appendChild(c),c.scrollIntoView({behavior:"smooth",block:"end"})}function S(t){const e=document.createElement("div"),n=document.createElement("div"),a=document.createElement("button"),r=document.createElement("button"),o=document.createElement("input"),i=document.createElement("span"),c=document.createElement("div"),s=document.createElement("div"),d=document.createElement("div"),l=document.createElement("div"),h=document.createElement("div");o.type="checkbox",o.name="task",o.classList.add("checkTask"),a.classList.add("deleteTask"),r.classList.add("editTask"),i.classList.add("custom-checkbox"),c.classList.add("left-task"),s.classList.add("right-task"),n.classList.add("wrap-content"),e.classList.add("task"),d.classList.add("task-title"),l.classList.add("date"),h.classList.add("priority"),e.setAttribute("data-id",t.id),l.textContent=t.date,d.textContent=t.title,h.textContent=t.priority;const{wrapper:f,menu:g}=E(u);var p;a.textContent="Delete",r.textContent="Edit",g.appendChild(r),g.appendChild(a),c.appendChild(o),c.appendChild(i),c.appendChild(d),s.appendChild(h),s.appendChild(f),n.appendChild(c),n.appendChild(l),n.appendChild(s),e.appendChild(n),m.appendChild(e),v(l,e),k(h,e),p=e,m.appendChild(p),p.scrollIntoView({behavior:"smooth",block:"end"}),document.querySelector("#clickTask").scrollIntoView({behavior:"smooth",block:"end"})}function v(t,e){e&&("Past Due"===t.textContent?t.classList.add("stylePastDue"):t.classList.remove("stylePastDue"))}function k(t,e){if(e)switch(t.textContent){case"High":t.style.backgroundColor="rgba(251, 2, 2, 0.388)";break;case"Medium":t.style.backgroundColor="rgba(255, 153, 0, 0.388)";break;case"Low":t.style.backgroundColor="rgba(98, 255, 0, 0.388)"}}function x(t){document.querySelectorAll(".project, li").forEach((t=>t.classList.remove("item-highlight"))),t.classList.add("item-highlight")}function M(t){document.querySelector("div#section-title").textContent=t}function C(t,e){x(t),M(e),s(t),b()}function E(t){const e=document.createElement("img");e.src=t,e.classList.add("action-img");const n=document.createElement("div"),a=document.createElement("button"),r=document.createElement("div");return n.classList.add("drop-up-wrapper"),a.classList.add("btn-drop-up-toggle"),a.id="drop-up-menu-btn",r.classList.add("drop-up-menu"),a.setAttribute("type","button"),a.setAttribute("data-toggle","dropdown"),a.setAttribute("aria-expanded","false"),a.appendChild(e),n.appendChild(a),n.appendChild(r),{wrapper:n,menu:r}}function q(t,e){const n=e.target.closest(".btn-drop-up-toggle");if(n){const a=n.closest(".project, .task");if(a){const r=a.querySelector(".drop-up-menu"),o="true"===n.getAttribute("aria-expanded");t.querySelectorAll(".drop-up-menu").forEach((t=>{if(t!==r){t.style.display="none";const e=t.previousElementSibling;e&&e.setAttribute("aria-expanded","false")}})),n.setAttribute("aria-expanded",!o),r.style.display=o?"none":"flex",e.stopPropagation()}}else L(t)}function L(t){t.querySelectorAll(".drop-up-menu").forEach((t=>{t.style.display="none";const e=t.previousElementSibling;e&&e.setAttribute("aria-expanded","false")}))}const D=JSON.parse(localStorage.getItem("projects"))||[];class P{constructor(t){this.name=t,this.items=[],this.id=D.length>0?Math.max(...D.map((t=>t.id)))+1:0}addTask(t){this.items.push(t)}}function j(t){const e=new P(t);return D.push(e),localStorage.setItem("projects",JSON.stringify(D)),e}const N={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function T(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const I={date:T({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:T({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:T({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},O={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function A(t){return(e,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,r=n?.width?String(n.width):e;a=t.formattingValues[r]||t.formattingValues[e]}else{const e=t.defaultWidth,r=n?.width?String(n.width):t.defaultWidth;a=t.values[r]||t.values[e]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function W(t){return(e,n={})=>{const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;const i=o[0],c=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(c)?function(t){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(c):function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(c);let d;return d=t.valueCallback?t.valueCallback(s):s,d=n.valueCallback?n.valueCallback(d):d,{value:d,rest:e.slice(i.length)}}}var Y;const J={code:"en-US",formatDistance:(t,e,n)=>{let a;const r=N[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:I,formatRelative:(t,e,n,a)=>O[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:A({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:A({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:A({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:A({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:A({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(Y={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(Y.matchPattern);if(!n)return null;const a=n[0],r=t.match(Y.parsePattern);if(!r)return null;let o=Y.valueCallback?Y.valueCallback(r[0]):r[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(a.length)}}),era:W({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:W({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:W({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:W({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:W({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let H={};function F(){return H}Math.pow(10,8);const z=6048e5,$=Symbol.for("constructDateFrom");function B(t,e){return"function"==typeof t?t(e):t&&"object"==typeof t&&$ in t?t[$](e):t instanceof Date?new t.constructor(e):new Date(e)}function Q(t,e){return B(e||t,t)}function G(t){const e=Q(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function X(t,e){const n=Q(t,e?.in);return n.setHours(0,0,0,0),n}function V(t,e){const n=Q(t,e?.in);return function(t,e,n){const[a,r]=function(t,...e){const n=B.bind(null,t||e.find((t=>"object"==typeof t)));return e.map(n)}(n?.in,t,e),o=X(a),i=X(r),c=+o-G(o),s=+i-G(i);return Math.round((c-s)/864e5)}(n,function(t,e){const n=Q(t,e?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}(n))+1}function U(t,e){const n=F(),a=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,r=Q(t,e?.in),o=r.getDay(),i=(o<a?7:0)+o-a;return r.setDate(r.getDate()-i),r.setHours(0,0,0,0),r}function R(t,e){return U(t,{...e,weekStartsOn:1})}function K(t,e){const n=Q(t,e?.in),a=n.getFullYear(),r=B(n,0);r.setFullYear(a+1,0,4),r.setHours(0,0,0,0);const o=R(r),i=B(n,0);i.setFullYear(a,0,4),i.setHours(0,0,0,0);const c=R(i);return n.getTime()>=o.getTime()?a+1:n.getTime()>=c.getTime()?a:a-1}function Z(t,e){const n=Q(t,e?.in),a=+R(n)-+function(t,e){const n=K(t,e),a=B(e?.in||t,0);return a.setFullYear(n,0,4),a.setHours(0,0,0,0),R(a)}(n);return Math.round(a/z)+1}function _(t,e){const n=Q(t,e?.in),a=n.getFullYear(),r=F(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=B(e?.in||t,0);i.setFullYear(a+1,0,o),i.setHours(0,0,0,0);const c=U(i,e),s=B(e?.in||t,0);s.setFullYear(a,0,o),s.setHours(0,0,0,0);const d=U(s,e);return+n>=+c?a+1:+n>=+d?a:a-1}function tt(t,e){const n=Q(t,e?.in),a=+U(n,e)-+function(t,e){const n=F(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,r=_(t,e),o=B(e?.in||t,0);return o.setFullYear(r,0,a),o.setHours(0,0,0,0),U(o,e)}(n,e);return Math.round(a/z)+1}function et(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const nt={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return et("yy"===e?a%100:a,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):et(n+1,2)},d:(t,e)=>et(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>et(t.getHours()%12||12,e.length),H:(t,e)=>et(t.getHours(),e.length),m:(t,e)=>et(t.getMinutes(),e.length),s:(t,e)=>et(t.getSeconds(),e.length),S(t,e){const n=e.length,a=t.getMilliseconds();return et(Math.trunc(a*Math.pow(10,n-3)),e.length)}},at={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),a=e>0?e:1-e;return n.ordinalNumber(a,{unit:"year"})}return nt.y(t,e)},Y:function(t,e,n,a){const r=_(t,a),o=r>0?r:1-r;return"YY"===e?et(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):et(o,e.length)},R:function(t,e){return et(K(t),e.length)},u:function(t,e){return et(t.getFullYear(),e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return et(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return et(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return nt.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return et(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const r=tt(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):et(r,e.length)},I:function(t,e,n){const a=Z(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):et(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):nt.d(t,e)},D:function(t,e,n){const a=V(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):et(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return et(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return et(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return et(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let r;switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let r;switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return nt.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):nt.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):et(a,e.length)},k:function(t,e,n){let a=t.getHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):et(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):nt.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):nt.s(t,e)},S:function(t,e){return nt.S(t,e)},X:function(t,e,n){const a=t.getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return ot(a);case"XXXX":case"XX":return it(a);default:return it(a,":")}},x:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"x":return ot(a);case"xxxx":case"xx":return it(a);default:return it(a,":")}},O:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+rt(a,":");default:return"GMT"+it(a,":")}},z:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+rt(a,":");default:return"GMT"+it(a,":")}},t:function(t,e,n){return et(Math.trunc(+t/1e3),e.length)},T:function(t,e,n){return et(+t,e.length)}};function rt(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=Math.trunc(a/60),o=a%60;return 0===o?n+String(r):n+String(r)+e+et(o,2)}function ot(t,e){return t%60==0?(t>0?"-":"+")+et(Math.abs(t)/60,2):it(t,e)}function it(t,e=""){const n=t>0?"-":"+",a=Math.abs(t);return n+et(Math.trunc(a/60),2)+e+et(a%60,2)}const ct=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},st=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},dt={p:st,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],r=n[2];if(!r)return ct(t,e);let o;switch(a){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",ct(a,e)).replace("{{time}}",st(r,e))}},ut=/^D+$/,lt=/^Y+$/,mt=["D","DD","YY","YYYY"];function ht(t){return!(!((e=t)instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))&&"number"!=typeof t||isNaN(+Q(t)));var e}const ft=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,gt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,pt=/^'([^]*?)'?$/,yt=/''/g,bt=/[a-zA-Z]/;function wt(t,e,n){const a=F(),r=n?.locale??a.locale??J,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,c=Q(t,n?.in);if(!ht(c))throw new RangeError("Invalid time value");let s=e.match(gt).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,dt[e])(t,r.formatLong):t})).join("").match(ft).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:St(t)};if(at[e])return{isToken:!0,value:t};if(e.match(bt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));r.localize.preprocessor&&(s=r.localize.preprocessor(c,s));const d={firstWeekContainsDate:o,weekStartsOn:i,locale:r};return s.map((a=>{if(!a.isToken)return a.value;const o=a.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return lt.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return ut.test(t)}(o))&&function(t,e,n){const a=function(t,e,n){const a="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(a),mt.includes(t))throw new RangeError(a)}(o,e,String(t)),(0,at[o[0]])(c,o,r.localize,d)})).join("")}function St(t){const e=t.match(pt);return e?e[1].replace(yt,"'"):t}function vt(t,e){const n=F(),a=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,r=Q(t,e?.in),o=r.getDay(),i=6+(o<a?-7:0)-(o-a);return r.setDate(r.getDate()+i),r.setHours(23,59,59,999),r}function kt(t,e,n){const a=Q(t,n?.in);return isNaN(e)?B(n?.in||t,NaN):e?(a.setDate(a.getDate()+e),a):a}function xt(t){document.querySelectorAll(".task").forEach((t=>t.remove())),(Array.isArray(t)?t:[t]).forEach((t=>{e.filter((e=>e.date===t&&"Past Due"!==e.date)).forEach((t=>{S(t)}))}))}function Mt(){xt(wt(new Date,"yyyy-MM-dd"))}function Ct(){const t=new Date;xt(wt(t.setDate(t.getDate()+1),"yyyy-MM-dd"))}function Et(){const t=[],e=new Date,n=U(e,{weekStartsOn:1}),a=vt(e,{weekStartsOn:1});for(let e=n;e<=a;e=kt(e,1))t.push(wt(e,"yyyy-MM-dd"));xt(t)}function qt(){const t=[],n=vt(new Date,{weekStartsOn:1});e.forEach((e=>{e.date>wt(n,"yyyy-MM-dd")&&t.push(e.date)})),xt(t)}function Lt(){const t=wt(new Date,"yyyy-MM-dd");e.forEach((e=>{if(e.hasOwnProperty("isOverdue")||(e.isOverdue=!1),e.date<t){const t=document.querySelector(`div.task[data-id="${e.id}"]`);if(e.isOverdue=!0,e.date="Past Due",t){const e=t.querySelector("div.date");e.textContent="Past Due",e.classList.add("stylePastDue"),document.querySelector(".item-highlight")&&t.remove()}}})),localStorage.setItem("tasks",JSON.stringify(e))}document.addEventListener("DOMContentLoaded",(function(){const t=document.querySelector("dialog.task-dialog input#date"),e=wt(new Date,"yyyy-MM-dd");t.setAttribute("min",e)})),setInterval(Lt,6e4);const Dt=document.querySelector("button#clickProject"),Pt=document.querySelector("dialog.project-dialog input#projectName"),jt=document.querySelector("dialog.project-dialog button#createProject"),Nt=document.querySelector("dialog.project-dialog"),Tt=document.querySelector("button#clickTask"),It=document.querySelector("dialog.task-dialog button#createTask"),Ot=document.querySelector("dialog.task-dialog input#taskName"),At=document.querySelector("dialog.task-dialog textarea#description"),Wt=document.querySelector("dialog.task-dialog input#date"),Yt=document.querySelector("select#path"),Jt=document.querySelector("dialog.task-dialog select#priority"),Ht=document.querySelector("dialog.task-dialog");let Ft=!1,zt=null,$t=null;function Bt(){It.addEventListener("click",(t=>{if(!document.querySelector("form.task-form").checkValidity())return;t.preventDefault();const n=Ot.value,r=At.value,i=Wt.value,s=Jt.value,d=Yt.value,u=Yt.selectedOptions[0].id;if(Ft&&null!==$t)o(n,r,i,s,d,u,$t);else{!function(t,n,r,o,i,c){const s=new a(t,n,r,o,i,c);(function(t,e){const n=D.find((e=>e.id===Number(t)));if(n)n.addTask(e);else{const t=D.find((t=>0===t.id));t&&t.addTask(e)}localStorage.setItem("projects",JSON.stringify(D))})(c,s),e.push(s),localStorage.setItem("tasks",JSON.stringify(e))}(n,r,i,s,d,u);const t=document.querySelector(`[data-id="${u}"]`);u&&t&&t.classList.contains("item-highlight")&&c(t),document.querySelectorAll("li:not(:first-child):not(:last-child)").forEach((t=>{if(t.classList.contains("item-highlight"))switch(t.textContent){case"Today":Mt();break;case"Tomorrow":Ct();break;case"This Week":Et();break;case"Upcoming":qt()}}))}Xt(Ht),Rt("Task")}))}function Qt(){jt.addEventListener("click",(t=>{if(!document.querySelector("form.project-form").checkValidity())return;t.preventDefault();const n=Pt.value;if(Ft)!function(t,n){const a=D.findIndex((t=>t.id===Number(n))),r=D[a];r.name=t,M(t),r.items.forEach((e=>{e.projectID===r.id&&(e.path=t)})),e.forEach((e=>{e.projectID===r.id&&(e.path=t)})),localStorage.setItem("projects",JSON.stringify(D)),localStorage.setItem("tasks",JSON.stringify(e)),function(t,e){document.querySelector(`div.project[data-id="${e}"]`).querySelector("div.project div.project-title").textContent=t}(t,n)}(n,zt);else{const t=j(n);w(t),localStorage.setItem("selectedProjectID",t.id)}localStorage.setItem("selectedProject",n),Xt(Nt),Rt("Project"),p()})),l.addEventListener("click",(t=>{q(l,t)})),document.addEventListener("click",(t=>{t.target.closest(".btn-drop-up-toggle")||t.target.closest(".drop-up-menu")||L(l)})),l.addEventListener("click",(t=>{t.target&&t.target.classList.contains("deleteProject")&&(function(t){const n=t.closest(".project"),a=n.getAttribute("data-id"),r=D.findIndex((t=>t.id===Number(a)));e.filter((t=>t.projectID===Number(a))).forEach((t=>{const n=e.findIndex((e=>e.id===t.id)),a=document.querySelectorAll("div.task"),r=Array.from(a).find((e=>e.querySelector(".task-title").textContent===t.title&&e.querySelector(".date").textContent===t.date&&e.querySelector(".priority").textContent===t.priority));r&&r.remove(),e.splice(n,1)})),D.splice(r,1),n.remove(),localStorage.setItem("projects",JSON.stringify(D)),localStorage.setItem("tasks",JSON.stringify(e))}(t.target),p())})),l.addEventListener("click",(t=>{if(t.target&&t.target.classList.contains("editProject")){const e=t.target.closest(".project");e&&(Vt("Project"),Ft=Zt(jt,Ft),zt=e.getAttribute("data-id"),Pt.value=function(t){return D.find((e=>e.id===Number(t))).name}(zt))}}))}function Gt(){Bt(),m.addEventListener("click",(t=>{q(m,t)})),document.addEventListener("click",(t=>{t.target.closest(".btn-drop-up-toggle")||t.target.closest(".drop-up-menu")||L(m)})),m.addEventListener("click",(t=>{t.target&&t.target.classList.contains("deleteTask")&&function(t){const n=t.closest(".task"),a=Number(n.dataset.id),o=e.findIndex((t=>t.id===a)),c=e[o];e.splice(o,1),i(c,a),r(a),localStorage.setItem("tasks",JSON.stringify(e))}(t.target)})),m.addEventListener("click",(t=>{if(t.target&&t.target.classList.contains("editTask")){const n=t.target.closest(".task");if(n){$t=Number(n.dataset.id),Vt("Task"),Ft=Zt(It,Ft);const t=function(t){const n=e.find((e=>e.id===t)),{title:a,description:r,date:o,priority:i,path:c}=n;return{title:a,description:r,date:o,priority:i,path:c}}($t);t&&(Ot.value=t.title,At.value=t.description,Wt.value=t.date,Jt.value=t.priority,Ut())}}})),m.addEventListener("click",(t=>{const a=t.target.closest(".custom-checkbox");if(a){const t=a.parentNode.querySelector(".checkTask");t&&(t.checked=!t.checked,function(t){const a=t.closest(".task"),r=Number(a.dataset.id),o=e.findIndex((t=>t.id===Number(r))),c=e[o];t.checked&&(n.push(c),setTimeout((()=>{a.remove()}),300)),i(c,r),e.splice(o,1),localStorage.setItem("tasks",JSON.stringify(e)),localStorage.setItem("completed",JSON.stringify(n))}(t))}}))}function Xt(t){t.close()}function Vt(t){"Project"===t?Nt.showModal():"Task"===t&&Ht.showModal()}function Ut(){const t=document.querySelector(".item-highlight");if(t){const e=t.getAttribute("data-id"),n=document.querySelector("dialog.task-dialog select#path"),a=Array.from(n.options).find((t=>t.id===e));a&&(n.value=a.value,n.selectedIndex=a.index)}}function Rt(t){Ft=!1,zt=null,jt.textContent="Project"!==t&&t?jt.textContent:"Create Project",It.textContent="Task"!==t&&t?It.textContent:"Create Task"}function Kt(){Pt.value="",Ot.value="",At.value="",Wt.value="",Jt.value="",Yt.value="Inbox"}function Zt(t,e){return t?(t.textContent="Edit",!0):e}const _t={Inbox:()=>function(){const t=document.querySelector("li.inbox");t.dataset.id=0,c(t)}(),Today:()=>Mt(),Tomorrow:()=>Ct(),"This Week":()=>Et(),Upcoming:()=>qt(),Completed:()=>function(){const t=document.querySelector(".content-wrapper");document.querySelectorAll(".task").forEach((t=>t.remove())),n.forEach((t=>{S(t)})),t.addEventListener("click",(t=>{t.target&&t.target.classList.contains("deleteAll")&&(m.querySelector(".task")&&(document.querySelectorAll(".task").forEach((t=>t.remove())),n.length=0),localStorage.setItem("completed",JSON.stringify(n)))})),y()}()};function te(t,e){t&&_t[t]&&(_t[t](),x(e),M(t))}function ee(){!function(){const t=document.getElementById("toggleSidebar"),e=document.getElementById("sidebar"),n=document.querySelector(".header-left"),a=document.querySelector(".grid-container"),r=document.querySelector(".ham"),o=()=>{const o=window.innerWidth<=768,i=t.checked;o?(i?(n.classList.remove("collapsed-mobile"),e.classList.remove("collapsed-mobile"),r.classList.add("active")):(n.classList.add("collapsed-mobile"),e.classList.add("collapsed-mobile"),r.classList.remove("active")),e.classList.remove("collapsed"),a.style.removeProperty("grid-template-columns")):(i?(e.classList.add("collapsed"),a.style.gridTemplateColumns="110px repeat(2, minmax(280px, 1fr))",r.classList.remove("active")):(e.classList.remove("collapsed"),a.style.gridTemplateColumns="var(--sidebar-width) repeat(2, minmax(280px, 1fr))",r.classList.add("active")),n.classList.remove("collapsed-mobile"),e.classList.remove("collapsed-mobile"))};t.addEventListener("change",o),window.addEventListener("resize",o),o()}(),Lt(),function(){const t=JSON.parse(localStorage.getItem("tasks"))||[];e.length=0,t.forEach((t=>{const n=Object.assign(new a,t);e.push(n),S(n)}))}(),function(){const t=JSON.parse(localStorage.getItem("projects"))||[];D.length=0,t.some((t=>0===t.id))||j("Inbox"),t.forEach((t=>{const e=Object.assign(new P,t);D.push(e),0!==t.id&&w(e)})),p()}(),Dt.addEventListener("click",(()=>{Kt(),Vt("Project")})),Tt.addEventListener("click",(()=>{Kt(),Vt("Task"),Ut(),function(){const t=document.querySelectorAll("li:not(:first-child):not(:last-child)"),e=Array.from(t).filter((t=>t.classList.contains("item-highlight"))),n=document.querySelector("li.inbox");e.forEach((t=>{switch(t.textContent){case"Today":Wt.value=wt(new Date,"yyyy-MM-dd");break;case"Tomorrow":const t=new Date;t.setDate(t.getDate()+1),Wt.value=wt(t,"yyyy-MM-dd")}})),n.classList.contains("item-highlight")&&(Wt.value=wt(new Date,"yyyy-MM-dd"))}()})),document.querySelectorAll("button.cancel").forEach((t=>{t.addEventListener("click",(()=>{Xt(Nt),Xt(Ht),Rt(),Kt()}))})),Qt(),Gt(),function(){const t=document.querySelectorAll("li");window.addEventListener("DOMContentLoaded",(()=>{const e=localStorage.getItem("selectedSection")||"Inbox",n=localStorage.getItem("selectedProject"),a=localStorage.getItem("selectedProjectID"),r=Array.from(t).find((t=>t.textContent===e))||t[0];if(r&&te(e,r),a){const t=document.querySelector(`.project[data-id="${a}"]`);t&&(x(t),M(n),s(t),b())}})),t.forEach((t=>{t.addEventListener("click",(t=>{const e=t.currentTarget.textContent;te(e,t.currentTarget),"Completed"!==e&&b(),localStorage.setItem("selectedSection",e),localStorage.removeItem("selectedProjectID"),localStorage.removeItem("selectedProject")}))}))}(),l.addEventListener("click",(t=>{if(t.target&&(t.target.classList.contains("project")||t.target.closest(".btn-drop-up-toggle")||t.target.classList.contains("project-title"))){const e=t.target.closest(".project"),n=e.getAttribute("data-id"),a=e.querySelector(".project-title").textContent;e&&(C(e,a),localStorage.setItem("selectedProject",a),localStorage.setItem("selectedProjectID",n),localStorage.removeItem("selectedSection"))}else if(!document.querySelector("#clickProject").contains(t.target)){const t=Array.from(document.querySelectorAll("li")).find((t=>"Inbox"===t.textContent)),e=document.querySelector(".item-highlight");t&&!e&&(te("Inbox",t),localStorage.setItem("selectedSection","Inbox"))}}))}document.addEventListener("DOMContentLoaded",(()=>{ee()}))})();
//# sourceMappingURL=bundle.js.map
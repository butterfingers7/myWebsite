(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[7],{157:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",r="day",s="week",a="month",o="quarter",u="year",c="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},$={s:l,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+l(i,2,"0")+":"+l(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,a),s=n-r<0,o=e.clone().add(i+(s?-1:1),a);return+(-(i+(n-r)/(s?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:a,y:u,w:s,d:r,D:c,h:i,m:n,s:e,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",g={};g[m]=f;var p=function(t){return t instanceof v},M=function(t,e,n){var i;if(!t)return m;if("string"==typeof t)g[t]&&(i=t),e&&(g[t]=e,i=t);else{var r=t.name;g[r]=t,i=r}return!n&&i&&(m=i),i||!n&&m},j=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new v(n)},y=$;y.l=M,y.i=p,y.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var v=function(){function f(t){this.$L=M(t.locale,null,!0),this.parse(t)}var l=f.prototype;return l.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},l.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},l.$utils=function(){return y},l.isValid=function(){return!("Invalid Date"===this.$d.toString())},l.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},l.isAfter=function(t,e){return j(t)<this.startOf(e)},l.isBefore=function(t,e){return this.endOf(e)<j(t)},l.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(t,o){var h=this,d=!!y.u(o)||o,f=y.p(t),l=function(t,e){var n=y.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return d?n:n.endOf(r)},$=function(t,e){return y.w(h.toDate()[t].apply(h.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},m=this.$W,g=this.$M,p=this.$D,M="set"+(this.$u?"UTC":"");switch(f){case u:return d?l(1,0):l(31,11);case a:return d?l(1,g):l(0,g+1);case s:var j=this.$locale().weekStart||0,v=(m<j?m+7:m)-j;return l(d?p-v:p+(6-v),g);case r:case c:return $(M+"Hours",0);case i:return $(M+"Minutes",1);case n:return $(M+"Seconds",2);case e:return $(M+"Milliseconds",3);default:return this.clone()}},l.endOf=function(t){return this.startOf(t,!1)},l.$set=function(s,o){var h,d=y.p(s),f="set"+(this.$u?"UTC":""),l=(h={},h[r]=f+"Date",h[c]=f+"Date",h[a]=f+"Month",h[u]=f+"FullYear",h[i]=f+"Hours",h[n]=f+"Minutes",h[e]=f+"Seconds",h[t]=f+"Milliseconds",h)[d],$=d===r?this.$D+(o-this.$W):o;if(d===a||d===u){var m=this.clone().set(c,1);m.$d[l]($),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},l.set=function(t,e){return this.clone().$set(t,e)},l.get=function(t){return this[y.p(t)]()},l.add=function(t,o){var c,h=this;t=Number(t);var d=y.p(o),f=function(e){var n=j(h);return y.w(n.date(n.date()+Math.round(e*t)),h)};if(d===a)return this.set(a,this.$M+t);if(d===u)return this.set(u,this.$y+t);if(d===r)return f(1);if(d===s)return f(7);var l=(c={},c[n]=6e4,c[i]=36e5,c[e]=1e3,c)[d]||1,$=this.$d.getTime()+t*l;return y.w($,this)},l.subtract=function(t,e){return this.add(-1*t,e)},l.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=y.z(this),r=this.$locale(),s=this.$H,a=this.$m,o=this.$M,u=r.weekdays,c=r.months,h=function(t,i,r,s){return t&&(t[i]||t(e,n))||r[i].substr(0,s)},f=function(t){return y.s(s%12||12,t,"0")},l=r.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:y.s(o+1,2,"0"),MMM:h(r.monthsShort,o,c,3),MMMM:h(c,o),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:h(r.weekdaysMin,this.$W,u,2),ddd:h(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:y.s(s,2,"0"),h:f(1),hh:f(2),a:l(s,a,!0),A:l(s,a,!1),m:String(a),mm:y.s(a,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:i};return n.replace(d,(function(t,e){return e||$[t]||i.replace(":","")}))},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(t,c,h){var d,f=y.p(c),l=j(t),$=6e4*(l.utcOffset()-this.utcOffset()),m=this-l,g=y.m(this,l);return g=(d={},d[u]=g/12,d[a]=g,d[o]=g/3,d[s]=(m-$)/6048e5,d[r]=(m-$)/864e5,d[i]=m/36e5,d[n]=m/6e4,d[e]=m/1e3,d)[f]||m,h?g:y.a(g)},l.daysInMonth=function(){return this.endOf(a).$D},l.$locale=function(){return g[this.$L]},l.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=M(t,e,!0);return i&&(n.$L=i),n},l.clone=function(){return y.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},f}(),S=v.prototype;return j.prototype=S,[["$ms",t],["$s",e],["$m",n],["$H",i],["$W",r],["$M",a],["$y",u],["$D",c]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,v,j),t.$i=!0),j},j.locale=M,j.isDayjs=p,j.unix=function(t){return j(1e3*t)},j.en=g[m],j.Ls=g,j.p={},j}()},171:function(t,e,n){"use strict";n.r(e);var i=n(0),r=(n(1),n(5)),s=n(21),a=n(157),o=n.n(a),u=function(t){var e=t.data;return Object(i.jsx)("div",{className:"cell-container",children:Object(i.jsxs)("article",{className:"mini-post",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h3",{children:Object(i.jsx)("a",{href:e.link,children:e.title})}),Object(i.jsx)("time",{className:"published",children:o()(e.date).format("MMMM, YYYY")})]}),Object(i.jsx)("a",{href:e.link,className:"image",children:Object(i.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),Object(i.jsx)("div",{className:"description",children:Object(i.jsx)("p",{children:e.desc})})]})})},c=[{title:"Spotify Referral Program",subtitle:"PM School Challenge",link:"/images/SpotifyReferral.pdf",image:"/images/projects/SpotifyRefProgram.jpg",date:"2021-05-02",desc:"Came up with a PRD for re-launch of Referral- Invite a Friend Program for Spotify. A detailed study of how referral has a tremendous impact onB2C sales"},{title:"Swiggy Meal Planner",subtitle:"",link:"/images/SwiggyMealPlanner.pdf",image:"/images/projects/SwiggyMealPlanner.jpg",date:"2020-11-02",desc:"Came up with a Product Deck for a full-fledged Food Assistant for Swiggy that takes care of all food-related needs of users. Aim is to make Swiggy an overall food experience, and not just another online food-ordering application."},{title:"LinkedIn Messenger App",subtitle:"",link:"/images/LinkedInMessengerMVP.pdf",image:"/images/projects/linkedInMessenger.jpg",date:"2021-04-22",desc:"Came up with an MVP for a  mobile application LinkedIn messaging service.Tackled the present shortcomings of LinkedIn messaging and referral system. "}];e.default=function(){return Object(i.jsx)(s.a,{title:"Projects",description:"Learn about Aditi's projects.",children:Object(i.jsxs)("article",{className:"post",id:"projects",children:[Object(i.jsx)("header",{children:Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h2",{"data-testid":"heading",children:Object(i.jsx)(r.b,{to:"/projects",children:"Product Decks & Projects"})}),Object(i.jsx)("p",{children:"A selection of product decks/projects that I'm not too ashamed of"})]})}),c.map((function(t){return Object(i.jsx)(u,{data:t},t.title)}))]})})}}}]);
//# sourceMappingURL=7.cc62e1ff.chunk.js.map
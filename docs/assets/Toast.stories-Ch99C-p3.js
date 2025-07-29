import{e as i,r as O}from"./iframe-ewlT1mRj.js";import{B as Hn}from"./Button-CZe0l6yE.js";import{a as Kt,c as Un}from"./index-uDilQlfd.js";import{R as Qt}from"./index-tB6CmcNF.js";import{r as na}from"./randomId-Dfhrkieu.js";function M(n,t){t===void 0&&(t={});var a=t.insertAt;if(n&&typeof document<"u"){var e=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",a==="top"&&e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}M(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var y=function(){return y=Object.assign||function(n){for(var t,a=1,e=arguments.length;a<e;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},y.apply(this,arguments)};function at(n){return at=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},at(n)}var ta=/^\s+/,aa=/\s+$/;function b(n,t){if(t=t||{},(n=n||"")instanceof b)return n;if(!(this instanceof b))return new b(n,t);var a=function(e){var r={r:0,g:0,b:0},s=1,d=null,g=null,h=null,l=!1,p=!1;typeof e=="string"&&(e=function(u){u=u.replace(ta,"").replace(aa,"").toLowerCase();var c,m=!1;if(ut[u])u=ut[u],m=!0;else if(u=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(c=Z.rgb.exec(u))?{r:c[1],g:c[2],b:c[3]}:(c=Z.rgba.exec(u))?{r:c[1],g:c[2],b:c[3],a:c[4]}:(c=Z.hsl.exec(u))?{h:c[1],s:c[2],l:c[3]}:(c=Z.hsla.exec(u))?{h:c[1],s:c[2],l:c[3],a:c[4]}:(c=Z.hsv.exec(u))?{h:c[1],s:c[2],v:c[3]}:(c=Z.hsva.exec(u))?{h:c[1],s:c[2],v:c[3],a:c[4]}:(c=Z.hex8.exec(u))?{r:F(c[1]),g:F(c[2]),b:F(c[3]),a:Nt(c[4]),format:m?"name":"hex8"}:(c=Z.hex6.exec(u))?{r:F(c[1]),g:F(c[2]),b:F(c[3]),format:m?"name":"hex"}:(c=Z.hex4.exec(u))?{r:F(c[1]+""+c[1]),g:F(c[2]+""+c[2]),b:F(c[3]+""+c[3]),a:Nt(c[4]+""+c[4]),format:m?"name":"hex8"}:(c=Z.hex3.exec(u))?{r:F(c[1]+""+c[1]),g:F(c[2]+""+c[2]),b:F(c[3]+""+c[3]),format:m?"name":"hex"}:!1}(e)),at(e)=="object"&&(on(e.r)&&on(e.g)&&on(e.b)?(o=e.r,x=e.g,f=e.b,r={r:255*T(o,255),g:255*T(x,255),b:255*T(f,255)},l=!0,p=String(e.r).substr(-1)==="%"?"prgb":"rgb"):on(e.h)&&on(e.s)&&on(e.v)?(d=zn(e.s),g=zn(e.v),r=function(u,c,m){u=6*T(u,360),c=T(c,100),m=T(m,100);var k=Math.floor(u),D=u-k,E=m*(1-c),$=m*(1-D*c),A=m*(1-(1-D)*c),B=k%6,X=[m,$,E,E,A,m][B],K=[A,m,m,$,E,E][B],R=[E,E,A,m,m,$][B];return{r:255*X,g:255*K,b:255*R}}(e.h,d,g),l=!0,p="hsv"):on(e.h)&&on(e.s)&&on(e.l)&&(d=zn(e.s),h=zn(e.l),r=function(u,c,m){var k,D,E;function $(X,K,R){return R<0&&(R+=1),R>1&&(R-=1),R<1/6?X+6*(K-X)*R:R<.5?K:R<2/3?X+(K-X)*(2/3-R)*6:X}if(u=T(u,360),c=T(c,100),m=T(m,100),c===0)k=D=E=m;else{var A=m<.5?m*(1+c):m+c-m*c,B=2*m-A;k=$(B,A,u+1/3),D=$(B,A,u),E=$(B,A,u-1/3)}return{r:255*k,g:255*D,b:255*E}}(e.h,d,h),l=!0,p="hsl"),e.hasOwnProperty("a")&&(s=e.a));var o,x,f;return s=zt(s),{ok:l,format:e.format||p,r:Math.min(255,Math.max(r.r,0)),g:Math.min(255,Math.max(r.g,0)),b:Math.min(255,Math.max(r.b,0)),a:s}}(n);this._originalInput=n,this._r=a.r,this._g=a.g,this._b=a.b,this._a=a.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||a.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=a.ok}function Pt(n,t,a){n=T(n,255),t=T(t,255),a=T(a,255);var e,r,s=Math.max(n,t,a),d=Math.min(n,t,a),g=(s+d)/2;if(s==d)e=r=0;else{var h=s-d;switch(r=g>.5?h/(2-s-d):h/(s+d),s){case n:e=(t-a)/h+(t<a?6:0);break;case t:e=(a-n)/h+2;break;case a:e=(n-t)/h+4}e/=6}return{h:e,s:r,l:g}}function St(n,t,a){n=T(n,255),t=T(t,255),a=T(a,255);var e,r,s=Math.max(n,t,a),d=Math.min(n,t,a),g=s,h=s-d;if(r=s===0?0:h/s,s==d)e=0;else{switch(s){case n:e=(t-a)/h+(t<a?6:0);break;case t:e=(a-n)/h+2;break;case a:e=(n-t)/h+4}e/=6}return{h:e,s:r,v:g}}function Tt(n,t,a,e){var r=[G(Math.round(n).toString(16)),G(Math.round(t).toString(16)),G(Math.round(a).toString(16))];return e&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Et(n,t,a,e){return[G(qt(e)),G(Math.round(n).toString(16)),G(Math.round(t).toString(16)),G(Math.round(a).toString(16))].join("")}function ea(n,t){t=t===0?0:t||10;var a=b(n).toHsl();return a.s-=t/100,a.s=et(a.s),b(a)}function oa(n,t){t=t===0?0:t||10;var a=b(n).toHsl();return a.s+=t/100,a.s=et(a.s),b(a)}function ra(n){return b(n).desaturate(100)}function ia(n,t){t=t===0?0:t||10;var a=b(n).toHsl();return a.l+=t/100,a.l=et(a.l),b(a)}function sa(n,t){t=t===0?0:t||10;var a=b(n).toRgb();return a.r=Math.max(0,Math.min(255,a.r-Math.round(-t/100*255))),a.g=Math.max(0,Math.min(255,a.g-Math.round(-t/100*255))),a.b=Math.max(0,Math.min(255,a.b-Math.round(-t/100*255))),b(a)}function la(n,t){t=t===0?0:t||10;var a=b(n).toHsl();return a.l-=t/100,a.l=et(a.l),b(a)}function ca(n,t){var a=b(n).toHsl(),e=(a.h+t)%360;return a.h=e<0?360+e:e,b(a)}function da(n){var t=b(n).toHsl();return t.h=(t.h+180)%360,b(t)}function _t(n,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var a=b(n).toHsl(),e=[b(n)],r=360/t,s=1;s<t;s++)e.push(b({h:(a.h+s*r)%360,s:a.s,l:a.l}));return e}function ua(n){var t=b(n).toHsl(),a=t.h;return[b(n),b({h:(a+72)%360,s:t.s,l:t.l}),b({h:(a+216)%360,s:t.s,l:t.l})]}function pa(n,t,a){t=t||6,a=a||30;var e=b(n).toHsl(),r=360/a,s=[b(n)];for(e.h=(e.h-(r*t>>1)+720)%360;--t;)e.h=(e.h+r)%360,s.push(b(e));return s}function ma(n,t){t=t||6;for(var a=b(n).toHsv(),e=a.h,r=a.s,s=a.v,d=[],g=1/t;t--;)d.push(b({h:e,s:r,v:s})),s=(s+g)%1;return d}b.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var n=this.toRgb();return(299*n.r+587*n.g+114*n.b)/1e3},getLuminance:function(){var n,t,a,e=this.toRgb();return n=e.r/255,t=e.g/255,a=e.b/255,.2126*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))},setAlpha:function(n){return this._a=zt(n),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var n=St(this._r,this._g,this._b);return{h:360*n.h,s:n.s,v:n.v,a:this._a}},toHsvString:function(){var n=St(this._r,this._g,this._b),t=Math.round(360*n.h),a=Math.round(100*n.s),e=Math.round(100*n.v);return this._a==1?"hsv("+t+", "+a+"%, "+e+"%)":"hsva("+t+", "+a+"%, "+e+"%, "+this._roundA+")"},toHsl:function(){var n=Pt(this._r,this._g,this._b);return{h:360*n.h,s:n.s,l:n.l,a:this._a}},toHslString:function(){var n=Pt(this._r,this._g,this._b),t=Math.round(360*n.h),a=Math.round(100*n.s),e=Math.round(100*n.l);return this._a==1?"hsl("+t+", "+a+"%, "+e+"%)":"hsla("+t+", "+a+"%, "+e+"%, "+this._roundA+")"},toHex:function(n){return Tt(this._r,this._g,this._b,n)},toHexString:function(n){return"#"+this.toHex(n)},toHex8:function(n){return function(t,a,e,r,s){var d=[G(Math.round(t).toString(16)),G(Math.round(a).toString(16)),G(Math.round(e).toString(16)),G(qt(r))];return s&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)&&d[3].charAt(0)==d[3].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0)+d[3].charAt(0):d.join("")}(this._r,this._g,this._b,this._a,n)},toHex8String:function(n){return"#"+this.toHex8(n)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*T(this._r,255))+"%",g:Math.round(100*T(this._g,255))+"%",b:Math.round(100*T(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*T(this._r,255))+"%, "+Math.round(100*T(this._g,255))+"%, "+Math.round(100*T(this._b,255))+"%)":"rgba("+Math.round(100*T(this._r,255))+"%, "+Math.round(100*T(this._g,255))+"%, "+Math.round(100*T(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(ba[Tt(this._r,this._g,this._b,!0)]||!1)},toFilter:function(n){var t="#"+Et(this._r,this._g,this._b,this._a),a=t,e=this._gradientType?"GradientType = 1, ":"";if(n){var r=b(n);a="#"+Et(r._r,r._g,r._b,r._a)}return"progid:DXImageTransform.Microsoft.gradient("+e+"startColorstr="+t+",endColorstr="+a+")"},toString:function(n){var t=!!n;n=n||this._format;var a=!1,e=this._a<1&&this._a>=0;return t||!e||n!=="hex"&&n!=="hex6"&&n!=="hex3"&&n!=="hex4"&&n!=="hex8"&&n!=="name"?(n==="rgb"&&(a=this.toRgbString()),n==="prgb"&&(a=this.toPercentageRgbString()),n!=="hex"&&n!=="hex6"||(a=this.toHexString()),n==="hex3"&&(a=this.toHexString(!0)),n==="hex4"&&(a=this.toHex8String(!0)),n==="hex8"&&(a=this.toHex8String()),n==="name"&&(a=this.toName()),n==="hsl"&&(a=this.toHslString()),n==="hsv"&&(a=this.toHsvString()),a||this.toHexString()):n==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return b(this.toString())},_applyModification:function(n,t){var a=n.apply(null,[this].concat([].slice.call(t)));return this._r=a._r,this._g=a._g,this._b=a._b,this.setAlpha(a._a),this},lighten:function(){return this._applyModification(ia,arguments)},brighten:function(){return this._applyModification(sa,arguments)},darken:function(){return this._applyModification(la,arguments)},desaturate:function(){return this._applyModification(ea,arguments)},saturate:function(){return this._applyModification(oa,arguments)},greyscale:function(){return this._applyModification(ra,arguments)},spin:function(){return this._applyModification(ca,arguments)},_applyCombination:function(n,t){return n.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(pa,arguments)},complement:function(){return this._applyCombination(da,arguments)},monochromatic:function(){return this._applyCombination(ma,arguments)},splitcomplement:function(){return this._applyCombination(ua,arguments)},triad:function(){return this._applyCombination(_t,[3])},tetrad:function(){return this._applyCombination(_t,[4])}},b.fromRatio=function(n,t){if(at(n)=="object"){var a={};for(var e in n)n.hasOwnProperty(e)&&(a[e]=e==="a"?n[e]:zn(n[e]));n=a}return b(n,t)},b.equals=function(n,t){return!(!n||!t)&&b(n).toRgbString()==b(t).toRgbString()},b.random=function(){return b.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},b.mix=function(n,t,a){a=a===0?0:a||50;var e=b(n).toRgb(),r=b(t).toRgb(),s=a/100;return b({r:(r.r-e.r)*s+e.r,g:(r.g-e.g)*s+e.g,b:(r.b-e.b)*s+e.b,a:(r.a-e.a)*s+e.a})},b.readability=function(n,t){var a=b(n),e=b(t);return(Math.max(a.getLuminance(),e.getLuminance())+.05)/(Math.min(a.getLuminance(),e.getLuminance())+.05)},b.isReadable=function(n,t,a){var e,r,s=b.readability(n,t);switch(r=!1,(e=function(d){var g,h;return g=((d=d||{level:"AA",size:"small"}).level||"AA").toUpperCase(),h=(d.size||"small").toLowerCase(),g!=="AA"&&g!=="AAA"&&(g="AA"),h!=="small"&&h!=="large"&&(h="small"),{level:g,size:h}}(a)).level+e.size){case"AAsmall":case"AAAlarge":r=s>=4.5;break;case"AAlarge":r=s>=3;break;case"AAAsmall":r=s>=7}return r},b.mostReadable=function(n,t,a){var e,r,s,d,g=null,h=0;r=(a=a||{}).includeFallbackColors,s=a.level,d=a.size;for(var l=0;l<t.length;l++)(e=b.readability(n,t[l]))>h&&(h=e,g=b(t[l]));return b.isReadable(n,g,{level:s,size:d})||!r?g:(a.includeFallbackColors=!1,b.mostReadable(n,["#fff","#000"],a))};var ut=b.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},ba=b.hexNames=function(n){var t={};for(var a in n)n.hasOwnProperty(a)&&(t[n[a]]=a);return t}(ut);function zt(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function T(n,t){(function(e){return typeof e=="string"&&e.indexOf(".")!=-1&&parseFloat(e)===1})(n)&&(n="100%");var a=function(e){return typeof e=="string"&&e.indexOf("%")!=-1}(n);return n=Math.min(t,Math.max(0,parseFloat(n))),a&&(n=parseInt(n*t,10)/100),Math.abs(n-t)<1e-6?1:n%t/parseFloat(t)}function et(n){return Math.min(1,Math.max(0,n))}function F(n){return parseInt(n,16)}function G(n){return n.length==1?"0"+n:""+n}function zn(n){return n<=1&&(n=100*n+"%"),n}function qt(n){return Math.round(255*parseFloat(n)).toString(16)}function Nt(n){return F(n)/255}var ln,Vn,Jn,Z=(Vn="[\\s|\\(]+("+(ln="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+ln+")[,|\\s]+("+ln+")\\s*\\)?",Jn="[\\s|\\(]+("+ln+")[,|\\s]+("+ln+")[,|\\s]+("+ln+")[,|\\s]+("+ln+")\\s*\\)?",{CSS_UNIT:new RegExp(ln),rgb:new RegExp("rgb"+Vn),rgba:new RegExp("rgba"+Jn),hsl:new RegExp("hsl"+Vn),hsla:new RegExp("hsla"+Jn),hsv:new RegExp("hsv"+Vn),hsva:new RegExp("hsva"+Jn),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function on(n){return!!Z.CSS_UNIT.exec(n)}var Ln=function(n,t){var a=(typeof n=="string"?parseInt(n):n)||0;if(a>=-5&&a<=5){var e=a,r=parseFloat(t),s=r+e*(r/5)*-1;return(s==0||s<=Number.EPSILON)&&(s=.1),{animationPeriod:s+"s"}}return{animationPeriod:t}},Fn=function(n,t){var a=n||{},e="";switch(t){case"small":e="12px";break;case"medium":e="16px";break;case"large":e="20px";break;default:e=void 0}var r={};if(a.fontSize){var s=a.fontSize;r=function(d,g){var h={};for(var l in d)Object.prototype.hasOwnProperty.call(d,l)&&g.indexOf(l)<0&&(h[l]=d[l]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function"){var p=0;for(l=Object.getOwnPropertySymbols(d);p<l.length;p++)g.indexOf(l[p])<0&&Object.prototype.propertyIsEnumerable.call(d,l[p])&&(h[l[p]]=d[l[p]])}return h}(a,["fontSize"]),e=s}return{fontSize:e,styles:r}},ha={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},$n=function(n){var t=n.className,a=n.text,e=n.textColor,r=n.staticText,s=n.style;return a?i.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(t||"").trim(),style:y(y(y({},r&&ha),e&&{color:e,mixBlendMode:"unset"}),s&&s)},typeof a=="string"&&a.length?a:"loading"):null},rn="rgb(50, 205, 50)";function jn(n,t){if(t===void 0&&(t=0),n.length===0)throw new Error("Input array cannot be empty!");var a=[];return function e(r,s){return s===void 0&&(s=0),a.push.apply(a,r),a.length<s&&e(a,s),a.slice(0,s)}(n,t)}M(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);b(rn).toRgb();Array.from({length:4},function(n,t){return"--atom-phase".concat(t+1,"-rgb")});M(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--commet-phase".concat(t+1,"-color")});M(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var Zn=Array.from({length:4},function(n,t){return"--OP-annulus-phase".concat(t+1,"-color")}),ga=function(n){var t,a=Fn(n?.style,n?.size),e=a.styles,r=a.fontSize,s=n?.easing,d=Ln(n?.speedPlus,"1.5s").animationPeriod,g=function(l){var p={},o=Zn.length;if(l instanceof Array){for(var x=jn(l,o),f=0;f<x.length&&!(f>=4);f++)p[Zn[f]]=x[f];return p}try{if(typeof l!="string")throw new Error("Color String expected");for(var u=0;u<o;u++)p[Zn[u]]=l}catch(c){for(c instanceof Error?console.warn("[".concat(c.message,']: Received "').concat(typeof l,'" instead with value, ').concat(JSON.stringify(l))):console.warn("".concat(JSON.stringify(l),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),u=0;u<o;u++)p[Zn[u]]=rn}return p}((t=n?.color)!==null&&t!==void 0?t:""),h=n?.dense?4.3:2.9;return i.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:y(y(y(y(y({},r&&{fontSize:r}),d&&{"--rli-animation-duration":d}),s&&{"--rli-animation-function":s}),g),e),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},i.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},i.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:h,strokeMiterlimit:"10"})),i.createElement($n,{className:"OP-annulus-text",text:n?.text,textColor:n?.textColor})))};function dt(n){return n&&n.Math===Math&&n}M(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var vn=dt(typeof window=="object"&&window)||dt(typeof self=="object"&&self)||dt(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function Rt(){var n,t;return!((n=vn?.crypto)===null||n===void 0)&&n.randomUUID?vn.crypto.randomUUID():!((t=vn?.btoa)===null||t===void 0)&&t.name?vn.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var Gn=Array.from({length:4},function(n,t){return"--OP-dotted-phase".concat(t+1,"-color")}),fa=function(n){var t,a=Fn(n?.style,n?.size),e=a.styles,r=a.fontSize,s=n?.easing,d=Ln(n?.speedPlus,"1.2s").animationPeriod,g=function(l){var p={},o=Gn.length;if(l instanceof Array){for(var x=jn(l,o),f=0;f<x.length&&!(f>=4);f++)p[Gn[f]]=x[f];return p}try{if(typeof l!="string")throw new Error("Color String expected");for(var u=0;u<o;u++)p[Gn[u]]=l}catch(c){for(c instanceof Error?console.warn("[".concat(c.message,']: Received "').concat(typeof l,'" with value, ').concat(JSON.stringify(l))):console.warn("".concat(JSON.stringify(l),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),u=0;u<o;u++)p[Gn[u]]=rn}return p}((t=n?.color)!==null&&t!==void 0?t:""),h=n?.dense?16:12;return i.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:y(y(y(y(y({},r&&{fontSize:r}),d&&{"--rli-animation-duration":d}),s&&{"--rli-animation-function":s}),g),e),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:h}).map(function(l,p){var o=function(u,c,m){if(c===16){var k=360*u/c,D=c-u,E=Number.parseFloat(m)/c*D*-1;return{transform:"rotate(".concat(k,"deg)"),animationDelay:"".concat(E,"s")}}return{transform:"",animationDelay:""}}(p,h,d),x=o.animationDelay,f=o.transform;return i.createElement("span",{key:Rt(),className:"rli-d-i-b dot-shape-holder",style:f?{transform:f}:void 0},i.createElement("span",{className:"dot",style:x?{animationDelay:x}:void 0}))}),i.createElement($n,{className:"OP-dotted-text",text:n?.text,textColor:n?.textColor})))};M(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var Kn=Array.from({length:4},function(n,t){return"--OP-spokes-phase".concat(t+1,"-color")}),va=function(n){var t,a=Fn(n?.style,n?.size),e=a.styles,r=a.fontSize,s=n?.easing,d=Ln(n?.speedPlus,"1.2s").animationPeriod,g=function(l){var p={},o=Kn.length;if(l instanceof Array){for(var x=jn(l,o),f=0;f<x.length&&!(f>=4);f++)p[Kn[f]]=x[f];return p}try{if(typeof l!="string")throw new Error("Color String expected");for(var u=0;u<o;u++)p[Kn[u]]=l}catch(c){for(c instanceof Error?console.warn("[".concat(c.message,']: Received "').concat(typeof l,'" instead with value, ').concat(JSON.stringify(l))):console.warn("".concat(JSON.stringify(l),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),u=0;u<o;u++)p[Kn[u]]=rn}return p}((t=n?.color)!==null&&t!==void 0?t:""),h=n?.dense?16:12;return i.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:y(y(y(y(y({},r&&{fontSize:r}),d&&{"--rli-animation-duration":d}),s&&{"--rli-animation-function":s}),g),e),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:h},function(l,p){return i.createElement("span",{key:Rt(),className:"rli-d-i-b spoke",style:ya(p,h,d)})})),i.createElement($n,{text:n?.text,textColor:n?.textColor}))};function ya(n,t,a){if(t===16){var e=t-n,r=Number.parseFloat(a)/t;return{transform:"rotate(".concat(360*n/t,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((e-1)*r*-1,"s")}}}M(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var Qn=Array.from({length:4},function(n,t){return"--OP-annulus-dual-sectors-phase".concat(t+1,"-color")}),xa=function(n){var t,a=Fn(n?.style,n?.size),e=a.styles,r=a.fontSize,s=n?.easing,d=Ln(n?.speedPlus,"1.2s").animationPeriod,g=function(l){var p={},o=Qn.length;if(l instanceof Array){for(var x=jn(l,o),f=0;f<x.length&&!(f>=4);f++)p[Qn[f]]=x[f];return p}try{if(typeof l!="string")throw new Error("Color String expected");for(var u=0;u<o;u++)p[Qn[u]]=l}catch(c){for(c instanceof Error?console.warn("[".concat(c.message,']: Received "').concat(typeof l,'" with value, ').concat(JSON.stringify(l))):console.warn("".concat(JSON.stringify(l),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),u=0;u<o;u++)p[Qn[u]]=rn}return p}((t=n?.color)!==null&&t!==void 0?t:""),h=n.dense?"0.45em":"";return i.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:y(y(y(y(y({},r&&{fontSize:r}),d&&{"--rli-animation-duration":d}),s&&{"--rli-animation-function":s}),g),e),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},i.createElement("span",{className:"rli-d-i-b annulus-sectors",style:y({},h&&{borderWidth:h})}),i.createElement($n,{className:"OP-annulus-dual-sectors-text",text:n?.text,textColor:n?.textColor})))};M(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var Cn=Array.from({length:4},function(n,t){return["--OP-annulus-track-phase".concat(t+1,"-color"),"--OP-annulus-sector-phase".concat(t+1,"-color")]}),nt=function(n){return n===void 0&&(n=1),.25*n},ka=function(n){var t,a=Fn(n?.style,n?.size),e=a.styles,r=a.fontSize,s=n?.easing,d=Ln(n?.speedPlus,"1s").animationPeriod,g=function(l){var p={},o=Cn.length;if(l instanceof Array){for(var x=jn(l,o),f=0;f<x.length&&!(f>=4);f++){var u=Cn[f];try{if(!(k=b(x[f])).isValid())throw new Error("Invalid Color: ".concat(k.getOriginalInput()));var c=k.setAlpha(nt(k.getAlpha())).toRgbString(),m=x[f];p[u[0]]=c,p[u[1]]=m}catch{m=rn,c=(k=b(rn)).setAlpha(nt(k.getAlpha())).toRgbString(),p[u[0]]=c,p[u[1]]=m}}return p}try{var k=b(l);if(typeof l!="string")throw new Error("Color String expected");if(!k.isValid())throw new Error("Invalid Color: ".concat(k.getOriginalInput()));m=l,c=k.setAlpha(nt(k.getAlpha())).toRgbString();for(var D=0;D<o;D++)p[(u=Cn[D])[0]]=c,p[u[1]]=m}catch(E){for(E instanceof Error?console.warn("[".concat(E.message,']: Received "').concat(typeof l,'" with value, ').concat(JSON.stringify(l))):console.warn("".concat(JSON.stringify(l),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),m=rn,c=(k=b(rn)).setAlpha(nt(k.getAlpha())).toRgbString(),D=0;D<Cn.length;D++)p[(u=Cn[D])[0]]=c,p[u[1]]=m}return p}((t=n?.color)!==null&&t!==void 0?t:""),h=n.dense?"0.45em":"";return i.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:y(y(y(y(y({},r&&{fontSize:r}),d&&{"--rli-animation-duration":d}),s&&{"--rli-animation-function":s}),g),e),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},i.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:y({},h&&{borderWidth:h})}),i.createElement($n,{className:"OP-annulus-sector-text",text:n?.text,textColor:n?.textColor})))},wa=function(n){var t=Object(n).variant,a=t===void 0?"disc":t;return a==="dotted"?i.createElement(fa,y({},n)):a==="spokes"?i.createElement(va,y({},n)):a==="disc"?i.createElement(ga,y({},n)):a==="split-disc"?i.createElement(xa,y({},n)):a==="track-disc"?i.createElement(ka,y({},n)):null};M(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--four-square-phase".concat(t+1,"-color")});M(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--mosaic-phase".concat(t+1,"-color")});M(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--riple-phase".concat(t+1,"-color")});M(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--TD-pulsate-phase".concat(t+1,"-color")});M(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--TD-brick-stack-phase".concat(t+1,"-color")});M(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--TD-bob-phase".concat(t+1,"-color")});M(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--TD-bounce-phase".concat(t+1,"-color")});M(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--shape-phase".concat(t+1,"-color")});M(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--trophySpin-phase".concat(t+1,"-color")});M(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--slab-phase".concat(t+1,"-color")});M(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(n,t){return"--life-line-phase".concat(t+1,"-color")});const Oa=Kt({slots:{root:"p-3 rounded-sm w-full group-[.toaster]:shadow-xl/40 border-1",dismisser:`
      hidden
      hover:block
      group-[.toast[data-dismissible="true"][data-expanded="true"]]:block
      p-1.5 size-8 absolute -top-3 -right-3 rounded-full cursor-pointer z-1
    `,dismisserIcon:"flex items-center justify-center rounded-full",content:"flex flex-col gap-2",title:"text-sm font-semibold",body:"text-xs"},variants:{flavor:{neutral:{},positive:{},caution:{},negative:{}},isSecondary:{false:{dismisser:"p-1",dismisserIcon:"size-6 border-2 border-white"},true:{dismisser:"p-1.5",dismisserIcon:"size-5"}}},compoundVariants:[{flavor:"neutral",isSecondary:!1,class:{root:"bg-blue-700 border-blue-700 text-white",dismisserIcon:"bg-blue-950"}},{flavor:"neutral",isSecondary:!0,class:{root:"bg-blue-50 border-blue-200 text-blue-950",dismisserIcon:"bg-blue-900"}},{flavor:"positive",isSecondary:!1,class:{root:"bg-emerald-700 border-emerald-700 text-white",dismisserIcon:"bg-emerald-900"}},{flavor:"positive",isSecondary:!0,class:{root:"bg-emerald-50 border-emerald-200 text-emerald-950",dismisserIcon:"bg-emerald-800"}},{flavor:"caution",isSecondary:!1,class:{root:"bg-yellow-500 border-yellow-500 text-yellow-950",dismisserIcon:"bg-yellow-600"}},{flavor:"caution",isSecondary:!0,class:{root:"bg-yellow-50 border-yellow-300 text-yellow-950",dismisserIcon:"bg-yellow-600"}},{flavor:"negative",isSecondary:!1,class:{root:"bg-rose-700 border-rose-700 text-white",dismisserIcon:"bg-rose-900"}},{flavor:"negative",isSecondary:!0,class:{root:"bg-rose-50 border-rose-200 text-rose-950",dismisserIcon:"bg-rose-900"}}],defaultVariants:{flavor:"neutral",isDisabled:!1,isKeyboardFocused:!1,isSecondary:!1}});function mt({title:n,body:t,loading:a=!1,onDismiss:e,flavor:r,secondary:s=!1}){const d=Oa({flavor:r,isSecondary:s});let g;return r==="caution"?g="#432004":s?r==="positive"?g="#002c22":r==="negative"?g="#460809":g="#162456":g="#ffffff",O.createElement("div",{className:d.root()},O.createElement("button",{className:d.dismisser(),onClick:e},O.createElement("div",{className:d.dismisserIcon()},O.createElement(Pa,null))),O.createElement("div",{className:d.content()},n&&O.createElement("div",{className:d.title()},n),a?O.createElement("div",{className:"relative flex gap-3"},O.createElement("div",{className:"w-4"},O.createElement("div",{className:"absolute -top-0.5"},O.createElement(wa,{style:{fontSize:3.2},dense:!0,color:g}))),O.createElement("div",{className:d.body()},t)):O.createElement("div",{className:d.body()},t)))}function Pa(){return O.createElement("svg",{role:"img","aria-label":"Dismiss",fill:"white",width:"8",height:"8",version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 460.775 460.775"},O.createElement("path",{d:"M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"}))}mt.__docgenInfo={description:"A fully custom toast that still maintains the animations and interactions.",methods:[],displayName:"Toast",props:{title:{required:!1,tsType:{name:"string"},description:""},body:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},flavor:{required:!1,tsType:{name:"union",raw:"'neutral' | 'positive' | 'caution' | 'negative'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'caution'"},{name:"literal",value:"'negative'"}]},description:""},secondary:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function Sa(n){if(typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",t.appendChild(a),a.styleSheet?a.styleSheet.cssText=n:a.appendChild(document.createTextNode(n))}const Ta=n=>{switch(n){case"success":return Na;case"info":return Aa;case"warning":return Da;case"error":return Ma;default:return null}},Ea=Array(12).fill(0),_a=({visible:n,className:t})=>i.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":n},i.createElement("div",{className:"sonner-spinner"},Ea.map((a,e)=>i.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${e}`})))),Na=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},i.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),Da=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},i.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Aa=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},i.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),Ma=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},i.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Ca=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},i.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),i.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),za=()=>{const[n,t]=i.useState(document.hidden);return i.useEffect(()=>{const a=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",a),()=>window.removeEventListener("visibilitychange",a)},[]),n};let pt=1;class qa{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{const a=this.subscribers.indexOf(t);this.subscribers.splice(a,1)}),this.publish=t=>{this.subscribers.forEach(a=>a(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var a;const{message:e,...r}=t,s=typeof t?.id=="number"||((a=t.id)==null?void 0:a.length)>0?t.id:pt++,d=this.toasts.find(h=>h.id===s),g=t.dismissible===void 0?!0:t.dismissible;return this.dismissedToasts.has(s)&&this.dismissedToasts.delete(s),d?this.toasts=this.toasts.map(h=>h.id===s?(this.publish({...h,...t,id:s,title:e}),{...h,...t,id:s,dismissible:g,title:e}):h):this.addToast({title:e,...r,dismissible:g,id:s}),s},this.dismiss=t=>(t?(this.dismissedToasts.add(t),requestAnimationFrame(()=>this.subscribers.forEach(a=>a({id:t,dismiss:!0})))):this.toasts.forEach(a=>{this.subscribers.forEach(e=>e({id:a.id,dismiss:!0}))}),t),this.message=(t,a)=>this.create({...a,message:t}),this.error=(t,a)=>this.create({...a,message:t,type:"error"}),this.success=(t,a)=>this.create({...a,type:"success",message:t}),this.info=(t,a)=>this.create({...a,type:"info",message:t}),this.warning=(t,a)=>this.create({...a,type:"warning",message:t}),this.loading=(t,a)=>this.create({...a,type:"loading",message:t}),this.promise=(t,a)=>{if(!a)return;let e;a.loading!==void 0&&(e=this.create({...a,promise:t,type:"loading",message:a.loading,description:typeof a.description!="function"?a.description:void 0}));const r=Promise.resolve(t instanceof Function?t():t);let s=e!==void 0,d;const g=r.then(async l=>{if(d=["resolve",l],i.isValidElement(l))s=!1,this.create({id:e,type:"default",message:l});else if(Ba(l)&&!l.ok){s=!1;const o=typeof a.error=="function"?await a.error(`HTTP error! status: ${l.status}`):a.error,x=typeof a.description=="function"?await a.description(`HTTP error! status: ${l.status}`):a.description,u=typeof o=="object"&&!i.isValidElement(o)?o:{message:o};this.create({id:e,type:"error",description:x,...u})}else if(l instanceof Error){s=!1;const o=typeof a.error=="function"?await a.error(l):a.error,x=typeof a.description=="function"?await a.description(l):a.description,u=typeof o=="object"&&!i.isValidElement(o)?o:{message:o};this.create({id:e,type:"error",description:x,...u})}else if(a.success!==void 0){s=!1;const o=typeof a.success=="function"?await a.success(l):a.success,x=typeof a.description=="function"?await a.description(l):a.description,u=typeof o=="object"&&!i.isValidElement(o)?o:{message:o};this.create({id:e,type:"success",description:x,...u})}}).catch(async l=>{if(d=["reject",l],a.error!==void 0){s=!1;const p=typeof a.error=="function"?await a.error(l):a.error,o=typeof a.description=="function"?await a.description(l):a.description,f=typeof p=="object"&&!i.isValidElement(p)?p:{message:p};this.create({id:e,type:"error",description:o,...f})}}).finally(()=>{s&&(this.dismiss(e),e=void 0),a.finally==null||a.finally.call(a)}),h=()=>new Promise((l,p)=>g.then(()=>d[0]==="reject"?p(d[1]):l(d[1])).catch(p));return typeof e!="string"&&typeof e!="number"?{unwrap:h}:Object.assign(e,{unwrap:h})},this.custom=(t,a)=>{const e=a?.id||pt++;return this.create({jsx:t(e),id:e,...a}),e},this.getActiveToasts=()=>this.toasts.filter(t=>!this.dismissedToasts.has(t.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const I=new qa,Ra=(n,t)=>{const a=t?.id||pt++;return I.addToast({title:n,...t,id:a}),a},Ba=n=>n&&typeof n=="object"&&"ok"in n&&typeof n.ok=="boolean"&&"status"in n&&typeof n.status=="number",Ia=Ra,Ha=()=>I.toasts,La=()=>I.getActiveToasts(),ot=Object.assign(Ia,{success:I.success,info:I.info,warning:I.warning,error:I.error,custom:I.custom,message:I.message,promise:I.promise,dismiss:I.dismiss,loading:I.loading},{getHistory:Ha,getToasts:La});Sa("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function tt(n){return n.label!==void 0}const Fa=3,$a="24px",ja="16px",Dt=4e3,Ya=356,Xa=14,Wa=45,Ua=200;function nn(...n){return n.filter(Boolean).join(" ")}function Va(n){const[t,a]=n.split("-"),e=[];return t&&e.push(t),a&&e.push(a),e}const Ja=n=>{var t,a,e,r,s,d,g,h,l;const{invert:p,toast:o,unstyled:x,interacting:f,setHeights:u,visibleToasts:c,heights:m,index:k,toasts:D,expanded:E,removeToast:$,defaultRichColors:A,closeButton:B,style:X,cancelButtonStyle:K,actionButtonStyle:R,className:rt="",descriptionClassName:tn="",duration:mn,position:En,gap:it,expandByDefault:Q,classNames:w,icons:W,closeButtonAriaLabel:an="Close toast"}=n,[U,_n]=i.useState(null),[P,_]=i.useState(null),[S,j]=i.useState(!1),[un,N]=i.useState(!1),[Nn,bn]=i.useState(!1),[Dn,An]=i.useState(!1),[Ht,bt]=i.useState(!1),[Lt,st]=i.useState(0),[Ft,ht]=i.useState(0),Mn=i.useRef(o.duration||mn||Dt),gt=i.useRef(null),en=i.useRef(null),$t=k===0,jt=k+1<=c,H=o.type,hn=o.dismissible!==!1,Yt=o.className||"",Xt=o.descriptionClassName||"",Yn=i.useMemo(()=>m.findIndex(v=>v.toastId===o.id)||0,[m,o.id]),Wt=i.useMemo(()=>{var v;return(v=o.closeButton)!=null?v:B},[o.closeButton,B]),ft=i.useMemo(()=>o.duration||mn||Dt,[o.duration,mn]),lt=i.useRef(0),gn=i.useRef(0),vt=i.useRef(0),fn=i.useRef(null),[Ut,Vt]=En.split("-"),yt=i.useMemo(()=>m.reduce((v,C,q)=>q>=Yn?v:v+C.height,0),[m,Yn]),xt=za(),Jt=o.invert||p,ct=H==="loading";gn.current=i.useMemo(()=>Yn*it+yt,[Yn,yt]),i.useEffect(()=>{Mn.current=ft},[ft]),i.useEffect(()=>{j(!0)},[]),i.useEffect(()=>{const v=en.current;if(v){const C=v.getBoundingClientRect().height;return ht(C),u(q=>[{toastId:o.id,height:C,position:o.position},...q]),()=>u(q=>q.filter(L=>L.toastId!==o.id))}},[u,o.id]),i.useLayoutEffect(()=>{if(!S)return;const v=en.current,C=v.style.height;v.style.height="auto";const q=v.getBoundingClientRect().height;v.style.height=C,ht(q),u(L=>L.find(z=>z.toastId===o.id)?L.map(z=>z.toastId===o.id?{...z,height:q}:z):[{toastId:o.id,height:q,position:o.position},...L])},[S,o.title,o.description,u,o.id,o.jsx,o.action,o.cancel]);const sn=i.useCallback(()=>{N(!0),st(gn.current),u(v=>v.filter(C=>C.toastId!==o.id)),setTimeout(()=>{$(o)},Ua)},[o,$,u,gn]);i.useEffect(()=>{if(o.promise&&H==="loading"||o.duration===1/0||o.type==="loading")return;let v;return E||f||xt?(()=>{if(vt.current<lt.current){const L=new Date().getTime()-lt.current;Mn.current=Mn.current-L}vt.current=new Date().getTime()})():(()=>{Mn.current!==1/0&&(lt.current=new Date().getTime(),v=setTimeout(()=>{o.onAutoClose==null||o.onAutoClose.call(o,o),sn()},Mn.current))})(),()=>clearTimeout(v)},[E,f,o,H,xt,sn]),i.useEffect(()=>{o.delete&&(sn(),o.onDismiss==null||o.onDismiss.call(o,o))},[sn,o.delete]);function Zt(){var v;if(W?.loading){var C;return i.createElement("div",{className:nn(w?.loader,o==null||(C=o.classNames)==null?void 0:C.loader,"sonner-loader"),"data-visible":H==="loading"},W.loading)}return i.createElement(_a,{className:nn(w?.loader,o==null||(v=o.classNames)==null?void 0:v.loader),visible:H==="loading"})}const Gt=o.icon||W?.[H]||Ta(H);var kt,wt;return i.createElement("li",{tabIndex:0,ref:en,className:nn(rt,Yt,w?.toast,o==null||(t=o.classNames)==null?void 0:t.toast,w?.default,w?.[H],o==null||(a=o.classNames)==null?void 0:a[H]),"data-sonner-toast":"","data-rich-colors":(kt=o.richColors)!=null?kt:A,"data-styled":!(o.jsx||o.unstyled||x),"data-mounted":S,"data-promise":!!o.promise,"data-swiped":Ht,"data-removed":un,"data-visible":jt,"data-y-position":Ut,"data-x-position":Vt,"data-index":k,"data-front":$t,"data-swiping":Nn,"data-dismissible":hn,"data-type":H,"data-invert":Jt,"data-swipe-out":Dn,"data-swipe-direction":P,"data-expanded":!!(E||Q&&S),style:{"--index":k,"--toasts-before":k,"--z-index":D.length-k,"--offset":`${un?Lt:gn.current}px`,"--initial-height":Q?"auto":`${Ft}px`,...X,...o.style},onDragEnd:()=>{bn(!1),_n(null),fn.current=null},onPointerDown:v=>{v.button!==2&&(ct||!hn||(gt.current=new Date,st(gn.current),v.target.setPointerCapture(v.pointerId),v.target.tagName!=="BUTTON"&&(bn(!0),fn.current={x:v.clientX,y:v.clientY})))},onPointerUp:()=>{var v,C,q;if(Dn||!hn)return;fn.current=null;const L=Number(((v=en.current)==null?void 0:v.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Xn=Number(((C=en.current)==null?void 0:C.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),z=new Date().getTime()-((q=gt.current)==null?void 0:q.getTime()),Y=U==="x"?L:Xn,Wn=Math.abs(Y)/z;if(Math.abs(Y)>=Wa||Wn>.11){st(gn.current),o.onDismiss==null||o.onDismiss.call(o,o),_(U==="x"?L>0?"right":"left":Xn>0?"down":"up"),sn(),An(!0);return}else{var V,J;(V=en.current)==null||V.style.setProperty("--swipe-amount-x","0px"),(J=en.current)==null||J.style.setProperty("--swipe-amount-y","0px")}bt(!1),bn(!1),_n(null)},onPointerMove:v=>{var C,q,L;if(!fn.current||!hn||((C=window.getSelection())==null?void 0:C.toString().length)>0)return;const z=v.clientY-fn.current.y,Y=v.clientX-fn.current.x;var Wn;const V=(Wn=n.swipeDirections)!=null?Wn:Va(En);!U&&(Math.abs(Y)>1||Math.abs(z)>1)&&_n(Math.abs(Y)>Math.abs(z)?"x":"y");let J={x:0,y:0};const Ot=pn=>1/(1.5+Math.abs(pn)/20);if(U==="y"){if(V.includes("top")||V.includes("bottom"))if(V.includes("top")&&z<0||V.includes("bottom")&&z>0)J.y=z;else{const pn=z*Ot(z);J.y=Math.abs(pn)<Math.abs(z)?pn:z}}else if(U==="x"&&(V.includes("left")||V.includes("right")))if(V.includes("left")&&Y<0||V.includes("right")&&Y>0)J.x=Y;else{const pn=Y*Ot(Y);J.x=Math.abs(pn)<Math.abs(Y)?pn:Y}(Math.abs(J.x)>0||Math.abs(J.y)>0)&&bt(!0),(q=en.current)==null||q.style.setProperty("--swipe-amount-x",`${J.x}px`),(L=en.current)==null||L.style.setProperty("--swipe-amount-y",`${J.y}px`)}},Wt&&!o.jsx&&H!=="loading"?i.createElement("button",{"aria-label":an,"data-disabled":ct,"data-close-button":!0,onClick:ct||!hn?()=>{}:()=>{sn(),o.onDismiss==null||o.onDismiss.call(o,o)},className:nn(w?.closeButton,o==null||(e=o.classNames)==null?void 0:e.closeButton)},(wt=W?.close)!=null?wt:Ca):null,(H||o.icon||o.promise)&&o.icon!==null&&(W?.[H]!==null||o.icon)?i.createElement("div",{"data-icon":"",className:nn(w?.icon,o==null||(r=o.classNames)==null?void 0:r.icon)},o.promise||o.type==="loading"&&!o.icon?o.icon||Zt():null,o.type!=="loading"?Gt:null):null,i.createElement("div",{"data-content":"",className:nn(w?.content,o==null||(s=o.classNames)==null?void 0:s.content)},i.createElement("div",{"data-title":"",className:nn(w?.title,o==null||(d=o.classNames)==null?void 0:d.title)},o.jsx?o.jsx:typeof o.title=="function"?o.title():o.title),o.description?i.createElement("div",{"data-description":"",className:nn(tn,Xt,w?.description,o==null||(g=o.classNames)==null?void 0:g.description)},typeof o.description=="function"?o.description():o.description):null),i.isValidElement(o.cancel)?o.cancel:o.cancel&&tt(o.cancel)?i.createElement("button",{"data-button":!0,"data-cancel":!0,style:o.cancelButtonStyle||K,onClick:v=>{tt(o.cancel)&&hn&&(o.cancel.onClick==null||o.cancel.onClick.call(o.cancel,v),sn())},className:nn(w?.cancelButton,o==null||(h=o.classNames)==null?void 0:h.cancelButton)},o.cancel.label):null,i.isValidElement(o.action)?o.action:o.action&&tt(o.action)?i.createElement("button",{"data-button":!0,"data-action":!0,style:o.actionButtonStyle||R,onClick:v=>{tt(o.action)&&(o.action.onClick==null||o.action.onClick.call(o.action,v),!v.defaultPrevented&&sn())},className:nn(w?.actionButton,o==null||(l=o.classNames)==null?void 0:l.actionButton)},o.action.label):null)};function At(){if(typeof window>"u"||typeof document>"u")return"ltr";const n=document.documentElement.getAttribute("dir");return n==="auto"||!n?window.getComputedStyle(document.documentElement).direction:n}function Za(n,t){const a={};return[n,t].forEach((e,r)=>{const s=r===1,d=s?"--mobile-offset":"--offset",g=s?ja:$a;function h(l){["top","right","bottom","left"].forEach(p=>{a[`${d}-${p}`]=typeof l=="number"?`${l}px`:l})}typeof e=="number"||typeof e=="string"?h(e):typeof e=="object"?["top","right","bottom","left"].forEach(l=>{e[l]===void 0?a[`${d}-${l}`]=g:a[`${d}-${l}`]=typeof e[l]=="number"?`${e[l]}px`:e[l]}):h(g)}),a}const Ga=i.forwardRef(function(t,a){const{invert:e,position:r="bottom-right",hotkey:s=["altKey","KeyT"],expand:d,closeButton:g,className:h,offset:l,mobileOffset:p,theme:o="light",richColors:x,duration:f,style:u,visibleToasts:c=Fa,toastOptions:m,dir:k=At(),gap:D=Xa,icons:E,containerAriaLabel:$="Notifications"}=t,[A,B]=i.useState([]),X=i.useMemo(()=>Array.from(new Set([r].concat(A.filter(P=>P.position).map(P=>P.position)))),[A,r]),[K,R]=i.useState([]),[rt,tn]=i.useState(!1),[mn,En]=i.useState(!1),[it,Q]=i.useState(o!=="system"?o:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),w=i.useRef(null),W=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),an=i.useRef(null),U=i.useRef(!1),_n=i.useCallback(P=>{B(_=>{var S;return(S=_.find(j=>j.id===P.id))!=null&&S.delete||I.dismiss(P.id),_.filter(({id:j})=>j!==P.id)})},[]);return i.useEffect(()=>I.subscribe(P=>{if(P.dismiss){requestAnimationFrame(()=>{B(_=>_.map(S=>S.id===P.id?{...S,delete:!0}:S))});return}setTimeout(()=>{Qt.flushSync(()=>{B(_=>{const S=_.findIndex(j=>j.id===P.id);return S!==-1?[..._.slice(0,S),{..._[S],...P},..._.slice(S+1)]:[P,..._]})})})}),[A]),i.useEffect(()=>{if(o!=="system"){Q(o);return}if(o==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?Q("dark"):Q("light")),typeof window>"u")return;const P=window.matchMedia("(prefers-color-scheme: dark)");try{P.addEventListener("change",({matches:_})=>{Q(_?"dark":"light")})}catch{P.addListener(({matches:S})=>{try{Q(S?"dark":"light")}catch(j){console.error(j)}})}},[o]),i.useEffect(()=>{A.length<=1&&tn(!1)},[A]),i.useEffect(()=>{const P=_=>{var S;if(s.every(N=>_[N]||_.code===N)){var un;tn(!0),(un=w.current)==null||un.focus()}_.code==="Escape"&&(document.activeElement===w.current||(S=w.current)!=null&&S.contains(document.activeElement))&&tn(!1)};return document.addEventListener("keydown",P),()=>document.removeEventListener("keydown",P)},[s]),i.useEffect(()=>{if(w.current)return()=>{an.current&&(an.current.focus({preventScroll:!0}),an.current=null,U.current=!1)}},[w.current]),i.createElement("section",{ref:a,"aria-label":`${$} ${W}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},X.map((P,_)=>{var S;const[j,un]=P.split("-");return A.length?i.createElement("ol",{key:P,dir:k==="auto"?At():k,tabIndex:-1,ref:w,className:h,"data-sonner-toaster":!0,"data-sonner-theme":it,"data-y-position":j,"data-x-position":un,style:{"--front-toast-height":`${((S=K[0])==null?void 0:S.height)||0}px`,"--width":`${Ya}px`,"--gap":`${D}px`,...u,...Za(l,p)},onBlur:N=>{U.current&&!N.currentTarget.contains(N.relatedTarget)&&(U.current=!1,an.current&&(an.current.focus({preventScroll:!0}),an.current=null))},onFocus:N=>{N.target instanceof HTMLElement&&N.target.dataset.dismissible==="false"||U.current||(U.current=!0,an.current=N.relatedTarget)},onMouseEnter:()=>tn(!0),onMouseMove:()=>tn(!0),onMouseLeave:()=>{mn||tn(!1)},onDragEnd:()=>tn(!1),onPointerDown:N=>{N.target instanceof HTMLElement&&N.target.dataset.dismissible==="false"||En(!0)},onPointerUp:()=>En(!1)},A.filter(N=>!N.position&&_===0||N.position===P).map((N,Nn)=>{var bn,Dn;return i.createElement(Ja,{key:N.id,icons:E,index:Nn,toast:N,defaultRichColors:x,duration:(bn=m?.duration)!=null?bn:f,className:m?.className,descriptionClassName:m?.descriptionClassName,invert:e,visibleToasts:c,closeButton:(Dn=m?.closeButton)!=null?Dn:g,interacting:mn,position:P,style:m?.style,unstyled:m?.unstyled,classNames:m?.classNames,cancelButtonStyle:m?.cancelButtonStyle,actionButtonStyle:m?.actionButtonStyle,closeButtonAriaLabel:m?.closeButtonAriaLabel,removeToast:_n,toasts:A.filter(An=>An.position==N.position),heights:K.filter(An=>An.position==N.position),setHeights:R,expandByDefault:d,gap:D,expanded:rt,swipeDirections:t.swipeDirections})})):null}))});function Bt({className:n,toastOptions:t,position:a="top-right",...e}){return O.createElement(Ga,{...e,className:Un("group toaster",n),position:a,toastOptions:{...t,classNames:{...t?.classNames,toast:Un("group toast w-full max-w-80",t?.classNames?.toast),content:Un("w-full",t?.classNames?.content),title:Un("w-full",t?.classNames?.title)}}})}Bt.__docgenInfo={description:`The Toaster component manages the presentation of Toasts as they are
added via the toast() function. It should be mounted once somewhere in the
React DOM.
@props {@link ToasterProps}`,methods:[],displayName:"Toaster",props:{position:{defaultValue:{value:"'top-right'",computed:!1},required:!1}}};function It(n,t){return O.createElement(mt,{...t,onDismiss:a=>{t.onDismiss?.(a),ot.dismiss(n)}})}function cn(n={},t){return ot.custom(a=>It(a,n),t)}cn.promise=(n,{sonnerOptions:t={},loadingToastProps:a={}}={})=>{const e=t?.id??na();return cn({body:O.createElement(O.Fragment,null,"Loading …"),...a,loading:!0},{...t,id:e,duration:1/0}),ot.promise(n,{success:r=>({...t,id:e,jsx:It(e,r),duration:t.duration??0,type:"normal",message:null})})};cn.dimiss=ot.dismiss;const Ka={title:"Notices/Toast",component:mt},dn=(n,t)=>O.createElement(O.Fragment,null,O.createElement(Hn,{onClick:()=>cn(t.args),flavor:t.args.flavor},t.name," Toast"),O.createElement(Bt,null)),yn={tags:["flavor"],decorators:[dn],args:{flavor:"neutral",title:"Neutral Toast",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat."}},xn={tags:["flavor"],decorators:[dn],args:{flavor:"positive",title:"Positive Toast",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat."}},kn={tags:["flavor"],decorators:[dn],args:{flavor:"caution",title:"Caution Toast",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat."}},wn={tags:["flavor"],decorators:[dn],args:{flavor:"negative",title:"Negative Toast",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat."}},On={tags:["flavor"],decorators:[dn],args:{flavor:"neutral",secondary:!0,title:"Secondary neutral Toast",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat."}},Pn={tags:["flavor"],decorators:[dn],args:{flavor:"positive",secondary:!0,title:"Secondary positive Toast",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat."}},Sn={tags:["flavor"],decorators:[dn],args:{flavor:"caution",secondary:!0,title:"Secondary caution Toast",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat."}},Tn={tags:["flavor"],decorators:[dn],args:{flavor:"negative",secondary:!0,title:"Secondary negative Toast",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat."}},qn={tags:["!dev","!test"],render:n=>O.createElement(Hn,{onClick:()=>cn.promise(new Promise(t=>{setTimeout(()=>t({title:"Success",body:"Your request has been completed successfully!",flavor:"positive"}),2e3)}))},"Async Toast")},Rn={tags:["!dev","!test"],render:n=>O.createElement(Hn,{onClick:()=>{const t={title:"Failure",body:"There was a problem completing your request.",flavor:"negative"},e=new Promise((r,s)=>{setTimeout(()=>{s("oh no!")},2e3)}).catch(()=>t);cn.promise(e,{loadingToastProps:{body:O.createElement(O.Fragment,null,"We’re working on it …")},sonnerOptions:{dismissible:!1,duration:3e3}})}},"Customized async Toast")},Mt=[yn,xn,kn,wn],Bn={tags:["!dev","!test"],parameters:{source:`
      import { Button, toast } from 'nickui';

      <div className="flex gap-4 flex-wrap">${Mt.map(n=>`
        <Button
          flavor="${n.args?.flavor}"
          onClick={() => toast(${JSON.stringify(n.args,null,2).replace(/\n(\s*)("(\w+)"|(}))/g,`
$1          $3$4`)})}
        >
          ${n.args?.title}
        </Button>`).join("")}
      </div>
    `},render:n=>O.createElement("div",{className:"flex flex-wrap gap-4"},Mt.map(t=>O.createElement(Hn,{key:t.name,flavor:t.args?.flavor,onClick:()=>cn(t.args)},t.args?.title)))},Ct=[On,Pn,Sn,Tn],In={tags:["!dev","!test"],parameters:{source:`
      import { Button, toast } from 'nickui';

      <div className="flex gap-4 flex-wrap">${Ct.map(n=>`
        <Button
          flavor="${n.args?.flavor}"
          secondary
          onClick={() => toast(${JSON.stringify(n.args,null,2).replace(/\n(\s*)("(\w+)"|(}))/g,`
$1          $3$4`)})}
        >
          ${n.args?.title}
        </Button>`).join("")}
      </div>
    `},render:n=>O.createElement("div",{className:"flex flex-wrap gap-4"},Ct.map(t=>O.createElement(Hn,{key:t.name,flavor:t.args?.flavor,secondary:!0,onClick:()=>cn(t.args)},t.args?.title)))};yn.parameters={...yn.parameters,docs:{...yn.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  decorators: [renderWithButtonOpener],
  args: {
    flavor: 'neutral',
    title: 'Neutral Toast',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat.'
  }
}`,...yn.parameters?.docs?.source}}};xn.parameters={...xn.parameters,docs:{...xn.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  decorators: [renderWithButtonOpener],
  args: {
    flavor: 'positive',
    title: 'Positive Toast',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat.'
  }
}`,...xn.parameters?.docs?.source}}};kn.parameters={...kn.parameters,docs:{...kn.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  decorators: [renderWithButtonOpener],
  args: {
    flavor: 'caution',
    title: 'Caution Toast',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat.'
  }
}`,...kn.parameters?.docs?.source}}};wn.parameters={...wn.parameters,docs:{...wn.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  decorators: [renderWithButtonOpener],
  args: {
    flavor: 'negative',
    title: 'Negative Toast',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat.'
  }
}`,...wn.parameters?.docs?.source}}};On.parameters={...On.parameters,docs:{...On.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  decorators: [renderWithButtonOpener],
  args: {
    flavor: 'neutral',
    secondary: true,
    title: 'Secondary neutral Toast',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat.'
  }
}`,...On.parameters?.docs?.source}}};Pn.parameters={...Pn.parameters,docs:{...Pn.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  decorators: [renderWithButtonOpener],
  args: {
    flavor: 'positive',
    secondary: true,
    title: 'Secondary positive Toast',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat.'
  }
}`,...Pn.parameters?.docs?.source}}};Sn.parameters={...Sn.parameters,docs:{...Sn.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  decorators: [renderWithButtonOpener],
  args: {
    flavor: 'caution',
    secondary: true,
    title: 'Secondary caution Toast',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat.'
  }
}`,...Sn.parameters?.docs?.source}}};Tn.parameters={...Tn.parameters,docs:{...Tn.parameters?.docs,source:{originalSource:`{
  tags: ['flavor'],
  decorators: [renderWithButtonOpener],
  args: {
    flavor: 'negative',
    secondary: true,
    title: 'Secondary negative Toast',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim consectetur ante et ornare. Sed interdum sed quam vitae consequat.'
  }
}`,...Tn.parameters?.docs?.source}}};qn.parameters={...qn.parameters,docs:{...qn.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <Button onClick={() => toast.promise(new Promise(resolve => {
    setTimeout(() => resolve({
      title: 'Success',
      body: 'Your request has been completed successfully!',
      flavor: 'positive'
    }), 2000);
  }))}>
      Async Toast
    </Button>
}`,...qn.parameters?.docs?.source}}};Rn.parameters={...Rn.parameters,docs:{...Rn.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  render: _args => <Button onClick={() => {
    const errorToastProps: ToastProps = {
      title: 'Failure',
      body: 'There was a problem completing your request.',
      flavor: 'negative'
    };
    const task = new Promise<ToastProps>((_resolve, reject) => {
      setTimeout(() => {
        reject('oh no!');
      }, 2000);
    });
    const taskWithErrorHandling = task.catch(() => errorToastProps);
    toast.promise(taskWithErrorHandling, {
      loadingToastProps: {
        body: <>We’re working on it &hellip;</>
      },
      sonnerOptions: {
        dismissible: false,
        duration: 3000
      }
    });
  }}>
      Customized async Toast
    </Button>
}`,...Rn.parameters?.docs?.source}}};Bn.parameters={...Bn.parameters,docs:{...Bn.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  parameters: {
    source: \`
      import { Button, toast } from 'nickui';

      <div className="flex gap-4 flex-wrap">\${allFlavors.map(s => \`
        <Button
          flavor="\${s.args?.flavor}"
          onClick={() => toast(\${JSON.stringify(s.args, null, 2).replace(/\\n(\\s*)("(\\w+)"|(}))/g, '\\n$1          $3$4')})}
        >
          \${s.args?.title}
        </Button>\`).join('')}
      </div>
    \`
  },
  render: _args => <div className="flex flex-wrap gap-4">
      {allFlavors.map(s => <Button key={s.name} flavor={s.args?.flavor} onClick={() => toast(s.args)}>
          {s.args?.title}
        </Button>)}
    </div>
}`,...Bn.parameters?.docs?.source}}};In.parameters={...In.parameters,docs:{...In.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!test'],
  parameters: {
    source: \`
      import { Button, toast } from 'nickui';

      <div className="flex gap-4 flex-wrap">\${allSecondaryFlavors.map(s => \`
        <Button
          flavor="\${s.args?.flavor}"
          secondary
          onClick={() => toast(\${JSON.stringify(s.args, null, 2).replace(/\\n(\\s*)("(\\w+)"|(}))/g, '\\n$1          $3$4')})}
        >
          \${s.args?.title}
        </Button>\`).join('')}
      </div>
    \`
  },
  render: _args => <div className="flex flex-wrap gap-4">
      {allSecondaryFlavors.map(s => <Button key={s.name} flavor={s.args?.flavor} secondary onClick={() => toast(s.args)}>
          {s.args?.title}
        </Button>)}
    </div>
}`,...In.parameters?.docs?.source}}};const Qa=["Neutral","Positive","Caution","Negative","SecondaryNeutral","SecondaryPositive","SecondaryCaution","SecondaryNegative","AsyncToast","CustomAsyncToast","AllFlavors","AllSecondaryFlavors"],ie=Object.freeze(Object.defineProperty({__proto__:null,AllFlavors:Bn,AllSecondaryFlavors:In,AsyncToast:qn,Caution:kn,CustomAsyncToast:Rn,Negative:wn,Neutral:yn,Positive:xn,SecondaryCaution:Sn,SecondaryNegative:Tn,SecondaryNeutral:On,SecondaryPositive:Pn,__namedExportsOrder:Qa,default:Ka},Symbol.toStringTag,{value:"Module"}));export{qn as A,Rn as C,ie as S,Bt as T,cn as t};

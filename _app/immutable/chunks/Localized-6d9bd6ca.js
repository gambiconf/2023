import{S as b,i as g,s as p,Q as v,Y as y,Z as T,_ as w,f as S,t as C,af as I,ag as O,a0 as P,I as j,q as B,r as q,b as L,u as M,h as N}from"./index-d8df0015.js";import{d as f,w as Y}from"./index-bf1f8592.js";function d(n,t){return Array.isArray(t)?t.map(r=>_(n,r)):_(n,t)}function _(n,t){for(const r of n)if(r.hasMessage(t))return r;return null}class z extends Array{static from(t){return t instanceof this?t:new this(t)}}class m extends z{constructor(t){if(super(),Symbol.iterator in Object(t))this.iterator=t[Symbol.iterator]();else throw new TypeError("Argument must implement the iteration protocol.")}[Symbol.iterator](){const t=this;let r=0;return{next(){return t.length<=r&&t.push(t.iterator.next()),t[r++]}}}touchNext(t=1){let r=0;for(;r++<t;){const s=this[this.length-1];if(s&&s.done)break;this.push(this.iterator.next())}return this[this.length-1]}}function D(n){let t;const r=n[2].default,s=v(r,n,n[1],null);return{c(){s&&s.c()},l(e){s&&s.l(e)},m(e,a){s&&s.m(e,a),t=!0},p(e,[a]){s&&s.p&&(!t||a&2)&&y(s,r,e,e[1],t?w(r,e[1],a,null):T(e[1]),null)},i(e){t||(S(s,e),t=!0)},o(e){C(s,e),t=!1},d(e){s&&s.d(e)}}}const x={};function K(){const n=I(x);if(!n){console.error("[svelte-fluent] <FluentProvider/> was not found in component hierarchy.");return}const{bundles:t,dispatch:r}=n,s=f(t,o=>l=>d(o,l)),e=f(t,o=>(l,u)=>{const c=d(o,l);if(c===null)return r("error",`[svelte-fluent] Translation missing: "${l}"`),{value:l,attributes:{}};const i=c.getMessage(l);if(i===null)return r("error",`[svelte-fluent] Translation missing: "${l}"`),{value:l,attributes:{}};const E=c.formatPattern(i.value,u),k=Object.fromEntries(Object.entries(i.attributes||{}).map(([A,F])=>[A,c.formatPattern(F,u)]));return{value:E,attributes:k}}),a=f(e,o=>(l,u)=>o(l,u).value);return{getBundle:s,getTranslation:e,translate:a}}function Q(n,t,r){let{$$slots:s={},$$scope:e}=t,{bundles:a=[]}=t;const{subscribe:o,set:l}=Y(m.from(a));return O(x,{bundles:{subscribe:o},dispatch:P()}),n.$$set=u=>{"bundles"in u&&r(0,a=u.bundles),"$$scope"in u&&r(1,e=u.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&l(m.from(a))},[a,e,s]}class U extends b{constructor(t){super(),g(this,t,Q,D,p,{bundles:0})}}const X=n=>({text:n&1,attrs:n&1}),h=n=>({text:n[0].value,attrs:n[0].attributes});function Z(n){let t=n[0].value+"",r;return{c(){r=B(t)},l(s){r=q(s,t)},m(s,e){L(s,r,e)},p(s,e){e&1&&t!==(t=s[0].value+"")&&M(r,t)},d(s){s&&N(r)}}}function G(n){let t;const r=n[6].default,s=v(r,n,n[5],h),e=s||Z(n);return{c(){e&&e.c()},l(a){e&&e.l(a)},m(a,o){e&&e.m(a,o),t=!0},p(a,[o]){s?s.p&&(!t||o&33)&&y(s,r,a,a[5],t?w(r,a[5],o,X):T(a[5]),h):e&&e.p&&(!t||o&1)&&e.p(a,t?o:-1)},i(a){t||(S(e,a),t=!0)},o(a){C(e,a),t=!1},d(a){e&&e.d(a)}}}function H(n,t,r){let s,e,{$$slots:a={},$$scope:o}=t,{id:l}=t,{args:u=null}=t;const{getTranslation:c}=K();return j(n,c,i=>r(4,e=i)),n.$$set=i=>{"id"in i&&r(2,l=i.id),"args"in i&&r(3,u=i.args),"$$scope"in i&&r(5,o=i.$$scope)},n.$$.update=()=>{n.$$.dirty&28&&r(0,s=e(l,u))},[s,c,l,u,e,o,a]}class V extends b{constructor(t){super(),g(this,t,H,G,p,{id:2,args:3})}}export{U as F,V as L,K as s};

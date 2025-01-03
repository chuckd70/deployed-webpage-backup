var _e=Object.defineProperty;var ve=(e,t,n)=>t in e?_e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var G=(e,t,n)=>ve(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function N(){}function ae(e){return e()}function Z(){return Object.create(null)}function W(e){e.forEach(ae)}function de(e){return typeof e=="function"}function ge(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function be(e){return Object.keys(e).length===0}function a(e,t){e.appendChild(t)}function w(e,t,n){e.insertBefore(t,n||null)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function he(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function pe(e){return document.createTextNode(e)}function _(){return pe(" ")}function B(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function ke(e){return function(t){return t.preventDefault(),e.call(this,t)}}function c(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function we(e){return Array.from(e.childNodes)}function ze(e,t){t=""+t,e.data!==t&&(e.data=t)}function I(e,t){e.value=t??""}function U(e,t,n,l){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function Q(e,t,n){e.classList.toggle(t,!!n)}let q;function R(e){q=e}function ye(){if(!q)throw new Error("Function called outside component initialization");return q}function xe(e){ye().$$.on_mount.push(e)}const H=[],ee=[];let D=[];const te=[],Ce=Promise.resolve();let K=!1;function $e(){K||(K=!0,Ce.then(me))}function X(e){D.push(e)}const J=new Set;let T=0;function me(){if(T!==0)return;const e=q;do{try{for(;T<H.length;){const t=H[T];T++,R(t),Ee(t.$$)}}catch(t){throw H.length=0,T=0,t}for(R(null),H.length=0,T=0;ee.length;)ee.pop()();for(let t=0;t<D.length;t+=1){const n=D[t];J.has(n)||(J.add(n),n())}D.length=0}while(H.length);for(;te.length;)te.pop()();K=!1,J.clear(),R(e)}function Ee(e){if(e.fragment!==null){e.update(),W(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(X)}}function Pe(e){const t=[],n=[];D.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),D=t}const Se=new Set;function Ae(e,t){e&&e.i&&(Se.delete(e),e.i(t))}function V(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Oe(e,t,n){const{fragment:l,after_update:s}=e.$$;l&&l.m(t,n),X(()=>{const r=e.$$.on_mount.map(ae).filter(de);e.$$.on_destroy?e.$$.on_destroy.push(...r):W(r),e.$$.on_mount=[]}),s.forEach(X)}function Me(e,t){const n=e.$$;n.fragment!==null&&(Pe(n.after_update),W(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function je(e,t){e.$$.dirty[0]===-1&&(H.push(e),$e(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Le(e,t,n,l,s,r,f=null,i=[-1]){const u=q;R(e);const o=e.$$={fragment:null,ctx:[],props:r,update:N,not_equal:s,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:Z(),dirty:i,skip_bound:!1,root:t.target||u.$$.root};f&&f(o.root);let m=!1;if(o.ctx=n?n(e,t.props||{},(d,S,...z)=>{const M=z.length?z[0]:S;return o.ctx&&s(o.ctx[d],o.ctx[d]=M)&&(!o.skip_bound&&o.bound[d]&&o.bound[d](M),m&&je(e,d)),S}):[],o.update(),m=!0,W(o.before_update),o.fragment=l?l(o.ctx):!1,t.target){if(t.hydrate){const d=we(t.target);o.fragment&&o.fragment.l(d),d.forEach(b)}else o.fragment&&o.fragment.c();t.intro&&Ae(e.$$.fragment),Oe(e,t.target,t.anchor),me()}R(u)}class Ne{constructor(){G(this,"$$");G(this,"$$set")}$destroy(){Me(this,1),this.$destroy=N}$on(t,n){if(!de(n))return N;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(t){this.$$set&&!be(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Be="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Be);function ne(e,t,n){const l=e.slice();return l[15]=t[n],l[17]=n,l}function le(e,t,n){const l=e.slice();return l[18]=t[n],l[20]=n,l}function se(e){let t;return{c(){t=p("div"),c(t,"class","hexagon svelte-1wxeskz"),U(t,"--delay",e[20]*.2+"s"),U(t,"--top",Math.random()*100+"%"),U(t,"--left",Math.random()*100+"%")},m(n,l){w(n,t,l)},p:N,d(n){n&&b(t)}}}function oe(e){let t;return{c(){t=p("div"),t.innerHTML='<div class="text"><h1 class="svelte-1wxeskz">Hi, I&#39;m Chuck Drake</h1> <p>IT Hardware &amp; Software Engineer, Author, Entrepreneur, Based In The US</p></div> <img src="./chuck-page-pic.jpeg" alt="Chuck Drake" class="photo svelte-1wxeskz"/>',c(t,"class","header svelte-1wxeskz")},m(n,l){w(n,t,l)},d(n){n&&b(t)}}}function ie(e){let t,n,l,s,r,f,i,u,o;return{c(){t=p("a"),t.textContent="Vlogs",n=_(),l=p("button"),l.textContent="Projects",s=_(),r=p("button"),r.textContent="Contact Me",f=_(),i=p("a"),i.textContent="Open Chat",c(t,"href","#"),c(t,"class","button svelte-1wxeskz"),c(l,"class","button svelte-1wxeskz"),c(r,"class","button svelte-1wxeskz"),c(i,"href","https://oc.app/"),c(i,"class","button svelte-1wxeskz"),c(i,"target","_blank"),c(i,"rel","noopener noreferrer")},m(m,d){w(m,t,d),w(m,n,d),w(m,l,d),w(m,s,d),w(m,r,d),w(m,f,d),w(m,i,d),u||(o=[B(l,"click",e[9]),B(r,"click",e[10])],u=!0)},p:N,d(m){m&&(b(t),b(n),b(l),b(s),b(r),b(f),b(i)),u=!1,W(o)}}}function re(e){let t,n,l,s,r=V(e[6]),f=[];for(let i=0;i<r.length;i+=1)f[i]=ce(ne(e,r,i));return{c(){t=p("div"),n=p("h2"),n.textContent="Publications",l=_(),s=p("div");for(let i=0;i<f.length;i+=1)f[i].c();c(n,"class","svelte-1wxeskz"),c(s,"class","book-grid svelte-1wxeskz"),c(t,"class","publications-page svelte-1wxeskz")},m(i,u){w(i,t,u),a(t,n),a(t,l),a(t,s);for(let o=0;o<f.length;o+=1)f[o]&&f[o].m(s,null)},p(i,u){if(u&64){r=V(i[6]);let o;for(o=0;o<r.length;o+=1){const m=ne(i,r,o);f[o]?f[o].p(m,u):(f[o]=ce(m),f[o].c(),f[o].m(s,null))}for(;o<f.length;o+=1)f[o].d(1);f.length=r.length}},d(i){i&&b(t),he(f,i)}}}function ce(e){let t,n,l,s,r,f,i,u;return{c(){t=p("a"),n=p("div"),l=p("div"),l.textContent=`${e[17]+1}`,s=_(),r=p("h3"),r.textContent=`${e[15].title}`,f=_(),i=p("span"),i.textContent="View on Amazon →",u=_(),c(l,"class","book-number svelte-1wxeskz"),c(r,"class","svelte-1wxeskz"),c(i,"class","link-text svelte-1wxeskz"),c(n,"class","book svelte-1wxeskz"),c(t,"href",e[15].url),c(t,"class","book-link svelte-1wxeskz"),c(t,"target","_blank"),c(t,"rel","noopener noreferrer")},m(o,m){w(o,t,m),a(t,n),a(n,l),a(n,s),a(n,r),a(n,f),a(n,i),a(t,u)},p:N,d(o){o&&b(t)}}}function ue(e){let t;return{c(){t=p("div"),t.innerHTML='<h2 class="svelte-1wxeskz">Projects</h2> <div class="project-link svelte-1wxeskz"><a href="#" class="button svelte-1wxeskz">WEBSTER AI</a></div>',c(t,"class","projects-page svelte-1wxeskz")},m(n,l){w(n,t,l)},d(n){n&&b(t)}}}function fe(e){let t,n,l,s,r,f,i,u,o,m,d,S,z,M,y,L,j,A,F;return{c(){t=p("div"),n=p("h2"),n.textContent="Contact Me",l=_(),s=p("form"),r=p("label"),r.textContent="Name",f=_(),i=p("input"),u=_(),o=p("label"),o.textContent="Email",m=_(),d=p("input"),S=_(),z=p("label"),z.textContent="Message",M=_(),y=p("textarea"),L=_(),j=p("button"),j.textContent="Send",c(n,"class","svelte-1wxeskz"),c(r,"for","name"),c(r,"class","svelte-1wxeskz"),c(i,"type","text"),c(i,"id","name"),i.required=!0,c(i,"class","svelte-1wxeskz"),c(o,"for","email"),c(o,"class","svelte-1wxeskz"),c(d,"type","email"),c(d,"id","email"),d.required=!0,c(d,"class","svelte-1wxeskz"),c(z,"for","message"),c(z,"class","svelte-1wxeskz"),c(y,"id","message"),c(y,"rows","5"),y.required=!0,c(y,"class","svelte-1wxeskz"),c(j,"type","submit"),c(j,"class","button svelte-1wxeskz"),c(s,"class","contact-form svelte-1wxeskz"),c(t,"class","contact-page svelte-1wxeskz")},m(k,v){w(k,t,v),a(t,n),a(t,l),a(t,s),a(s,r),a(s,f),a(s,i),I(i,e[3]),a(s,u),a(s,o),a(s,m),a(s,d),I(d,e[4]),a(s,S),a(s,z),a(s,M),a(s,y),I(y,e[5]),a(s,L),a(s,j),A||(F=[B(i,"input",e[11]),B(d,"input",e[12]),B(y,"input",e[13]),B(s,"submit",ke(e[14]))],A=!0)},p(k,v){v&8&&i.value!==k[3]&&I(i,k[3]),v&16&&d.value!==k[4]&&I(d,k[4]),v&32&&I(y,k[5])},d(k){k&&b(t),A=!1,W(F)}}}function Ie(e){let t,n,l,s,r,f,i,u,o,m,d,S=e[0]?"Back to Home":"Publications",z,M,y,L,j,A,F,k=V(e[7]),v=[];for(let h=0;h<k.length;h+=1)v[h]=se(le(e,k,h));let E=!e[0]&&!e[1]&&!e[2]&&oe(),x=!e[0]&&!e[1]&&!e[2]&&ie(e),C=e[0]&&re(e),P=e[1]&&ue(),$=e[2]&&fe(e);return{c(){t=p("div"),n=p("div");for(let h=0;h<v.length;h+=1)v[h].c();l=_(),s=p("div"),r=_(),f=p("div"),i=_(),u=p("div"),E&&E.c(),o=_(),m=p("div"),d=p("button"),z=pe(S),M=_(),x&&x.c(),y=_(),C&&C.c(),L=_(),P&&P.c(),j=_(),$&&$.c(),c(n,"class","hex-container svelte-1wxeskz"),c(s,"class","light-rays svelte-1wxeskz"),c(f,"class","gradient-overlay svelte-1wxeskz"),c(t,"class","background svelte-1wxeskz"),c(d,"class","button svelte-1wxeskz"),Q(d,"active",e[0]),c(m,"class","buttons svelte-1wxeskz"),c(u,"class","page svelte-1wxeskz")},m(h,O){w(h,t,O),a(t,n);for(let g=0;g<v.length;g+=1)v[g]&&v[g].m(n,null);a(t,l),a(t,s),a(t,r),a(t,f),w(h,i,O),w(h,u,O),E&&E.m(u,null),a(u,o),a(u,m),a(m,d),a(d,z),a(m,M),x&&x.m(m,null),a(u,y),C&&C.m(u,null),a(u,L),P&&P.m(u,null),a(u,j),$&&$.m(u,null),A||(F=B(d,"click",e[8]),A=!0)},p(h,[O]){if(O&0){k=V(h[7]);let g;for(g=0;g<k.length;g+=1){const Y=le(h,k,g);v[g]?v[g].p(Y,O):(v[g]=se(Y),v[g].c(),v[g].m(n,null))}for(;g<v.length;g+=1)v[g].d(1);v.length=k.length}!h[0]&&!h[1]&&!h[2]?E||(E=oe(),E.c(),E.m(u,o)):E&&(E.d(1),E=null),O&1&&S!==(S=h[0]?"Back to Home":"Publications")&&ze(z,S),O&1&&Q(d,"active",h[0]),!h[0]&&!h[1]&&!h[2]?x?x.p(h,O):(x=ie(h),x.c(),x.m(m,null)):x&&(x.d(1),x=null),h[0]?C?C.p(h,O):(C=re(h),C.c(),C.m(u,L)):C&&(C.d(1),C=null),h[1]?P||(P=ue(),P.c(),P.m(u,j)):P&&(P.d(1),P=null),h[2]?$?$.p(h,O):($=fe(h),$.c(),$.m(u,null)):$&&($.d(1),$=null)},i:N,o:N,d(h){h&&(b(t),b(i),b(u)),he(v,h),E&&E.d(),x&&x.d(),C&&C.d(),P&&P.d(),$&&$.d(),A=!1,F()}}}const Te=30;function He(e,t,n){let l=!1,s=!1,r=!1,f="",i="",u="";const o=[{title:"Real Estate In A Financial Meltup & Secrets Of The Great Silver Reset",url:"https://www.amazon.es/dp/B0DL6WV83J"},{title:"Operation Overcast, Gladio And The Path To Armageddon",url:"https://www.amazon.es/dp/B0D5PYRTWM"},{title:"U.S. Psychic Spy Program, NAZIS & Human Conciousness",url:"https://www.amazon.es/dp/B0D8XHH7G8"}],m=Array(Te).fill(null);xe(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then(A=>{console.log("Service Worker registered:",A)}).catch(A=>{console.error("Service Worker registration failed:",A)})});const d=()=>{n(0,l=!l),n(1,s=!1),n(2,r=!1)},S=()=>{n(1,s=!0),n(0,l=!1),n(2,r=!1)},z=()=>{n(2,r=!0),n(0,l=!1),n(1,s=!1)};function M(){f=this.value,n(3,f)}function y(){i=this.value,n(4,i)}function L(){u=this.value,n(5,u)}return[l,s,r,f,i,u,o,m,d,S,z,M,y,L,()=>window.location.href=`mailto:linuxtech@yahoo.com?subject=Contact%20Form%20Submission&body=Name:%20${f}%0D%0AEmail:%20${i}%0D%0AMessage:%20${u}`]}class De extends Ne{constructor(t){super(),Le(this,t,He,Ie,ge,{})}}new De({target:document.getElementById("app")});

(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function c(n){let r=0;const o=i=>{r=i,n.innerHTML=`count is ${r}`};n.addEventListener("click",()=>o(r+1)),o(0)}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="https://i.postimg.cc/bvWtMmR7/image.png" class="logo" alt="Vite logo" />
    </a>
    <h1>Hola Wilder nuevo!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Buenos dias amigo
    </p>
  </div>
`;c(document.querySelector("#counter"));

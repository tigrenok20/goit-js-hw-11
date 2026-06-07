import{S as f,a as m,i as c}from"./assets/vendor-BTRK9AdA.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p=new f(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".gallery"),d=document.querySelector(".loader");function y(n){const o=n.map(a=>`<li class="gallery-item">
        <a class="gallery-link" href="${a.original}">
            <img
            class="gallery-image"
            src="${a.preview}"
            data-source="${a.original}"
            alt="${a.description}"
            width="360" height="200"
            />
        </a>
        </li>`).join(`
`);u.innerHTML=o,p.refresh()}function g(){u.innerHTML=""}function h(){d.style.display=""}function s(){d.style.display="none"}s();const L="https://pixabay.com/api/",b="56207103-4b28cc7dd0dd3e21e461efeb9";function S(n){const o=new URLSearchParams({key:b,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}).toString();return m.get(`${L}?${o}`).then(a=>a.data.hits.map(r=>({preview:r.webformatURL,original:r.largeImageURL,description:r.tags})))}const l=document.querySelector(".form");l.addEventListener("submit",n=>{n.preventDefault();const o=l.elements["search-text"].value.trim();if(!o)return;const a=S(o);h(),g(),a.then(r=>{r.length?y(r):c.info({message:"Sorry, there are no images matching your search query. Please try again!"}),s()}).catch(r=>{c.error(`Error happened: ${r.message}`),s()})});
//# sourceMappingURL=index.js.map

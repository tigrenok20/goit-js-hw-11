import{S as f,a as p,i as l}from"./assets/vendor-BTRK9AdA.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const u=new f(".gallery a",{captionsData:"alt",captionDelay:250}),m=document.querySelector(".gallery"),d=document.querySelector(".loader");function g(r){const n=r.map(t=>`<li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
            <img
            class="gallery-image"
            src="${t.webformatURL}"
            data-source="${t.largeImageURL}"
            alt="${t.tags}"
            width="350" height="200"
            />
            <div class="image-info">
              <div class="image-info-element">
                <span class="image-info-element-label">Likes</span>
                <span class="image-info-element-counter">${t.likes}</span>
              </div>
              <div class="image-info-element">
                <span class="image-info-element-label">Views</span>
                <span class="image-info-element-counter">${t.views}</span>
              </div>
              <div class="image-info-element">
                <span class="image-info-element-label">Comments</span>
                <span class="image-info-element-counter">${t.comments}</span>
              </div>
              <div class="image-info-element">
                <span class="image-info-element-label">Downloads</span>
                <span class="image-info-element-counter">${t.downloads}</span>
              </div>
            </div>
        </a>
        </li>`).join(`
`);m.innerHTML=n,u.refresh()}function y(){m.innerHTML=""}function h(){d.style.display=""}function i(){d.style.display="none"}i();const L="https://pixabay.com/api/",b="56207103-4b28cc7dd0dd3e21e461efeb9";function v(r){const n=new URLSearchParams({key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}).toString();return p.get(`${L}?${n}`).then(t=>t.data.hits)}const c=document.querySelector(".form");c.addEventListener("submit",r=>{r.preventDefault();const n=c.elements["search-text"].value.trim();if(!n)return;h();const t=v(n);y(),t.then(a=>{a.length?g(a):l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i()}).catch(a=>{l.error({message:`Error happened: ${typeof a=="string"?a:a.message}`,position:"topRight"}),i()})});
//# sourceMappingURL=index.js.map

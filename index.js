import{S as p,a as f,i as l}from"./assets/vendor-BTRK9AdA.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const u=new p(".gallery a",{captionsData:"alt",captionDelay:250}),m=document.querySelector(".gallery"),d=document.querySelector(".loader");function g(a){const o=a.map(t=>`<li class="gallery-item">
        <a class="gallery-link" href="${t.original}">
            <img
            class="gallery-image"
            src="${t.preview}"
            data-source="${t.original}"
            alt="${t.description}"
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
`);m.innerHTML=o,u.refresh()}function y(){m.innerHTML=""}function h(){d.style.display=""}function i(){d.style.display="none"}i();const v="https://pixabay.com/api/",L="56207103-4b28cc7dd0dd3e21e461efeb9";function b(a){const o=new URLSearchParams({key:L,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}).toString();return f.get(`${v}?${o}`).then(t=>t.data.hits.map(e=>({preview:e.webformatURL,original:e.largeImageURL,description:e.tags,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads})))}const c=document.querySelector(".form");c.addEventListener("submit",a=>{a.preventDefault();const o=c.elements["search-text"].value.trim();if(!o)return;const t=b(o);h(),y(),t.then(e=>{e.length?g(e):l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i()}).catch(e=>{l.error({message:`Error happened: ${typeof e=="string"?e:e.message}`,position:"topRight"}),i()})});
//# sourceMappingURL=index.js.map

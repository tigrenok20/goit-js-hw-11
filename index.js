import{S as p,a as f,i as l}from"./assets/vendor-BTRK9AdA.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(s){if(s.ep)return;s.ep=!0;const t=n(s);fetch(s.href,t)}})();const u=new p(".gallery a",{captionsData:"alt",captionDelay:250}),m=document.querySelector(".gallery"),d=document.querySelector(".loader");function g(o){const a=o.map(n=>`<li class="gallery-item">
        <a class="gallery-link" href="${n.original}">
            <img
            class="gallery-image"
            src="${n.preview}"
            data-source="${n.original}"
            alt="${n.description}"
            width="350" height="200"
            />
            <div class="image-info">
              <div class="image-info-element">
                <span class="image-info-element-label">Likes</span>
                <span class="image-info-element-counter">${n.likes}</span>
              </div>
              <div class="image-info-element">
                <span class="image-info-element-label">Views</span>
                <span class="image-info-element-counter">${n.views}</span>
              </div>
              <div class="image-info-element">
                <span class="image-info-element-label">Comments</span>
                <span class="image-info-element-counter">${n.comments}</span>
              </div>
              <div class="image-info-element">
                <span class="image-info-element-label">Downloads</span>
                <span class="image-info-element-counter">${n.downloads}</span>
              </div>
            </div>
        </a>
        </li>`).join(`
`);m.innerHTML=a,u.refresh()}function y(){m.innerHTML=""}function h(){d.style.display=""}function i(){d.style.display="none"}i();const v="https://pixabay.com/api/",L="56207103-4b28cc7dd0dd3e21e461efeb9";function b(o){const a=new URLSearchParams({key:L,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}).toString();return f.get(`${v}?${a}`).then(n=>n.data.hits.map(e=>({preview:e.webformatURL,original:e.largeImageURL,description:e.tags,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads})))}const c=document.querySelector(".form");c.addEventListener("submit",o=>{o.preventDefault();const a=c.elements["search-text"].value.trim();if(!a)return;const n=b(a);h(),y(),n.then(e=>{e.length?g(e):l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i()}).catch(e=>{l.error(`Error happened: ${e.message}`),i()})});
//# sourceMappingURL=index.js.map

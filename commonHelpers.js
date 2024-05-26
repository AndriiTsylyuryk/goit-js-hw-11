import{S as f,i as c}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function d(e){const o="https://pixabay.com/api/",s=new URLSearchParams({key:"44051747-21f0728748ba5e469c568f2fa",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${o}?${s}`;return fetch(i).then(t=>t.json())}const m=document.querySelector(".pictures");let a;function p(e){return`
    <li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img 
        class="gallery-image" 
        src="${e.webformatURL}" 
        alt="${e.tags}" 
      />
    </a>
    <div class="img-info-box">
      <p class="detail-text"><b class="detail-title">Likes</b> ${e.likes}</p>
      <p class="detail-text"><b class="detail-title">Views</b> ${e.views}</p>
      <p class="detail-text"><b class="detail-title">Comments</b> ${e.comments}</p>
      <p class="detail-text"><b class="detail-title">Downloads</b> ${e.downloads}</p>
    </div>
    </li>
    `}function y(e){return e.map(p).join("")}function h(e){const o=y(e);m.innerHTML=o,a?a.refresh():a=new f(".pictures a",{captionsData:"alt",captionDelay:250})}const u=document.querySelector(".search"),g=document.querySelector(".pictures"),l=document.querySelector(".loader");console.log(l);u.addEventListener("submit",b);function b(e){e.preventDefault(),g.innerHTML="";const o=e.target.elements.query.value.trim();if(!o){c.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"});return}L(),d(o).then(s=>{if(s){if(s.hits.length===0)throw Error("Sorry, there are no images matching your search query. Please try again!");h(s.hits)}}).catch(s=>{c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{S(),u.reset()})}function L(){l.style.display="block"}function S(){l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map

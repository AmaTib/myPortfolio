(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function a(){const i=document.getElementById("hamburgerSymbol"),o=document.querySelector("nav");i.addEventListener("click",()=>{o.classList.toggle("active"),i.classList.toggle("active")}),document.querySelectorAll("li").forEach(n=>n.addEventListener("click",()=>{o.classList.toggle("active"),i.classList.toggle("active")}))}const d=[{title:"Att Göra Lista",videoUrl:"./todolistvideo.mov",videoThumbnail:"./thumbnailTodo.png",technique:"Javascript, Scss",websiteUrl:"https://amatib.github.io/ToDoList-ForGithubPages/"},{title:"Webbshop",videoUrl:"./webshopvideo.mov",videoThumbnail:"./thumbnailWebshop.png",technique:"Typescript, Scss",websiteUrl:"https://amatib.github.io/the-webshop-team3-fork/"},{title:"Hund Himlen",videoUrl:"./dogheavenvideo.mov",videoThumbnail:"./thumbnailDogHeaven.jpg",technique:"Typescript, Scss",websiteUrl:"https://amatib.github.io/DogHeaven/"}];function u(){const i=document.getElementById("projectsSection");d.forEach(o=>{const n=document.createElement("div"),r=document.createElement("div"),e=document.createElement("figure"),t=document.createElement("video"),s=document.createElement("h3"),l=document.createElement("p"),c=document.createElement("a");n.className="projectCardContainer",t.src=o.videoUrl,t.setAttribute("poster",o.videoThumbnail),s.innerHTML=o.title,l.innerHTML=o.technique,c.href=o.websiteUrl,c.setAttribute("target","_blank"),c.innerHTML="Klicka här och testa webbsidan!",e.appendChild(t),r.appendChild(s),r.appendChild(l),r.appendChild(c),n.appendChild(e),n.appendChild(r),i.appendChild(n),n.addEventListener("mouseenter",()=>{t.play()}),n.addEventListener("mouseleave",()=>{t.pause(),t.currentTime=1})})}a();u();const m=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting?(console.log("livstecken"),o.target.classList.add("sectionTitleAppear")):o.target.classList.remove("sectionTitleAppear")})}),p=document.querySelectorAll("h2");p.forEach(i=>{m.observe(i)});
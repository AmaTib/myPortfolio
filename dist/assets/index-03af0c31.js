(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const a=document.getElementById("hamburgerSymbol"),d=document.querySelector("nav");a.addEventListener("click",()=>{d.classList.toggle("active"),a.classList.toggle("active")});const l=[{title:"Att Göra Lista",videoUrl:"/src/Assets/todolistvideo.mov",videoThumbnail:"/src/Assets/thumbnailTodo.png",technique:"Javascript, Scss",websiteUrl:"https://amatib.github.io/ToDoList-ForGithubPages/"},{title:"Webbshop",videoUrl:"/src/Assets/webshopvideo.mov",videoThumbnail:"/src/Assets/thumbnailWebshop.png",technique:"Typescript, Scss",websiteUrl:"https://amatib.github.io/the-webshop-team3-fork/"}],u=document.getElementById("projectsSection");l.forEach(r=>{const o=document.createElement("div"),i=document.createElement("div"),s=document.createElement("figure"),e=document.createElement("video"),t=document.createElement("h3"),n=document.createElement("p"),c=document.createElement("a");o.className="projectCardContainer",e.src=r.videoUrl,e.setAttribute("poster",r.videoThumbnail),t.innerHTML=r.title,n.innerHTML=r.technique,c.href=r.websiteUrl,c.setAttribute("target","_blank"),c.innerHTML="Klicka här och testa webbsidan!",s.appendChild(e),i.appendChild(t),i.appendChild(n),i.appendChild(c),o.appendChild(s),o.appendChild(i),u.appendChild(o),o.addEventListener("mouseenter",()=>{e.play()}),o.addEventListener("mouseleave",()=>{e.pause(),e.currentTime=1})});
(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();(()=>{function n(d){document.getElementById("entry").innerHTML+=d}function r(d){return new Function("return "+d)()}document.getElementById("0").addEventListener("click",()=>{let d=document.getElementById("entry").textContent,c=d.split(""),e=!0;for(let t=0;t<c.length;t++)c[t]!=="0"&&(e=!1);(!e||d==="")&&n("0")}),document.getElementById("1").addEventListener("click",()=>n("1")),document.getElementById("2").addEventListener("click",()=>n("2")),document.getElementById("3").addEventListener("click",()=>n("3")),document.getElementById("4").addEventListener("click",()=>n("4")),document.getElementById("5").addEventListener("click",()=>n("5")),document.getElementById("6").addEventListener("click",()=>n("6")),document.getElementById("7").addEventListener("click",()=>n("7")),document.getElementById("8").addEventListener("click",()=>n("8")),document.getElementById("9").addEventListener("click",()=>n("9")),document.getElementById(".").addEventListener("click",()=>{document.getElementById("entry").innerHTML.includes(".")||n(".")}),document.getElementById("+").addEventListener("click",()=>n("+")),document.getElementById("-").addEventListener("click",()=>n("-")),document.getElementById("*").addEventListener("click",()=>n("*")),document.getElementById("/").addEventListener("click",()=>n("/")),document.getElementById("(").addEventListener("click",()=>{document.getElementById("res").innerHTML=""}),document.getElementById(")").addEventListener("click",()=>{function d(){const c=Math.floor(Math.random()*256),e=Math.floor(Math.random()*256),t=Math.floor(Math.random()*256);return`#${c.toString(16).padStart(2,"0")}${e.toString(16).padStart(2,"0")}${t.toString(16).padStart(2,"0")}`}document.querySelector("body").style.background=d()}),document.getElementById("%").addEventListener("click",()=>{document.getElementById("rick").classList.remove("hidden"),document.getElementById("rick_stop").classList.remove("hidden"),document.getElementById("rick").play(),document.getElementById("rick_stop").addEventListener("click",()=>{document.getElementById("rick").pause(),document.getElementById("rick").currentTime=0,document.getElementById("rick").classList.add("hidden"),document.getElementById("rick_stop").classList.add("hidden")})}),document.getElementById("AC").addEventListener("click",()=>{document.getElementById("entry").innerHTML=""}),document.getElementById("=").addEventListener("click",()=>{let d=document.getElementById("entry").innerHTML,c=r(d);document.getElementById("res").innerHTML+=d+"="+c+"<br>",document.getElementById("entry").innerHTML=""})})();

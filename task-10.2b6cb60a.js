function e(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}const t=document.querySelector("#controls"),n=(t.children,t.children[0]),r=t.children[1],c=t.children[2],o=document.querySelector("#boxes");let l=30;r.addEventListener("click",(()=>{!function(t){const n=[];for(let r=0;r<t;r++){const t=l+10*r+"px",c=document.createElement("div");c.style.width=t,c.style.height=t,c.style.backgroundColor=e(),n.push(c)}o.append(...n),l+=10*t}(n.value)})),c.addEventListener("click",(()=>{o.innerHTML="",l=30}));
//# sourceMappingURL=task-10.2b6cb60a.js.map
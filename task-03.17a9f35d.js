const e=document.querySelector(".gallery"),s=[{url:"https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"White and Black Long Fur Cat"},{url:"https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Orange and White Koi Fish Near Yellow Koi Fish"},{url:"https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Group of Horses Running"}].map((e=>(e=>{const{url:s,alt:t}=e;return`<li class = "gallery-item"><img class = "gallery-item-img" src="${s}" alt="${t}"</li>`})(e)));e.insertAdjacentHTML("beforeend",s.join(""));
//# sourceMappingURL=task-03.17a9f35d.js.map

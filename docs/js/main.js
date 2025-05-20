const o=document.querySelector(".js_products-center"),n=document.querySelector(".js_products-basket"),u=document.querySelector(".js_button-search"),p=document.querySelector(".js_input-search");let c=[],e=[];function g(t){n.innerHTML+=`
  <li id="${t.id}">
        <div class="product">
        <p id="${t.id}" class="delete-from-basket">X</p>
          <img class="image" src="${t.image}" alt="">
          <p class="name-product">${t.title}</p>
          <p class="price-product">${t.price} €</p>
          <div class="basket-counter">
            <p class="basket-symbol js_basketProduct_more">+</p>
            <p class="js_basketProduct_count">2</p>
            <p class="basket-symbol js_basketProduct_more">-</p>
          </div>
        </div>
  </li>`}function m(t){o.innerHTML+=`
  <li id="${t.id}">
        <div class="product">
          <img class="image" src="${t.image}" alt="">
          <p class="name-product">${t.title}</p>
          <p class="price-product">${t.price} €</p>
          <button class="buy js_buy" id="${t.id}">Comprar</button>
        </div>
  </li>`}function d(t){o.innerHTML="";for(let s of t)m(s)}function i(t){n.innerHTML="";for(let s of t)g(s)}function f(t){t.preventDefault();const s=p.value,a=c.filter(r=>r.title.toLowerCase().includes(s.toLowerCase()));console.log(a),d(a)}function k(t){if(t.preventDefault(),t.target.tagName==="BUTTON"){t.target.innerText="Eliminar",t.target.classList.toggle("inBasket"),t.target.classList.contains("inBasket")?t.target.innerText="Eliminar":t.target.innerText="Comprar";const s=t.target.id,a=c.find(l=>l.id===Number(s)),r=e.findIndex(l=>l.id===Number(s));r===-1?(e.push(a),localStorage.setItem("listBasket",JSON.stringify(e)),i(e)):(e.splice(r,1),localStorage.setItem("listBasket",JSON.stringify(e)),i(e))}}function b(t){if(t.preventDefault(),t.target.classList.contains("delete-from-basket")){const s=t.target.id,a=e.findIndex(r=>r.id===Number(s));e.splice(a,1),i(e)}}u.addEventListener("click",f);o.addEventListener("click",k);n.addEventListener("click",b);localStorage.getItem("products")===null&&fetch("https://fakestoreapi.com/products").then(t=>t.json()).then(t=>{c=t,d(c),i(e),localStorage.setItem("products",JSON.stringify(c))});localStorage.getItem("products")!=null&&(c=JSON.parse(localStorage.getItem("products")),d(c));localStorage.getItem("listBasket")!=null&&(e=JSON.parse(localStorage.getItem("listBasket")),i(e));
//# sourceMappingURL=main.js.map

function bringProducts(products, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  products.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product');
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id}), openPopup()">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  document.getElementById('cart-count').innerText = cart.length;
}

function addToCart(id) {
  const product = [...featuredProducts, ...newProducts, ...bestSellers].find(p => p.id === id);
  if (!product) return;
  const cart = getCart();
  cart.push(product);
  setCart(cart);
}

bringProducts(featuredProducts, 'featured-products');
bringProducts(newProducts, 'new-products');
bringProducts(bestSellers, 'best-sellers');
setCart(getCart());


let popup = document.getElementById("popup");
function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup");
}

const toggleButton = document.getElementById("sidebarToggle");
    const sidebar = document.getElementById("sidebar");

    toggleButton.addEventListener("click", function () {
        if (sidebar.style.width === "250px") {
            sidebar.style.width = "0";
        } else {
            sidebar.style.width = "250px";
        }
    });


    document.querySelectorAll('#sidebar a').forEach(link => {
        link.addEventListener('click', () => {
            sidebar.style.width = "0";
        });
    });


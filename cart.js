function getCart() {
      return JSON.parse(localStorage.getItem('cart')) || [];
    }

    function setCart(cart) {
      localStorage.setItem('cart', JSON.stringify(cart));
      setCartCount();
    }

    function setCartCount() {
      document.getElementById('cart-count').textContent = getCart().length;
    }

    function removeItem(index) {
      const cart = getCart();
      cart.splice(index, 1);
      setCart(cart);
      renderCartItems();
    }

    function renderCartItems() {
      const items = getCart();
      const container = document.getElementById('cart-items');
      container.innerHTML = '';
      if (items.length === 0) {
        container.innerHTML = '<p style="color:white; justify-self:center; margin-bottom:2rem">Your cart is empty.</p>';
        return;
      }
      items.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `
          <img src="${item.image}" alt="${item.name}" />
          <h3>${item.name}</h3>
          <p>$${item.price}</p>
          <div class="action-buttons">
            <input type="checkbox" name="buy" value="${index}" class="buy-checkbox" />
            <button type="button" onclick="removeItem(${index})" class="remove-btn">Remove</button>
          </div>
        `;
        container.appendChild(div);
      });
    }

    document.getElementById('cart-form').addEventListener('submit', function (e) {
      e.preventDefault();
      const selectedIndexes = Array.from(document.querySelectorAll('input[name="buy"]:checked')).map(cb => parseInt(cb.value));
      const cart = getCart();
      const selectedItems = selectedIndexes.map(i => cart[i]);

      if (selectedItems.length === 0) {
        alert('Please select at least one product to buy.');
        return;
      }


      let summary = 'You have selected the following products:\n';
      let total = 0;
      selectedItems.forEach(item => {
        summary += `- ${item.name} ($${item.price})\n`;
        total += item.price;
      });
      summary += `\nTotal: $${total}`;
      document.getElementById("summary").innerHTML=summary;
    });

    let summary = document.getElementById("summary");
      function opensummaryPopup(){
        addincart.classList.add("open-summarypopup");
      }
      function closesummaryPopup(){
        addincart.classList.remove("open-summarypopup");
      }
    
      let buypopup = document.getElementById("buypopup");
      function openbuyPopup(){
        buypopup.classList.add("open-buypopup");
      }
      function closebuyPopup(){
        buypopup.classList.remove("open-buypopup");
      }
    setCartCount();
    renderCartItems();

    
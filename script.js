function changeImage(image) {
    document.getElementById('main-image').src = image;
  }
  
  function decreaseQuantity() {
    let quantity = document.getElementById('quantity').value;
    if (quantity > 0) {
      document.getElementById('quantity').value = --quantity;
    }
  }
  
  function increaseQuantity() {
    let quantity = document.getElementById('quantity').value;
    document.getElementById('quantity').value = ++quantity;
  }
  
  function addToCart() {
    let quantity = document.getElementById('quantity').value;
    if (quantity > 0) {
      alert(`Added ${quantity} item(s) to cart`);
    } else {
      alert('Please select a quantity');
    }
  }
  
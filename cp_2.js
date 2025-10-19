//step 3
function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
        .then(response => {
            if(!response.ok) {
                throw new Error(`Network error: ${response.status}`);
            }
            return response.json();

        })
.then(products => {
    
products.forEach(product => {
    console.log(product.fields.name);
});
})
.catch(error => {
    console.error("An error occurred:", error.message);
});
}

fetchProductsThen();

//step 4
async function fetchProductsAsync() {
    try {
        const res = await fetch('https://www.course-api.com/javascript-store-products')
        ;
        if(!res.ok) {
            throw new Error(`Network error: ${res.status}`);
        }
        const data = await res.json();
        displayProducts(data);
    } catch (error) {
        handleError(error);
    }

    }
    
//step 5
function displayProducts(products) {
  const container = document.getElementById('product-container');
  container.innerHTML = '';
   
  products.slice(0, 5).forEach(p => {
    const name = p.fields.name;
    const price = (p.fields.price / 100).toFixed(2);
    const imageUrl = p.fields.image[0].url;

    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <img src="${imageUrl}" alt="${name}" class="product-image">
      <div class="product-name">${name}</div>
      <div class="product-price">$${price}</div>
    `;

    container.appendChild(card);
  });
}
fetchProductsAsync();
//step 6
function handleError(error) {
  console.error('An error occurred:', error?.message || error);
}
//step 7
fetchProductsThen();
fetchProductsAsync();

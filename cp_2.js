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
   
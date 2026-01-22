const PRODUCTSURL = 'https://fakestoreapi.com/products'
const getProductList = async function(url = PRODUCTSURL){
    fetch(url)
        .then(response => {
            if(!response.ok)
                //throw error to trigger the .catch block
                throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(data => console.log(data))
        //Handles network errors and thrown HTTP errors
        .catch(error => console.error('Fetch error:', error));
}
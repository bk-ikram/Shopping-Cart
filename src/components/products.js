import { matchSorter } from "match-sorter";

const PRODUCTSURL = 'https://fakestoreapi.com/products'

const getProductList = async function({url = PRODUCTSURL
                                        , query}
                                     = {}){
    try{
        const response = await fetch(url);
        
        if(!response.ok)
            //throw error to trigger the .catch block
            throw new Error(`HTTP error! status: ${response.status}`);
        let data = await response.json();
        if(query)
            data = matchSorter(data, query, {keys: ['title', 'description', 'category']})
        return data;
    }
    catch(error){
        //Handles network errors and thrown HTTP errors
        console.error('Fetch error:', error.message);
        throw error;
    }

}

export default getProductList;
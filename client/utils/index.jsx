// export async function storefront(query, variables={} ){
//     const response = await fetch(
//         process.env.NEXT_PUBLIC_API_URL,
//         {
//             method: " POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "X-Shopify-Storefront-Access-Token" : process.env.NEXT_PUBLIC_ACCESS_TOKEN,
//             },
//             body: JSON.stringify({query, variables })
//         }
//     )
//     return response.json()
// }

// to fetch the products from the fridayy Db

export default async function fetchProducts(){
    const apiUrl = 'https://17qojyqb8j.execute-api.us-west-2.amazonaws.com/testing/';
  
    try {
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      if (data && data.body) {
        try {
          // Parse the 'body' property to get the product data
          const products = JSON.parse(data.body);
          return products; // Return the products
        } catch (error) {
          console.error('Error parsing product data:', error);
          throw error;
        }
      } else {
        console.error('No product data found in the response.');
        throw new Error('No product data found in the response.');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
  
  
  
  